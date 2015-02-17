'use strict'
angular.module("com.module.users")
	.controller('LoginCtrl', function($scope, AppAuth, gettextCatalog, toasty, User, $location) {
		$scope.credentials = {
			email: '',
			password: '',
			rememberMe: true
		};

	  $scope.schema = [
	    {
	      label: '',
	      property: 'email',
	      placeholder: 'email',
	      type: 'email',
	      attr: {required: true, ngMinlength: 4},
	      msgs: {
	        required: 'You need an email address',
	        email: 'Email address needs to be valid',
	        valid: 'Nice email address!'
	      }
	    },
	    {
	      label: '',
	      property: 'password',
	      placehodler: gettextCatalog.getString ('Password'),
	      type: 'password',
	      attr: {required: true}
	    },
	    {
	      property: 'rememberMe',
	      label: gettextCatalog.getString ('Stay signed in'),
	      type: 'checkbox'
	    }
	  ];

	  $scope.options = {
	    validation: {
	      enabled: true,
	      showMessages: false
	    },
	    layout: {
	      type: 'basic',
	      labelSize: 3,
	      inputSize: 9
	    }
	  };

	 $scope.login = function() {
	 	$scope.loginResult = User.login({
		        include: 'user',
		        rememberMe: $scope.credentials.rememberMe
		      }, $scope.credentials,
		      function (user) {

		        console.log (user.id);      // => acess token
		        console.log (user.ttl);     // => 1209600 time to live
		        console.log (user.created); // => 2015-02-17T00:00:01.999Z
		        console.log (user.userId);  // => 1

		        var next = $location.nextAfterLogin || '/';
		        $location.nextAfterLogin = null;
		        AppAuth.currentUser = $scope.loginResult.user;
		        toasty.pop.success ({
		          title: gettextCatalog.getString ('Logged in'),
		          msg: gettextCatalog.getString ('You are logged in!'),
		          sound: false
		        });
		        if (next === '/login') {
		          next = '/';
		        }
		        $location.path (next);

		      },
		      function (err) {            
		      	toasty.pop.warning ({
	              title: gettextCatalog.getString ('Error signin in!'),
	              msg: gettextCatalog.getString('Check your username and password'),
	              sound: false
	            });
		        $scope.loginError = err.data.error;
		      });
	 };


	});