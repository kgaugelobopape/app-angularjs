'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('ProjectsCtrl', function ($scope, localStorageService, projectService) {
    
    if(localStorageService.get('token') !== null){
        $scope.token = localStorageService.get('token');

        projectService.getProjects()
          .success(function(data){
            $scope.projects = data;
          })
          .error(function(data){
            console.log(data);
          });
    }

    $scope.viewproject = function(pk){

    };
  });
