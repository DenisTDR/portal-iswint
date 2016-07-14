/**
 * Created by NM on 7/14/2016.
 */

/**
 * Created by NM on 7/6/2016.
 */


views
    .controller('CountriesController', function($scope, $controller, $uibModal, $rootScope) {

        $scope.typeName = "country";
        $controller('TableViewController', {$scope: $scope});

        $scope.init = function() {
            console.log("loaded CountriesController");
            $rootScope.currentView = "countries";
        };

        $scope.init();

        if($scope.initParent) {
            $scope.initParent();
        }

    });
