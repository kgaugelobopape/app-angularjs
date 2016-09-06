'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
