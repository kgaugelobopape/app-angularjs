'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('ProjectsCtrl', function ($scope, localStorageService, projectService, $modal) {
    $scope.ploading = true;
    $scope.tloading = true;
    $scope.token = localStorageService.get('token');

    projectService.getProjects()
      .success(function (data) {
        $scope.projects = data;
        $scope.ploading = false;
      })
      .error(function (data) {
        $scope.lpoading = false;
        console.log(data);
      });

    projectService.getTasks()
      .success(function (data) {
        $scope.tloading = false;
        $scope.tasks = data;
      })
      .error(function (data) {
        $scope.tloading = false;
        console.log(data);
      });

    // Open a modal where the owner can quickly be reassigned
    $scope.openModal = function ($event, pk, type) {
      $event.preventDefault();
      $event.stopPropagation();

      if (type === 'edit') {
        $scope.modalInstance = $modal.open({
          templateUrl: 'views/modal/edit.html',
          controller: 'EditprojectCtrl',
          resolve: {
            pk: function () {
              return pk;
            }
          }
        });
      }
      else if (type === 'create') {
        $scope.modalInstance = $modal.open({
          templateUrl: 'views/modal/create.html',
          controller: 'CreateprojectCtrl'
        });
      }
      else {
        $scope.modalInstance = $modal.open({
          templateUrl: 'views/modal/delete.html',
          controller: 'DeleteprojectCtrl',
          resolve: {
            pk: function () {
              return pk;
            }
          }
        });
      }

      // If successful, reload search to get updated results
      $scope.modalInstance.result.then(function (success) {
        
      });
    };
  });
