'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('NavbarCtrl', function ($scope, localStorageService, $location) {
    if(localStorageService.get('token') !== null){
      $scope.token = localStorageService.get('token');
    }

    $scope.logout = function(){
      localStorageService.remove('token');
    };
  });
