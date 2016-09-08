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

        return $http.get('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorageService.get('token')
          }
        });
      },

      getProject: function (pk) {
        return $http.get('http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/' + pk, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorageService.get('token')
          }
        });
      },

      getTasks: function () {
        return $http.get('http://projectservice.staging.tangentmicroservices.com/api/v1/tasks/', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorageService.get('token')
          }
        });
      }
    };
  });
