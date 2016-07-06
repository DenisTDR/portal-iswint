/**
 * Created by NM on 7/6/2016.
 */


views
    .controller('ParticipantsController', function($scope, $controller, $uibModal, $rootScope) {

        $scope.typeName = "participant";
        $controller('TableViewController', {$scope: $scope});


        $scope.canEdit = true;
        $scope.visibleProperty = [];

        $scope.loaded = function(){
            return $scope.type != null && $scope.models.length > 0;
        };


        $scope.init = function() {
            console.log("loaded ParticipantsController");
            //$scope.modelAction($scope.models[0], "edit");
            $rootScope.currentView = "participants";
        };

        $scope.init();

        if($scope.initParent) {
            $scope.initParent();
        }

    });
