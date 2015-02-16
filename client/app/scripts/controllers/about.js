'use strict';

/**
 * @ngdoc function
 * @name belongojsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the belongojsApp
 */
angular.module('belongojsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
