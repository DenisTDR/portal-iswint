/**
 * Created by NM on 7/16/2016.
 */


views
    .controller('ArrivalsController',
        function($scope, $rootScope, $state, $controller, localStorageService, AccountService) {
            $scope.typeName = "arrival";
            $controller('TableViewController', {$scope: $scope});

            $scope.init = function() {
                console.log("loaded ArrivalsController");
                //$scope.modelAction($scope.models[0], "edit");
                $rootScope.currentView = "rooms";
            };

            $scope.init();

            if($scope.initParent) {
                $scope.initParent();
            }
        });