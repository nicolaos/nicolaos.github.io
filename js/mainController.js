var mainApp = angular.module('mainApp', ['mainService', 'ngSanitize','ui.bootstrap','ui.bootstrap.dropdown'] );

var educazione; //debug

mainApp.controller("mainController",function($scope,mainService,$modal) {	

	//TODO
	// mainService.getCurriculum().then(function (data) {
	// 	console.log("mainService - getCurriculum");
	// 	$scope.curriculum=data;
	// });
	$scope.curriculum = curriculum; //TODO
	educazione = curriculum.education_list;
	
	
	$scope.openResetDialog = function (fascia) {
		var modale_reset = $modal.open({
      templateUrl: 'partials/popupReset.html',
      controller: 'resetController',
      windowClass: 'info_dialog1',
      backdrop: false
    });

		modalInstance.result.then(function (result) {
		     if ( result == "ok") {
		     	//TODO
		     };
		   }, function () {
			 console.log('Chiuso modale alle: ' + new Date());   
		});
	};
});

mainApp.controller('resetController',function($scope,$modalInstance) {
	$scope.ok = function () {
	   $modalInstance.close("ok");
	};
	$scope.cancel = function () {
	   $modalInstance.dismiss('cancel');
	};
});
