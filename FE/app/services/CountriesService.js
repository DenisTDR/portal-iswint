/**
 * Created by tdr on 03/07/16.
 */

portal.service("CountriesService", function ($http, CachingService) {
    this.endPoint = backendUrl + "Country/";

    bindBasicModelService(this, $http, CachingService);

    this.getAllCached = function (success, error, final) {
        var cacheKey = "countries";
        if(CachingService.contains(cacheKey)) {
            if(typeof success == "function") {
                success(CachingService.get(cacheKey));
            }
            return;
        }
        $http.get(this.endPoint + "GetAll").then(function(data){
            //console.log("got typeModel: ", data);
            CachingService.set(cacheKey, data.data);

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