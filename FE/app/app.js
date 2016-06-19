'use strict';

// Declare app level module which depends on views, and components
angular.module('portal', [
    'ngRoute',
    'portal.version',
    'portal.organizers',
    'portal.menu',
    'portal.home',
    'ui.bootstrap'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!!!');

    $routeProvider.otherwise({redirectTo: '/home'});
}]);
