(function() {

    'use strict';

    var app = angular.module('githubExplorer', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'view/main.html',
                controller: 'MainController'
            })
            .when('/user/:username', {
                templateUrl: 'view/user.html',
                controller: 'UserController'
            })
            .when('/repo/:username/:reponame', {
                templateUrl: 'view/repo.html',
                controller: 'RepoController'
            })
            .otherwise({redirectTo: '/main'});
    }]);

})();