'use strict';

/** @@ -8,6 +8,23 @@
 * Controller of the applinoobApp
 */

var app = angular.module('news');


  app.controller('NewsCtrl', function ($scope) {
          $scope.pageClass = 'videos';

      
    
	this.tab=1;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	
	this.isSelected = function(checkTab){
	return this.tab === checkTab;
		
	};
	
  });