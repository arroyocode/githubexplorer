(function() {

    'use strict';

    var app = angular.module("githubExplorer");

    var UserController = function($scope, github, $routeParams) {

        var onUserComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data) {
            $scope.repos = data;
        };

        var onError = function(reason) {
            $scope.error = "Sorry! Could not fetch the data.";
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserComplete, onError);
    };

    UserController.$inject = ['$scope', 'github', '$routeParams'];
    app.controller("UserController", UserController);

})();