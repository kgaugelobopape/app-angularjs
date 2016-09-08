'use strict';

/**
 * @ngdoc function
 * @name appAngularjsApp.controller:CreateprojectCtrl
 * @description
 * # CreateprojectCtrl
 * Controller of the appAngularjsApp
 */
angular.module('appAngularjsApp')
  .controller('CreateprojectCtrl', function ($scope, $modalInstance) {
    
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
