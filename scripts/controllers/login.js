'use strict';

/** @@ -8,6 +8,23 @@
 * Controller of the applinoobApp
 */




/* Controllers */

var app = angular.module('login');
   app.controller('LoginCtrl', function($scope, $http) {

      var url = 'http://smartsheep.reaco.fr/php/login.php';
     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouver les utilisateurs');

      });

       function httpSuccess (response){
        
         $scope.Login = response;
         

      }

         $scope.connexion = function(){
        var connected = false;
        for(var i in Login){
            var utilisateur = Login[i];
            if(_.isEqual(utilisateur,$scope.identifiants)){
                connected = true;
            }
        }
        if(connected){
            $scope.resultat = "Connexion OK";
        }else{
            $scope.resultat = "Connexion KO";
        }
    }

  });

