'use strict';

// Declare app level module which depends on views, and components
var portal = angular.module('portal', [
    'portal.views',
    'portal.menu',
    'portal.modals',
    'ui.bootstrap',
    'ngAnimate',
    'ui.router',
    'LocalStorageModule',
    'ui-notification',
    'angular-ladda'
]);

portal.config(function(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 2000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 10,
            horizontalSpacing: 10,
            positionX: 'right',
            positionY: 'bottom'
        });
    });

portal.run(function($rootScope, $uibModal, CachingService) {
    $rootScope.isLoggedIn = function () {
       return CachingService.get("session", true) != null;
    };
    $rootScope.getSession = function () {
        return CachingService.get("session", true);
    };

    $rootScope.messageBox = function(title, message, canClose, size, autoCloseIn) {
        if(!size) {
            size = "sm";
        }
        if(!autoCloseIn) {
            autoCloseIn = 1000;
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
                },
                autoCloseIn: function () {
                    return autoCloseIn;
                }
            }
        });
    };

    CachingService.validateCache();

});

var modals = angular.module('portal.modals', ['ui.router']);
var views = angular.module('portal.views', ['ui.router']);