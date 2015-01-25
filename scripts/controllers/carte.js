'use strict';

/**
 * @ngdoc function
 * @name carte.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the carte
 */
var Cartemod = angular.module('carte');
 
Cartemod.controller('CarteCtrl', function ($scope) {

	$scope.pop = 1;
    
   $scope.popup = function(){
   		
       $scope.pop = 2; 
   };



});





