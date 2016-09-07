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
            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl',
                resolve: {
                    factory: ['$location', '$q', 'localStorageService', function ($location, $q, localStorageService) {
                        var deferred = $q.defer();

                        if (localStorageService.get('token') === null) {
                            deferred.reject();
                            $location.path('/login').replace();
                        } else {
                            deferred.resolve();
                        }

                        return deferred.promise;
                    }]
                }
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                resolve: {
                    factory: ['$location', '$q', 'localStorageService', function ($location, $q, localStorageService) {
                        var deferred = $q.defer();

                        if (localStorageService.get('token') === null) {
                            deferred.resolve();
                        } else {
                            deferred.reject();
                            $location.path('/projects').replace();
                        }

                        return deferred.promise;
                    }]
                }
            })
            .otherwise({
                redirectTo: '/login'
            });
    });
