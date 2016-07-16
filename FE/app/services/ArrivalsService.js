/**
 * Created by NM on 7/16/2016.
 */

portal.service("ArrivalsService", function ($http) {
    this.thisService = backendUrl + "Participants/";

    this.getAll = function() {
        return $http.get(this.thisService + "GetArrivals");
    };
});