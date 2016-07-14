/**
 * Created by NM on 7/14/2016.
 */
console.log("loading entityView");

portal.directive('entityList', function(PropertyService) {
    return {
        restrict: 'E',
        scope: {
            propertyInfo: "=propertyInfo",
            entity: "=entity"
        },
        templateUrl: "views/partialViews/propertyTypes/display/listView.html",
        link: function(scope) {
            scope.PropertyService = PropertyService;
        }
    };
});