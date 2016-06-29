/**
 * Created by tdr on 18/06/16.
 */


angular.module('portal').service("OrganizersService", function ($http) {
    var thisService = backendUrl + "Organizers/";
    this.getAll = function() {
        return $http.get(thisService);
    };

    this.saveProperties = function (entityId, propertyBag) {

        return $http.post(thisService + entityId, propertyBag);
    }
});


var mockOrganizers = [
    {
        Id: 4,
        FirstName: "Ion",
        LastName: "Popescu",
        Room: "203C",
        ShirtSize: "M",
        ShirtGiven: false,
        BadgeGiven: false,
        Genre: "M",
        PhoneNumber: "0712345678",
        PhotoUrl: "",
        EMail: "blabl@sdfsd.com"
    },
    {
        Id: 5,
        FirstName: "Gheorghe",
        LastName: "Nume",
        Room: "307C",
        ShirtSize: "L",
        ShirtGiven: true,
        BadgeGiven: false,
        Genre: "F",
        PhoneNumber: "0712345678",
        PhotoUrl: "",
        EMail: "blabl@sdfsd.com"
    },
    {
        Id: 7,
        FirstName: "Gheorghe",
        LastName: "Nume",
        Room: "307C",
        ShirtSize: "L",
        ShirtGiven: true,
        BadgeGiven: false,
        Genre: "F",
        PhoneNumber: "0712345678",
        PhotoUrl: "",
        EMail: "blabl@sdfsd.com"
    },
    {
        Id: 10,
        FirstName: "Gheorghe",
        LastName: "Nume",
        Room: "307C",
        ShirtSize: "L",
        ShirtGiven: true,
        BadgeGiven: false,
        Genre: "F",
        PhoneNumber: "0712345678",
        PhotoUrl: "",
        EMail: "blabl@sdfsd.com"
    }
];