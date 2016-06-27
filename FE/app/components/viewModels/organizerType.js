/**
 * Created by NM on 6/27/2016.
 */

var organizerType =
    {
        Id: {type: "number"},
        FirstName: {type: "string"},
        LastName: {type: "string"},
        Room: {type: "room"},
        ShirtSize: {type: "enum", values:["XS", "S", "M", "L", "XL", "XXL"]},
        ShirtGiven: {type: "boolean"},
        BadgeGiven: {type: "boolean"},
        PhoneNumber: {type: "string"},
        PhotoUrl: {type: "string", viewType: "image"},
        EMail: {type: "string", viewType: "mail"},
        FacebookUrl: {type: "string", viewType: "link"}
    };

// public string FirstName { get; set; }
// public string LastName { get; set; }
// public Room Room { get; set; }
// public string ShirtSize { get; set; }
// public bool ShirtGiven { get; set; }
// public bool BadgeGiven { get; set; }
// public string PhoneNumber { get; set; }
// public string PhotoUrl { get; set; }
// public string EMail { get; set; }
// public string FacebookUrl { get; set; }