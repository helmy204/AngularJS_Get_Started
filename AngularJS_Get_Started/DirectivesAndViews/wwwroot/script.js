(function () {

    //angular.module('githubViewer').controller('MainController', MainController);
    angular.module('githubViewer').controller('MainController', ["$scope", "$http", MainController]);


    function MainController($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                 .then(onRepos, onError);
        };

        var onRepos = function (response) {
            $scope.repos = response.data;
        }

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        }


        // https://api.github.com/users/odetocode
        // https://api.github.com/users/helmy204
        // https://api.github.com/users/robconery
        // https://api.github.com/users/angular

        $scope.search = function (username) {
            $http.get("https://api.github.com/users/" + username)
             .then(onUserComplete, onError);
        }

        $scope.username = "angular";
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";

    };

}());

