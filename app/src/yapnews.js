$.ajax({
	url: 'req_articles.php',
	type: 'GET',
	success : function(data) {
		//console.log(data);
		var obj = jQuery.parseJSON(data);
		console.log(obj);

		var articles = document.getElementById("yapnews-articles");

		if(articles === null) {
			alert('fail');
			return;
		}

		for(var index = 0; index < obj.length; ++index) {
			var article = document.createElement('div');
			article.setAttribute('class', 'article');
			article.innerHTML = obj[index]['title'];
			articles.appendChild(article);
		}
	},
	error: function(a,b,c) {
		console.log(a);
		console.log(b);
		console.log(c);
	}
});
