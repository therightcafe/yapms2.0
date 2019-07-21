function getCongress() {
	$.ajax({
		url: 'req_congress.php',
		type: 'GET',
		success : function(data) {
			console.log(data);
		},
		error : function(a, b, c) {
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
}
