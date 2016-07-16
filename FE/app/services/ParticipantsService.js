/**
 * Created by NM on 7/6/2016.
 */

portal.service("ParticipantsService", function ($http, localStorageService) {
    this.endPoint = backendUrl + "Participants/";
    bindBasicModelService(this, $http, localStorageService);
});
