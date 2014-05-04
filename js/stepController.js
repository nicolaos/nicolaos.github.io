var acquistoPolizzaApp = angular.module('acquistoPolizzaApp', ['ngRoute'] );

var acquistoPolizzaController=acquistoPolizzaApp.controller("acquistoPolizzaController",function($scope,$location) {
	
	$scope.goToStep1=function() {
		$location.path("/step1");		
	}
	
	$scope.goToStep2=function() {
		$location.path("/step2");		
	}
	
	$scope.goToStep3=function() {
		$location.path("/step3");		
	}

});


acquistoPolizzaApp.config(['$routeProvider',
   function($routeProvider) {
	$routeProvider
	.when('/step1', {
		templateUrl : 'partials/acquistopolizza/step1.html',
		controller : 'acquistoPolizzaController'
	})
	.when('/step2', {
		templateUrl : 'partials/acquistopolizza/step2.html',
		controller : 'acquistoPolizzaController'
	})
	.when('/step3', {
		templateUrl : 'partials/acquistopolizza/step3.html',
		controller : 'acquistoPolizzaController'
	})
	.otherwise({
		redirectTo : '/step1'
	});
} ]);

