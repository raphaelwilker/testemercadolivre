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
angular.module('registerClient', ['dataSeverProvider'])

.controller('registerController',['$scope','$rootScope','$routeParams', function ($scope,$rootScope,$routeParams){
	
	$scope.list = [];
	if(angular.element('input[type="search"]').val() != ''){
        angular.element('button[ng-id="searchBtn"]').trigger('click');
    }
	
}]);


