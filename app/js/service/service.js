var serviceContent = angular.module('serviceContent',[]);

var baseUrl='http://192.168.1.130:8095/emzee';
var getQuote='http://192.168.1.130:8095/emzee';
var viewPre='http://192.168.1.130:8095/emzee';
var makePay='http://192.168.1.130:8095/emzee';

serviceContent.factory('localStore',function($window,$rootScope){
	angular.element($window).on('storeValue',function (event) {
		if(event.key==='compareKeys'){
			$rootScope.$apply();
		}
	});
	return {
		setData:function (val) {
			$window.localStorage && $window.localStorage.setItem('compareKeys',val);
			return this
		},
		getData:function (val) {
			return $window.localStorage && $window.localStorage.getItem('compareKeys');
		}
	}
})
serviceContent.factory('tvsCarService',function($http){
	return{
		getVehicleDetails : getVehicleDetails,
		carModel          : carModel,
		fuelList		  : fuelList,
		modelVariant      : modelVariant,
		comparePage       : comparePage,
		selectModelVariant: selectModelVariant,
		viewQuote         : viewQuote,
		makePayment       : makePayment  	
	}

	function getVehicleDetails(detail){
		
		return $http({
    	url: baseUrl +'/motor/listVehicle', 
    	method: "GET",
    	params: ''
 		});
	}


	function carModel(make) {
		return $http({
    	url: baseUrl +'/motor/listVehicle', 
    	method: "GET",
    	params: make
 		});
	}
	function fuelList(model) {
		return $http({
    	url: baseUrl +'/motor/listVehicle', 
    	method: "GET",
    	params: model
 		});
	}
	function modelVariant(variant) {
		return $http({
    	url: baseUrl +'/motor/listVehicle', 
    	method: "GET",
    	params: variant
 		});
	}
	function selectModelVariant(variant) {
		return $http({
    	url: baseUrl +'/motor/listVehicle', 
    	method: "GET",
    	params: variant
 		});
	}
	function comparePage(compare) {
		return $http({
			url:getQuote+'/getMotorQuote',
			method:"POST",
			data:compare
		})
	}
	function viewQuote(compareMyCar){
		return $http({
			url:viewPre+'/getRSAMotorQuote',
			method:"POST",
			data:compareMyCar
		})
	}
	function makePayment(buyerDetail){
		return $http({
			url:makePay+'/getMotorProposal',
			method:"POST",
			data:buyerDetail
		})
	}
})