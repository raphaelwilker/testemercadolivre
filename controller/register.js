/**
 * @ngdoc directive
 * @name rfx.directive:XD
 * @element textarea
 * @function
 *
 * @description
 * Resize textarea automatically to the size of its text content.
 *
 * **Note:** ie<9 needs polyfill for window.getComputedStyle
 *
 * @example
   <example module="rfx">
     <file name="index.html">
         <textarea ng-model="text"rx-autogrow class="input-block-level"></textarea>
         <pre>{{text}}</pre>
     </file>
   </example>
 */
 var registerModule = angular.module('registerClient', ['ngSanitize']);

registerModule.controller('registerController',['$scope','$rootScope',function($scope,$rootScope){
	console.log('registerController');
	$scope.content_1 = true;
	$scope.content_2 = !$scope.content_1;
	$scope.data = {}
	$scope.errorPhrase = '<strong>error</strong>';
	
	$rootScope.$on('callNextContent',function(){
		$scope.content_1 = false;
		$scope.content_2 = !$scope.content_1;
	});
	
}]);