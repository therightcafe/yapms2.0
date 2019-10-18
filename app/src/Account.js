class Account {
	static initGoogleLogin() {
		gapi.load('auth2', function() {
			Account.auth = gapi.auth2.init({
				client_id: '406738305883-b9cbn6ge3i5a5fnn6perdbuvq1eu5go2.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
			}).then(function(auth) {
				Account.auth = auth;
				Account.auth.attachClickHandler(document.getElementById('google-login'),
				{},
				function(googleUser) {
					Account.login(googleUser);
				},
				function(error) {
					console.log('Auth2 Attach Error');	
				});

				if(Account.auth.isSignedIn.get()) {
					Account.user = Account.auth.currentUser.get();
					document.getElementById('google-login').style.display = 'none';
					document.getElementById('google-account').style.display = '';
					document.getElementById('mymaps-button').style.display = '';
					document.getElementById('save-button').style.display = '';
				} else {
					document.getElementById('google-login').style.display = '';
					document.getElementById('google-account').style.display = 'None';
					document.getElementById('mymaps-button').style.display = 'None';
					document.getElementById('save-button').style.display = 'None';
				}
			});
		});
	}

	static login(googleUser) {
		Account.user = googleUser;
		var profile = googleUser.getBasicProfile();
		Account.id = profile.getId();
		Account.email = profile.getEmail();
		var token = googleUser.getAuthResponse().id_token;
		Account.token = token;
		
		console.log('Email: ' + Account.email);
		console.log('Token: ' + Account.token);

		$.ajax({
			url: '../../login/auth.php',
			type: 'POST',
			data: {token: Account.token},
			success: function(data) {
				console.log('Auth Send Success');
				console.log(data);
				if(data === "verify success") {
					document.getElementById('google-login').style.display = 'none';
					document.getElementById('google-account').style.display = '';
					document.getElementById('mymaps-button').style.display = '';
					document.getElementById('save-button').style.display = '';
				}
			},
			error: function(a, b, c) {
				console.log('Auth Send Error');
				console.log(a);
				console.log(b);
				console.log(c);
				document.getElementById('google-login').innerText = 'Login';
			}
		});
	}

	static logout() {
		Account.auth.signOut().then(function() {
			hideMenu('accountmenu');
			if(Account.auth.isSignedIn.get() === false) {
				document.getElementById('google-login').style.display = '';
				document.getElementById('google-account').style.display = 'none';
				document.getElementById('mymaps-button').style.display = 'none';
				document.getElementById('save-button').style.display = 'None';
			}
		});
	}

	static save() {
		closeAllPopups();
		saveMap_user();
	}
}

Account.id = null;
Account.email = null;
Account.token = null;
Account.auth = null;
Account.user = null;
