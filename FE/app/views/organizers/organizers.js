/**
 * Created by tdr on 18/06/16.
 */

'use strict';

views
    .controller('OrganizersController', function($scope, $controller, $uibModal, $rootScope) {

        $scope.typeName = "organizer";
        $controller('TableViewController', {$scope: $scope});

        $scope.init = function() {
            console.log("loaded OrganizersController");
            //$scope.modelAction($scope.models[0], "edit");
            $rootScope.currentView = "organizers";
            // console.log($stateProvider);
        };
        $scope.depBag.rooms = true;
        $scope.init();

        if($scope.initParent) {
            $scope.initParent();
        }
      
    });
