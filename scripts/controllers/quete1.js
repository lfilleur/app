'use strict';


var app = angular.module('quete1');
   app.controller('Quete1Ctrl', function($scope) {    		
    	
   			$scope.texte = 'Choisi Omegazell et part à l\'aventure';
   			$scope.queteSuivante = function($scope){

   				var valeur = '';
				var i = 0;
				var show = 1;


				//je parcour mon formulaire
				for (i=0; i<document.formulaire.perso.length; i++) {

						//je verifie que jai bien selectioné un bouton
						if (document.formulaire.perso[i].checked) { 

							valeur = document.formulaire.perso[i].value;


							if (valeur==='ok'){

				      			show = show + 1;
				      			alert(valeur + ' a été sélectionné');

				      		}

				      		else if (valeur==='nonok') {

				      			alert(valeur + ' a été sélectionné'); 	
				 				$scope.texte = 'Ceci n\'est pas le bon héro';

				      		}
				      			
							
						}

						//si rien n'est cocher 
						else {

							$scope.texte = 'Choisi Omegazell et part à l\'aventure';	
									
							}				


					}


   			};


		});
      	
      	
/*
      function queteSuivante() 
      {
      	var valeur = '';
		var i =0;
		var show = 1;


			//je parcour mon formulaire
			for (i=0; i<document.formulaire.perso.length; i++) {

					//je verifie que jai bien selectioné un bouton
					if (document.formulaire.perso[i].checked) { 

						valeur = document.formulaire.perso[i].value;


						if (valeur=='ok'){

			      			show = show + 1;
			      			alert(valeur + ' a été sélectionné');

			      		}

			      		else if (valeur=='nonok') {

			      			alert(valeur + ' a été sélectionné'); 	
			 				texte = 'Ceci n\'est pas le bon héro';

			      		}
			      			
						
					}

					//si rien n'est cocher 
					else {

						var texte = 'Choisi Omegazell et part à l\'aventure';	
								
						}				


				}
	 } */


  

