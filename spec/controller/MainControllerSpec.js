describe('MainController', function () {

    var scope, controller;
    beforeEach(function () {
        module('githubExplorer');
    });

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('MainController', { $scope: scope });
    }));

    it('should have countdown greater than 0', function () {
        expect(scope.countdown).toBeGreaterThan(0);
    });

    it('should have an initial username', function () {
        expect(scope.username).toBe('angular');
    });
});
