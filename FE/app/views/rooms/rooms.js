/**
 * Created by NM on 7/6/2016.
 */


views
    .controller('RoomsController', function($scope, $controller, $uibModal, $rootScope) {

        $scope.typeName = "room";
        $controller('TableViewController', {$scope: $scope});


        $scope.canEdit = true;
        $scope.visibleProperty = [];

        $scope.loaded = function(){
            return $scope.type != null && $scope.models.length > 0;
        };


        $scope.init = function() {
            console.log("loaded RoomsController");
            //$scope.modelAction($scope.models[0], "edit");
            $rootScope.currentView = "rooms";
        };

        $scope.init();

        if($scope.initParent) {
            $scope.initParent();
        }

    });
