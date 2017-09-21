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
 var app = angular.module('routeTest', ['ngRoute','registerClient'])

 app.config(function($routeProvider) {
    
    $routeProvider
    .when("/item/:id", {
        templateUrl : "./view/html/viewProduct.html",
        controller: "infoProductController"
    })
    .when("/:itemToSearch", {
        templateUrl : "./view/html/viewList.html",
        controller: "searchProductController"
    })
    .when("/", {
        templateUrl : "./view/html/view.html",
        controller: "registerController"
    })
    .otherwise({
    	redirectTo: '/'
    })

 });