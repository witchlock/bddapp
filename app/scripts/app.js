'use strict';

/**
 * @ngdoc overview
 * @name bddappApp
 * @description
 * # bddappApp
 *
 * Main module of the application.
 */
angular
    .module('bddappApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/numbers', {
                templateUrl: 'views/numbers.html',
                controller: 'NumbersCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
