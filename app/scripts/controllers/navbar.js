'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('NavbarCtrl', function ($scope, localStorageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
