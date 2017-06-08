(function () {
	'use strict';

	angular.module('intellisense')
	.component('sdIntellisense', {
			bindings: {
				sugestions: '='
			},
			controller: 'sdIntellisenseCtrl',
			templateUrl: '/sd-intellisense/src/intellisense/intellisense.html'
		});
})();
