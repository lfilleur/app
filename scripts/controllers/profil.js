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

    $scope.step = 13;
    $scope.backmenu=function(){$scope.step=14;}

           $scope.grimoire = function(){

              $scope.step = 14;          
         
      };


       $scope.profilm = function(){

           $scope.step = 13;    
           
        };                



                                                    /*     LISTE BETE     */
     $scope.listeBete = function(){

       $scope.step = 1;
       /* Fonction d'affichage de la liste */
       var url = 'http://smartsheep.reaco.fr/php/listeMonstre.php';

       function httpSuccess (response){
        
         $scope.listeMonstre = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Monstre, connexion internet défaillante');

      });

       };
                                                /*     LISTE PERSO     */

       $scope.listePersonnage = function(){
         $scope.step = 2;
       var url = 'http://smartsheep.reaco.fr/php/listePerso.php';

       function httpSuccess (response){
        
         $scope.listePerso = response;
         
      }      
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Personnages, connexion internet défaillante');

      });      };

                                              /*     LISTE LIEU     */

        $scope.listeLieux = function() {

          $scope.step = 3;
          var url = 'http://smartsheep.reaco.fr/php/listeLieu.php';


         function httpSuccess (response){
        
         $scope.listeLieu = response;
         
        }     

        $http.get(url).success(httpSuccess).error(function(){

           alert('Impossible de trouver la liste de Lieux, connexion internet défaillante');

        });
    };

                                                  /*     LISTE STUFF     */

      $scope.listeStuffs = function() {

        $scope.step = 4;
        var url = 'http://smartsheep.reaco.fr/php/listeStuff.php';

         function httpSuccess (response){
          
           $scope.listeStuff = response;
           
        }
       
        $http.get(url).success(httpSuccess).error(function(){

           alert('Impossible de trouver la liste de Stuff, connexion internet défaillante');

        });


      };

                                          /*     LISTE HAUT FAIT     */


       $scope.listeHautFait = function() {

        $scope.step = 5;

        var url = 'http://smartsheep.reaco.fr/php/listeHautFait.php';

        function httpSuccess (response){
        
         $scope.listeHautfait = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Haut Fait, connexion internet défaillante');

      });

     

  };
                                    /*     LISTE BONUS     */

    $scope.listeBonus = function() {

        $scope.step = 7;
        var url = 'http://smartsheep.reaco.fr/php/listeBonus.php';

         function httpSuccess (response){
          
           $scope.listeBonuss = response;
           
        }
       
        $http.get(url).success(httpSuccess).error(function(){

           alert('Impossible de trouver la liste de Bonus, connexion internet défaillante');

        });


      };

                                              /*     FICHE BETE     */

         $scope.FicheBete = function(e){
           $scope.step = 6;
         
          
          var url = 'http://smartsheep.reaco.fr/php/ficheMonstre.php?id_Bete=' ;
          var id =  e;
          var url2 = url + id;

         /* console.log(e);*/

         function httpSuccess2 (response){
              
               $scope.ficheMonstre = response; 
             /* alert('http ok'+' '+'return' + ' '+ $scope.ficheMonstre); */
                          }


          /*on regarde si on a deja un id de defini*/  
          if (id!==undefined){

            $http.get(url2).success(httpSuccess2).error(function(){

               alert('Impossible de trouver la fiche du monstre, connexion internet défaillante');

            });

           }               
             

      };                                  /*     FICHE PERSO     */


    
        $scope.FichePerso = function(e){

           $scope.step = 8;
                   
          var url = 'http://smartsheep.reaco.fr/php/fichePerso.php?id_Personnage=' ;
          var id =  e;
          var url2 = url + id;

         function httpSuccess2 (response){
              
               $scope.fichePerso = response; 
          
                          }


          /*on regarde si on a deja un id de defini*/  
          if (id!==undefined){

            $http.get(url2).success(httpSuccess2).error(function(){

               alert('Impossible de trouver la fiche du Personnage, connexion internet défaillante');

            });

           }               
             

      };
                                                /*     FICHE LIEU    */

        $scope.FicheLieu = function(e){

           $scope.step = 9;
                   
          var url = 'http://smartsheep.reaco.fr/php/ficheLieu.php?id_Lieu=' ;
          var id =  e;
          var url2 = url + id;

         function httpSuccess2 (response){
              
               $scope.ficheLieu = response; 
          
                          }


          /*on regarde si on a deja un id de defini*/  
          if (id!==undefined){

            $http.get(url2).success(httpSuccess2).error(function(){

               alert('Impossible de trouver la fiche du lieu, connexion internet défaillante');

            });

           }               
             

      };

                                        /*     FICHE STUFF    */

        $scope.FicheStuff = function(e){

           $scope.step = 10;
                   
          var url = 'http://smartsheep.reaco.fr/php/ficheStuff.php?id_Stuff=' ;
          var id =  e;
          var url2 = url + id;

         function httpSuccess2 (response){
              
               $scope.ficheStuff = response; 
          
                          }

          /*on regarde si on a deja un id de defini*/  
          if (id!==undefined){

            $http.get(url2).success(httpSuccess2).error(function(){

               alert('Impossible de trouver la fiche du Stuff, connexion internet défaillante');

            });

           }               
             

      };                      /*     FICHE BONUS   */

        $scope.FicheBonus = function(e){

           $scope.step = 11;
                   
          var url = 'http://smartsheep.reaco.fr/php/ficheBonus.php?id_Bonus=' ;
          var id =  e;
          var url2 = url + id;

         function httpSuccess2 (response){
              
               $scope.ficheBonuss = response; 
          
                          }

          /*on regarde si on a deja un id de defini*/  
          if (id!==undefined){

            $http.get(url2).success(httpSuccess2).error(function(){

               alert('Impossible de trouver la fiche du Bonus, connexion internet défaillante');

            });

           }               
             

      };  
               /*     FICHE HAUT FAIT   */

        $scope.FicheHautFait = function(e){

           $scope.step = 12;
                   
          var url = 'http://smartsheep.reaco.fr/php/ficheHautFait.php?id_HautFait=' ;
          var id =  e;
          var url2 = url + id;

         function httpSuccess2 (response){
              
               $scope.ficheHautFait = response; 
          
                          }

          /*on regarde si on a deja un id de defini*/  
          if (id!==undefined){

            $http.get(url2).success(httpSuccess2).error(function(){

               alert('Impossible de trouver la fiche du Haut Fait, connexion internet défaillante');

            });

           }               
             

      };  
                
                                            

      
  });
