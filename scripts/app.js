'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
var Newsmod = angular.module('news', []);
var Videomod = angular.module('videos', []);
var Saison1mod = angular.module('saison1', []);
var Saison2mod = angular.module('saison2', []);
var Saison3mod = angular.module('saison3', []);
var Saison4mod = angular.module('saison4', []);
var Saison5mod = angular.module('saison5', []);
var Accueilmod = angular.module('accueil', []);
var Quete1mod = angular.module('quete1', []);
var Profilmod = angular.module('profil', []);
var Bonusmod = angular.module('bonus', []);




var Cartemod = angular.module('carte', ['ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'quete1',
    'profil',
    'bonus']);

Cartemod.config(function ($routeProvider) {
    $routeProvider

    .when('/quete1', {
        templateUrl: 'views/quete1.html',
        controller: 'Quete1Ctrl'
    });

});



var app = angular.module('app', [
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
    'quete1',
    'profil',
    'bonus'

]);


app.config(function ($routeProvider) {
    $routeProvider.when('/', {
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
        .when('/quete1', {
        templateUrl: 'views/quete1.html',
        controller: 'Quete1Ctrl'
    })
        .when('/profil', {
        templateUrl: 'views/profil.html',
        controller: 'ProfilCtrl'
    })
        .otherwise({
        redirectTo: '/'
    });
});



app.directive('back', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, elem) { /*, attrs*/
            elem.bind('click', function () {
                $window.history.back();
            });
        }
    };
}]);