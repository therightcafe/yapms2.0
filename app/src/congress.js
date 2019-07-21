function verifyCongress() {
	if(mobile || enableCongress === false) {
		return false;
	}
	
	var element = document.getElementById('sidebar-congress');

	if(enableCongress) {
		element.style.display = 'block';
	} else {
		element.style.display = 'none';
	}

	return true;
}

function setCongressOnHover() {
	if(verifyCongress() === false) {
		return;
	}

	for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
		var state = states[stateIndex];

		state.htmlElement.onmouseover = (function() {
			var stateName = state.name;
			return function() {
				var element = document.getElementById('sidebar-congress');
				element.innerHTML = stateName + ' ' + data['usa_congress'][stateName];
			}
		})();
	}
}
