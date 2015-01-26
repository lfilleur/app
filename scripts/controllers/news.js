'use strict';

/** @@ -8,6 +8,23 @@
 * Controller of the applinoobApp
 */

var app = angular.module('news');


app.controller('NewsCtrl', function ($scope) {

    $scope.articles = false;
    $scope.twitter = true;

    this.tab = 1;
    this.selectTab = function (setTab) {
        this.tab = setTab;
    };

    this.isSelected = function (checkTab) {
        return this.tab === checkTab;

    };


    $scope.change = function () {

        $scope.articles = true;
        $scope.twitter = false;

    };

    $scope.change2 = function () {

        $scope.articles = false;
        $scope.twitter = true;

    };

});