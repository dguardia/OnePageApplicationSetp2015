// script.js

    (function(){
    	// create the module and name it davidApp
        // also include ngRoute for all our routing needs
    var davidApp = angular.module('davidApp', ['ngRoute']);

    // configure our routes
    davidApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    davidApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    davidApp.controller('aboutController', function ($scope) {
    	$scope.message = 'Look! I am an About page';
    });

    davidApp.controller('contactController', function($scope){
    	$scope.message = 'Contact Us! DG. This is a demo'
    })



    })();