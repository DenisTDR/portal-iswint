/**
 * Created by NM on 7/16/2016.
 */


portal.service("AccountService", function ($http) {
    var thisService = backendUrl + "Account/";
    this.login = function (model) {
        return $http.post(thisService + "Login", model);
    }
});