function displayMenu(filename) {
	closeAllPopups();
	$.ajax({
		url:"./html/menu/" + filename + ".php",
		type:'GET',
		success: function(data) {
			$('#selectmenu').html(data);
			var selectmenu = document.getElementById('selectmenu');
			selectmenu.style.display = 'flex';
		}
	});
}
