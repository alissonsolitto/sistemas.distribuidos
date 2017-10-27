(function () {
	'use strict';

	angular.module('app').controller('ViaCep', function ($scope, $http) {

		$scope.url = "https://viacep.com.br/ws/01001000/json/";
		
		//Async Div=>result1
		$http({
			method: 'GET',
			url: $scope.url,
			async: true,
		}).then(function successCallback(response) {
			$scope.asyncTempo = new Date();
			document.getElementById("result1").innerHTML = JSON.stringify(response);
		}, function errorCallback(response) {
			$scope.asyncTempo = new Date();
			document.getElementById("result1").innerHTML = JSON.stringify(response);
		});

		//Sync Div=>result2
		$http({
			method: 'GET',
			url: $scope.url,
			async: false,
		}).then(function successCallback(response) {
			$scope.syncTempo = new Date();
			document.getElementById("result2").innerHTML = JSON.stringify(response);
		}, function errorCallback(response) {
			$scope.syncTempo = new Date();
			document.getElementById("result2").innerHTML = JSON.stringify(response);
		});


	});

})();