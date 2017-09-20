//var test = angular.module('tes', ['dataSeverProvider']);

/*test.controller('serverDataProvider',function(serverDataProvider){
	console.log('XD');
})*/

//test.controller('serverDataProvider', function (serverDataProvider) {
//console.log('XD');
//serverDataProvider.searchElement();
//});
 var registerModule = angular.module('registerClient2', ['ngSanitize']);

registerModule.controller('registerControllerOrigin',['$scope','$rootScope',function($scope,$rootScope){
	console.log('register2Controller');
	$scope.content_1 = true;
	$scope.content_2 = !$scope.content_1;
	$scope.data = {}
	$scope.errorPhrase = '<strong>error</strong>';
	
	$rootScope.$on('callNextContent',function(){
		$scope.content_1 = false;
		$scope.content_2 = !$scope.content_1;
	});
	
}]);