/**
 * Created by NM on 7/6/2016.
 */


views
    .controller('ScheduleController', function($scope, $controller, $uibModal, $rootScope) {

        $scope.typeName = "schedule";
        
        $scope.init = function() {
            $rootScope.currentView = "schedule";
        };

        $scope.init();
    });
