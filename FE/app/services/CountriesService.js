/**
 * Created by tdr on 03/07/16.
 */

portal.service("CountriesService", function ($http, localStorageService) {
    this.endPoint = backendUrl + "Country/";

    bindBasicModelService(this, $http, localStorageService);

    var cachedCountries = null;


    this.getAllCached = function (success, error, final) {
        if(cachedCountries) {
            if(typeof success == "function") {
                success(cachedCountries);
            }
            return;
        }
        $http.get(this.endPoint + "GetAll").then(function(data){
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