/**
 * Created by NM on 7/12/2016.
 */

angular.module('portal').service("MentorsService", function ($http) {
    this.endPoint = backendUrl + "Mentors/";
    bindBasicModelService(this, $http);

});
