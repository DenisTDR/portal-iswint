/**
 * Created by NM on 7/3/2016.
 */


angular.module('portal').service("RoomsService", function ($http) {
    var thisService = backendUrl + "Rooms/";

    this.getAllFull = function () {
        return $http.get(thisService);
    };

    var cachedRooms = null
    this.getAll = function ( success, error, final) {
        if(cachedRooms) {
            if(typeof success == "function")
                success(cachedRooms);
            return;
        }
        $http.get(thisService + "GetWithoutPeople")
            .then(function (data) {
                //console.log("got typeModel: ", data);
                cachedRooms = data.data;

                if (typeof success == "function") {
                    success(data.data);
                }
            }).catch(function (data) {
            //console.log("err", data);
            if (typeof error == "function") {
                error(data);
            }
        }).finally(function () {
            if (typeof final == "function") {
                final(data);
            }
        });
    }

});