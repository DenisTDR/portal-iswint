/**
 * Created by NM on 7/6/2016.
 */


var bindBasicModelService = function(service, $http, CachingService) {
    
    var session = CachingService.get("session", true);

    if(session) {
        $http.defaults.headers.common.Authorization = "Basic " + session.Token;
    }

    service.getAll = function() {
        return $http.get(service.endPoint + "GetAll");
    };

    service.saveProperties = function (entityId, propertyBag) {
        return $http.post(service.endPoint + "UpdateProperties/" + entityId, propertyBag);
    };

    service.addNew = function(model){
        return $http.post(service.endPoint + "AddNew", model);
    };

    service.removeModel = function(id){
        return $http.delete(service.endPoint + "Delete/"+id);
    }
};