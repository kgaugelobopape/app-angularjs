'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('appAngularjsApp'));

  var LoginCtrl,
    scope,
    userService,
    localStorageService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _userService_, _localStorageService_, _$location_) {
    scope = $rootScope.$new();
    userService = _userService_;
    localStorageService = _localStorageService_;

    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('should define object variable data', function () {
    expect(scope.data).toBeDefined();
  });

  it('should authenticate user and return a token', function () {

    scope.authenticate();

    spyOn(localStorageService, 'get').and.returnValue({token: 'mockToken'});

    userService.login({'username':'test','password':'test'})
      .success(function (data) {
          expect(localStorageService).toHaveBeenCalled();
          expect($location.path()).toEqual('/projects');
      });

  });
});
