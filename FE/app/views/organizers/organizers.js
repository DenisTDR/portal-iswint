/**
 * Created by tdr on 18/06/16.
 */

'use strict';

angular.module('portal.organizers',
    [   'ngRoute',
        'ui.bootstrap'
    ])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/organizers', {
            templateUrl: 'views/organizers/organizers.html',
            controller: 'OrganizersController'
        });
    }])

    .controller('OrganizersController', function($scope, OrganizersService, $modal, $rootScope) {
        $scope.isOrganizer = true;
        $scope.organizers = [];
        $scope.canEdit = true;
        $scope.type = organizerType;
        $scope.init = function() {
            loadAll();
            console.log("loaded OrganizersController");
            //$scope.organizerAction($scope.organizers[0], "edit");
            $rootScope.currentView = "organizers";
        };

        var loadAll = function() {
            $scope.organizers = OrganizersService.getAll();
            console.log($scope.organizers);
        };

        $scope.organizerAction = function(organizer, action) {
            var modalInstance = $modal.open({
                templateUrl: 'views/organizers/editOrganizer.html',
                controller: 'EditOrganizerController',
                size: 'lg',
                resolve: {
                    organizer: function () {
                        return organizer;
                    },
                    isOrganizer: function () {
                        return $scope.isOrganizer;
                    },
                    editing: function() {
                        return action == "edit";
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };
        
        $scope.init();
    });