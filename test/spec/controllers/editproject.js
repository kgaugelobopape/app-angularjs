'use strict';

describe('Controller: EditprojectCtrl', function () {

  // load the controller's module
  beforeEach(module('appAngularjsApp'));

  var EditprojectCtrl,
    scope, 
    modalInstance,
    projectService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _projectService_) {
    scope = $rootScope.$new();
    projectService = _projectService_;

    EditprojectCtrl = $controller('EditprojectCtrl', {
      $scope: scope,
      $modalInstance: modalInstance,
      pk : 12345
    });
  }));

  it('should set up correctly', function () {
    expect(scope.loading).toEqual(true);
    expect(scope.updating).toEqual(false);
    expect(scope.error).toBe('');
    expect(scope.pk).toBe(12345);
    expect(scope.success).toBe('');
  });

  it('should return single project', function(){

    projectService.getProject(12345)
      .success(function(data, status){
        expect(scope.loading).toBe(false);
        expect(status).toEqual(200);
        expect(data).toEqual('response');
      });
  });

  it('should update a project', function(){
    scope.submit();

    expect(scope.updating).toEqual(true);

    projectService.putProject(12345, {project: 'mockProject'})
        .success(function (data, status) {
          expect(scope.updating ).toEqual(false);
          expect(scope.success).toEqual(true);
        });
  });
});
