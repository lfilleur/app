'use strict';

/**
 * @ngdoc overview
 * @name applinoobApp
 * @description
 * # applinoobApp
 *
 * Main module of the application.
 */
var app = angular
  .module('applinoobApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
        controller: 'EpisodesCtrl'
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