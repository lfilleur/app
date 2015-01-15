'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison2Ctrl
 * @description
 * # Saison2Ctrl
 * Controller of the Saison2Ctrl
 */
var app = angular.module('saison3');
   app.controller('Saison3Ctrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeSaison3.php';

         function httpSuccess (response){
        
         $scope.listeSaison3 = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la saison 3');

      });

    

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
  
  
  
