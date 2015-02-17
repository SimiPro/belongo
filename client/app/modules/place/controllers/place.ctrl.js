'use strict';
/**
 * @ngdoc function
 * @name com.module.core.controller:MainCtrl
 **/
angular.module('com.module.place')
  .controller('PlaceCtrl', function ($scope, Placez) {
  		$scope.name = 'hi sandy!';

  		Placez.count().
  			$promise.then(function(counter) {
  			
        console.log(counter.count);
         $scope.place = Placez.create({
                id: counter.count,
                image_path: '//no path',
                userId: '1'
              }
          );

          console.log($scope.place);

    		});

});