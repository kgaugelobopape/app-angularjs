'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:CreateprojectCtrl
 * @description
 * # CreateprojectCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('CreateprojectCtrl', function ($scope, $modalInstance, projectService) {
    $scope.loading = false;
    $scope.creating = false;
    $scope.error = '';
    $scope.success = '';

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

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
        .success(function (data) {
          $scope.creating = false;
          $scope.success = data;
          // $modalInstance.close(true);
        })
        .error(function(data){
          $scope.creating = false;
          $scope.error = data;
        });
    };
  });
