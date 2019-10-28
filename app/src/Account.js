class Account {
	static register() {
		var formData = new FormData();
		var email = document.getElementById('email-input').value;
		formData.append('email', email);
		$.ajax({
			url: "https://yapms.org/auth/register.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log(data);
				//alert(data);
				var arr = data.split(' ');
				var registerInfo = document.getElementById('register-info');
				closeAllPopups();
				if(arr[0] === 'good') {
					displayNotification('Account Registered',
						'Please check your email, and click the verification link. (check your spam)');	
				} else if(arr[1] === 'inuse') {
					displayNotification('Account Registered',
						'Account Already Registered');	
				} else if(arr[1] === 'inactive') {
					displayNotification('Account Registered',
						'Verification Email Already Sent (check your spam)');	
				} else if(arr[1] === 'resent') {
					displayNotification('Account Registered',
						'Verification Email Resent Sent (check your spam)');	
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
				var registerInfo = document.getElementById('register-info');
				registerInfo.innerHTML = 'Connection Error';	
			}	
		});
	}

	static login() {
		var formData = new FormData();
		var email = document.getElementById('email-login').value;
		var pass = document.getElementById('password-login').value;
		formData.append('email', email);
		formData.append('password', pass);
		$.ajax({
			url: "https://yapms.org/auth/login.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				var arr = data.split(' ');
				alert('Login: ' + data);
				Account.verifyState();
				if(arr[0] === 'bad') {
					var loginInfo = document.getElementById('login-info');
					if(arr[1] === 'account_innactive') {
						loginInfo.innerHTML = 'Inactive Account';
					} else if(arr[1] === 'incorrect_login') {
						loginInfo.innerHTML = 'Incorrect Login';
					}
				} else {
					closeAllPopups();
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
				var loginInfo = document.getElementById('login-info');
				loginInfo.innerHTML = 'Connection Error';
			}	
		});
	}

	static verifyState() {
		var formData = new FormData();
		formData.append('email', Account.email);
		$.ajax({
			url: "https://yapms.org/auth/verify_login.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				alert('Verify Login: ' + data);
				var arr = data.split(' ');
				Account.isLoggedIn = (arr[0] === 'good');
				if(Account.isLoggedIn) {
					Account.email = arr[1];
					Account.id = arr[2];
				} else {
					Account.id = null;
					Account.email = null;	
				}
				Account.updateHTML();
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static logout() {
		closeAllPopups();
		$.ajax({
			url: "https://yapms.org/auth/logout.php",
			type: "POST",
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				Account.verifyState();
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static save() {
		closeAllPopups();
		var formData = new FormData();
		//formData.append("img", img);
	
		var mapName = document.getElementById('savemap-name');
		if(mapName) {
			formData.append("mapName", mapName.value);
			mapName.value = '';
		}
	
		var data = {};
		data['filename'] = MapLoader.save_filename;
		data['dataid'] = MapLoader.save_dataid;
		data['type'] = MapLoader.save_type;
		data['year'] = MapLoader.save_year;
		data['fontsize'] = MapLoader.save_fontsize;
		data['strokewidth'] = MapLoader.save_strokewidth;
		data['updatetext'] = mapOptions.updateText;
		data['candidates'] = {};
		data['states'] = {};
		data['proportional'] = {};

		for(var key in CandidateManager.candidates) {
			if(key === 'Tossup') {
				continue;
			}
			var candidate = CandidateManager.candidates[key];
			data['candidates'][candidate.name] = {};
			data['candidates'][candidate.name]['solid'] = candidate.colors[0];
			data['candidates'][candidate.name]['likely'] = candidate.colors[1];
			data['candidates'][candidate.name]['lean'] = candidate.colors[2];
			data['candidates'][candidate.name]['tilt'] = candidate.colors[3];
		}

		for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
			var state = states[stateIndex];
			data['states'][state.name] = {};
			data['states'][state.name]['candidate'] = state.candidate;
			data['states'][state.name]['delegates'] = state.delegates;
			data['states'][state.name]['votecount'] = state.voteCount;
			data['states'][state.name]['colorvalue'] = state.colorValue;
			data['states'][state.name]['disabled'] = state.disabled;
		}

		for(var stateIndex = 0; stateIndex < proportionalStates.length; ++stateIndex) {
			var state = proportionalStates[stateIndex];
			data['proportional'][state.name] = {};
			data['proportional'][state.name]['candidate'] = state.candidate;
			data['proportional'][state.name]['delegates'] = state.delegates;
			data['proportional'][state.name]['votecount'] = state.voteCount;
			data['proportional'][state.name]['colorvalue'] = state.colorValue;
			data['proportional'][state.name]['disabled'] = state.disabled;
		}
		
		formData.append("data", JSON.stringify(data));

		$.ajax({
			url: "https://yapms.org/upload_user.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log(data);
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	}

	static changePassword() {
		var formData = new FormData();
		var current = document.getElementById('password-reset-1').value;
		var newPass = document.getElementById('password-reset-2').value;
		var verifyPass = document.getElementById('password-reset-3').value;
		formData.append('current', current);
		formData.append('new', newPass);
		formData.append('verify', verifyPass);
		$.ajax({
			url: "https://yapms.org/auth/change_password.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				alert('Password Change: ' + data);
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static forgotPassword() {
		var formData = new FormData();
		var email = document.getElementById('email-forgot-input').value;
		formData.append('email', email);
		$.ajax({
			url: "https://yapms.org/auth/forgot_password.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				var arr = data.split(' ');
				closeAllPopups();
				if(arr[0] === 'good') {
					if(arr[1] === 'reset_sent') {
						displayNotification('Password Reset',
							'Password reset email sent. (check your spam)');	
					}
				} else if(arr[0] === 'bad') {
					if(arr[1] === 'innactive_account') {
						displayNotification('Password Reset Error',
							email + ' is not active. Please register or verify.');	
					} else if(arr[1] === 'recent_verification') {
						displayNotification('Password Reset Error',
							'Password was recently reset, please wait.');	
					} else if(arr[1] === 'please_register') {
						displayNotification('Password Reset Error',
							email + ' is not registered. Please register.');	
					}
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static updateHTML() {
		var loginButton = document.getElementById('login-button');
		var accountButton = document.getElementById('account-button');
		var saveButton = document.getElementById('save-button');
		var mymapsButton = document.getElementById('mymaps-button');
		var accountEmail = document.getElementById('account-email');

		if(Account.isLoggedIn) {
			loginButton.style.display = 'none';
			accountButton.style.display = '';
			saveButton.style.display = '';
			mymapsButton.style.display = '';
			accountEmail.innerHTML = Account.email;
		} else {
			loginButton.style.display = '';
			accountButton.style.display = 'none';
			saveButton.style.display = 'none';
			mymapsButton.style.display = 'none';
		}
	}
}

Account.email = null;
Account.id = null;
Account.isLoggedIn = false;
