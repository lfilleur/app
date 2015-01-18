'use strict';


var app = angular.module('quete1');
   app.controller('Quete1Ctrl', function($scope) {    		
    	
   			$scope.texte = '';   		
   			$scope.partie1 = true;
			$scope.omega1 = false;
			$scope.omega2 = false;
			$scope.omega3 = false;
			$scope.omega4 = false;
			$scope.omega5 = false;
			$scope.omega6 = false;
			$scope.gaea1 = false;
			$scope.gaea2 = false;
			$scope.gaea3 = false;
			$scope.gaea4 = false;
			$scope.gaea5 = false;
			

													/* QUETE 1 PARTIE A */
   			$scope.quete1Start = function(){

   				var valeur = '';
				var i = 0;
				
				//je parcour mon formulaire
				for (i=0; i<document.formulaire.perso.length; i++) {

						//je verifie que jai bien selectioné un bouton
						if (document.formulaire.perso[i].checked) { 

							valeur = document.formulaire.perso[i].value;


							if (valeur==='omega'){

				      			$scope.partie1 = false;
				      			$scope.omega1 = true;				      			

				      		}

				      		else if (valeur==='gaea') {

				      			
				 				$scope.partie1 = false;
				 				$scope.gaea1 = true;
				      		}

							
						}

						

					}


   			};


   															/* QUETE omega  */

   			$scope.queteOmegaA = function(){

   							$scope.omega1 = false;     			
							$scope.omega2 = true;				

   			};
   			$scope.queteOmegaB = function(){

   							$scope.omega2 = false;     			
							$scope.omega3 = true;

   			};
   			$scope.queteOmegaC = function(){

   							$scope.omega3 = false;     			
							$scope.omega4 = true;				

   			};
   			$scope.queteOmegaD = function(){

   							$scope.omega4 = false;     			
							$scope.omega5 = true;				

   			};

   				$scope.queteOmegaE = function(){

   							$scope.omega5 = false;     			
							$scope.omega6 = true;				

   			};


   														/* QUETE Gaea  */

   			$scope.queteGaeaA = function(){

   							$scope.gaea1 = false;     			
							$scope.gaea2 = true;				

   			};
   			$scope.queteGaeaB = function(){

   							$scope.gaea2 = false;     			
							$scope.gaea3 = true;				

   			};
   			
   			$scope.queteGaeaC = function(){

   							$scope.gaea3 = false;     			
							$scope.gaea4 = true;				

   			};

   			$scope.queteGaeaD = function(){

   							$scope.gaea4 = false;     			
							$scope.gaea5 = true;				

   			};
   			
   			


		});
      	
      	



  

