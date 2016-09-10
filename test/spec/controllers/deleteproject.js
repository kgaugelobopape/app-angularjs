'use strict';

describe('Controller: DeleteprojectCtrl', function () {

  // load the controller's module
  beforeEach(module('appAngularjsApp'));

  var DeleteprojectCtrl,
    scope,
    modalInstance, 
    projectService, 
    pk,  
    timeout, 
    route;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller,$rootScope, _projectService_, _$timeout_, _$route_) {
    scope = $rootScope.$new();
    projectService = _projectService_;
    timeout = _$timeout_;
    route = _$route_;

    DeleteprojectCtrl = $controller('DeleteprojectCtrl', {
      $scope: scope,
      $modalInstance: modalInstance,
      pk : 12345
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

  it('should set up correctly', function () {
    expect(scope.loading).toEqual(false);
    expect(scope.deleting).toEqual(false);
    expect(scope.error).toBe('');
    expect(scope.pk).toBe(12345);
  });

  it('should return single project', function(){

    projectService.getProject(12345)
      .success(function(data, status){
        expect(status).toEqual(200);
        expect(data).toEqual('response');
      });
  });

  it('should delete a project', function(){
    scope.submit();
    
    expect(scope.deleting).toEqual(true);

    projectService.deleteProject(12345)
        .success(function (data, status) {
          expect(scope.deleting ).toEqual(false);
          expect(scope.success).toEqual(true);

          expect(status).toEqual(204);
          expect(data).toEqual('no content');
        });
  });
});
