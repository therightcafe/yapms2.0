function saveMap(img, token) {
	var formData = new FormData();

	formData.append("img", img);
	formData.append("filename", MapLoader.save_filename);
	formData.append("dataid", MapLoader.save_dataid);
	formData.append("type", MapLoader.save_type);
	formData.append("year", MapLoader.save_year);
	formData.append("fontsize", MapLoader.save_fontsize);
	formData.append("strokewidth", MapLoader.save_strokewidth);
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

	var proportionalData = [];
	for(var stateIndex = 0; stateIndex < proportionalStates; ++stateIndex) {
		var state = proportionalStates[stateIndex];
		var obj = {
			name: state.name,
			candidate: state.candidate,
			delegates: state.delegates,
			voteCount: state.voteCount,
			colorValue: state.colorValue,
			disabled: state.disabled
		};
	}
	formData.append("proportionalStates", JSON.stringify({
		proportional_data: proportionalData
	}));

	$.ajax({
		url: "./savemap_simple.php",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: function(a,b,c) {
			console.log(a);
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
				downloadbtn.setAttribute('href', 'https://yapms.org/downloadmap.php?f=' + filename);
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
	var formData = new FormData();
	formData.append("captcha", token);
	formData.append("img", img);
	
	var data = {};
	data['filename'] = MapLoader.save_filename;
	data['dataid'] = MapLoader.save_dataid;
	data['type'] = MapLoader.save_type;
	data['year'] = MapLoader.save_year;
	data['fontsize'] = MapLoader.save_fontsize;
	data['strokewidth'] = MapLoader.save_strokewidth;
	data['updatetext'] = mapOptions.updateText;
	data['candidates'] = {};
	data['states'] = {};
	data['proportional'] = {};

	var formData = new FormData();
	console.log('token: ' + token);
	formData.append("captcha", token);
	formData.append("img", img);

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

	for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
		var state = states[stateIndex];
		data['states'][state.name] = {};
		data['states'][state.name]['candidate'] = state.candidate;
		data['states'][state.name]['delegates'] = state.delegates;
		data['states'][state.name]['votecount'] = state.voteCount;
		data['states'][state.name]['colorvalue'] = state.colorValue;
		data['states'][state.name]['disabled'] = state.disabled;
	}

	for(var stateIndex = 0; stateIndex < proportionalStates.length; ++stateIndex) {
		var state = proportionalStates[stateIndex];
		data['proportional'][state.name] = {};
		data['proportional'][state.name]['candidate'] = state.candidate;
		data['proportional'][state.name]['delegates'] = state.delegates;
		data['proportional'][state.name]['votecount'] = state.voteCount;
		data['proportional'][state.name]['colorvalue'] = state.colorValue;
		data['proportional'][state.name]['disabled'] = state.disabled;
	}
	
	formData.append("data", JSON.stringify(data));

	$.ajax({
		//url: "./savemap_external.php",
		url: "https://yapms.org/upload.php",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: function(a,b,c) {
			console.log(a);
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

			var sharebuttons = document.getElementById('sharebuttons');
			if(sharebuttons) {
				sharebuttons.style.display = 'flex';
			}
			var downloadbtn = document.getElementById('downloadbutton');
			if(downloadbtn) {
				if(mobile) {
					downloadbtn.style.display = 'none';
				} else {
					downloadbtn.style.display = '';
					downloadbtn.setAttribute('href', 'https://yapms.org/downloadmap.php?f=' + filename);
				}
			}

			var loadingAnimation = document.getElementById('loading-animation');
			if(loadingAnimation) {
				loadingAnimation.style.display = 'none';
			}
		
			var image = document.getElementById('screenshotimg');
			if(image) {
				image.style.display = '';
			}

			var facebookBtn = document.getElementById('facebook-share');
			if(facebookBtn) {
				facebookBtn.setAttribute('href', 'https://www.facebook.com/sharer.php?u=' + url);
			}

			var twitterBtn = document.getElementById('twitter-share');
			if(twitterBtn) {
				twitterBtn.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + url);
			}

			var redditBtn = document.getElementById('reddit-share');
			if(redditBtn) {
				redditBtn.setAttribute('href', 'https://www.reddit.com/submit?title=My%20YAPms%20Map&url=' + url);
			}

			console.log('Map save NEW succeeded');
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
			
			console.log('Map save NEW failed ' + a);
			gtag('event', 'ma_save_failed', {
				'event_category': 'map_save',
				'event_label': 'Map save NEW failed - ' + a
			});
		}
	});
}
