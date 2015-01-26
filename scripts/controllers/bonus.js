'use strict';

/**
 * @ngdoc function
 * @name bonus.controller:bonus
 * @description
 * # bonus
 * Controller of the bonus
 */
var app = angular.module('bonus');

app.controller('BonusCtrl', function ($scope, $http) {
    $scope.step = 1;




    $scope.ListeBonusV = function () {


        $scope.step = 1;

        var url = 'http://smartsheep.reaco.fr/php/listeBonusV.php';

        function httpSuccess(response) {

            $scope.listeBV = response;

        }

        $http.get(url).success(httpSuccess).error(function () {

            alert('Impossible de trouver la liste de Bonus vidéo, connexion internet défaillante');

        });
    };





    $scope.ListeBonusBD = function () {
        $scope.step = 2;

        var url = 'http://smartsheep.reaco.fr/php/listeBonusBD.php';

        function httpSuccess(response) {

            $scope.listeBBD = response;

        }

        $http.get(url).success(httpSuccess).error(function () {

            alert('Impossible de trouver la liste de Bonus BD, connexion internet défaillante');

        });



    };

    $scope.ListeBonusC = function () {

        $scope.step = 3;
        var url = 'http://smartsheep.reaco.fr/php/listeBonusC.php';

        function httpSuccess(response) {

            $scope.listeBC = response;

        }

        $http.get(url).success(httpSuccess).error(function () {

            alert('Impossible de trouver la liste de Bonus Croquis, connexion internet défaillante');

        });



    };

    $scope.FicheBonusV = function (e) {
        $scope.step = 4;


        var url = 'http://smartsheep.reaco.fr/php/ficheBonusV.php?id_Bonus=';
        var id = e;
        var url2 = url + id;

        /* console.log(e);*/

        function httpSuccess2(response) {

            $scope.ficheBonusV = response;
            /* alert('http ok'+' '+'return' + ' '+ $scope.ficheMonstre); */
        }


        /*on regarde si on a deja un id de defini*/
        if (id !== undefined) {

            $http.get(url2).success(httpSuccess2).error(function () {

                alert('Impossible de trouver la fiche bonus vidéo, connexion internet défaillante');

            });

        }


    };
    $scope.FicheBonusBD = function (e) {
        $scope.step = 5;


        var url = 'http://smartsheep.reaco.fr/php/ficheBonusBD.php?id_Bonus=';
        var id = e;
        var url2 = url + id;

        /* console.log(e);*/

        function httpSuccess2(response) {

            $scope.ficheBonusBD = response;
            /* alert('http ok'+' '+'return' + ' '+ $scope.ficheMonstre); */
        }


        /*on regarde si on a deja un id de defini*/
        if (id !== undefined) {

            $http.get(url2).success(httpSuccess2).error(function () {

                alert('Impossible de trouver la fiche bonus BD, connexion internet défaillante');

            });

        }


    };
    $scope.FicheBonusC = function (e) {
        $scope.step = 6;


        var url = 'http://smartsheep.reaco.fr/php/ficheBonusC.php?id_Bonus=';
        var id = e;
        var url2 = url + id;

        /* console.log(e);*/

        function httpSuccess2(response) {

            $scope.ficheBonusC = response;
            /* alert('http ok'+' '+'return' + ' '+ $scope.ficheMonstre); */
        }


        /*on regarde si on a deja un id de defini*/
        if (id !== undefined) {

            $http.get(url2).success(httpSuccess2).error(function () {

                alert('Impossible de trouver la fiche croquis, connexion internet défaillante');

            });

        }


    };




});