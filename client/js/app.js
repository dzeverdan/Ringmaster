var meanPersonApp = angular.module('meanPersonApp', ['ngRoute']);

meanPersonApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
   
    $routeProvider
    
    .when('/',{
        templateUrl: '/views/main.html',
        controller: 'mainController'
    })
    
    .when('/second',{
        templateUrl: '/views/second.html',
        controller: 'mainController'
    })
    
    .otherwise({
        templateUrl: '/views/main.html',
        controller: 'mainController'
    });
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
}]);