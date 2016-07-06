/**
 * Created by tdr on 18/06/16.
 */
'use strict';

views
    .controller('HomeController', ['$scope', 'OrganizersService', '$rootScope', function($scope, OrganizersService, $rootScope) {

        $scope.init = function() {
            loadAll();
            console.log("loaded HomeController");

            $rootScope.currentView = "home";
        };

        var loadAll = function() {
        };


        $scope.init();
    }]);