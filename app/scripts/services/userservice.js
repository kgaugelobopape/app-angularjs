'use strict';

/**
 * @ngdoc service
 * @name appAngularjsApp.userService
 * @description
 * # userService
 * Service in the appAngularjsApp.
 */
angular.module('appAngularjsApp')
  .service('userService', function ($http) {

    return {
      // ======================= Authentication Session ===========================
      login: function (data) {
        return $http.post('http://userservice.staging.tangentmicroservices.com/api-token-auth/', data , {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    };
  });
