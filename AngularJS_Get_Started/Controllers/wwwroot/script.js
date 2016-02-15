(function () {

    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController($scope) {
        $scope.message = "Hello, Angular!";
    };

}());

