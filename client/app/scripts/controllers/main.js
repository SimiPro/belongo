'use strict';

/**
 * @ngdoc function
 * @name belongojsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the belongojsApp
 */
angular.module('belongojsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
