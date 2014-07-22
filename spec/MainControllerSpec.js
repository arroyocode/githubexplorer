
describe('githubExplorer', function(){

    var scope, controller;
    beforeEach(function(){
       module('githubExplorer');
    });

    describe('MainController', function(){
       beforeEach(inject(function($rootScope, $controller){
           scope = $rootScope.$new();
           controller = $controller('MainController', {
               '$scope': scope
           });
       }));

        it('should have countdown greater than 0', function(){
            expect(scope.countdown).toBeGreaterThan(0);
        })
    });
});
