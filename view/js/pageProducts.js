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
 registerModule.directive('pageProducts', ['serverDataProvider','$compile', '$rootScope',
    function(serverDataProvider,$compile,$rootScope){
    return {
        restrict: 'EA',
        templateUrl: './view/html/pageProducts.html',
        controller:'registerController',
        link: function(scope, element, attr){
        	
            scope.items = [];
            scope.showList = false;

            $rootScope.$on('listProducts', function(event,list){
                scope.items = [];
                for(var i in list){
                    for(var j in list[i]){
                        scope.items.push({
                            'thumbnail':list[i][j].thumbnail,
                            'title':list[i][j].title,
                            'link':list[i][j].permalink
                        });
  
                    }
                    
                }
                scope.showList = true;
                angular.element('#li0').remove();
                console.log('scope.items: '+scope.items);
                
            })
            
            
        }
    }
}]);