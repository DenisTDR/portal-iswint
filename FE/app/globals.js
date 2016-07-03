/**
 * Created by tdr on 19/06/16.
 */

var ShirtSizes = ["XS", "S", "M", "L", "XL"];
var Genres = ["M", "F", "Unknown"];

var backendUrl = "http://api.portal.iswint.tdr/api/";



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
    for (var propertyName in this) {
        if (this.hasOwnProperty(propertyName)) {
            if(propertyName == "$id") continue;
            if(fct(propertyName, this[propertyName])) return;
        }
    }
};


Object.prototype.Clone = function () {
    var newObj = this.length === undefined ? {} : [];
    this.forEachProperty(function(propertyName, propertyValue){
        switch(typeof propertyValue){
            case "object":
                newObj[propertyName] = propertyValue?propertyValue.Clone():propertyValue;
                break;
            default:
                newObj[propertyName] = propertyValue;
                break;
        }
    });

    return newObj;
};

/*
* @return {boolean}
*/
Object.prototype.Equals = function (cmpObject) {
    console.log(typeof this);
    console.log(this);
    if(typeof this != "object" || this.isWrapperOfPrimitive()) {
       return this.comparePrimitiveWrappers(cmpObject);
    }
    if(this.length) {
        for(var i = 0; i < this.length; i ++){
            if(this[i] != cmpObject[i]){
                console.log("[" + i + "] => " + this[i] + "!=" + cmpObject[i]);
                return false;
            }
        }
    }
    var notEq = false;
    this.forEachProperty(function(propertyName, propertyValue){
        switch(typeof propertyValue){
            case "object":
                if(!propertyValue.Equals(cmpObject[propertyName])){
                    notEq = true;
                    console.log(propertyName);
                    return true;
                }
                break;
            default:
                if(propertyValue != cmpObject[propertyName]){
                    notEq = true;
                    // console.log(propertyName + " => " + propertyValue + "!=" + cmpObject[propertyName]);
                    return true;
                }
                break;
        }
    });

    return !notEq;
};


Object.prototype.isWrapperOfPrimitive = function () {
    return this.constructor == Boolean
        || this.constructor == String
        || this.constructor == Number;
};

Object.prototype.comparePrimitiveWrappers = function (cmpObject) {
    return this.valueOf() == cmpObject.valueOf();
};