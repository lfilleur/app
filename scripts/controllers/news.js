'use strict';

/** @@ -8,6 +8,23 @@
 * Controller of the applinoobApp
 */

var app = angular.module('news');


  app.controller('NewsCtrl', function () {      
    
	this.tab=2;
	this.selectTab=function(setTab){
		this.tab=setTab;
	};
	
	this.isSelected = function(checkTab){
	return this.tab === checkTab;
		
	};
	
  });