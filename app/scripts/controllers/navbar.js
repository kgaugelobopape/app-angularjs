'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('NavbarCtrl', function ($scope, localStorageService, $location, userService, $route) {
    if(localStorageService.get('token') !== null){
      userService.getProfile()
        .success(function(data){
          $scope.user = data;
        })
        .error(function(data){
          console.log(data);
        });
    }

    $scope.logout = function(){
      localStorageService.remove('token');
      $route.reload();
      $location.path('/login').replace();
    };
  });
