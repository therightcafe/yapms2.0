// keep data in function scope
(function() {
	var clickButtons = document.getElementsByClassName('click-button');
	for(var index = 0; index < clickButtons.length; ++index) {
		clickButtons[index].style.padding = '7px';
	}
	
	var modeButtons = document.getElementsByClassName('mode-button');
	for(var index = 0; index < modeButtons.length; ++index) {
		modeButtons[index].style.paddingLeft = '12px';
		modeButtons[index].style.paddingRight = '12px';
	}
})();
