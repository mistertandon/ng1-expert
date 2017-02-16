angular
	.module('storeFrontApp.login',
	[
		'ngRoute'
	])
	.config(["$routeProvider", function ($routeProvider) {

		$routeProvider.when(
			'/login', {
				templateUrl: 'login/login.html',
				controller: 'LoginController'
			}
		);
	}])
	.controller('LoginController', [function () {

	}]);