'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
