'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:DeleteprojectCtrl
 * @description
 * # DeleteprojectCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('DeleteprojectCtrl', function ($scope, $modalInstance, projectService, pk) {
    $scope.loading = false;
    $scope.deleting = false;
    $scope.error = '';
    $scope.pk = pk;

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    projectService.getProject($scope.pk)
      .success(function (data) {
        $scope.project = data;
      }).error(function (data) {
        console.log(data);
      });

    // Save changes and close popup modal
    $scope.submit = function () {
      $scope.deleting = true;

      projectService.deleteProject($scope.pk)
        .success(function () {
          $scope.deleting = false;
          $modalInstance.close(true);
        })
        .error(function (data) {
          $scope.deleting = false;
          $scope.error = data;
        });
    };
  });
