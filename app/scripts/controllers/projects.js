'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
