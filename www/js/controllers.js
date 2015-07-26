angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
  
  $scope.addItem = function(special){
    //console.log(special);
    var Special = Parse.Object.extend('Special');
    var s = new Special();
    var day = 

    s.save({
      description: special.description,
      location: special.location,
      day: special.day
    }).then(function(obj){
      console.log(obj);
    },function(err){
      console.log(err);
    });
    special.description = "";

  }
})

.controller('LocationsCtrl', function($scope, $rootScope, $cordovaGeolocation,LocationsService, $ionicLoading ) {
  $ionicLoading.show({
    template: '<ion-spinner></ion-spinner>'
  });
  
  
  // Get Current User Location 
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(
      function(position){
        $scope.currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        
        //alert("Lat: "+ $scope.currentLocation.lat + ", Long: "+ $scope.currentLocation.lng);
        
        //Once location has been determined, call the other function
        LocationsService.all().then(function(result){
          $scope.locations = result;
          $ionicLoading.hide();
          computeDistances($scope.currentLocation);
        }, function(err){
          console.log(err);
        });
      },
      function(err){
          console.log(err);
      }
    );

  var rad = function(x){
    return x * Math.PI / 180;
  }
  
  var getDistance = function(p1, p2) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2.latitude - p1.lat);
    var dLong = rad(p2.longitude - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(p1.lat)) * Math.cos(rad(p2.latitude)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
  };

  var computeDistances = function(curPos){
    $scope.locations.forEach(function(obj){
      obj.distance = Math.floor(getDistance(curPos, obj.coordinates.toJSON()) * 0.00062137 *100) / 100; //Convert to miles
    });
  }
  
  
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
    $scope.distanceAscending = false;
    $scope.distanceDescending = false;
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
    $scope.nameAscending = false;
    $scope.nameDescending = false;
  };
})

.controller('LocationDetailCtrl', function($scope, $stateParams, LocationsService){
    $scope.location = LocationsService.get($stateParams.locId);
    
    $scope.specials = LocationsService.getSpecials($stateParams.locId);

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

//lhIrMZguWA

//q1DvlEXzP8