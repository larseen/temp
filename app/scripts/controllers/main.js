'use strict';

angular.module('vioApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/articles').success(function(articles) {
      $scope.articles = articles.articles;
      console.log($scope.articles);
    });
  });
