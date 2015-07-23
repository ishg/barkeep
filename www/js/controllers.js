angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
  // Nothing to see here.
})

.controller('LocationsCtrl', function($scope, $rootScope, $ionicUser) {
  
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
