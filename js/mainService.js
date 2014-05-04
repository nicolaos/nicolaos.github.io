
var mainService = angular.module("mainService",['mainFramework']);

mainService.factory("mainService", function (mainHttp) {

	  return {	    	
	    	getCurriculum: function() {
	    		return mainHttp.get('curriculum.json');
	    	}
	  };
});
