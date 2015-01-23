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
      
       function httpSuccess (response){
        
         $scope.listeSaison1 = response;
         
      }

     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la saison 1, connexion internet défaillante');

      });

      
  });


/*Fonction pour autorisé un iframe youtube*/
/*   app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };

}]);
*/


  
  
  
  
