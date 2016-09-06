'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('LoginCtrl', function ($scope, userService) {

    $scope.data = {};

    $scope.authenticate = function () {
      userService.login($scope.data)
        .success(function (data) {
          $scope.token = data.token;
          $scope.error = '';
        })
        .error(function (data) {
            $scope.error = data.non_field_errors;
            $scope.token = '';
        });
    };
  });
