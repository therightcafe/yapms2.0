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

	}

	static logout() {

	}

	static save() {

	}
}
