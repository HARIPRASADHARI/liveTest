var app =angular.module('myApp',['ngMaterial','ngMessages','ngAnimate','ngAria'])
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