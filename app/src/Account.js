onSignIn(googleUser) {
	console.log('testtttt');
	console.log(googleUser);
	var profile = googleUser.getBasicProfile();
	var id = profile.getId();
	var email = profile.getEmail();
	var token = googleUser.getAuthResponse().id_token;
	var token = token;

	console.log(email);

	$.ajax({
		url: 'https://testing.yapms.com/login/auth.php?token=' + token,
		type: 'GET',
		success: function(data) {
			console.log('Good AUTH');
			console.log(data);
		},
		error: function(a, b, c) {
			console.log('Bad AUTH');
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
}

class Account {
	static onSignIn(googleUser) {
		console.log('testtttt');
		console.log(googleUser);
		var profile = googleUser.getBasicProfile();
		Account.id = profile.getId();
		Account.email = profile.getEmail();
		var token = googleUser.getAuthResponse().id_token;
		Account.token = token;

		$.ajax({
			url: 'https://testing.yapms.com/login/auth.php?token=' + Account.token,
			type: 'GET',
			success: function(data) {
				console.log('Good AUTH');
				console.log(data);
			},
			error: function(a, b, c) {
				console.log('Bad AUTH');
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	}
}

Account.id = '';
Account.email = '';
Account.token = '';
