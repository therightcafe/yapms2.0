function saveMap(img, token) {
	var mapHTML = document.getElementById('map-div');

	var formData = new FormData();

	formData.append("img", img);

	formData.append("filename", save_filename);
	formData.append("dataid", save_dataid);
	formData.append("type", save_type);
	formData.append("year", save_year);
	formData.append("fontsize", save_fontsize);
	formData.append("strokewidth", save_strokewidth);
	console.log('token: ' + token);
	formData.append("captcha", token);

	formData.append("updateText", mapOptions.updateText);

	var candidateData = [];
	for(var key in candidates) {
		var candidate = candidates[key];
		var obj = {
			name: candidate.name,
			solid: candidate.colors[0],
			likely: candidate.colors[1],
			lean: candidate.colors[2],
			tilt: candidate.colors[3]
		};
		candidateData.push(obj);
	}
	formData.append("candidates", JSON.stringify({
		candidate_data: candidateData
	}));

	var stateData = [];
	for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
		var state = states[stateIndex];
		var obj = {
			name: state.name,
			candidate: state.candidate,
			delegates: state.delegates,
			voteCount: state.voteCount,
			colorValue: state.colorValue,
			disabled: state.disabled.toString()[0]
		};
		stateData.push(obj);
	}
	formData.append("states", JSON.stringify({
		state_data: stateData
	}));

	$.ajax({
		url: "./savemap.php",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
			var data = a.split(' ');
			var url = data[0];
			var filename = data[1];

			var shareurl = document.getElementById('shareurl');
			shareurl.setAttribute('href', url);
			shareurl.innerHTML = url;

			var downloadbtn = document.getElementById('downloadbutton');
			if(downloadbtn) {
				downloadbtn.style.display = 'inline-block';
				downloadbtn.setAttribute('href', 'downloadmap.php?f=' + filename);
			}
		},
		error: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
}
