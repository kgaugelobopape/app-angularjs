'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('appAngularjsApp'));

  var ProjectsCtrl,
    scope,
    localStorageService,
    projectService,
    modal,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _localStorageService_, _$modal_ ,_projectService_) {
    scope = $rootScope.$new();
    localStorageService = _localStorageService_;
    projectService = _projectService_;
    modal = _$modal_;

    ProjectsCtrl = $controller('ProjectsCtrl', {
      $scope: scope,
      $modal: modal
    });


  }));

  it('should set up correctly', function () {

    expect(scope.ploading).toEqual(true);
    expect(scope.tloading).toEqual(true);
    spyOn(localStorageService, 'get').and.returnValue({ token: 'mockToken' });

  });

  it('should get a list of projects', function () {

    projectService.getProjects()
      .success(function (data, status) {
        expect(status).toEqual(200);
        expect(data).toEqual('response');

        expect(scope.projects).toEqual(data);
        expect(scope.ploading).toEqual(false);
      });
  });

  it('should get a list of tasks', function () {

    projectService.getTasks()
      .success(function (data, status) {
        expect(status).toEqual(200);
        expect(data).toEqual('response');
        expect(scope.projects).toEqual(data);
        expect(scope.tloading).toEqual(false);
      });
  });

  it('should open the edit project modal', function () {
    
    var actualOptions;
    var fakeModal = {
      result: {
        then: function(confirmCallback) {
          this.confirmCallBack = confirmCallback;
        }
      }
    };

    var modalOptions = {
      templateUrl: 'views/modal/create.html',
      controller: 'CreateprojectCtrl',
      resolve: {
        pk: jasmine.any(Function)
      }
    };

    spyOn(modal, 'open').and.callFake(function(options) {
      actualOptions = options;
      return fakeModal;
    });
  });

  it('should open the create project modal', function () {

    var actualOptions;
    var fakeModal = {
      result: {
        then: function(confirmCallback) {
          this.confirmCallBack = confirmCallback;
        }
      }
    };

    var modalOptions = {
      templateUrl: 'views/modal/create.html',
      controller: 'CreateprojectCtrl',
      resolve: {
        pk: jasmine.any(Function)
      }
    };

    spyOn(modal, 'open').and.callFake(function(options) {
      actualOptions = options;
      return fakeModal;
    });
  });

  it('should open the delete project modal', function () {

    var actualOptions;
    var fakeModal = {
      result: {
        then: function(confirmCallback) {
          this.confirmCallBack = confirmCallback;
        }
      }
    };

    var modalOptions = {
      templateUrl: 'views/modal/delete.html',
      controller: 'DeleteprojectCtrl',
      resolve: {
        pk: jasmine.any(Function)
      }
    };

    spyOn(modal, 'open').and.callFake(function(options) {
      actualOptions = options;
      return fakeModal;
    });
  });
});
