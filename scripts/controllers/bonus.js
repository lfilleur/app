'use strict';

/**
 * @ngdoc function
 * @name bonus.controller:bonus
 * @description
 * # bonus
 * Controller of the bonus
 */
var app = angular.module('bonus');

  app.controller('BonusCtrl', function($scope, $http) {

    $scope.step = 1;


      $scope.ListeBonusV =  function(){


            $scope.step = 1;

      var url = 'http://smartsheep.reaco.fr/php/listeBonusV.php';

        function httpSuccess (response){
        
         $scope.listeBV = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Bonus vidéo, connexion internet défaillante');

      });
    };

     

 

           $scope.ListeBonusBD = function() {
            $scope.step = 2;

      var url = 'http://smartsheep.reaco.fr/php/listeBonusBD.php';

        function httpSuccess (response){
        
         $scope.listeBBD = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Bonus BD, connexion internet défaillante');

      });

     

  };

         $scope.ListeBonusC = function(){

          $scope.step = 3;
      var url = 'http://smartsheep.reaco.fr/php/listeBonusC.php';

        function httpSuccess (response){
        
         $scope.listeBC = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Bonus Croquis, connexion internet défaillante');

      });

     

  };
 


 });
  	
  


   


  
  
  
