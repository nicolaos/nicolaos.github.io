var stepNavigatorApp = angular.module('stepNavigatorApp', ['ngRoute'] );

var stepNavigatorController=stepNavigatorApp.controller("stepNavigatorController",function($scope,$location) {
	
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


stepNavigatorApp.config(['$routeProvider',
   function($routeProvider) {
	$routeProvider
	.when('/step1', {
		templateUrl : 'partials/stepnavigator/step1.html',
		controller : 'stepNavigatorController'
	})
	.when('/step2', {
		templateUrl : 'partials/stepnavigator/step2.html',
		controller : 'stepNavigatorController'
	})
	.when('/step3', {
		templateUrl : 'partials/stepnavigator/step3.html',
		controller : 'stepNavigatorController'
	})
	.otherwise({
		redirectTo : '/step1'
	});
} ]);

