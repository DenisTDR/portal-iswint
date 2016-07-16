/**
 * Created by NM on 7/3/2016.
 */

console.log("loading messageModal controller");

modals
    .controller('messageModalController',
        function ($scope, $uibModalInstance, message, title, canClose, autoCloseIn) {
            $scope.message = message;
            $scope.title = title;
            $scope.canClose = canClose;


            $scope.close = function () {
                $uibModalInstance.dismiss('cancel');
            };

            if(autoCloseIn) {
                setTimeout(function () {
                    $scope.close();
                }, autoCloseIn);
            }

        });