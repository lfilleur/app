'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison1Ctrl
 * @description
 * # Saison1Ctrl
 * Controller of the Saison1Ctrl
 */
var app = angular.module('grimoire');

  app.controller('ListeMonstreCtrl', function($scope, $http) {


             /* Fonction d'affichage de la liste */
      var url = 'http://smartsheep.reaco.fr/php/listeMonstre.php';

       function httpSuccess (response){
        
         $scope.listeMonstre = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Monstre, connexion internet défaillante');

      });

      

                  /* Fonction d'affichage de la fiche */
      $scope.Fiche = function(e){


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

               alert('Impossible de trouver la fiche du monstre, connexion internet défaillante');

            });

           } 
               
             

      };

     

       

      
  });

   

 app.controller('ListePersoCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listePerso.php';

       function httpSuccess (response){
        
         $scope.listePerso = response;
         
      }      
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Personnages, connexion internet défaillante');

      });      

  });

  app.controller('ListeLieuCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeLieu.php';


         function httpSuccess (response){
        
         $scope.listeLieu = response;
         
      }     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Lieux, connexion internet défaillante');

      });

    

  });
    app.controller('ListeStuffCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeStuff.php';


       function httpSuccess (response){
        
         $scope.listeStuff = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Stuff, connexion internet défaillante');

      });


  });
    app.controller('ListeHautFaitCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeHautFait.php';

        function httpSuccess (response){
        
         $scope.listeHautfait = response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Haut Fait, connexion internet défaillante');

      });


     

  });
         app.controller('ListeBonusVCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/ListeBonusV.php';

        function httpSuccess (response){
        
         $scope.listeBV= response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Bonus vidéo, connexion internet défaillante');

      });

     

  });

              app.controller('ListeBonusBDCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/ListeBonusB.php';

        function httpSuccess (response){
        
         $scope.listeBBD= response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Bonus BD, connexion internet défaillante');

      });

     

  });

         app.controller('ListeBonusCCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/ListeBonusC.php';

        function httpSuccess (response){
        
         $scope.listeBC= response;
         
      }
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver la liste de Bonus vidéo, connexion internet défaillante');

      });

     

  });


  	
  


   


  
  
  
