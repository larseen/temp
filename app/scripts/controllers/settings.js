'use strict';

angular.module('vioApp')
  .controller('SettingsCtrl', function ($scope, $http) {
    $http.get('/api/articles/5422c3288317fd675c7ebff1').success(function(article) {
      $scope.article = article.article;
      console.log($scope.article);
    });
  });
