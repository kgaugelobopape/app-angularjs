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
  .module('appAngularjsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'ui.bootstrap'
  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('myApp')
      .setStorageType('sessionStorage')
      .setNotify(true, true);
  });
