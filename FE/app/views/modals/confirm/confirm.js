/**
 * Created by NM on 7/16/2016.
 */

modals.controller('ConfirmInstanceController', function ($scope, $uibModalInstance, model, type, PropertyService) {

    // console.log(type);
    $scope.what = "plm";
    $scope.PropertyService = PropertyService;

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.init = function () {
        type.Type = type.Name;
        if(PropertyService.getPropertyFileName(type) == "person"){
            $scope.what = model.FirstName + " " + model.LastName;
        }
        else {
            $scope.what =  model.Name;
        }
    };
    $scope.init();
});