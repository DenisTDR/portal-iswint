/**
 * Created by NM on 7/14/2016.
 */

portal.service("PropertyService", function () {
    var PersonTypes = ["organizer", "mentor", "participant"];
    var ObjectTypes = ["room", "country", "workshop"];
    this.getPropertyFileName = function(property, editable){
        if(editable) {
            switch (property.Type) {
                case "enum":
                    return "enum";
            }
        }

        switch (property.Type) {
            case "string":
            case "enum":
                return "text";
            case "boolean":
                return "checkbox";
            case "photourl":
                return "photo";
            case "url":
                return "url";
            case "mail":
            case "email":
                return "email";
            case "date":
                return "date";
        }
        if (PersonTypes.indexOf(property.Type) !== -1) {
            return "person";
        }
        if (ObjectTypes.indexOf(property.Type) !== -1) {
            return "object";
        }
        if(property.Type == "list") {
            return "list";
        }
        console.log("invalid property type: " + property.Type);
        return property.Type;
    };
    this.getCustomEntityListName = function(property){
        switch (property.Type) {
            case "country":
                return "countries";
            default:
                return property.Type + "s";
        }
    };
    this.getUrlForEntity = function(propertyInfo, model) {
        if(model == null){
            return "";
        }
        return "#/" + this.getCustomEntityListName(propertyInfo) + "?Id=" + model.Id;
    };
    this.splitIntoDefaultView = function (type, propDefaultView) {
        propDefaultView.UnderImageProperties = [];
        propDefaultView.LeftViewProperties = [];
        propDefaultView.RightViewProperties = [];
        
        ForEachProperty(type.Properties, function(propertyName, propertyBag) {
            if(propertyBag.Type == "photourl") {
                propDefaultView.photoProperty = propertyBag;
            }
            else if(propertyBag.UnderImage) {
                propDefaultView.UnderImageProperties.push(propertyBag);
            }
            else if(propertyBag.MainView){
                propDefaultView.LeftViewProperties.push(propertyBag);
            }
            else {
                propDefaultView.RightViewProperties.push(propertyBag);
            }
        });
    };
    this.splitIntoTabs = function (type, propTabbedView, showProperty) {
        propTabbedView.tabs = {};
        ForEachProperty(type.Properties, function (propertyName, propertyBag) {
            var tabName = propertyBag.Tab ? propertyBag.Tab : "Others";
            if(!showProperty(propertyBag)){
                return;
            }
            if(!propTabbedView.tabs[tabName]){
                propTabbedView.tabs[tabName] = {props:[], Name: tabName};
                if(!propTabbedView.firstTab) {
                    propTabbedView.firstTab = tabName;
                }
            }
            propTabbedView.tabs[tabName].props.push(propertyBag);            
        });

    };
    
    this.convertDatePropertiesToDateObject = function(obj, type) {
        ForEachProperty(type.Properties, function(propertyName, propertyBag) {
            if(propertyBag.Type == "date") {
                obj[propertyName] = new Date(obj[propertyName]);
            }
        });
    };
    this.convertDatePropertiesToString = function (obj, type) {
        ForEachProperty(type.Properties, function(propertyName, propertyBag) {
            if(propertyBag.Type == "date" && obj[propertyName]
                && obj[propertyName].constructor == Date){
                obj[propertyName] = obj[propertyName].toISOString();
            }
        });
    }
    
});
