/**
 * Created by NM on 7/24/2016.
 */

portal.filter('utc', [function() {
    return function(date) {
        if(angular.isNumber(date)) {
            date = new Date(date);
        }
        return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    }
} ]);