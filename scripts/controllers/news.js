'use strict';

/** @@ -8,6 +8,23 @@
 * Controller of the applinoobApp
 */

var app = angular.module('applinoobApp');


  app.controller('NewsCtrl', function () {
      
      
    
	this.tab=1;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	
	this.isSelected = function(checkTab){
	return this.tab === checkTab;
		
	};
	
  });