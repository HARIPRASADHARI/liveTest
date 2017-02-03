(function() {
    'use strict';
    var app = angular.module('myApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ngAria', 'ui.router'])
        .config(stateConfig)
        .config(defaultRouteConfig);
//     .config(['$locationProvider', function($locationProvider) {
// $locationProvider.html5Mode(true);
// $locationProvider.hashPrefix('!');
// }]);
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




    }).controller('DashBoardCtrl', function ($scope,$timeout,$mdSidenav) {
        $scope.toggleLeft=openMenu('left');

        function openMenu(componentId){
            console.log("Hai");
            return function () {
                $mdSidenav(componentId).toggle();
            }
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
