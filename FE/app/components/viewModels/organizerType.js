/**
 * Created by NM on 6/27/2016.
 */

var organizerType =
    {
        Id: {type: "number"},
        FirstName: {type: "string"},
        LastName: {type: "string"},
        PhoneNumber: {type: "string"},
        Room: {type: "room"},
        ShirtSize: {type: "enum", values:["XS", "S", "M", "L", "XL", "XXL"]},
        ShirtGiven: {type: "boolean"},
        BadgeGiven: {type: "boolean"}
    };