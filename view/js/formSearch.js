/**
 * @ngdoc directive
 * @name rfx.directive:rAutogXrow
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
 registerModule.directive('formSearch', ['serverDataProvider','$compile', '$rootScope',
    function(serverDataProvider,$compile,$rootScope){
    return {
        restrict: 'EA',
        templateUrl: './view/html/formSearch.html',
        controller:'registerController',
        link: function(scope, element, attr){
        	
            var self = this;
            scope.send = function(){
                serverDataProvider.searchProduct(scope.itemSearch,function(data){
                    console.log('Returned '+data);
                    console.log(data);
                    $rootScope.$broadcast('listProducts',{
                        list:data
                    });
                });
            }

            scope.change = function(event){
                console.log(event.keyCode);
                serverDataProvider.autosuggest(scope.itemSearch,function(data){
                    console.log('ReturnedLOL '+data);
                    console.log(data);
                });
            }
            
            
        }
    }
}]);