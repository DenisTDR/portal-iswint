/**
 * Created by NM on 7/12/2016.
 */

views
    .controller('MentorsController', function($scope, $controller, $uibModal, $rootScope) {

        $scope.typeName = "mentor";
        $controller('TableViewController', {$scope: $scope});

        $scope.init = function() {
            console.log("loaded MentorsController");
            //$scope.modelAction($scope.models[0], "edit");
            $rootScope.currentView = "mentors";
        };
        $scope.depBag.workshops = true;
        $scope.depBag.rooms = true;
        $scope.init();

        if($scope.initParent) {
            $scope.initParent();
        }

    });
