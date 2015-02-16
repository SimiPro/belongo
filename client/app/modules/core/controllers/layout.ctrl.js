'use strict';
angular.module('com.module.core')
	.controller('LayoutCtrl', function($scope, $rootScope) {
	$scope.apiTheme = 'skin-blue';
	$scope.appThemes = [{
      'name': 'Black',
      'class': 'skin-black'
    }, {
      'name': 'Blue',
      'class': 'skin-blue'
    }];

	$scope.toggleSidebar = function () {
      var $ = angular.element;
      if ($(window).width() <= 992) {
        $('.row-offcanvas').toggleClass('active');
        $('.left-side').removeClass('collapse-left');
        $('.right-side').removeClass('strech');
        $('.row-offcanvas').toggleClass('relative');
      } else {
        // Else, enable content streching
        $('.left-side').toggleClass('collapse-left');
        $('.right-side').toggleClass('strech');
      }
    };

	//$rootScope.loadSettings();

});