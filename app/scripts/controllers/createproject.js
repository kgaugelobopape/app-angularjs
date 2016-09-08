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
  });
