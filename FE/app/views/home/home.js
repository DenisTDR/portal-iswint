/**
 * Created by tdr on 18/06/16.
 */
'use strict';

angular.module('portal.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        });
    }])

    .controller('HomeController', ['$scope', 'OrganizersService', function($scope, OrganizersService) {

        $scope.init = function() {
            loadAll();
            console.log("loaded OrganizersController");
        };

        var loadAll = function() {
            console.log(OrganizersService.getAll());
        };


        $scope.init();
    }]);