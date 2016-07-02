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

    .controller('OrganizersController', function($scope, OrganizersService, $modal, $rootScope, ModelsService) {
        $scope.isOrganizer = true;
        $scope.organizers = [];
        $scope.canEdit = true;
        $scope.typeName = "organizer";
        $scope.type = null;
        $scope.columnWidths = [];
        $scope.visibleProperty = [];

        dynamicTable($scope, $scope.type);
        
        $scope.init = function() {
            loadAll();
            console.log("loaded OrganizersController");
            //$scope.organizerAction($scope.organizers[0], "edit");
            $rootScope.currentView = "organizers";

            ModelsService.getModelType($scope.typeName, function(type) {
                $scope.type = type;
                $scope.type.Properties.forEachProperty(function(pName, pValue) {
                    pValue.visible = true;
                });
                //console.log(type);
                $scope.autoDisplayModal();
            });
        };

        var loadAll = function() {
            OrganizersService.getAll().then(function (data) {
                //console.log("got org: ", data.data);
                $scope.organizers = data.data;
                //console.log($scope.organizers);
                $scope.autoDisplayModal();
            }).catch(function (data) {
                console.log("err", data);
            }).finally(function () {
                $scope.loading = false;
            });
        };

        $scope.logType = function () {
            console.log($scope.type);
        };

        $scope.showProperty = function(property) {
            return property.visible
                && (!property.OrganizerOnly || $scope.isOrganizer)
                && property.VisibleInTable;
        };

        $scope.showPropertyVisibleCheckbox = function(property) {
            return (!property.OrganizerOnly || $scope.isOrganizer)
                && property.VisibleInTable;
        };

        $scope.propertyChanged = function(item, property) {
            console.log("changed " + property.Name + " to " + item[property.Name]);
            // console.log(this);
            var propBag = {};
            propBag[property.Name] = item[property.Name];
            OrganizersService.saveProperties(item.Id, propBag).then(function (data) {
               console.log("changed?");
            }).catch(function(data){
                console.log("err", data);
            }).finally(function () {
                console.log("finally");
            });
        };

        $scope.organizerAction = function(item, action) {z
            var modalInstance = $modal.open({
                templateUrl: 'views/modals/viewModelModal.html',
                controller: 'viewModelModalController',
                size: 'lg',
                resolve: {
                    type: function () {
                        return $scope.type;
                    },
                    item: function () {
                        return item;
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
                //console.log('Modal dismissed at: ' + new Date());
            });
        };
        $scope.autoDisplayModal = function () {
            if(!$scope.type || !$scope.organizers.length) {
                return;
            }
            $scope.organizerAction($scope.organizers[0], "edit");
        };
        $scope.init();
    });
