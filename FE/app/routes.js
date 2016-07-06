/**
 * Created by NM on 7/6/2016.
 */


portal
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeController'
        });
        $routeProvider.when('/organizers', {
            templateUrl: 'views/organizers/organizers.html',
            controller: 'OrganizersController'
        });
        $routeProvider.when('/participants', {
            templateUrl: 'views/participants/participants.html',
            controller: 'ParticipantsController'
        });
        $routeProvider.when('/rooms', {
            templateUrl: 'views/rooms/rooms.html',
            controller: 'RoomsController'
        });
    }])
    .config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
        // $locationProvider.hashPrefix('!!!');

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);