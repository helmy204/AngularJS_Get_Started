(function () {

    angular
        .module('app')
        .controller('MainController', MainController);

    function MainController($scope) {

        var person = {
            firstName: "Scott",
            lastName: "Allen",
            imageSrc:"http://odetocode.com/Images/scott_allen_2.jpg"
        };

        $scope.message = "Hello, Angular!";
        $scope.person = person;
    };

}());

