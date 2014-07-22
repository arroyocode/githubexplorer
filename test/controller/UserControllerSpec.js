describe('UserController', function () {

    var scope, controller, routeParams;
    beforeEach(function () {
        module('githubExplorer');
    });

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('UserController', { $scope: scope }),
            routeParams = {};
    }));

    it('should have valid username route param', inject(function ($controller) {
        routeParams.username = 'angular';
        controller = $controller('UserController', {
            $scope: scope, $routeParams: routeParams
        });
        expect(scope.username).not.toBeNull();
        expect(scope.username).not.toBeUndefined();
        expect(scope.username.length).toBeGreaterThan(0);
    }));

});