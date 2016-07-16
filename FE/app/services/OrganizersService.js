/**
 * Created by tdr on 18/06/16.
 */


portal.service("OrganizersService", function ($http, CachingService) {
    this.endPoint = backendUrl + "Organizers/";
    bindBasicModelService(this, $http, CachingService);
});

