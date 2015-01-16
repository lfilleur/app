'use strict';


var app = angular.module('quete1');
   app.controller('Quete1Ctrl', function($scope) {    		
    	
   			$scope.texte = 'Choisi Omegazell et part à l\'aventure';
   			$scope.texteb = 'Equipe Omega de son arme préferer et prépare toi au combat';
   			$scope.partie1 = true;
			$scope.partie2 = false;
			$scope.partie3 = false;
			$scope.partie4 = false;

													/* QUETE 1 PARTIE A */
   			$scope.quete1a = function(){

   				var valeur = '';
				var i = 0;
				
				//je parcour mon formulaire
				for (i=0; i<document.formulaire.perso.length; i++) {

						//je verifie que jai bien selectioné un bouton
						if (document.formulaire.perso[i].checked) { 

							valeur = document.formulaire.perso[i].value;


							if (valeur==='ok'){

				      			$scope.partie1= false;
				      			$scope.partie2= true;				      			

				      		}

				      		else if (valeur==='nonok') {

				      			
				 				$scope.texte = 'Ceci n\'est pas le bon héro';

				      		}
				      			
							
						}

						

					}


   			};


   															/* QUETE 1 PARTIE B */

   			$scope.quete1b = function(){

   				var valeur = '';
				var i = 0;
				
				//je parcour mon formulaire
				for (i=0; i<document.formulaireb.arme.length; i++) {

						//je verifie que jai bien selectioné un bouton
						if (document.formulaireb.arme[i].checked) { 

							valeur = document.formulaireb.arme[i].value;


							if (valeur==='ok'){

				      			$scope.partie1= false;
				      			$scope.partie2=false;
				      			$scope.partie3=true;				      			

				      		}

				      		else if (valeur==='nonok') {

				      			
				 				$scope.texteb = 'Omegazell ne sait pas manié d\'aussi grande lame';

				      		}
				      			
							
						}

					}

   			};


		});
      	
      	



  

