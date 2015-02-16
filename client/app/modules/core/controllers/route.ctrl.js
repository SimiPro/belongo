'use strict';
angular.module('com.module.core')
	.controller('RouteCtrl', function($q, $scope, $location, $state) {
		if (/** user is loggedin */ false) {
			console.log("User already loggedin");
			$location.path('/app');
		} else {
			console.log("redirect to login / register");
			$location.path('/login');
		}
	});