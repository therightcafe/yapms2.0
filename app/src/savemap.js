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
		if(key === 'Tossup') {
			continue;
		}
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
			disabled: state.disabled
		};
		stateData.push(obj);
	}
	formData.append("states", JSON.stringify({
		state_data: stateData
	}));
	$.ajax({
		url: "./savemap_new.php",
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
			if(url === 'reCaptcha_Failed(restart_web_browser)') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: possible solution is to restart your web-browser';

			} else if(url === 'reCaptcha_Bot_Detected') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: suspicious activity detected';
				
			} else {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = url;
			}
			
			shareurl.style.display = '';

			var downloadbtn = document.getElementById('downloadbutton');
			if(downloadbtn) {
				downloadbtn.style.display = 'inline-block';
				downloadbtn.setAttribute('href', 'downloadmap.php?f=' + filename);
			}
			
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}

			var loadingAnimation = document.getElementById('loading-animation');
			if(loadingAnimation) {
				loadingAnimation.style.display = 'none';
			}
		
			var image = document.getElementById('screenshotimg');
			if(image) {
				image.style.display = '';
			}

			console.log('Map save succeeded');
			gtag('event', 'map_save_succeeded', {
				'event_category': 'map_save',
				'event_label': 'Map save succeeded ' + currentCache 
			});
		},
		error: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}
			
			console.log('Map save failed ' + a);
			gtag('event', 'ma_save_failed', {
				'event_category': 'map_save',
				'event_label': 'Map save failed - ' + a
			});
		}
	});
}

function saveMap_new(img, token) {
	var mapHTML = document.getElementById('map-div');
	var data = {};
	data['filename'] = save_filename;
	data['dataid'] = save_dataid;
	data['type'] = save_type;
	data['year'] = save_year;
	data['fontsize'] = save_fontsize;
	data['strokewidth'] = save_strokewidth;
	data['updatetext'] = mapOptions.updateText;
	data['candidates'] = {};
	data['states'] = {};

	var formData = new FormData();
	console.log('token: ' + token);
	formData.append("captcha", token);
	formData.append("img", img);

	var candidateData = [];
	for(var key in candidates) {
		if(key === 'Tossup') {
			continue;
		}
		var candidate = candidates[key];
		data['candidates'][candidate.name] = {};
		data['candidates'][candidate.name]['solid'] = candidate.colors[0];
		data['candidates'][candidate.name]['likely'] = candidate.colors[1];
		data['candidates'][candidate.name]['lean'] = candidate.colors[2];
		data['candidates'][candidate.name]['tilt'] = candidate.colors[3];
	}

	var stateData = [];
	for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
		var state = states[stateIndex];
		data['states'][state.name] = {};
		data['states'][state.name]['candidate'] = state.candidate;
		data['states'][state.name]['delegates'] = state.delegates;
		data['states'][state.name]['votecount'] = state.voteCount;
		data['states'][state.name]['colorvalue'] = state.colorValue;
		data['states'][state.name]['disabled'] = state.disabled;
	}

	formData.append("data", JSON.stringify(data));

	$.ajax({
		url: "./savemap_simple.php",
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
			if(url === 'reCaptcha_Failed(restart_web_browser)') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: possible solution is to restart your web-browser';

			} else if(url === 'reCaptcha_Bot_Detected') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: suspicious activity detected';
				
			} else {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = url;
			}
			
			shareurl.style.display = '';

			var downloadbtn = document.getElementById('downloadbutton');
			if(downloadbtn) {
				downloadbtn.style.display = 'inline-block';
				downloadbtn.setAttribute('href', 'downloadmap.php?f=' + filename);
			}
			
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}

			var loadingAnimation = document.getElementById('loading-animation');
			if(loadingAnimation) {
				loadingAnimation.style.display = 'none';
			}
		
			var image = document.getElementById('screenshotimg');
			if(image) {
				image.style.display = '';
			}

			console.log('Map save succeeded');
			gtag('event', 'map_save_succeeded', {
				'event_category': 'map_save',
				'event_label': 'Map save NEW succeeded ' + currentCache 
			});
		},
		error: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}
			
			console.log('Map save failed ' + a);
			gtag('event', 'ma_save_failed', {
				'event_category': 'map_save',
				'event_label': 'Map save NEW failed - ' + a
			});
		}
	});
}
