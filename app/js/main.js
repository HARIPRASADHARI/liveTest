var app =angular.module('myApp',['ngMaterial','ngMessages','ngAnimate','ngAria','ui.router'])
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
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider
})