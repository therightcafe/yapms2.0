function displayMenu(filename) {
	closeAllPopups();
	$.ajax({
		url:"./html/menu/" + filename + ".php",
		type:'POST',
		success: function(data) {
			$('#selectmenu').html(data);
			var selectmenu = document.getElementById('selectmenu');
			selectmenu.style.display = 'flex';

			if(filename === 'sharemenu' || filename === 'sharemenu-mobile') {
				var sharebuttons = document.getElementById('sharebuttons');
				if(sharebuttons) {
					sharebuttons.style.display = 'none';
				}

				var shareurl = document.getElementById('shareurl');
				if(shareurl) {
					shareurl.style.display = 'none';
					shareurl.innerHTML = '';
				}

				var image = document.getElementById('screenshotimg');
				if(image) {
					image.style.display = 'none';
				}
					
				var loadingAnimation = document.getElementById('loading-animation');
				if(loadingAnimation) {
					loadingAnimation.style.display = '';
				}
			} else if(filename === 'versionmenu') {
				var versioninfotext = document.getElementById('versioninfo-text');
				versioninfotext.innerHTML = currentCache;
			}
		}
	});
}
