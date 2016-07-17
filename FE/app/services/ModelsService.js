/**
 * Created by NM on 6/28/2016.
 */


portal.service("ModelsService", function ($http, $q, CachingService) {
    var thisService = backendUrl + "ViewModels/";
    
    this.getModelType = function(typeName){
        typeName = typeName.toLowerCase();
        var cacheKey = "type_" + typeName;
        if(CachingService.contains(cacheKey)){
            console.log("got " + typeName + " from cache");
            var deferred = $q.defer();
            setTimeout(function () {
                deferred.resolve({data: CachingService.get(cacheKey)});
            }, 100);
            return deferred.promise;
        }
        return $http.get(thisService + "?typeName=" + typeName).then(function(data){
            console.log("got " + typeName + " from server");
            CachingService.set(cacheKey, data.data);
            return data;
        });
    };
});