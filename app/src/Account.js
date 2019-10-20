class Account {
	static register() {
		closeAllPopups();
		var formData = new FormData();
		var user = document.getElementById('user-input').value;
		var email = document.getElementById('email-input').value;
		formData.append('user', user);
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
				alert(data);
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static login() {
		closeAllPopups();
		var formData = new FormData();
		var user = document.getElementById('user-login').value;
		var pass = document.getElementById('password-login').value;
		formData.append('user', user);
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
				if(arr[0] === 'good') {
					Account.verifyState();
				} else {
					Account.verifyState();
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static verifyState() {
		var formData = new FormData();
		formData.append('user', Account.user);
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
					Account.user = arr[1];
					Account.email = arr[2];
					Account.id = arr[3];
				} else {
					Account.id = null;
					Account.email = null;	
					Account.user = null;	
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

	}

	static updateHTML() {
		var loginButton = document.getElementById('login-button');
		var accountButton = document.getElementById('account-button');
		var saveButton = document.getElementById('save-button');
		var mymapsButton = document.getElementById('mymaps-button');

		if(Account.isLoggedIn) {
			loginButton.style.display = 'none';
			accountButton.style.display = '';
			saveButton.style.display = '';
			mymapsButton.style.display = '';
		} else {
			loginButton.style.display = '';
			accountButton.style.display = 'none';
			saveButton.style.display = 'none';
			mymapsButton.style.display = 'none';
		}
	}
}

Account.user = null;
Account.email = null;
Account.id = null;
Account.isLoggedIn = false;
