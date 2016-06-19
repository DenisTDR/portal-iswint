/**
 * Created by tdr on 19/06/16.
 */
angular.module('portal.organizers')
    .controller('EditOrganizerController',
        function ($scope, $modalInstance, organizer, isOrganizer, editing) {

            $scope.organizer = organizer;
            $scope.isOrganizer = isOrganizer;
            $scope.editing = editing;
            $scope.ShirtSizes = ShirtSizes;
            $scope.Genres = Genres;


            $scope.ok = function () {
                $modalInstance.close($scope.organizer);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.init = function () {
                normalizeOrganizer();

            };

            var normalizeOrganizer = function () {
                if(!$scope.organizer.PhotoUrl) {
                    $scope.organizer.PhotoUrl = "images/randomPeople.png";
                }
            };

            $scope.init();
        });