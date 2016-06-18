/**
 * Created by tdr on 18/06/16.
 */

'use strict';

angular.module('portal.organizers', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/organizers', {
            templateUrl: 'views/organizers/organizers.html',
            controller: 'OrganizersController'
        });
    }])

    .controller('OrganizersController', ['$scope', function($scope) {
        
        $scope.init = function() {
            console.log("loaded OrganizersController");
        };
        
        
        $scope.init();
    }]);