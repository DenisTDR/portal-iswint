/**
 * Created by NM on 7/12/2016.
 */

portal.service("MentorsService", function ($http, localStorageService) {
    this.endPoint = backendUrl + "Mentors/";
    bindBasicModelService(this, $http, localStorageService);

});
