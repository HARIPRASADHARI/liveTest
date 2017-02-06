
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
    }).filter('inFormat',function(){
        function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
		yyyy = d.getFullYear(),
		mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
		dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
		hh = d.getHours(),
		h = hh,
		min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
		ampm = 'AM',
		time;
			
	if (hh > 12) {
		h = hh - 12;
		ampm = 'PM';
	} else if (hh === 12) {
		h = 12;
		ampm = 'PM';
	} else if (hh == 0) {
		h = 12;
	}
	
	// ie: 2013-02-18, 8:35 AM	
	time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
		
	return time;
}
    });

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
