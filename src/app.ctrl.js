(function () {
	'use strict';

	angular.module('app')
	.controller('appCtrl', [function(){
		var appCtrl = this;

		appCtrl.sugestions =  ["SELECT", "FROM", "WHERE", "SUM"];
	}]);

})();