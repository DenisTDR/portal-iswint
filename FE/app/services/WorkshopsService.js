/**
 * Created by NM on 7/6/2016.
 */

portal.service("WorkshopsService", function ($http, localStorageService) {
    this.endPoint = backendUrl + "Workshop/";
    bindBasicModelService(this, $http, localStorageService);
    
});
