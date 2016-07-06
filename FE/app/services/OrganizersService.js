/**
 * Created by tdr on 18/06/16.
 */


angular.module('portal').service("OrganizersService", function ($http) {
    this.endPoint = backendUrl + "Organizers/";
    bindBasicModelService(this, $http);
});

