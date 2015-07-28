// Ionic Starter App
Parse.initialize("euJpAsFf8PjtGTNY0104aq6iLq4YvlGp4TNHhrhl", "3GUvRwkxNXuMFA3x6GYNwnIwq8Ml4bzQ4J6OcY6A");
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', [
  'ionic',
  'ngCordova',
  'ionic.service.core',
  //'ionic.service.push',
  //'ionic.service.deploy',
  'starter.controllers',
  'starter.services'
])

.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {
      if(window.Connection) {
          if(navigator.connection.type == Connection.NONE) {
              $ionicPopup.confirm({
                  title: "Internet Disconnected",
                  content: "The internet is disconnected on your device."
              })
              .then(function(result) {
                  if(!result) {
                      ionic.Platform.exitApp();
                  }
              });
          }
      }
  });
})

.config(['$ionicAppProvider', function($ionicAppProvider) {
  // Identify app
  $ionicAppProvider.identify({
    // The App ID (from apps.ionic.io) for the server
    app_id: 'f58b3001',
    // The public API key all services will use for this app
    api_key: 'c797d294da99da206f7d55e6f959b480b76518714d2312e3',
    // The GCM project ID (project number) from your Google Developer Console (un-comment if used)
    // gcm_id: 'GCM_ID'
  });
}])

.run(function($rootScope, $ionicPlatform, $cordovaStatusbar) {

  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    // Color the iOS status bar text to white
    if (window.StatusBar) {
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusBar.style(1); //Light
    }

    // Default update checking
    $rootScope.updateOptions = {
      interval: 2 * 60 * 1000
    };

    // Watch Ionic Deploy service for new code
    // $ionicDeploy.watch($rootScope.updateOptions).then(function() {}, function() {}, function(hasUpdate) {
    //   $rootScope.lastChecked = new Date();
    //   console.log('WATCH RESULT', hasUpdate);
    // });
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  // Welcome tab
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  // Ionic User tab
  .state('tab.locations', {
    url: '/locations',
    views: {
      'tab-locations': {
        templateUrl: 'templates/tab-locations.html',
        controller: 'LocationsCtrl'
      }
    }
  })
  
  .state('tab.location', {
      url: '/location/:locId',
      views: {
          'tab-locations':{
              templateUrl: 'templates/location.html',
              controller: 'LocationDetailCtrl'
          }
      }
  })

  // Ionic Analytics tab
  .state('tab.days', {
    url: '/days',
    views: {
      'tab-days': {
        templateUrl: 'templates/tab-days.html',
        controller: 'DaysCtrl'
      }
    }
  })
  
  .state('tab.day', {
    url: '/day/:dayId',
    views: {
        'tab-days': {
            templateUrl: 'templates/day.html',
            controller: 'DayDetailCtrl'
        }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});