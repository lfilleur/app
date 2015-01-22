'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison2Ctrl
 * @description
 * # Saison2Ctrl
 * Controller of the Saison2Ctrl
 */
var app = angular.module('saison2');
   app.controller('Saison2Ctrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeSaison2.php';
      
         function httpSuccess (response){
        
         $scope.listeSaison2 = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la saison 2, connexion internet défaillante');

      });

    

  });
   app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);


 
  
  
