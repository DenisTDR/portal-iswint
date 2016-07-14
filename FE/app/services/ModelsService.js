/**
 * Created by NM on 6/28/2016.
 */


portal.service("ModelsService", function ($http) {
    var thisService = backendUrl + "ViewModels/";
    var cachedModels = {};
    this.getModelType = function(typeName, success, error, final){
        typeName = typeName.toLowerCase();
        if(cachedModels[typeName]){
            //console.log("cached. getting from cache");
            if(typeof success == "function") {
                success(cachedModels[typeName]);
            }
            return;
        }
        console.log("not cached. getting from be");
        $http.get(thisService + "?typeName=" + typeName).then(function(data){
            //console.log("got typeModel: ", data);
            cachedModels[typeName] = data.data;

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