/**
 * Created by tdr on 18/06/16.
 */


angular.module('portal').service("OrganizersService", function ($http) {
    var thisService = backendUrl + "Organizers/";
    this.getAll = function() {
        return $http.get(thisService);
    };

    this.saveProperties = function (entityId, propertyBag) {
        return $http.post(thisService + "UpdateProperties/" + entityId, propertyBag);
    }
});

