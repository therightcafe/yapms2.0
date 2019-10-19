class Account {
	static register() {
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
		var formData = new FormData();
		var user = document.getElementById('user-login').value;
		var pass = document.getElementById('password-login').value;
		formData.append('user', user);
		formData.append('password', pass);
		$.ajax({
			url: "../../auth/login.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
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

	static logout() {

	}

	static save() {

	}
}
