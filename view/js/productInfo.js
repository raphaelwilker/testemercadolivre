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

app.controller('infoProductController', ['$scope', '$routeParams','$rootScope', function ($scope, $routeParams,$rootScope){
    $scope.id =  $routeParams.id;
 }])

app.directive('productInfos', ['serverDataProvider','$compile', '$rootScope',
    function(serverDataProvider,$compile,$rootScope){
    return {
        restrict: 'EA',
        templateUrl: './view/html/productInfo.html',
        controller:'infoProductController',
        link: function(scope, element, attr){
        	
            scope.description = '';
            var data;
            
            serverDataProvider.searchItem(scope.id,function(param){
                data = param;
                var width = data.pictures[0].size.match(/(.*\d(?=x))/g);
                var height = data.pictures[0].size.match(/([0-9])+$/g);
                var htmlImg = '<figure><img src="'+data.pictures[0].secure_url+'"  class="thumbProduct" width="'+width
                +'" height="'+height+'"/></figure>';
                var htmlSaleProduct =  '<h2>'+data.title+'</h2><br> <span class="priceItem">R$'+data.price+'</span><br>'
                +'<button class="btnSale btn btn-primary"> Comprar </button>';
                angular.element('#imageProduct').html(htmlImg);
                angular.element('#sale_product').html(htmlSaleProduct);
                serverDataProvider.getDescriptionItem(scope.id,function(param){
                    angular.element('#description').html(param.text);
                });
            });
            
            
        }
    }
}]);