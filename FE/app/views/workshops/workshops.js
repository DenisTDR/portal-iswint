/**
 * Created by NM on 7/6/2016.
 */

/**
 * Created by NM on 7/6/2016.
 */


views
    .controller('WorkshopsController', function($scope, $controller, $uibModal, $rootScope) {

        $scope.typeName = "workshop";
        $controller('TableViewController', {$scope: $scope});
        
        $scope.init = function() {
            console.log("loaded WorkshopsController");
            //$scope.modelAction($scope.models[0], "edit");
            $rootScope.currentView = "workshops";
        };

        $scope.depBag.organizers = true;
        $scope.init();

        if($scope.initParent) {
            $scope.initParent();
        }

    });
