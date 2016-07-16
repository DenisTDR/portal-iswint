/**
 * Created by NM on 7/16/2016.
 */


portal.service("CachingService", function (localStorageService) {
    this.set = function(key, value, persistent) {
        if(persistent) {
            localStorageService.set(key, value);
            return;
        }
        var cache = localStorageService.get("cache");
        if(!cache) {
            cache = {};
        }
        cache[key] = value;
        localStorageService.set("cache", cache);
    };

    this.get = function (key, persistent) {
        if(persistent) {
            return localStorageService.get(key);
        }
        var cache = localStorageService.get("cache");
        if(!cache || !cache[key]) {
            return null;
        }
        return cache[key];
    };

    this.contains = function(key, persistent){
        return this.get(key, persistent) !== null;
    };

    this.validateCache = function() {
        if(debugging || localStorageService.get("migrationCount") !== migrationCount) {
            console.log("cleared cache");
            localStorageService.remove("cache");
            localStorageService.set("migrationCount", migrationCount);
        }
    };



});