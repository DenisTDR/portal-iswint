
'use strict';

console.log('asd');
views
    .controller('SantinelController',
        function($scope, $rootScope, $state, $controller, localStorageService, AccountService) {
            $scope.typeName = "santinel";
            $controller('TableViewController', {$scope: $scope});

            $scope.init = function() {
                console.log("loaded ArrivalsController");
                //$scope.modelAction($scope.models[0], "edit");
                $rootScope.currentView = "santinel";
            };
            $scope.depBag.organizers = true;

            $scope.init();

            if($scope.initParent) {
                $scope.initParent();
            }
        });