/**
 * Created by tdr on 18/06/16.
 */


portal.service("OrganizersService", function ($http, localStorageService) {
    this.endPoint = backendUrl + "Organizers/";
    bindBasicModelService(this, $http, localStorageService);
});

