angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
  // Nothing to see here.
})

.controller('LocationsCtrl', function($scope, $rootScope, Locations ) {
    $scope.locations = Locations.all();
    console.log($scope.locations);
})

.controller('LocationDetailCtrl', function($scope, $stateParams, Locations){
    $scope.location = Locations.get($stateParams.locId);
})

.controller('DaysCtrl', function($scope, Days) {
    $scope.days = Days.all();
})

.controller('DayDetailCtrl', function($scope, $stateParams, Days){
    $scope.day = Days.get($stateParams.dayId);
})

.factory('Days', function(){
    var days = [
        {id: 1, name: 'Monday'},
        {id: 2, name: 'Tuesday'},
        {id: 3, name: 'Wednesday'},
        {id: 4, name: 'Thursday'},
        {id: 5, name: 'Friday'},
        {id: 6, name: 'Saturday'},
        {id: 7, name: 'Sunday'}
    ];
    
    return{
        all: function(){
            return days;
        },
        get: function(dayId){
            return days[dayId-1];
        }
    }
})

.factory('Locations', function(){
    var locations = [
        {
            id: 1,
            name: 'Bier Stube',
            address: '',
            description: ''
        },
        {
            id: 2,
            name: "Eddie George's Grill",
            address: '',
            description: ''
        },
        {
            id: 3,
            name: 'Ethyl & Tank',
            address: '',
            description: ''
        },
        {
            id: 4,
            name: 'Formaggio',
            address: '',
            description: ''
        },
        {
            id: 5,
            name: '4th Street Bar & Grill',
            address: '',
            description: ''
        },
        {
            id: 6,
            name: "Ledo's Tavern",
            address: '',
            description: ''
        },
        {
            id: 7,
            name: 'Mad Mex',
            address: '',
            description: ''
        },
        {
            id: 8,
            name: 'Out-R-Inn',
            address: '',
            description: ''
        },
        {
            id: 9,
            name: "Skully's",
            address: '',
            description: ''
        },
        {
            id: 10,
            name: 'Suzie-Cue',
            address: '',
            description: ''
        },
        {
            id: 11,
            name: 'The Little Bar',
            address: '',
            description: ''
        },
        {
            id: 12,
            name: 'Ugly Tuna',
            address: '',
            description: ''
        },
        {
            id: 13,
            name: 'Village Idiot',
            address: '',
            description: ''
        }
    ];
    
    return{
        all: function(){
            return locations;
        },
        get: function(locId){
            return locations[locId-1];
        }
    }
})

.factory('Specials', function(){
   
    
});
