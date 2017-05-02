(function () {
	'use strict';

	angular.module('intellisense')
	.controller('sdIntellisenseCtrl', ['$scope','$element',function($scope,$element){
		var sdIntellisenseCtrl = this;

		sdIntellisenseCtrl.prevText = '';
		sdIntellisenseCtrl.curText = '';

		var position = 0;

		sdIntellisenseCtrl.text = function (newValue) {
			if(angular.isDefined(newValue)){
				sdIntellisenseCtrl.prevText = sdIntellisenseCtrl.curText;
				sdIntellisenseCtrl.curText = newValue;
			}
			else{
				return sdIntellisenseCtrl.curText;
			}
		};

		sdIntellisenseCtrl.filter = function (value) {
			var result = false;

			if(sdIntellisenseCtrl.text()){
				var newToken = getDelta();
				if(newToken){
					if(value.toLowerCase().indexOf(newToken.value.toLowerCase()) === 0){
						result = true;
					}
				}
			}

			return result;
		};

		sdIntellisenseCtrl.getStyle = function() {
			var newToken = getDelta();

			if(newToken){
				var caretPosition = getCaretCoordinates($element.find('input')[0], newToken.value.length);

				var style =  {'margin-left': caretPosition.left+"px"};

				return style;
			}
		};

		$element.on('keydown', function(e) {
			if(e.which === 9 && sdIntellisenseCtrl.filteredSugestions.length > 0){
				var currentText = sdIntellisenseCtrl.text();

				var deltaToken = getDelta();

				var occurences = getIndicesOf(deltaToken.value,currentText,false);

				//sdIntellisenseCtrl.text(currentText.replace(deltaToken.value,sdIntellisenseCtrl.filteredSugestions[0]));
				sdIntellisenseCtrl.curText = (replaceAtIndex(currentText, deltaToken.index, deltaToken.value, sdIntellisenseCtrl.filteredSugestions[0]));
				sdIntellisenseCtrl.prevText = sdIntellisenseCtrl.curText

				$scope.$digest();

				e.preventDefault();
			}
		})

		var getDelta = function () {
			var tokens = sdIntellisenseCtrl.text().trim().split(/\s+/g);

			var prevTokens = sdIntellisenseCtrl.prevText.trim().split(/\s+/g);

			var newToken;

			for(var i = 0; i < tokens.length; i++){
				if(tokens[i] != prevTokens[i]){
					newToken = {value: tokens[i], index: i}
				}
			}

			return newToken;
		};

		function replaceAtIndex(string, at, oldString, newString) {
			var tokens = string.trim().split(/\s+/g);

			tokens[at] = newString;

			var result =  tokens.join(' ');

			return result;
		};

		function getIndicesOf(searchStr, str, caseSensitive) {
			var searchStrLen = searchStr.length;
			if (searchStrLen == 0) {
				return [];
			}
			var startIndex = 0, index, indices = [];
			if (!caseSensitive) {
				str = str.toLowerCase();
				searchStr = searchStr.toLowerCase();
			}
			while ((index = str.indexOf(searchStr, startIndex)) > -1) {
				indices.push(index);
				startIndex = index + searchStrLen;
			}
			return indices;
		}

		sdIntellisenseCtrl.getDelta = getDelta;
	}])
})();