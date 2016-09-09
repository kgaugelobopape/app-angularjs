'use strict';

describe('Service: userService', function () {

  // load the service's module
  beforeEach(module('appAngularjsApp'));

  // instantiate service
  var userService,
    $httpBackend,
    localStorageService;

  beforeEach(inject(function (_userService_, _$httpBackend_, _localStorageService_) {
    userService = _userService_;
    $httpBackend = _$httpBackend_;
    localStorageService = _localStorageService_;

    spyOn(localStorageService, 'get').and.returnValue({ token: 'mockToken' });
  }));

  it('should authenticate user with username and passwrod', inject(function (userService) {

    $httpBackend.expectPOST('http://userservice.staging.tangentmicroservices.com/api-token-auth/')
      .respond('response');

    userService.login()
      .success(function (data, status) {
        expect(status).toEqual(200);
        expect(data).toEqual('response');
      });

    $httpBackend.flush();

  }));

  it('should get the user profile', inject(function (userService) {
    $httpBackend.expectGET('http://userservice.staging.tangentmicroservices.com:80/api/v1/users/me/')
      .respond('response');

    userService.getProfile().success(function (data, status) {
      expect(status).toEqual(200);
      expect(data).toEqual('response');
    });

    $httpBackend.flush();

  }));

});
