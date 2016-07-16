/**
 * Created by NM on 6/28/2016.
 */


portal.service("ModelsService", function ($http, CachingService) {
    var thisService = backendUrl + "ViewModels/";
    this.getModelType = function(typeName, success, error, final){
        typeName = typeName.toLowerCase();
        var cacheKey = "type_" + typeName;
        if(CachingService.contains(cacheKey)){
            //console.log("cached. getting from cache");
            if(typeof success == "function") {
                success(CachingService.get(cacheKey));
            }
            return;
        }
        // console.log("not cached. getting from be");
        $http.get(thisService + "?typeName=" + typeName).then(function(data){
            //console.log("got typeModel: ", data);
            CachingService.set(cacheKey, data.data);

            if(typeof success == "function") {
                success(data.data);
            }
        }).catch(function (data) {
            console.log("err", data);
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