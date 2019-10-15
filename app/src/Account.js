class Account {
	static initGoogleLogin() {
		gapi.load('auth2', function() {
			var auth2 = gapi.auth2.init({
				client_id: '406738305883-b9cbn6ge3i5a5fnn6perdbuvq1eu5go2.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
			});
			auth2.attachClickHandler(document.getElementById('google-login'),
			{},
			function(googleUser) {
				Account.onSignIn(googleUser);
			},
			function(error) {
				console.log('Auth2 Attach Error');	
			});
		});
	}

	static onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		Account.id = profile.getId();
		Account.email = profile.getEmail();
		var token = googleUser.getAuthResponse().id_token;
		Account.token = token;
		
		console.log('Email: ' + Account.email);
		console.log('Token: ' + Account.token);

		$.ajax({
			//url: 'https://testing.yapms.com/login/auth.php',
			url: '../../login/auth.php',
			type: 'POST',
			data: {token: Account.token},
			success: function(data) {
				console.log('Auth Send Success');
				console.log(data);
				if(data === 'verify success') {
					document.getElementById('google-login').innerText = 'Logout';
				} else {
					document.getElementById('google-login').innerText = 'Login';

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
}

Account.id = '';
Account.email = '';
Account.token = '';
