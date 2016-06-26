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

    .controller('HomeController', ['$scope', 'OrganizersService', '$rootScope', function($scope, OrganizersService, $rootScope) {

        $scope.init = function() {
            loadAll();
            console.log("loaded OrganizersController");

            $rootScope.currentView = "home";
        };

        var loadAll = function() {
            console.log(OrganizersService.getAll());
        };


        $scope.init();
    }]);