'use strict';

/**
 * @ngdoc service
 * @name appAngularjsApp.projectService
 * @description
 * # projectService
 * Service in the appAngularjsApp.
 */
angular.module('appAngularjsApp')
  .service('projectService', function ($http, localStorageService) {
    
    return {
      // ======================= Authentication Session ===========================
      getProjects: function () {
        var token = localStorageService.get('token');

        return $http.get('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/' , {
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Token ' + token
          }
        });
      }
    };
  });
