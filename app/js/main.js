(function() {
    'use strict';
var app =angular.module('myApp',['ngMaterial','ngMessages','ngAnimate','ngAria','ui.router']).config(stateConfig)
.config(defaultRouteConfig);
app.controller('formController',function($scope,$mdDialog){
	$scope.forget=function(ev){
		$mdDialog.show({
			controller:DialogController,
			templateUrl:'/templates/forget.html',
			parent:angular.element(document.body),
			targetEvent:ev,
			clickOutsideToClose:true
		});
	}
	function DialogController($scope,$mdDialog){
	$scope.cancel = function() {
      $mdDialog.cancel();
    };

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


    }
})();