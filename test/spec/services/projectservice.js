'use strict';

describe('Service: projectService', function () {

  // load the service's module
  beforeEach(module('appAngularjsApp'));

  // instantiate service
  var projectService,
    $httpBackend,
    localStorageService;

  beforeEach(inject(function (_projectService_, _$httpBackend_, _localStorageService_) {
    projectService = _projectService_;
    $httpBackend = _$httpBackend_;
    localStorageService = _localStorageService_;

    spyOn(localStorageService, 'get').and.returnValue({ token: 'mockToken' });
  }));

  it('should get list of projects', inject(function (projectService) {
    $httpBackend.expectGET('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/')
      .respond('response');

    projectService.getProjects()
      .success(function (data, status) {
        expect(status).toEqual(200);
        expect(data).toEqual('response');
      });

    $httpBackend.flush();
  }));

  it('should get single project based on pk', inject(function (projectService) {
    $httpBackend.expectGET('http://projectservice.staging.tangentmicroservices.com/api/v1/projects/123/')
      .respond('response');

    projectService.getProject(123)
      .success(function (data, status) {
        expect(status).toEqual(200);
        expect(data).toEqual('response');
      });

    $httpBackend.flush();
  }));

  it('should update an existing project', inject(function (projectService) {

    $httpBackend.expectPUT('http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/123/', { project: 'mockProject' })
      .respond('response');

    projectService.putProject(123, { project: 'mockProject' })
      .success(function (data, status) {
        expect(status).toEqual(200);
        expect(data).toEqual('response');
      });

    $httpBackend.flush();
  }));

  it('should delete an existing project', inject(function () {

    $httpBackend.expectDELETE('http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/123/')
      .respond('response');

    projectService.deleteProject(123)
      .success(function (data, status) {
        expect(status).toEqual(200);
        expect(data).toEqual('response');
      });

      $httpBackend.flush();
  }));

  it('should create a new project', inject(function () {
    
    $httpBackend.expectPOST('http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/',{ project: 'mockProject'})
      .respond('response');

    projectService.postProject({project: 'mockProject'})
      .success(function (data, status) {
        expect(status).toEqual(200);
        expect(data).toEqual('response');
      });

      $httpBackend.flush();
  }));

  it('should get all tasks', inject(function () {
    
    $httpBackend.expectGET('http://projectservice.staging.tangentmicroservices.com/api/v1/tasks/')
      .respond('response');

    projectService.getTasks()
      .success(function (data, status) {
        expect(status).toEqual(200);
        expect(data).toEqual('response');
      });

      $httpBackend.flush();
  }));

});
