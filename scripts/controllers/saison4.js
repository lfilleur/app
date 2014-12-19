'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison2Ctrl
 * @description
 * # Saison2Ctrl
 * Controller of the Saison2Ctrl
 */
var app = angular.module('saison4');
   app.controller('Saison4Ctrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeSaison4.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la saison 4');

      });

       function httpSuccess (response){
        
         $scope.listeSaison4 = response;
         
      }

  });
   app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);


  /*,function urlVideo($scope){

	var $url = $scope.items.url;
 	return '<iframe width="560" height="315" src="'+ $url +'" frameborder="0" allowfullscreen></iframe>';

 }

   

app.directive('Saison1Dir', function($scope) {
  
  			var $url = $scope.items.url;

  		return '<iframe width="560" height="315" src="'+ $url +'" frameborder="0" ></iframe>';
  
  
});

*/
  
  
  
