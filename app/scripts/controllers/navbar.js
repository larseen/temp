'use strict';

angular.module('vioApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $rootScope) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
    {
      'title': '',
      'link': '/user'
    }];
     console.log($rootScope.currentUser);

    $rootScope.location = $location.path().substr(1,$location.path().length);

    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

  });
 