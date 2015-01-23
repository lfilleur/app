'use strict';

/**
 * @ngdoc function
 * @name bonus.controller:bonus
 * @description
 * # bonus
 * Controller of the bonus
 */
var app = angular.module('bonus');

  app.controller('ListeVideoBonusCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeVideoBonus.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Video Bonus, connexion internet défaillante');

      });

       function httpSuccess (response){
        
         $scope.listeVideoBonus = response;
         
      }

  });
 

 app.controller('BDBonusCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeBDBonus.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de BD, connexion internet défaillante');

      });

       function httpSuccess (response){
        
         $scope.listeBDBonus = response;
         
      }

  });

  app.controller('CroquisBonusCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeCroquisBonus.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Croquis, connexion internet défaillante');

      });

       function httpSuccess (response){
        
         $scope.listeCroquisBonus = response;
         
      }

  });

// ajouter autrebonus

  	
  


   


  
  
  
