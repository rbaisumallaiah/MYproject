// Module
var weatherApp = angular.module("weatherApp", ["ngRoute"]);

// Routing
weatherApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'Pages/home.htm',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'Pages/forecast.htm',
        controller: 'forecastController'
    });
});

// Services
weatherApp.service('cityService', function () {
    this.city = 'Hyderabad, IN';
});

// Controllers
weatherApp.controller("homeController", ["$scope", "cityService", function ($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
}]);

weatherApp.controller("forecastController", ["$scope", "cityService", function ($scope, cityService) {
    $scope.city = cityService.city;
}]);