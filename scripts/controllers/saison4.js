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

         function httpSuccess (response){
        
         $scope.listeSaison4 = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la saison 4, connexion internet défaillante');

      });

    

  });
   app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

  
  
