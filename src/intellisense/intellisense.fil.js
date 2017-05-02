(function () {
	'use strict';

	angular.module('intellisense')
	.filter('emboldenMatch', function() {
		return function (input, query) {
			var r = RegExp(query, 'gi');

			var replaceText = r.exec(input)[0];

			var result = input.replace(r,'<b>'+replaceText+'</b>');

			return result;
		};
	});
})();