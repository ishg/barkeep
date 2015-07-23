angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $rootScope, $ionicPush, $ionicUser) {
  // Nothing to see here.
})

.controller('UserCtrl', function($scope, $rootScope, $ionicUser) {
  /**
   * Identifies a new user with the Ionic User service (read the docs at http://docs.ionic.io/identify/). This should be
   * called before any other registrations take place.
   **/
  $scope.identifyUser = function() {
    console.log('Ionic User: Identifying with Ionic User service');

    var user = $ionicUser.get();
    if(!user.user_id) {
      // Set your user_id here, or generate a random one.
      user.user_id = $ionicUser.generateGUID()
    };

    // Add some metadata to your user object.
    angular.extend(user, {
      name: 'Ionitron',
      message: 'I come from planet Ion'
    });

    // Identify your user with the Ionic User Service
    $ionicUser.identify(user).then(function(){
      alert('Successfully identified user ' + user.name + '\n ID ' + user.user_id);
    });
  };
})


.controller('AnalyticsCtrl', function($scope, $ionicAnalytics) {

  // Track a fake purchase event.
  $scope.trackPurchase = function() {
    console.log("Ionic Analytics: Tracking a fake purchase.");
    $ionicAnalytics.track('purchase', {
      item_id: 101,
      item_name: 'A-Trak player'
    });
    alert('Tracked purchase of A_Trak player ID 101.');
  };

  // Track a fake review event
  $scope.trackReview = function() {
    console.log("Ionic Analytics: Tracking a fake review.");
    $ionicAnalytics.track('review', {
      star_rating: 5,
      reviewer_name: 'John',
      content: 'Awesome app!'
    });
    alert('Tracked 5-star review from John, "Awesome app!"');
  };
});
