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

         alert('Impossible de trouver la saison 3, connexion internet défaillante');

      });

    

  });
   app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);



  
  
