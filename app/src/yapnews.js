$.ajax({
	url: 'req_articles.php',
	type: 'GET',
	success : function(data) {
		console.log(data);
		var obj = jQuery.parseJSON(data);
		console.log(obj);
	},
	error: function(a,b,c) {
		console.log(a);
		console.log(b);
		console.log(c);
	}
});

alert("YAPNews");
