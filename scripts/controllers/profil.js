'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison1Ctrl
 * @description
 * # Saison1Ctrl
 * Controller of the Saison1Ctrl
 */
var app = angular.module('profil');

  app.controller('ProfilCtrl', function($scope, $http) {

    $scope.step = 1;


     $scope.listeBete = function(){
      
       $scope.step = 1;
       /* Fonction d'affichage de la liste */
      var url = 'http://smartsheep.reaco.fr/php/listeMonstre.php';

       function httpSuccess (response){
        
         $scope.listeMonstre = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Monstre');

      });

       };


       $scope.listePersonnage = function(){
         $scope.step = 2;
       var url = 'http://smartsheep.reaco.fr/php/listePerso.php';

       function httpSuccess (response){
        
         $scope.listePerso = response;
         
      }      
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Personnages');

      });      };



         $scope.FicheBete = function(e){
           $scope.step = 4;
         
          
          var url = 'http://smartsheep.reaco.fr/php/ficheMonstre.php?id_Bete=' ;
          var id =  e;
          var url2 = url + id;

          console.log(e);

         function httpSuccess2 (response){
              
               $scope.ficheMonstre = response; 
             /* alert('http ok'+' '+'return' + ' '+ $scope.ficheMonstre); */
                          }


          /*on regarde si on a deja un id de defini*/  
          if (id!==undefined){

            $http.get(url2).success(httpSuccess2).error(function(){

               alert('Impossible de trouver la fiche du monstre' + id);

            });

           } 
               
             

      };


    


      
  });
