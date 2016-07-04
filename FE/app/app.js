'use strict';

// Declare app level module which depends on views, and components
angular.module('portal', [
    'ngRoute',
    'portal.version',
    'portal.organizers',
    'portal.menu',
    'portal.home',
    'portal.modals',
    'ui.bootstrap',
    'ngAnimate'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!!!');

    $routeProvider.otherwise({redirectTo: '/home'});
}]);

var modals = angular.module('portal.modals', ['ngRoute']);