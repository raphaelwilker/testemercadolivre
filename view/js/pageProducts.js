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
 app.controller('searchProductController', ['$scope', '$routeParams','$rootScope', function ($scope, $routeParams,$rootScope){
    $scope.itemToSearch = $routeParams.itemToSearch;
 }])

 app.directive('pageProducts', ['serverDataProvider','$compile',
    function(serverDataProvider,$compile){
    return {
        restrict: 'EA',
        templateUrl: './view/html/pageProducts.html',
        controller:'searchProductController',
        link: function(scope, element, attr){
        	
            scope.showList = true;

            serverDataProvider.searchProduct(scope.itemSearch, function(data){
              
                scope.items = [];
                scope.list = data;
                var cont = 0;
                console.log(scope.list);
                
                if(angular.element('input[type="search"]').val() == ''){
                   angular.element('input[type="search"]').val = scope.itemSearch ;
                }

                for(var i in scope.list){
                    
                    if(cont < 4){
                       scope.items.push({
                            'thumbnail':scope.list[i].thumbnail,
                            'title':scope.list[i].title,
                            'link':scope.list[i].permalink,
                            'price':scope.list[i].price,
                            'id':scope.list[i].id
                        }); 
                       cont++;
                       console.log(scope.items[i]);
                   }else{

                    break;
                   
                   }
                     
                }
              
            });

        }
    }
}]);