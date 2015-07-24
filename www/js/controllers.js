angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
  // Nothing to see here.
})

.controller('LocationsCtrl', function($scope, $rootScope, $cordovaGeolocation,LocationsService, $ionicLoading ) {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });
    
    LocationsService.all().then(function(result){
        $scope.locations = result;
        $ionicLoading.hide();
    }, function(err){
        console.log(err);
    });
    
    /*
     * Get Geolocation
     */
     
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(
            function(position){
                $scope.lat = position.coords.latitude;
                $scope.long = position.coords.longitude;
            },
            function(err){
                console.log(err);
            }
        );
    
    
    /*
     *  Sorting Locations by Name and Distance
     */
    $scope.nameDescending = false;
    $scope.nameAscending = false;
    $scope.distanceAscending = false;
    $scope.distanceDescending = false;
    
    $scope.sortByName = function(){
        $scope.locations.sort(function(a,b){
            if(a.name > b.name){
                if($scope.nameAscending){
                    return -1;
                }
                return 1;
            }
            if(a.name < b.name){
                if($scope.nameAscending){
                    return 1;
                }
                return -1;
            }
            return 0;
        });
        $scope.nameAscending = $scope.nameAscending === false ? true: false;
        $scope.nameDescending = !$scope.nameAscending;
    };
    
    $scope.sortByDistance = function(){
        $scope.locations.sort(function(a,b){
            if(a.distance > b.distance){
                if($scope.distanceAscending){
                    return -1;
                }
                return 1;
            }
            if(a.distance < b.distance){
                if($scope.distanceAscending){
                    return 1;
                }
                return -1;
            }
            return 0;
        });
        $scope.distanceAscending = $scope.distanceAscending === false ? true: false;
        $scope.distanceDescending = !$scope.distanceAscending;
    };
})

.controller('LocationDetailCtrl', function($scope, $stateParams, LocationsService){
    $scope.location = LocationsService.get($stateParams.locId);
    console.log($scope.location);
})

.controller('DaysCtrl', function($scope, DaysService, $ionicLoading) {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });
    
    DaysService.all().then(function(result){
        $scope.days = result;
        $ionicLoading.hide();
    }, function(err){
        console.log(err);
    });
})

.controller('DayDetailCtrl', function($scope, $stateParams, DaysService){
    $scope.day = DaysService.get($stateParams.dayId);
});