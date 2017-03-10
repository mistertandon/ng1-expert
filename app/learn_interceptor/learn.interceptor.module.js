/**
 * `myHttpIinterceptor` function is act as $http interceptor.
 */
var myHttpIinterceptor = function () {

	var oGithubInterceptor = {};

	/**
	 * Intercepting `request` using interceptor function.
	 */
	oGithubInterceptor.request = function (config) {

		config._timeStamp = new Date().getDate();

		return config;
	}

	/**
	 * Intercepting `response` using interceptor function.
	 */
	oGithubInterceptor.response = function (response) {

		response.config._resTimeStamp = new Date().getDate();
		console.log(response);

		return response;
	}

	return oGithubInterceptor;
};

angular
	.module('learn.interceptor.module', [
		'ui.router'
	])
	.config([
		'$stateProvider',
		'$httpProvider',
		function ($stateProvider, $httpProvider) {

			$stateProvider
				.state('LearnInterceptor', {
					url: '/learn-interceptor',
					controller: 'LearnInterceptorController',
					templateUrl: 'learn_interceptor/learn.interceptor.view.html'
				});
			$httpProvider.interceptors.push(myHttpIinterceptor);
		}
	])
	.controller(
	'LearnInterceptorController', [
		'$scope',
		'$q',
		'GithubService',
		function ($scope, $q, GithubService) {

			$scope.title = "Learnig $http interceptors";

			$scope.userGitHubProfile = false;
			$scope.getUserInfo = function () {

				GithubService._getUserGitHubProfile("mistertandon")
					.then(function (userProfile) {

						$scope.userGitHubProfile = userProfile;
					});
			}

		}
	])
	.service('GithubService', [
		'$http',
		'$log',
		function ($http, $log) {

			this._getUserGitHubProfile = function (user_name) {

				return $http({

					url: "https://api.github.com/users/" + user_name,
					method: "Get"
				});
			}

		}]);
















