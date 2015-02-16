'use strict';
angular.module('com.module.core')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('router', {
				url:'/router',
				template: '<div>Im just checkin if a user is loggedin and reject</div>',
				controller: 'RouteCtrl'
			})
			.state('app', {
				abstract: true,
				url: '/app',
				templateUrl: 'modules/core/views/app.html',
				controller: 'MainCtrl'
			})
			.state('app.home', {
				url:'/home',
				templateUrl: 'modules/core/views/home.html',
				controller: 'HomeCtrl'
			});
			$urlRouterProvider.otherwise('/router');
			
	});