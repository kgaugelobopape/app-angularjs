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
          console.log(data);
        })
        .error(function (data) {
          console.log(data);
        });
    };
  });
