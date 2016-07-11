/**
 * Created by NM on 7/6/2016.
 */

angular.module('portal').service("WorkshopsService", function ($http) {
    this.endPoint = backendUrl + "Workshop/";
    bindBasicModelService(this, $http);
    
});
