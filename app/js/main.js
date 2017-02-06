
(function() {
    'use strict';
    var app = angular.module('myApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'ui.router','ngResource'])
        .config(stateConfig)
        .config(defaultRouteConfig);

    app.controller('formController', function($scope, $mdDialog) {
        $scope.forget = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: '/templates/forget.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        function DialogController($scope, $mdDialog) {
            $scope.cancel = function() {
                $mdDialog.cancel();
            };

        }




    }).controller('DashBoardCtrl', function ($scope,$timeout,$mdSidenav,Weather) {
        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
        $scope.checkTemp=function(c){
        	var city={

        		q:$scope.city,
        		appid:'165fff8864045f0519b19ce59d5cfacb'

        		
        	};
        	$scope.weather=Weather.getWeather(city);
        	console.log('$scope.weather',$scope.weather);
        }
    }).filter('foramtIn',function (argument) {
        
    }).factory('Weather', function($resource) {

        var API_PATH = 'http://api.openweathermap.org/data/2.5/weather';
        var Weather = $resource(API_PATH);

        return {
            getWeather: function(weatherParams) {
                return Weather.get(weatherParams,function(successResult) {
                    return successResult;
                    console.log(successResult);
                }, function(errorResult) {
                    console.log(errorResult);
                });             
            }
        }
    });;

    function defaultRouteConfig($urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

    }

    

    function stateConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.when('/', '/home');

        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: 'templates/home/home.html'
            });
        $stateProvider.state('second', {
            url: "/second",
            templateUrl: 'templates/second/second.html'
        })


    }
})();
