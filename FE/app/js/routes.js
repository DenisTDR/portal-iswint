/**
 * Created by NM on 7/6/2016.
 */


portal
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'views/home/home.html',
                controller: 'HomeController'
            });

            $stateProvider.state('organizers', {
                url: '/organizers?Id&Action',
                templateUrl: 'views/organizers/organizers.html',
                controller: 'OrganizersController'
            });
            $stateProvider.state('participants', {
                url: '/participants?Id&Action',
                templateUrl: 'views/participants/participants.html',
                controller: 'ParticipantsController'
            });
            $stateProvider.state('rooms', {
                url: '/rooms?Id&Action',
                templateUrl: 'views/rooms/rooms.html',
                controller: 'RoomsController'
            });
            $stateProvider.state('workshops', {
                url: '/workshops?Id&Action',
                templateUrl: 'views/workshops/workshops.html',
                controller: 'WorkshopsController'
            });
            $stateProvider.state('mentors', {
                url: '/mentors?Id&Action',
                templateUrl: 'views/mentors/mentors.html',
                controller: 'MentorsController'
            });
            $stateProvider.state('countries', {
                url: '/countries?Id&Action',
                templateUrl: 'views/countries/countries.html',
                controller: 'CountriesController'
            });
            $stateProvider.state('arrivals', {
                url: '/arrivals',
                templateUrl: 'views/arrivals/arrivals.html',
                controller: 'ArrivalsController'
            });
            $stateProvider.state('schedule', {
                url: '/schedule',
                templateUrl: 'views/schedule/schedule.html',
                controller: 'ScheduleController'
            });
            $stateProvider.state('login', {
                url: '/login?Action',
                templateUrl: 'views/account/login/login.html',
                controller: 'LoginController'
            });
            $urlRouterProvider.otherwise('/home');
        }]);