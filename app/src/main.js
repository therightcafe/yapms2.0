var currentCache = 'v0.71.50';

var states = [];
var lands = [];
var buttons = [];
var proportionalStates = [];

// paint data
var paintIndex = 'Tossup';
var maxColorValue = 2;

var mode = 'paint';

var blockPresets = false;

var maxColorValues = 4;

var mapOptions = {
	updateText: true
}

var strokeMultiplier = 1;

var previousPalette = function() {
	toWinPalette();	
};

function share(autoCenter) {
	displayMenu('sharemenu');

	if(grecaptcha) {
		console.log('reCaptcha detected');
	} else {
		console.log('reCaptcha not detected');
		return;
	}
	
	if(autoCenter) {
		MapManager.centerMap();
	}

	// disable button to prevent spam
	var button = document.getElementById('share-button');
	if(button) {
		button.disabled = true;
		button.style.opacity = '0.5';
		setTimeout(function() {
			button.disabled = false;
			button.style.opacity = '1';
		}, 3000);
	}

	grecaptcha.execute('6LeDYbEUAAAAANfuJ4FxWVjoxPgDPsFGsdTLr1Jo', {action: 'share'}).then(function(token) {
	html2canvas(document.getElementById('application'), {logging: true, onclone: function(clone) {
		// remove the custom fonts from the clone
		var svgtext = clone.getElementById('text');
		if(svgtext) {
			svgtext.style.fontFamily = 'arial';
			svgtext.style.fontSize = '15px';
		}
		var svg = clone.getElementById('svgdata');
		var mapdiv = clone.getElementById('map-div');
		if(svg && mapdiv) {
			svg.setAttribute('width', mapdiv.offsetWidth);
			svg.setAttribute('height', mapdiv.offsetHeight);
		}
		var notification = clone.getElementById('legend-tooltip');
		if(notification) {
			notification.style.display = 'none';
		}
		var editButtons = clone.getElementsByClassName('legend-delete');
		for(var index = 0, length = editButtons.length; index < length; ++index) {
			var element = editButtons[index];
			if(element) {
				element.style.display = 'none';
			}
		}
		var addCandidate = clone.getElementById('legend-addcandidate-button');
		if(addCandidate) {
			addCandidate.style.display = 'none';
		}
	}}).then(function(canvas) {
		notification.appendChild(canvas);
		canvas.style.width = 0;
		canvas.style.height = 0;	
		canvas.style.display = 'none';
		var img = canvas.toDataURL('image/png');
		notification.removeChild(canvas);
		var i = document.getElementById('screenshotimg');
		i.src = img;
		i.style.width = '40vw';
		i.style.height = 'auto';
		//saveMap(img, token);
		saveMap_new(img, token);
	});
	});
}

window.onerror = function(message, source, lineno, colno, error) {
	//alert(message + ' ' + source + ' ' + lineno + ' ' + colno);
	if(typeof gtag !== 'undefined') {
		console.log('Error');
		gtag('event', 'error', {
			'event_category': 'error',
			'event_label': message + ', ' + source + ', ' + lineno + ', ' + currentCache,
			'non_interaction': true
		});
	}
}

function autoFill(stateIndex) {
	if(KeyboardManager.keyStates[70]) {
		states[stateIndex].incrementCandidateColor(paintIndex);
		countVotes();
		ChartManager.updateChart();
		LegendManager.updateLegend();
	}
}

function setDelegates(e) {
	e.parentElement.style.display = '';
	var stateid = document.getElementById('demdel-state-name').value;
	var state = states.find(state => state.name === stateid);
	if(!state) {
		state = proportionalStates.find(state => state.name === stateid);
	}
	// keep the total delegates
	var total = state.voteCount;
	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup')
			continue;
		var range = document.getElementById('range-' + key);
		var rangeValue = 0;
		if(range) {
			rangeValue = parseInt(range.value);
		} else {
			gtag('event', 'error', {
				'event_category': 'error',
				'event_label': 'Could not find range element (range-' + key + ') ' + MapLoader.save_filename
			});
		}
		state.delegates[key] = parseInt(rangeValue);
		// subtract the delegates for each candidate
		total -= parseInt(rangeValue);
	}
	// set the tossup delegates to the remaining
	state.delegates['Tossup'] = total;

	var majorityCandidate = 'Tossup';
	var majorityVoteCount = 0;
	for(var key in state.delegates) {
		if(state.delegates[key] > majorityVoteCount) {
			majorityCandidate = key;
			majorityVoteCount = state.delegates[key];
		} else if(state.delegates[key] === majorityVoteCount) {
			majorityCandidate = 'Tossup';
		}
	}
	
	if(majorityCandidate === 'Tossup') {
		state.setColor('Tossup', 2);
	}
	else {
		state.setColor(majorityCandidate, 0);
	}

	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend();
}

function setMode(set) {
	console.log('mode ' +  mode + ' | set ' + set + 
		' | mapType ' + MapLoader.save_type + ' | mapYear ' + MapLoader.save_year);

	var notification = document.getElementById('notification');
	var message = notification.querySelector('#notification-message');
	var title = notification.querySelector('#notification-title');

	if(MapLoader.save_year !== 'open') {
		if(set === 'ec' || set === 'candidate' || set === 'delete' || set === 'deletecandidate') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a historical ' + MapLoader.save_type + ' map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}

	if(MapLoader.save_type === 'gubernatorial') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a guberatorial map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}

	if(MapLoader.save_type === 'senatorial') {
		//if(set === 'delete' || set === 'ec') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a senatorial map';
			notification.style.display = 'inline';
			console.log('denied');
			return;

		}
	}

	if(MapLoader.save_type === 'congressional') {
		//if(set === 'delete' || set === 'ec') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a congressional map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}
	
	console.log('allowed');

	mode = set;

	var modeHTML = document.getElementById('modesbutton');
	var modeText;
	var notificationText;

	var modeButtons = document.getElementsByClassName('mode-button');
	for(var index = 0; index < modeButtons.length; ++index) {
		var button = modeButtons[index];
		if(button) {
			button.style.opacity = '1';
		}
	}

	if(set === 'paint') {
		modeText = '<i class="fas fa-paint-brush"></i> paint';
		var button = document.getElementById('modebutton-paint');
		button.style.opacity = '0.5';
	} else if(set === 'ec') {
		modeText = '<i class="fas fa-edit"></i> EC Edit';
		notificationText = "Click on a state to set its electoral college";
		var button = document.getElementById('modebutton-ec');
		button.style.opacity = '0.5';
	} else if(set === 'delete') {
		modeText = '<i class="fas fa-eraser"></i> Disable';
		notificationText = "Click on a state to disable/enable it";
		var button = document.getElementById('modebutton-delete');
		button.style.opacity = '0.5';
	}

	var notification = document.getElementById('notification');
	if(mode === 'paint' || mode === 'move' || mode === 'paintmove') {
		notification.style.display = 'none';
	} else if(mode !== 'paint') {
		notification.style.display = 'inline';
		var title = notification.querySelector('#notification-title');
		title.innerHTML = modeText;
		var message = notification.querySelector('#notification-message');
		message.innerHTML = notificationText;
	}
}

// if paint index is invalid, change it to tossup
// ( WORK IN PROGRESS)
function verifyPaintIndex() {
	if(typeof CandidateManager.candidates[paintIndex] === 'undefined') {
		paintIndex = 'Tossup';
	}
}

// iterate over each state and delegate votes to the candidate
function countVotes() {
	var mid = document.getElementById("battlechartmid");
	if(mid !== null) {
		mid.setAttribute("fill", CandidateManager.TOSSUP.colors[2]);
	}

	if(MapLoader.save_type === 'primary' || MapLoader.save_type === 'proportional') {
		for(var key in CandidateManager.candidates) {
			var candidate = CandidateManager.candidates[key];
			candidate.voteCount = 0;
			candidate.probVoteCounts = [0,0,0,0];
			for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
				var state = states[stateIndex];
				if(typeof state.delegates === 'undefined') {
					state.delegates = {};
				}
				if(typeof state.delegates[key] === 'undefined') {
					state.delegates[key] = 0;
					if(key === 'Tossup') {
						state.delegates[key] = state.voteCount;	
					}
				}

				if(isNaN(state.delegates[key])) {
					console.log(state);
				}

				candidate.voteCount += state.delegates[key];
				candidate.probVoteCounts[0] += state.delegates[key];
			}
		}
	} else {
		// iterate over every candidate
		//candidates.forEach(function(candidate, candidateIndex) {
		var candidateIndex = -1;
		for(var key in CandidateManager.candidates) {
			var candidate = CandidateManager.candidates[key];
			++candidateIndex;
			candidate.voteCount = 0;
			candidate.probVoteCounts = [0,0,0,0];
			// iterate over every state
		
			for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
				var state = states[stateIndex];
				// if the candidate value of the state
				// equals the index value of the candidate
				// add the vote count to the candidate 
				if(state.candidate === key) {
					candidate.voteCount += state.voteCount;
					candidate.probVoteCounts[state.colorValue] += state.voteCount;
				}
			}

			for(var stateIndex = 0, length = proportionalStates.length; stateIndex < length; ++stateIndex) {
				var state = proportionalStates[stateIndex];
				if(typeof state.delegates === 'undefined') {
					state.delegates = {};
				}
				if(typeof state.delegates[key] === 'undefined') {
					state.delegates[key] = 0;
					if(key === 'Tossup') {
						state.delegates[key] = state.voteCount;	
					}
				}
				candidate.voteCount += state.delegates[key];
				candidate.probVoteCounts[0] += state.delegates[key];
			}

			if(mid !== null) {
				if(candidate.voteCount > Math.ceil(totalVotes / 2)) {
					if(key === 'Tossup') {
						mid.setAttribute("fill",candidate.colors[2]);
					} else {
						mid.setAttribute("fill", candidate.colors[0]);
					}
				}
			}
		}
	}
}

function onResize() {
	MapManager.centerMap();

	// make sure the height is maxed out if the chart is on the bottom	
	if(ChartManager.chartPosition === 'bottom') {
		var sidebarhtml = document.getElementById('chart-div');
		var charthtml = document.getElementById('chart');
		charthtml.style.height = 'auto';
		charthtml.style.width = '' + (sidebarhtml.offsetHeight - 5) + 'px';
	} else {
		var sidebarhtml = document.getElementById('chart-div');
		var charthtml = document.getElementById('chart');
		charthtml.style.height = 'auto';
		charthtml.style.width = '100%';

	}
}

function setChangeCandidate(oldCandidate, newCandidate) {
	for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
		var state = states[stateIndex];

		if(state.candidate === oldCandidate) {
			state.setColor(newCandidate, state.colorValue);	
		}

		state.delegates[newCandidate] = state.delegates[oldCandidate];
		state.delegates[oldCandidate] = undefined;
	}
}

function start() {
	KeyboardManager.init();
	CandidateManager.initCandidates();
	ChartManager.initChart();
	ChartManager.setChart('horizontalbattle');
	CookieManager.loadCookies();

	if(php_load_map === true) {
		console.log('Save Search - yapms.org');
		$.ajax({
			//url: './maps/' + php_load_map_id + '.txt',
			url: 'https://yapms.org/maps/' + php_load_map_id + '.txt',
			type: "POST",
			success: function(data) {
				console.log("Map Load: Found saved map");
				try {
					console.log('Map Load: Attemping new file load');
					MapLoader.loadSavedMap_new(data);
				} catch(e) {
					console.log(e);
					console.log('Map Load: Attemping old file load');
					MapLoader.loadSavedMap_old(data);
				}
			},
			error: function(a, b, c) {
				console.log('Save Search - yapms.com');
				$.ajax({
					url: 'https://www.yapms.com/app/maps/' + php_load_map_id + '.txt',
					type: "POST",
					success: function(data) {
						console.log("Map Load: Found saved map");
						try {
							console.log('Map Load: Attemping new file load');
							MapLoader.loadSavedMap_new(data);
						} catch(e) {
							console.log('Map Load: Attemping old file load');
							MapLoader.loadSavedMap_old(data);
						}
					},
					error: function(a, b, c) {
						console.log("Map Load: Did not find saved map");
						MapLoader.loadMap('./res/usa_presidential.svg', 16, 1, 'usa_ec',"presidential", "open", {updateText: true});

						var notification = document.getElementById('notification');
						var message = notification.querySelector('#notification-message');
						var title = notification.querySelector('#notification-title');
						title.innerHTML = 'Sorry';
						message.innerHTML = 'The map you are looking for does not exist.<br><br>This feature is still in development and it may have been deleted.';
						notification.style.display = 'inline';
					}
				});
			}
		});

	} else if(php_load_type_map === true) {
		PresetLoader.loadPreset("classic");
		MapLoader.loadMapFromId(php_load_map_id);
	} else {
		PresetLoader.loadPreset("classic");
		MapLoader.loadMap("./res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true, voters: 'usa_voting_pop', enablePopularVote: true});
	}

	LogoManager.loadLogos();
	LogoManager.loadButtons();
	LogoManager.loadFlags();
}

start();
