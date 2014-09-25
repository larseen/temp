'use strict';

angular.module('vioApp')
  .controller('SettingsCtrl', function ($scope, $http, $routeParams) {
    $http.get('/api/articles/'+$routeParams.articleId).success(function(article) {
      $scope.article = article.article;
      console.log($scope.article);
    });
  });
