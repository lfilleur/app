'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison1Ctrl
 * @description
 * # Saison1Ctrl
 * Controller of the Saison1Ctrl
 */
var app = angular.module('saison1');
  app.controller('Saison1Ctrl', function ($scope) {
    $scope.items = [
    { id: 1, nom: 'Episode 1', saison: 'Saison 1',episode:'Episode1', image:'images/555x125.gif', synopsis:'aaa', url:'//www.youtube.com/embed/Tv9H1vv-Qrs'},
    {  id: 2, nom: 'Episode 2', saison: 'Saison 1',episode:'Episode2', image:'images/555x125.gif', synopsis:'aaa', url:'//www.youtube.com/embed/Tv9H1vv-Qrs'},
     { id: 3, nom: 'Episode 3', saison: 'Saison 1',episode:'Episode3', image:'images/555x125.gif', synopsis:'aaa', url:'//www.youtube.com/embed/Tv9H1vv-Qrs'},
     {id: 4, nom: 'Episode 1', saison: 'Saison 2',episode:'Episode4', image:'images/555x125.gif', synopsis:'aaa', url:'//www.youtube.com/embed/Tv9H1vv-Qrs'}
  ];
  	$scope.pageClass = 'saison1';
  

  } /*,function urlVideo($scope){

	var $url = $scope.items.url;
 	return '<iframe width="560" height="315" src="'+ $url +'" frameborder="0" allowfullscreen></iframe>';

 }*/);

   

app.directive('Saison1Dir', function($scope) {
  
  			var $url = $scope.items.url;

  		return '<iframe width="560" height="315" src="'+ $url +'" frameborder="0" ></iframe>';
  
  
});


  
  
  
