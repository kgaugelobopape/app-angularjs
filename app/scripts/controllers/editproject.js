'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:EditprojectCtrl
 * @description
 * # EditprojectCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('EditprojectCtrl', function ($scope, $modalInstance, projectService, pk, $route, $timeout) {

    $scope.loading = true;
    $scope.updating = false;
    $scope.error = '';
    $scope.pk = pk;
    $scope.success = '';

    $scope.project = {
      pk: '',
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      is_billable: '',
      is_active: ''
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    projectService.getProject($scope.pk)
      .success(function (data) {
        $scope.loading = false;
        $scope.project = data;
      }).error(function (data) {
        $scope.loading = false;
        console.log(data);
      });

    // Save changes and close popup modal
    $scope.submit = function () {
      $scope.updating = true;

      projectService.putProject($scope.pk, $scope.project)
        .success(function () {
          $scope.updating = false;
          $scope.success = true;

          $timeout(function () {
            $modalInstance.dismiss(true);
            $route.reload();
          }, 700);
        })
        .error(function (data) {
          $scope.updating = false;
          $scope.error = data;
        });
    };
  });
