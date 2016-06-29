/**
 * Created by NM on 6/27/2016.
 */


var dynamicTable = function($scope, type) {
    var numberOfProperties = 0;
    var propertyTypeWeight = {string: 2, boolean:1, number: 1};
    var propertiesWeight = [];

    var index = 0;
    var sum = 0;
    for (var property in type) {
        if (type.hasOwnProperty(property)) {
            var propW = propertyTypeWeight[type[property].type];
            if(!propW){
                propW = 1;
            }
            sum += propW;
            propertiesWeight.push(propW);
            numberOfProperties ++;
        }
    }
    console.log(propertiesWeight);
    var colWeights = [];
    for(var i = 0; i < numberOfProperties; i++) {
        propertiesWeight[i] = propertiesWeight[i] * 100 / sum;
        colWeights.push(propertiesWeight[i] / 100 * 12);
    }
    console.log(propertiesWeight);
    console.log(colWeights);
};