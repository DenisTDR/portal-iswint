/**
 * Created by NM on 7/6/2016.
 */


views
    .controller('ParticipantsController', function($scope, $controller, $uibModal, $rootScope) {

        $scope.typeName = "participant";
        $controller('TableViewController', {$scope: $scope});

        $scope.init = function() {
            console.log("loaded ParticipantsController");
            //$scope.modelAction($scope.models[0], "edit");
            $rootScope.currentView = "participants";
        };
        $scope.depBag.rooms = true;
        $scope.depBag.countries = true;
        $scope.depBag.workshops = true;
        $scope.init();

        if($scope.initParent) {
            $scope.initParent();
        }

    });
