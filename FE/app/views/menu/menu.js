/**
 * Created by tdr on 18/06/16.
 */

'use strict';

console.log("menu controller imported");

angular.module('portal.menu', ['ngRoute'])
    .controller('MenuController', function($scope) {

        $scope.navCollapsed = true;

        $scope.toggleMenu = function () {
            $scope.navCollapsed = !$scope.navCollapsed;
            console.log("nav new state: " + $scope.navCollapsed);
        };

        $scope.init = function() {
            console.log("loaded menu controller");
        };


        $scope.init();
    });