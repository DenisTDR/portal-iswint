'use strict';

// Declare app level module which depends on views, and components
var portal = angular.module('portal', [
    'ngRoute',
    'portal.version',
    'portal.views',
    'portal.menu',
    'portal.modals',
    'ui.bootstrap',
    'ngAnimate'
]);

portal.run(function($rootScope) {
    var PersonTypes = ["organizer", "mentor", "participant"];
    var ObjectTypes = ["room", "country", "workshop"];
    $rootScope.getPropertyFileName = function(property, editable){
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
    $rootScope.getCustomEntityListName = function(property){
        switch (property.Type) {
            case "country":
                return "countries";
            default:
                return property.Type + "s";
        }
    };
});

var modals = angular.module('portal.modals', []);
var views = angular.module('portal.views', ['ngRoute']);