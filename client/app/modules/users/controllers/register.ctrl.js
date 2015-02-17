'use strict'
angular.module('com.module.users')
	.controller('RegisterCtrl', function($scope, gettextCatalog, toasty, AppAuth, User, $location) {

  
	console.log("RegisterCtrl");
	 	$scope.registration = {
		    firstName: '',
		    lastName: '',
		    email: '',
		    password: ''
		 };


	$scope.schema = [
    {
      label: '',
      property: 'firstName',
      placeholder: gettextCatalog.getString ('First Name'),
      type: 'text',
      attr: {ngMinlength: 4, required: true},
      msgs: {minlength: 'Needs to have at least 4 characters'}
    },
    {
      label: '',
      property: 'lastName',
      placeholder: gettextCatalog.getString ('Last Name'),
      type: 'text',
      attr: {ngMinlength: 4, required: true},
      msgs: {minlength: 'Needs to have at least 4 characters'}
    },
    {
      label: '',
      property: 'email',
      placeholder: 'email',
      type: 'email',
      help: gettextCatalog.getString ('Don\'t worry we won\'t spam your inbox'),
      attr: {required: true, ngMinlength: 4},
      msgs: {
        required: gettextCatalog.getString ('You need an email address'),
        email: gettextCatalog.getString ('Email address needs to be valid'),
        valid: gettextCatalog.getString ('Nice email address!')
      }
    },

    {
      type: 'multiple', fields: [
      {
        label: '',
        property: 'password',
        placehodler: gettextCatalog.getString ('Password'),
        type: 'password',
        attr: {required: true, ngMinlength: 6}
      },
      {
        label: '',
        property: 'confirmPassword',
        placeholder: gettextCatalog.getString ('Confirm Password'),
        type: 'password',
        attr: {confirmPassword: 'user.password', required: true},
        msgs: {match: 'Your passwords need to match'}
      }
    ], columns: 6
    }
  ];

  $scope.confirmPassword = '';

  $scope.options = {
    validation: {
      enabled: true,
      showMessages: true
    },
    layout: {
      type: 'basic',
      labelSize: 3,
      inputSize: 9
    }
  };


  $scope.register = function() {
    console.log($scope);
    //if(!$scope.registerForm.$valid) return;
    console.log("try to register");

    $scope.registration.username = $scope.registration.email;
    $scope.user = User.save($scope.registration, 
      function() {
        $scope.loginResult = User.login({
          include: 'user',
          rembemberMe: true
        }, $scope.registration, 
          function() {
            AppAuth.currentUser = $scope.loginResult.user;
            toasty.pop.success({
              title: gettextCatalog.getString('Registered'),
              msg: gettextCatalog.getString('You are registered'),
              sound: false
            });
            $location.path('/');
        },
          function(err) {
            toasty.pop.warning ({
              title: gettextCatalog.getString ('Error signin in after registration!'),
              msg: res.data.error.message,
              sound: false
            });
            $scope.loginError = res.data.error;
        });
      }, 
      function(err) {
          toasty.pop.warning({
            title: gettextCatalog.getString('Error registering!'),
            msg: err.data.error.message,
            sound: false
          });
          $scope.registerError = err.data.error;
        });
  };

});