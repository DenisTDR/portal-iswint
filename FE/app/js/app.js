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

portal.run(function($rootScope) {
   
});

var modals = angular.module('portal.modals', ['ui.router']);
var views = angular.module('portal.views', ['ui.router']);