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
				console.log('Register: ' + data);
				//alert(data);
				var arr = data.split(' ');
				var registerInfo = document.getElementById('register-info');
				closeAllPopups();
				if(arr[0] === 'good') {
					displayNotification('Account Registered',
						'Please check your email, and click the verification link. (check your spam)');	
				} else if(arr[1] === 'inuse') {
					displayNotification('Register Error',
						'Account Already Registered');	
				} else if(arr[1] === 'inactive') {
					displayNotification('Register Error',
						'Verification Email Already Sent (check your spam)');	
				} else if(arr[1] === 'resent') {
					displayNotification('Account Registered',
						'Please check your email, and click the verification link. (check your spam)');	
				} else if(arr[1] === 'invalid_email') {
					displayNotification('Register Error',
						email + ' is not a valid email');	
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
				console.log('Login: ' + data);
				var arr = data.split(' ');
				Account.verifyState();
				document.getElementById('password-login').value = "";
				var loginInfo = document.getElementById('login-info');
				if(arr[0] === 'good') {
					loginInfo.innerHTML = 'Please enter your credentials';
					closeAllPopups();
				} else if(arr[0] === 'bad') {
					if(arr[1] === 'account_innactive') {
						loginInfo.innerHTML = 'Inactive Account';
					} else if(arr[1] === 'incorrect_login') {
						loginInfo.innerHTML = 'Incorrect Login';
					}
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
				console.log('Verify Login: ' + data);
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
				console.log('Logout: ' + data);
				Account.verifyState();
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static unlink(mapName) {
		var formData = new FormData();
		formData.append("mapName", mapName);
		$.ajax({
			url: "https://yapms.org/users/unlink.php",
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
				Account.getMaps();
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
				Account.getMaps();
			}	
		});
	}

	static save() {
		var formData = new FormData();
		var img = document.getElementById("mysaves-current-mappreview");
		if(img) {
			formData.append("img", img.src);
		}
	
		var mapName = document.getElementById("mysaves-name-input");
		if(mapName) {
			formData.append("mapName", mapName.value);
			mapName.value = '';
		}

		var error = document.getElementById("mysaves-current-error");
		if(error) {
			error.style.display = 'none';
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
			url: "https://yapms.org/users/upload.php",
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
				console.log(arr);
				if(arr[0] === "bad") {
					error.style.display = 'inline';
					if(arr[1] === "no_map_name") {
						error.innerHTML = "Enter Map Name";
					} else if(arr[1] === "file_limit") {
						error.innerHTML = "File Limit Reached";	
					}
				} else {
					Account.getMaps();
				}
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
				console.log('Change Password: ' + data);
				var arr = data.split(' ');
				var passwordChangeInfo = document.getElementById('passwordchange-info');
				if(arr[0] === 'good') {
					closeAllPopups();
					displayNotification('Password Change',
						'Your password has been changed');
					passwordChangeInfo.innerHTML = 'Please enter current and new password';
					document.getElementById('password-reset-1').value = "";
					document.getElementById('password-reset-2').value = "";
					document.getElementById('password-reset-3').value = "";
				} else if(arr[0] === 'bad') {
					if(arr[1] === 'verify_incorrect') {
						passwordChangeInfo.innerHTML = 'Passwords do not match';
					} else if(arr[1] === 'incorrect_pass') {
						passwordChangeInfo.innerHTML = 'Current password incorrect';
					} else if(arr[1] === 'no_post') {
						passwordChangeInfo.innerHTML = 'Missing information';
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
				console.log('Forgot Password: ' + data);
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

	static closeMyMaps() {
		var page = document.getElementById("application-mysaves");
		page.style.display = "none";
		var maps = document.getElementById("mysaves-maps");
		while(maps.firstChild) {
			maps.removeChild(maps.firstChild);
		}
	}

	static getMaps() {
		var maps = document.getElementById("mysaves-maps");
		while(maps.firstChild) {
			maps.removeChild(maps.firstChild);
		}
		
		var error = document.getElementById("mysaves-current-error");
		if(error) {
			error.style.display = 'none';
		}

		var page = document.getElementById("application-mysaves");
		if(page) {
			page.style.display = "inline-flex";
		}

		html2canvas(document.getElementById("application"), {logging: false, onclone: function(clone) {
			// remove the custom fonts from the clone
			var svgtext = clone.getElementById('text');
			if(svgtext) {
				svgtext.style.fontFamily = 'arial';
				svgtext.style.fontSize = '15px';
			}
			var svg = clone.getElementById('svgdata');
			var mapdiv = clone.getElementById('map-div');
			if(svg && mapdiv) {
				svg.setAttribute('width', mapdiv.offsetWidth);
				svg.setAttribute('height', mapdiv.offsetHeight);
			}
			var notification = clone.getElementById('legend-tooltip');
			if(notification) {
				notification.style.display = 'none';
			}
			var editButtons = clone.getElementsByClassName('legend-delete');
			for(var index = 0, length = editButtons.length; index < length; ++index) {
				var element = editButtons[index];
				if(element) {
					element.style.display = 'none';
				}
			}
			var addCandidate = clone.getElementById('legend-addcandidate-button');
			if(addCandidate) {
				addCandidate.style.display = 'none';
			}
		}}).then(function(canvas) {
			canvas.style.width = 0;
			canvas.style.height = 0;	
			canvas.style.display = 'none';
			var img = canvas.toDataURL('image/png');
			var i = document.getElementById('mysaves-current-mappreview');
			i.src = img;
			i.style.width = '40vw';
			i.style.height = 'auto';
		});
		
		$.ajax({
			url: "https://yapms.org/users/get_maps.php",
			type: "POST",
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				var arr = data.split(' ');
				for(var fileIndex = 0; fileIndex < arr.length; ++fileIndex) {
					var fileName = arr[fileIndex].split('/');
					var name = fileName[2].split('.')[0];
					console.log(name);
					var nameDecode = atob(name);
					
					var mapBox = document.createElement('div');
					mapBox.className = "mysaves-mapbox";
					var mapBoxHeader = document.createElement('div');
					mapBoxHeader.className = "mysaves-mapbox-header";

					var mapDelete = document.createElement('img');
					mapDelete.src = "./html/deletebutton.svg";
					mapDelete.className = "mysaves-delete";
					mapDelete.onclick = (function() {
						var name_onclick = name;
						return function() {
							Account.unlink(name_onclick);
						}
					})();
					mapBoxHeader.appendChild(mapDelete);

					var mapName = document.createElement('div');
					mapName.className = "mysaves-mapname";
					mapName.innerHTML = nameDecode;
					mapBoxHeader.appendChild(mapName);
					
					mapBox.appendChild(mapBoxHeader);
				
					var mapPreview = document.createElement('img');
					mapPreview.className = "mysaves-mappreview";
					mapPreview.src = "https://yapms.org/users/"  + Account.id + "/" + name + ".png";
					mapPreview.alt = "No Preview";
					mapPreview.onclick = (function() {
						var url = "https://testing.yapms.com/app/?u=" + Account.id + '&m=' + name;
						return function() {
							window.location.href = url;
						}
					})();
					mapBox.appendChild(mapPreview);

					var mapBoxURL = document.createElement('div');
					mapBoxURL.className = "mysaves-url";
					var mapURL = document.createTextNode("https://testing.yapms.com/app/?u=" + Account.id + "&m=" + name);
					mapBoxURL.appendChild(mapURL);
					mapBox.appendChild(mapBoxURL);

					var maps = document.getElementById("mysaves-maps");
					maps.appendChild(mapBox);
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
		var mymapsButton = document.getElementById('mymaps-button');
		var accountEmail = document.getElementById('account-email');

		if(Account.isLoggedIn) {
			loginButton.style.display = 'none';
			accountButton.style.display = '';
			mymapsButton.style.display = '';
			accountEmail.innerHTML = Account.email;
		} else {
			loginButton.style.display = '';
			accountButton.style.display = 'none';
			mymapsButton.style.display = 'none';
		}
	}
}

Account.email = null;
Account.id = null;
Account.isLoggedIn = false;
