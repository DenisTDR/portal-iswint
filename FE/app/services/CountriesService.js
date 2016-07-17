/**
 * Created by tdr on 03/07/16.
 */

portal.service("CountriesService", function ($http, $q, CachingService) {
    this.endPoint = backendUrl + "Country/";

    bindBasicModelService(this, $http, CachingService);

    this.getAll = function () {
        var cacheKey = "countries";

        if(CachingService.contains(cacheKey)) {
            var deferred = $q.defer();
            console.log("serving countries from cache");
            setTimeout(function () {
                deferred.resolve({data: CachingService.get(cacheKey)});
            }, 100);
            return deferred.promise;
        }
        else {
            return $http.get(this.endPoint + "GetAll").then(function (data) {
                CachingService.set(cacheKey, data.data);
                return data;
            });
        }
    };
});