'use strict';

/**
 * @ngdoc function
 * @name Saison1Ctrl.controller:Saison1Ctrl
 * @description
 * # Saison1Ctrl
 * Controller of the Saison1Ctrl
 */
var app = angular.module('saison1');
   app.controller('Saison1Ctrl', function($scope, $http) {


    var played = '0';    

      var url = 'http://smartsheep.reaco.fr/php/listeSaison1.php';
      
       function httpSuccess (response){
        
         $scope.listeSaison1 = response;
         
      }

     
      $http.get(url).success(httpSuccess).error(function(){

         alert('Impossible de trouvé la saison 1');

      });

      
  });


/*Fonction pour autorisé un iframe youtube*/
/*   app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };

}]);
*/


  
  
  
  
