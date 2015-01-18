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

         alert('Impossible de trouvé la liste de Video Bonus');

      });

       function httpSuccess (response){
        
         $scope.listeVideoBonus = response;
         
      }

  });
 

 app.controller('BDBonusCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeBDBonus.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la liste de BD');

      });

       function httpSuccess (response){
        
         $scope.listeBDBonus = response;
         
      }

  });

  app.controller('CroquisBonusCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeCroquisBonus.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la liste de Croquis');

      });

       function httpSuccess (response){
        
         $scope.listeCroquisBonus = response;
         
      }

  });

// ajouter autrebonus

  	
  


   


  
  
  
