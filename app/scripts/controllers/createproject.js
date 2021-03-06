'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:CreateprojectCtrl
 * @description
 * # CreateprojectCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('CreateprojectCtrl', function ($scope, $modalInstance, projectService, $timeout,$route) {
    $scope.loading = false;
    $scope.creating = false;
    $scope.error = '';
    $scope.success = '';

    $scope.project = {
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      is_billable: '',
      is_active: ''
    };

    $scope.submit = function () {
      $scope.creating = true;
      projectService.postProject($scope.project)
        .success(function () {
          $scope.creating = false;
          $scope.success = true;
          $scope.project = null;
          $timeout(function () {
            $modalInstance.dismiss(true);
            $route.reload();
          }, 700);
        })
        .error(function(data){
          $scope.creating = false;
          $scope.error = data;
        });
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
