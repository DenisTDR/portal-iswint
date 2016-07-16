'use strict';

// Declare app level module which depends on views, and components
var portal = angular.module('portal', [
    'portal.views',
    'portal.menu',
    'portal.modals',
    'ui.bootstrap',
    'ngAnimate',
    'ui.router',
    'LocalStorageModule'
]);

portal.run(function($rootScope, localStorageService, $uibModal) {
    $rootScope.isLoggedIn = function () {
       return localStorageService.get("session") != null;
    };
    $rootScope.getSession = function () {
        return localStorageService.get("session");
    };

    $rootScope.messageBox = function(title, message, canClose, size) {
        if(!size) {
            size = "sm";
        }
        return $uibModal.open({
            templateUrl: 'views/modals/messageModal.html',
            controller: 'messageModalController',
            backdrop: 'static',
            size: size,
            keyboard: false,
            resolve: {
                title: function() {
                    return title;
                },
                message: function() {
                    return message;
                },
                canClose: function() {
                    return canClose;
                }
            }
        });
    };
});

var modals = angular.module('portal.modals', ['ui.router']);
var views = angular.module('portal.views', ['ui.router']);