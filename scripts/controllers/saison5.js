'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison2Ctrl
 * @description
 * # Saison2Ctrl
 * Controller of the Saison2Ctrl
 */
var app = angular.module('saison5');
   app.controller('Saison5Ctrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeSaison5.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la saison 5');

      });

       function httpSuccess (response){
        
         $scope.listeSaison5 = response;
         
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
  
  
  