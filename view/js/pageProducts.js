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
 app.directive('pageProducts', ['serverDataProvider','$compile', '$rootScope',
    function(serverDataProvider,$compile,$rootScope){
    return {
        restrict: 'EA',
        templateUrl: './view/html/pageProducts.html',
        link: function(scope, element, attr){
        	
            //scope.items = [];
            scope.showList = false;

            $rootScope.$on('listProducts', function(event,list){
                scope.items = [];
                var cont = 0
                for(var i in list){
                    for(var j in list[i]){
                        if(cont < 4){
                           scope.items.push({
                                'thumbnail':list[i][j].thumbnail,
                                'title':list[i][j].title,
                                'link':list[i][j].permalink,
                                'price':list[i][j].price,
                                'id':list[i][j].id
                            }); 
                           cont++;
                       }else{
                        break;
                       }
                    }
                    
                }
                scope.showList = true;
                console.log('scope.items: '+scope.items);
                
            });
            
            
        }
    }
}]);