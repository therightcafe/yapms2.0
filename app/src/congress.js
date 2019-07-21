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

	db_getCongress(function(data) {
		console.log(data);
		for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
			var state = states[stateIndex];

			state.htmlElement.onmouseover = (function() {
				var stateName = state.name.split('-')[0];
				var district = state.name.split('-')[1];
				if(district === 'AL') {
					district = '0';
				}

				var districtData = data.filter(obj => {
					return obj.State === stateName &&
						obj.District === district;
				});

				return function() {
					var element = document.getElementById('sidebar-congress');


					element.innerHTML = stateName + '-' + district +
						' ' + districtData.Representative;
				}
			})();
		}
	});
}

function db_getCongress(onLoad) {
	$.ajax({
		url: 'req_congress.php',
		type: 'GET',
		success : function(data) {
			var obj = jQuery.parseJSON(data);
			onLoad(obj);
		},
		error : function(a, b, c) {
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
}
