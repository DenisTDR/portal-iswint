/**
 * Created by NM on 7/6/2016.
 */


var bindBasicModelService = function(service, $http) {
    service.getAll = function() {
        return $http.get(service.endPoint);
    };

    service.saveProperties = function (entityId, propertyBag) {
        return $http.post(service.endPoint + "UpdateProperties/" + entityId, propertyBag);
    }
};