'use strict';

describe('Controller: CreateprojectCtrl', function () {

  // load the controller's module
  beforeEach(module('appAngularjsApp'));

  var CreateprojectCtrl,
    scope,
    modalInstance,
    $httpBackend,
    projectService,
    timeout,
    route;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _projectService_, _$timeout_, _$route_) {
    scope = $rootScope.$new();
    // modalInstance = _$modalInstance_;
    projectService = _projectService_;
    timeout = _$timeout_;
    route = _$route_;
    $httpBackend = _$httpBackend_;

    CreateprojectCtrl = $controller('CreateprojectCtrl', {
      $scope: scope,
      $modalInstance: modalInstance
    });

    // Create a mock object using spies
    modalInstance = {
      close: jasmine.createSpy('modalInstance.close'),
      dismiss: jasmine.createSpy('modalInstance.dismiss'),
      result: {
        then: jasmine.createSpy('modalInstance.result.then')
      }
    };
  }));

  it('should be set up correctly', function () {
    expect(scope.loading).toBe(false);
    expect(scope.creating).toBe(false);
    expect(scope.error).toEqual('');
    expect(scope.success).toEqual('');
  });

  it('should be configured to create a project', function () {

    scope.submit();

    expect(scope.creating).toEqual(true);
    
    projectService.postProject({ project: "mockProject"})
      .success(function (data, status) {

        expect(status).toEqual(201);
        expect(data).toEqual('response');

        expect(scope.creating).toEqual(false);
        expect(scope.success).toEqual(true);
        expect(scope.project).toBeNull();
      })
      .error(function () {
        expect(scope.creating).toBe(false);
        expect(status).toEqual(201);
        expect(data).toEqual('response');
        expect(scope.error).toEqual('response');
      });
  });
});
