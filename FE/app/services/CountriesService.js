/**
 * Created by tdr on 03/07/16.
 */

angular.module('portal').service("CountriesService", function ($http) {
    var thisService = backendUrl + "Country/";

    var cachedCountries = null;


    this.getAll = function (success, error, final) {
        if(cachedCountries) {
            if(typeof success == "function") {
                success(cachedCountries);
            }
            return;
        }
        $http.get(thisService).then(function(data){
            //console.log("got typeModel: ", data);
            cachedCountries = data.data;

            if(typeof success == "function") {
                success(data.data);
            }
        }).catch(function (data) {
            //console.log("err", data);
            if(typeof error == "function") {
                error(data);
            }
        }).finally(function () {
            if(typeof final == "function") {
                final(data);
            }
        });
    };

});