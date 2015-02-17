'use strict';
angular.module('com.module.users')
	.factory('AppAuth', function(){

		return {
			currentUser: null,

			ensureHasCurrentUser: function(User) {
				if(this.currentUser) {
					console.log("User available");
				} else {
					console.log('Fetching user from server'); 
					this.currentUser = User.getCurrent(function() {
						//worked
					}, function(err) {
						console.log('User.getCurrent() err', err);
					});
				}
			}
		}	
	});