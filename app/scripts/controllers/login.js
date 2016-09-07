'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('LoginCtrl', function ($scope, userService, localStorageService, $location) {

    $scope.data = {};

    $scope.authenticate = function () {
      userService.login($scope.data)
        .success(function (data) {
          localStorageService.set('token', data.token);
          $location.path('/projects').replace();
        })
        .error(function (data) {
            $scope.error = data.non_field_errors;
        });
    };
  });
