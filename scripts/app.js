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
      .when('/carte', {
        templateUrl: 'carte.html',
        controller: 'CarteCtrl'
      })
      .when('/profil', {
        templateUrl: 'views/profil.html',
        controller: 'ListeMonstreCtrl' 
      })
       .otherwise({
        redirectTo: '/accueil'
      });
  });



var app = angular
  .module('app', [
    'news',
    'videos',
    'carte',
    'saison1',
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
        templateUrl: 'carte.html',
        controller: 'CarteCtrl'
      })
    .when('/saison1', {
        templateUrl: 'views/saison1.html',
        controller: 'Saison1Ctrl'
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

