'use strict';
angular.module('com.module.core')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app', {
				abstract: true,
				url: '/app',
				templateUrl: 'modules/core/views/app.html',
				controller: 'MainCtrl'
			});
		$urlRouterProvider.otherwise('/app')
	});