var messageSuccess = 'Dados gravados com sucesso!';
var messageError = 'Um erro ocorreu no servidor!';
/**
 * @ngdoc overview
 * @name  dataSeverProvider
 *
 * @description Angular module responsible to conunication between front end and back end
 *
 *
 */
var dataProvider = angular.module('dataSeverProvider', []);
/**
 * @ngdoc controller
 * @name  dataSeverProvider.controller:serverDataProvider
 *
 * @description Controller of module angular dataSeverProvider
 *
 *
 */
dataProvider.controller('serverDataProvider', ['$scope', '$sce', function ($scope, $sce) {
	console.log('LOL')
}]);
/**
 * @ngdoc service
 * @name  dataSeverProvider.factory:serverDataProvider
 * @requires  dataProvider
 * @requires  $http
 * @description Factory to control calls between front end and back end
 *
 *
 */
 dataProvider.factory('serverDataProvider', ['dataProvider', '$http',  function(dataProvider, $http) {

 }]);