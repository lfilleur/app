'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison1Ctrl
 * @description
 * # Saison1Ctrl
 * Controller of the Saison1Ctrl
 */
var app = angular.module('saison1');
   app.controller('Saison1Ctrl', function($scope, $http) {
    

      var url = 'http://smartsheep.reaco.fr/php/listeSaison1.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la saison 1');

      });

       function httpSuccess (response){
        
         $scope.listeSaison1 = response;
         
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
  
  
  
