'use strict';

/**
 * @ngdoc directive
 * @name com.module.core.directive:register
 * @description
 * # register
 */
angular.module('com.module.users')
  .directive('login', function () {
    return {
      templateUrl: 'modules/users/views/login.html',
      restrict: 'E'
    };
  });