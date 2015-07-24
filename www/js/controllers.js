angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
  // Nothing to see here.
})

.controller('LocationsCtrl', function($scope, $rootScope, LocationsService, $ionicLoading ) {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    });
    
    LocationsService.all().then(function(result){
        $scope.locations = result;
        $ionicLoading.hide();
    }, function(err){
        console.log(err);
    })
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
    })
})

.controller('DayDetailCtrl', function($scope, $stateParams, DaysService){
    $scope.day = DaysService.get($stateParams.dayId);
})