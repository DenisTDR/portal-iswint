/**
 * Created by NM on 7/16/2016.
 */

views
    .controller('LoginController',
        function($scope, $rootScope, $state, localStorageService, AccountService) {
            $scope.model = { };

            $rootScope.currentView = "login";
            
            $scope.state = 0;
            $scope.states = ["", "Logged in", "", "Please wait", "An error occurred."];

            $scope.login = function () {
                $scope.state = 3;
                $scope.states[2] = "";
                AccountService.login($scope.model).then(function (data) {
                    console.log(data.data);
                    if(data.data && data.data.Status) {
                        if(data.data.Status == "success") {
                            $scope.state = 1;
                            $scope.loggedIn(data.data.Session);
                        }
                        else {
                            $scope.state = 2;
                            $scope.states[2] = data.data.Reason;
                        }
                        return;
                    }
                    $scope.state = 4;
                }).catch(function (data) {
                    console.log("err login", data);
                    $scope.state = 4;
                });
            };
            $scope.loggedIn = function (tokenModel) {
                console.log(tokenModel);
                localStorageService.set("session", tokenModel);
            };

            $scope.init = function () {
                if($state.params.Action && $state.params.Action == "logout") {
                    localStorageService.remove("session");
                    console.log($state.params.Action);
                    $state.go("home");
                }
            };
            $scope.init();
        });