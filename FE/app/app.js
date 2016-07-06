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

var modals = angular.module('portal.modals', []);
var views = angular.module('portal.views', []);