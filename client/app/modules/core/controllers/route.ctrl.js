'use strict';
angular.module('com.module.core')
	.controller('RouteCtrl', function($q, $scope, $location, $state, AppAuth) {
		if (/** user is loggedin */ AppAuth.currentUser) {
			console.log("User already loggedin");
			$location.path('/app/home');
		} else {
			console.log("redirect to login / register");
			$location.path('/login');
		}
	});