/**
 * Created by tdr on 19/06/16.
 */
angular.module('portal.organizers')
    .controller('ViewOrganizerController',
        function ($scope, $modalInstance, organizer) {

    $scope.organizer = organizer;


    $scope.ok = function () {
        //$modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});