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
                console.log(property.Name + " changed to " + item[property.Name]);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };

            $scope.init = function () {
                $scope.LeftViewProperties = [];
                $scope.RightViewProperties = [];
                $scope.type.Properties.forEachProperty(function(propertyName, propertyBag) {
                    if(propertyBag.Type == "photourl") {
                        $scope.photoProperty = propertyBag;
                        //console.log(propertyBag);
                    }
                    else if(propertyBag.MainView){
                        $scope.LeftViewProperties.push(propertyBag);
                    }
                    else {
                        $scope.RightViewProperties.push(propertyBag);
                    }
                });
            };

            $scope.init();
        });