'use strict';

/**
 * @ngdoc function
 * @name applinoobApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the applinoobApp
 */
var app = angular.module('applinoobApp');
  app.controller('NewsCtrl', function ($scope) {
    $scope.pageClass = 'news';
  });
