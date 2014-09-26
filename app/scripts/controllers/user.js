'use strict';

angular.module('vioApp')
  .controller('UserCtrl', function ($scope, $http, Auth) {

  	$scope.user = Auth.currentUser();
  	console.log($scope.user);
  });
