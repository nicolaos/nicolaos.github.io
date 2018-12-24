var mainApp = angular.module('mainApp', ['ngSanitize','ui.bootstrap','ui.bootstrap.dropdown'] );

mainApp.controller("mainController",function($scope,$modal) {

	$scope.curriculum = curriculum;

});
