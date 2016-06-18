'use strict';

// Declare app level module which depends on views, and components
angular.module('portal', [
  'ngRoute',
  'portal.version',
  'portal.organizers',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!!!');

  $routeProvider.otherwise({redirectTo: '/organizers'});
}]);
