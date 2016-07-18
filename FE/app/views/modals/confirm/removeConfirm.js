/**
 * Created by NM on 7/18/2016.
 */


modals.controller('RemoveConfirmInstanceController', function ($scope, $rootScope, $uibModalInstance, Service, model, type, PropertyService, Notification) {


    console.log(type);
    $scope.what = "plm";
    $scope.PropertyService = PropertyService;

    $scope.ok = function () {
        $scope.loading = true;
        var waitingNotification = Notification.info({message: 'Deleting ...123'});


        Service.removeModel(model.Id).then(function(data) {
            $uibModalInstance.close();
        }).catch(function(data){
            $rootScope.messageBox("Error!", "Couldn't remove that object ...", true, "sm", 100*1000);
            console.log("err removing ", data);
        }).finally(function() {
            console.log("killing");
            $scope.loading = false;
            waitingNotification.kill(true);
        });
        // $uibModalInstance.close();
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