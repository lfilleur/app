'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
var Newsmod = angular.module('news',[]);
var Videomod = angular.module('videos',[]);
var Saison1mod = angular.module('saison1',[]);
var Saison2mod = angular.module('saison2',[]);
var Saison3mod = angular.module('saison3',[]);
var Saison4mod = angular.module('saison4',[]);
var Saison5mod = angular.module('saison5',[]);
var Grimoiremod = angular.module('grimoire',[]);
var Accueilmod = angular.module('accueil',[]);

var Cartemod = angular.module('carte',['ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'grimoire'
    ]);

Cartemod.config(function ($routeProvider) {
    $routeProvider
     
      .when('/profil', {
        templateUrl: 'views/profil.html',                        /* A MODIFIER QUAND MISE EN MARCHE DES SCRIPT DANS GRIMOIRE*/
        controller: 'ListeMonstreCtrl' 
      })
    
  });



var app = angular
  .module('app', [
    'news',
    'videos',
    'carte',
    'saison1',
    'saison2',
    'saison3',
    'saison4',
    'saison5',
    'accueil',    
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    
  ]);


  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/accueil.html',
        controller: 'AccueilCtrl'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
    .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
      })
    .when('/carte', {
        templateUrl: 'views/carte.html',
        controller: 'CarteCtrl'
      })
    .when('/saison1', {
        templateUrl: 'views/saison1.html',
        controller: 'Saison1Ctrl'
      }) 
      .when('/saison2', {
        templateUrl: 'views/saison2.html',
        controller: 'Saison2Ctrl'
      }) 
      .when('/saison3', {
        templateUrl: 'views/saison3.html',
        controller: 'Saison3Ctrl'
      }) 
      .when('/saison4', {
        templateUrl: 'views/saison4.html',
        controller: 'Saison4Ctrl'
      }) 
      .when('/saison5', {
        templateUrl: 'views/saison5.html',
        controller: 'Saison5Ctrl'
      })   
	   .when('/cartetest', {                               /* a viré aprés test*/
        templateUrl: 'cartetest.html',
        controller: 'cartetestCtrl'
      })  
      .otherwise({
        redirectTo: '/'
      });
  });



app.directive('back', ['$window', function($window) {
        return {
            restrict: 'A',
            link: function (scope, elem) {     /*, attrs*/
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    }]);

