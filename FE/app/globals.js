/**
 * Created by tdr on 19/06/16.
 */

var ShirtSizes = ["XS", "S", "M", "L", "XL"];
var Genres = ["M", "F", "Unknown"];

var backendUrl = "http://dev.api.portal.iswint.tdr/api/";



Object.prototype.numberOfProperties = function() {
    var number = 0;
    for (var property in this) {
        if (this.hasOwnProperty(property)) {
            number++;
        }
    }
    return number;
};

Object.prototype.forEachProperty = function (fct) {
    for (var property in this) {
        if (this.hasOwnProperty(property)) {
            if(property == "$id") continue;
            fct(property, this[property]);
        }
    }
};

Object.prototype.clonare = function () {
    console.log(this);
};