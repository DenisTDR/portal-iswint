/**
 * Created by NM on 6/29/2016.
 */

angular.module('portal.modals', ['ngRoute'])
    .controller('viewModelModalController',
        function ($scope, $modalInstance, type, item, isOrganizer, editing) {
            console.log("viewModelModalController loaded");
            $scope.type = type;
            $scope.item = item;
            $scope.editing = editing;
            $scope.isOrganizer = isOrganizer;

            $scope.propertyChanged = function(item, property) {

            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        });