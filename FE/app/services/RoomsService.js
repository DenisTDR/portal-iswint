/**
 * Created by NM on 7/3/2016.
 */


portal.service("RoomsService", function ($http) {
    this.endPoint = backendUrl + "Rooms/";
    bindBasicModelService(this, $http);
    
    this.getAllFull = function () {
        return $http.get(this.endPoint);
    };

    var cachedRooms = null;
    this.getAllCached = function ( success, error, final) {
        if(cachedRooms) {
            if(typeof success == "function")
                success(cachedRooms);
            return;
        }
        $http.get(this.endPoint + "GetWithoutPeople")
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