'use strict';

/**
 * @ngdoc function
 * @name applinoobApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the applinoobApp
 */
angular.module('applinoobApp')
  .controller('NewsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
