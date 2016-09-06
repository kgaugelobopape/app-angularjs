'use strict';

/**
 * @ngdoc overview
 * @name appAngularjsApp
 * @description
 * # appAngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('appAngularjsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
