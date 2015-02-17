'use strict';
angular.module('com.module.place')
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('place', {
				url:'/place',
				templateUrl: 'modules/place/views/place.html',
				controller: 'PlaceCtrl'
			});
	});