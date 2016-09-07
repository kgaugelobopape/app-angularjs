'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('ProjectsCtrl', function ($scope, localStorageService) {
    $scope.token = localStorageService.get('token');
  });
