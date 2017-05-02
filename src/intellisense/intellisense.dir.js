(function () {
	'use strict';

	angular.module('intellisense')
	.component('sdIntellisense', {
			bindings: {
				sugestions: '='
			},
			controller: 'sdIntellisenseCtrl',
			templateUrl: '/src/intellisense/intellisense.html'
		});
})();