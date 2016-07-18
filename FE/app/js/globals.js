/**
 * Created by tdr on 19/06/16.
 */

var migrationCount = 6;
var debugging = false;

var backendUrl = "http://dev.api.portal.iswint.tdr/api/";
// var backendUrl = "http://api.portal.iswint.ro/api/";
// var backendUrl = "http://portal.iswint.ro/api/";

var CountProperties = function (obj) {
    var cnt = 0;
    ForEachProperty(obj, function(){ cnt++; });
    return cnt;
};

var ForEachProperty = function (obj, fct) {
    for (var propertyName in obj) {
        if (obj.hasOwnProperty(propertyName)) {
            if(propertyName == "$id") continue;
            if(fct(propertyName, obj[propertyName])) return;
        }
    }
};


Clone = function (obj) {
    if(obj.constructor == Date){
        return new Date(obj.getTime());
    }
    var newObj = obj.length === undefined ? {} : [];
    ForEachProperty(obj, function(propertyName, propertyValue){
        switch(typeof propertyValue){
            case "object":
                newObj[propertyName] = propertyValue?Clone(propertyValue):propertyValue;
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
Equals = function (obj, cmpObject) {
    //console.log(typeof this);
    //console.log(this);
    if(obj && obj.constructor == Date || cmpObject && cmpObject.constructor == Date) {
        return new Date(obj).getTime() == new Date(cmpObject).getTime();
    }

    if(typeof obj != "object" || IsWrapperOfPrimitive(obj)) {
       return ComparePrimitiveWrappers(obj, cmpObject);
    }
    if(obj.length) {
        if(obj.length != cmpObject.length){
            return false;
        }
        for(var i = 0; i < obj.length; i ++){
            if(obj[i] != cmpObject[i]){
                console.log("[" + i + "] => " + obj[i] + "!=" + cmpObject[i]);
                return false;
            }
        }
    }
    var notEq = false;
    ForEachProperty(obj, function(propertyName, propertyValue){
        switch(typeof propertyValue){
            case "object":
                if(!cmpObject || !Equals(propertyValue, cmpObject[propertyName])){
                    notEq = true;
                    // console.log(propertyName);
                    return true;
                }
                break;
            default:
                if(!cmpObject || propertyValue != cmpObject[propertyName]){
                    notEq = true;
                    // console.log(propertyName + " => " + propertyValue + "!=" + cmpObject[propertyName]);
                    return true;
                }
                break;
        }
    });

    return !notEq;
};


IsWrapperOfPrimitive = function (obj) {
    return obj.constructor == Boolean
        || obj.constructor == String
        || obj.constructor == Number;
};

ComparePrimitiveWrappers = function (obj, cmpObject) {
    return cmpObject && obj.valueOf() == cmpObject.valueOf();
};

// function getParent($this) {
//     var selector = $this.attr('data-target')
//         , $parent
//
//     if (!selector) {
//         selector = $this.attr('href')
//         selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
//     }
//
//     if(selector == '#') {
//         selector = '#-';
//     }
//
//     $parent = $(selector)
//     $parent.length || ($parent = $this.parent())
//
//     return $parent
// }

