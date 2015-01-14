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

      var url = 'http://smartsheep.reaco.fr/php/listeMonstre.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la liste de Monstre');

      });

       function httpSuccess (response){
        
         $scope.listeMonstre = response;
         
      }

      
  });

    app.controller('FicheMonstreCtrl', function($scope,$http) {


        var url = 'http://smartsheep.reaco.fr/php/ficheMonstre.php?id_Bete=' ;
        var id =  $scope.id_Bete;
        var url2 = url + id;
        
        /*on regarde si on a deja un id de defini*/  
        if (id!=undefined){

          $http.get(url2).success(httpSuccess).error(function(){

             alert('Impossible de trouvé la fiche du monstre');

          });

         } 
             
           function httpSuccess (response){
            
             $scope.ficheMonstre = response;

                        }
      
  });

  



 

 app.controller('ListePersoCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listePerso.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la liste de Personnages');

      });

       function httpSuccess (response){
        
         $scope.listePerso = response;
         
      }

  });

  app.controller('ListeLieuCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeLieu.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la liste de Lieux');

      });

       function httpSuccess (response){
        
         $scope.listeLieu = response;
         
      }

  });
    app.controller('ListeStuffCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeStuff.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la liste de Stuff');

      });

       function httpSuccess (response){
        
         $scope.listeStuff = response;
         
      }

  });
    app.controller('ListeHautFaitCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/listeHautFait.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la liste de Haut Fait');

      });

       function httpSuccess (response){
        
         $scope.listeHautfait = response;
         
      }

  });


  	
  


   


  
  
  
