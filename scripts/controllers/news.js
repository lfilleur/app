'use strict';

/**
 * @ngdoc function
 * @name applinoobApp.controller:NewsCtrl
 * @description
 * # NewsCtrl
 * Controller of the applinoobApp
 */
var app = angular.module('applinoobApp');
<<<<<<< HEAD
  app.controller('NewsCtrl', function ($scope) {
    $scope.pageClass = 'news';
=======
  app.controller('NewsCtrl', function () {
    
	this.tab=1;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	
	this.isSelected = function(checkTab){
	return this.tab === checkTab;
		
	};
	
	

>>>>>>> origin/master
  });
