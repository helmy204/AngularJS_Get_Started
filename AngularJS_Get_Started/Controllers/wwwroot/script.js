(function () {

    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        }


        // https://api.github.com/users/odetocode
        // https://api.github.com/users/helmy204
        // https://api.github.com/users/robconery

        $http.get("https://api.github.com/users/robconery")
             .then(onUserComplete,onError);

        $scope.message = "Hello, Angular!";

    };

}());

