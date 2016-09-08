'use strict';

/**
 * @ngdoc service
 * @name appAngularjsApp.userService
 * @description
 * # userService
 * Service in the appAngularjsApp.
 */
angular.module('appAngularjsApp')
  .service('userService', function ($http, localStorageService) {

    return {
      // ======================= Authentication Session ===========================
      login: function (data) {
        return $http.post('http://userservice.staging.tangentmicroservices.com/api-token-auth/', data , {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      },

      getProfile: function () {
        return $http.get('http://userservice.staging.tangentmicroservices.com:80/api/v1/users/me/' , {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorageService.get('token')
          }
        });
      }
    };
  });
