var currentCache = 'v0.65.9';

var windowLoaded = false;

var cookies = {};

var states = [];
var lands = [];
var buttons = [];
var proportionalStates = [];

// data for the chart
var chart;
var chartData = {
	labels:[],
	datasets: [{
		label: "",
		backgroundColor: [],
		borderColor: chartBorderColor,
		borderWidth: chartBorderWidth,
		data:[]
	}, {}, {}, {}]
}
var chartOptions;
var chartType;
var chartPosition;
var chartPieScales;
var chartBarScales;
var chartPolarScales;
var chartRadarScales;

var chartLeans = true;
var chartLabels = true;

// pan object
var panobject;

// paint data
var paintIndex = 'Tossup';
var maxColorValue = 2;

var chartBorderWidth = 2;
var chartBorderColor = '#000000';

var lockedMap = false;
var mode = 'paint';

var mapType = 'presidential';
var mapYear = 'open';

var blockPresets = false;

var legendCounter = true;
var legendLeans = true;
var maxColorValues = 4;

var loadConfig = {
	filename: '', 
	fontsize: 16, 
	strokewidth: 1.5,
	dataid: '', 
	type: '',
	year: '',
};

var mapOptions = {
	updateText: true
}

var strokeMultiplier = 1;

var previousPalette = function() {
	toWinPalette();	
};

var panObject = null;

function share() {
	if(mobile) {
		displayMenu('sharemenu-mobile');
	} else {
		displayMenu('sharemenu');
	}

	if(grecaptcha) {
		console.log('reCaptcha detected');
	} else {
		console.log('reCaptcha not detected');
		return;
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
	if(keyStates[70]) {
		states[stateIndex].incrementCandidateColor(paintIndex);
		countVotes();
		updateChart();
		updateLegend();
	}
}

// reads through the SVG and sets up states and buttons
function initData(dataid) {
	// clear any previously loaded data
	states = [];
	buttons = [];
	lands = [];

	// get list of all html state elements
	var htmlElements = document.getElementById('outlines').children;

	// iterate over each element
	for(var index = 0, length = htmlElements.length; index < length; ++index) {
		var htmlElement = htmlElements[index];
		htmlElement.setAttribute('style', 'inherit');
		htmlElement.setAttribute('cursor', 'pointer');
		var name = htmlElement.getAttribute('id');
		if(name === null || name.includes('*lines*') || name.includes("*ignore*") ||
			name.includes("_ignore_") || name.includes('othertext') || name === 'text') {
			// do nothing with it paths that
			// have these ids
		} else if(name.includes('-button')) {
			// don't include buttons as states
			htmlElement.setAttribute('onclick', 'buttonClick(this)');
			if(save_type === 'congressional' ||
			save_type === 'presidential' ||
			save_type === 'gubernatorial') {
				htmlElement.setAttribute('onmouseover', 'if(keyStates[70]){buttonClick(this, {setSolid: true});}');
			}
			buttons.push(htmlElement);
		} else if(name.includes('-land')) {
			htmlElement.setAttribute('onclick', 'landClick(this)');
			if(save_type === 'congressional' ||
			save_type === 'presidential' ||
			save_type === 'gubernatorial') {
				htmlElement.setAttribute('onmouseover', 'if(keyStates[70]){landClick(this, {setSolid: true});}');
			}
			lands.push(htmlElement);
		} else {
			htmlElement.setAttribute('onclick', 'stateClick(this)');
			states.push(new State(name, htmlElement, dataid));
			var stateIndex = states.length - 1;
			if(save_type === 'congressional' ||
			save_type === 'presidential' ||
			save_type === 'gubernatorial') {
				htmlElement.setAttribute('onmouseover', 'if(keyStates[70]){stateClick(this, {setSolid: true});}');
			}
		}
	}

	var proportional = document.getElementById('proportional');
	if(proportional) {
		var proportionalElements = proportional.children;
		for(var index = 0, length = proportionalElements.length; index < length; ++index) {
			var element = proportionalElements[index];
			element.setAttribute('cursor', 'pointer');
			element.setAttribute('style', 'inherit');
			var name = element.getAttribute('id');
			var state = new State(name, element, dataid);
			proportionalStates.push(state);
			element.setAttribute('onclick', 'stateClickPaintProportional(proportionalStates["' + 
				(proportionalStates.length - 1) + '"])');
		}
	}

	/* Special Elections for Senate */
	var special = document.getElementById('special');
	var specialChildren;
	if(special != null) {
		specialChildren = special.children;

		for(var index = 0; index < specialChildren.length; ++index) {
			var htmlElement = specialChildren[index];
			htmlElement.setAttribute('onclick','specialClick(this)');
			htmlElement.setAttribute('cursor', 'pointer');
			var name = htmlElement.id;
			var state = new State(name, htmlElement, dataid);
			states.push(state);
		}
	}
}

function initChart() {
	chartOptions = {
		// This basically inserts HTML into the legend-div div
		// it's a WIP
		legendCallback: function(chart) {
			console.log("Generating Legend...");
			var legendDiv = document.getElementById('legend-div');
			legendDiv.innerHTML = '';
			var index = -1;
			for(var key in candidates) {
				var candidate = candidates[key];
				++index;
				var legendElement = document.createElement('div');
				legendElement.setAttribute('id', candidate.name);
				legendElement.setAttribute('class', 'legend-button');
				legendElement.setAttribute(
					'onclick', 'legendClick("' + key + '", this);');
				legendElement.style.background = 'none';
				legendDiv.appendChild(legendElement);
			
				var legendText = document.createElement('div');
				legendText.setAttribute('id', candidate.name + '-text');	
				legendText.setAttribute('class', 'legend-button-text');	
				legendText.style.backgroundColor = candidate.colors[0];
				if(index == 0) {
					var color = candidate.colors[tossupColor];
					legendText.style.backgroundColor = color;
				}
				legendText.style.padding = '0px';
				legendText.innerHTML = candidate.name;
				legendElement.appendChild(legendText);
	
				var legendDelete = document.createElement('div');
				legendDelete.setAttribute('class', 'legend-delete');
				legendDelete.style.backgroundColor = 'black';
				legendDelete.innerHTML = 'tesstt';
				legendText.appendChild(legendDelete);

				var legendColorDiv = document.createElement('div');
				legendColorDiv.setAttribute('class', 'legend-color-div');
				legendElement.appendChild(legendColorDiv);
			
				if(candidate.singleColor) {
					legendColorDiv.style.display = 'none';
				}

				if((key === 'Republican' || key === 'Democrat')
					&& mapYear === '2020' && 
					(mapType === 'senatorial' || mapType === 'gubernatorial')) {
					// dont add the remove candidate button

				} else if(key !== 'Tossup') {
					// after adding all the candidates, add the add candidate button
					var legendDelete = document.createElement('div');
					legendDelete.setAttribute('class', 'legend-delete');
					legendDelete.setAttribute('onclick', 'displayCandidateEditMenu("' + candidate.name + '")');
					legendDelete.style.background = 'none';
					legendDiv.appendChild(legendDelete);
					var legendDeleteText = document.createElement('div');
					legendDeleteText.setAttribute('class', 'legend-delete-text');	
					legendDeleteText.style.backgroundColor = candidate.colors[0];
					
					legendDeleteText.style.padding = '0px';
					legendDeleteText.style.fontSize = '14px';
					legendDeleteText.innerHTML = '<i class="fas fa-cog"></i>';
					legendDelete.appendChild(legendDeleteText);
				}

				if(key !== 'Tossup' && legendLeans) {
					var amts = ['solid', 'likely', 'lean', 'tilt'];
					for(var index = 0; index < amts.length; ++index) {
						var legendColor = document.createElement('div');
						legendColor.setAttribute('class', 'legend-color');
						legendColor.setAttribute('id', candidate.name + amts[index]);
						legendColor.style.backgroundColor = candidate.colors[index];
						legendColorDiv.appendChild(legendColor);
					}
				}
			}
		
			// after adding all the candidates, add the add candidate button
			var legendElement = document.createElement('div');
			legendElement.setAttribute('id', 'legend-addcandidate-button');
			legendElement.setAttribute('class', 'legend-button');
			legendElement.setAttribute(
				'onclick', 'displayAddCandidateMenu();');
			legendElement.style.background = 'none';
			legendDiv.appendChild(legendElement);
			var legendText = document.createElement('div');
			legendText.setAttribute('id', 'addcandidate-button-text');	
			legendText.setAttribute('class', 'legend-button-text');	
			legendText.style.backgroundColor = candidates['Tossup'].colors[tossupColor];
			legendText.style.padding = '0px';
			legendText.innerHTML = '+';
			legendElement.appendChild(legendText);
			var legendColorDiv = document.createElement('div');
			legendColorDiv.setAttribute('class', 'legend-color-div');
			legendElement.appendChild(legendColorDiv);
			
			var legendTooltip = document.createElement('div');
			legendTooltip.setAttribute('id', 'legend-tooltip');
			legendDiv.appendChild(legendTooltip);
			var legendText = document.createElement('div');
			legendText.setAttribute('id', 'legendtooltip-text');	
			legendText.setAttribute('class', 'legend-button-text');	
			legendText.style.padding = '0px';
			legendText.innerHTML = 'Select a candidate';
			legendTooltip.appendChild(legendText);

		},
		// do not display the build in legend for the chart
		legend: {
			display: false
		},
		tooltips: {
			display: true,
			position: 'average',
			titleFontColor: 'black',
			bodyFontColor: 'black',
			backgroundColor: 'white',
			borderColor: 'black',
			borderWidth: 2,
			caretSize: 0,
			cornerRadius: 0
		},
		// turn off animation
		animation: {
			animateRotate: false,
			animateScale: true
		},
		plugins: {
			datalabels: {
				//display: 'auto',
				display: function(context) {
					return context.dataset.data[context.dataIndex] !== 0;
				},
				backgroundColor: 'white',
				borderColor: 'black',
				borderRadius: 5,
				borderWidth: 2,
				color: 'black',
				font: {
					family: 'Roboto',
					size: 15,
					weight: 700
				}
			}
		},
		barStrokeWidth: 0
	}
//Chart.defaults.global.barPercentage = 0;
//Chart.defaults.global.categoryPercentage = 0;

	chartBarScales = {
		yAxes: [{
			stacked: true,
			gridLines: {
				display: false,
				drawBorder: false
			},
			ticks: {
				fontSize: 15,
				fontColor: '#ffffff',
				fontFamily: 'Roboto',
				fontStyle: 500
			}
		}],
		xAxes: [{
			stacked: true,
			gridLines: {
				display: false,
				drawBorder: false
			},
			ticks: {
				beginAtZero: true,
				fontSize: 15,
				fontColor: '#ffffff',
				fontStyle: 500,
				fontFamily: 'Roboto'
			}
		}]
	}

	chartPieScales = {
		yAxes: [{
			display: false
		}],
		xAxes: [{
			display: false
		}]
	}
	
	chartPolarScales = {
		display: false
	}

	chartRadarScales = {
		display: false
	}

	chartOptions.scales = chartPieScales;

	Chart.defaults.global.elements.rectangle.borderWidth = 2;
	
	// get the context
	var ctx = document.getElementById('chart-canvas').getContext('2d');
	ctx.height = 200;

	// create the chart
	chart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels:[],
			datasets: [{
				label: "",
				backgroundColor: '#ffffff',
				borderColor: '#ffffff',
				borderWidth: 0,
				data:[]
			}, {}, {}, {}],
		},
		options: chartOptions,
		maintainAspectRatio: true
	});

	chart.generateLegend();

	chartType = 'doughnut';
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
	for(var key in candidates) {
		if(key === 'Tossup')
			continue;
		var range = document.getElementById('range-' + key);
		var rangeValue = 0;
		if(range) {
			rangeValue = parseInt(range.value);
		} else {
			gtag('event', 'error', {
				'event_category': 'error',
				'event_label': 'Could not find range element (range-' + key + ') ' + save_filename
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
	updateChart();
	updateLegend();
}

function clearDelegates() {
	for(var index = 0; index < states.length; ++index) {
		state = states[index];
		state.delegates = {};
		state.setColor('Tossup', 0);
	}

	countVotes();
	updateChart();
	updateLegend();
}

function setEC(e) {
	// hide the popup window
	closeAllPopups();

	// get the stateId and input value
	var stateId = document.getElementById('state-id').value;
	var input = document.getElementById('state-ec').value;

	// get the state and set its new vote count
	states.forEach(function(element) {
		if(element.getName() === stateId) {
			// only update the text on presidential maps
			if(mapOptions !== undefined && mapOptions.updateText !== undefined) {
				element.setVoteCount(parseInt(input), mapOptions.updateText);
			} else {
				element.setVoteCount(parseInt(input), false);
			}
		}
	});

	// recount the votes
	countVotes();
	updateChart();
	updateLegend();
	verifyMap();
}

function rebuildChart() {
	var html = document.getElementById('chart-canvas');
	var ctx = html.getContext('2d');
	//var type = chart.config.type;
	chart.destroy();
	chart = new Chart(ctx, {
		type: chart.config.type, 
		data: chartData, 
		options: chartOptions
	});
	
	// dont display the chart if its a battle chart
	if(chartType === 'battle') {	
		var chartcontainer = document.getElementById('chart');
		chartcontainer.style.display = 'none';
	}

	updateChart();
}

function toggleLegendCounter() {
	legendCounter = !legendCounter;
	updateLegend();
}

function toggleLegendLeans() {
	legendLeans = !legendLeans;
	chart.generateLegend();
	updateLegend();
}

function toggleChartLabels() {
	chartLabels = !chartLabels;
	if(chartOptions.plugins.datalabels.display != false) {
		chartOptions.plugins.datalabels.display = false;
	} else {
		chartOptions.plugins.datalabels.display = function(context) {
			return context.dataset.data[context.dataIndex] !== 0;
		}
	}

	rebuildChart();
}

function toggleChartLeans() {
	chartLeans = !chartLeans;
	rebuildChart();
	updateBattleChart();
}

function loadPage(t, m, l) {
	var url = 'https://testing.yapms.com/app/?';

	if(t) {
		url += 't=' + t + '&';
	}

	if(m) {
		url += 'm=' + m + '&';
	}

	if(l) {
		url += 'l=' + l;
	} else {
		url += 'l=en';
	}
	
	window.location.href = url;
}

function setLanguage(language) {
	closeAllPopups();
	if(navigator.onLine) {
		appendCookie('language', language);
		if(navigator.serviceWorker && navigator.serviceWorker.controller) {
			gtag('event', 'set_language', {
				'event_category': 'language',
				'event_label': 'Set language to ' + language
			});
			var languageButton = document.getElementById('languagebutton');
			languageButton.disabled = true;
			navigator.serviceWorker.controller.postMessage('localize'); 
		} else {
			displayNotification('Error', 'Unable to set language<br>Try restarting your web browser<br>Try enabling cookies');
		}
		
	} else {
		displayNotification('Offline', 'Unavailable while Offline');
	}
}

function setLockMap(set) {
	var lockButton = document.getElementById('lockbutton');
	if(set === true) {
		if(lockButton) {
			lockButton.style.opacity = '0.5';
		}
		panObject.disablePan();
		panObject.disableZoom();
		lockedMap = true;
	} else {
		if(lockButton) {
			lockButton.style.opacity = '1';
		}
		panObject.enablePan();
		panObject.enableZoom();
		lockedMap = false;
	}
}

function toggleLockMap() {
	var lockButton = document.getElementById('lockbutton');
	if(lockedMap) {
		if(lockButton) {
			lockButton.style.opacity = '1';
		}
		panObject.enablePan();
		panObject.enableZoom();
		lockedMap = false;
	} else {
		if(lockButton) {
			lockButton.style.opacity = '0.5';
		}
		panObject.disablePan();
		panObject.disableZoom();
		lockedMap = true;
	}
}

function setMode(set) {
	console.log('mode ' +  mode + ' | set ' + set + 
		' | mapType ' + mapType + ' | mapYear ' + mapYear);

	var notification = document.getElementById('notification');
	var message = notification.querySelector('#notification-message');
	var title = notification.querySelector('#notification-title');

	if(mapYear !== 'open') {
		if(set === 'ec' || set === 'candidate' || set === 'delete' || set === 'deletecandidate') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a historical ' + mapType + ' map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}

	if(mapType === 'gubernatorial') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a guberatorial map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}

	if(mapType === 'senatorial') {
		//if(set === 'delete' || set === 'ec') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a senatorial map';
			notification.style.display = 'inline';
			console.log('denied');
			return;

		}
	}

	if(mapType === 'congressional') {
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
		modeText = '<i class="fas fa-paint-brush"></i> ' + language["Mode-Option2"];
		var button = document.getElementById('modebutton-paint');
		button.style.opacity = '0.5';
	} else if(set === 'ec') {
		modeText = '<i class="fas fa-edit"></i> ' + language["Mode-Option5"];
		notificationText = "Click on a state to set its electoral college";
		var button = document.getElementById('modebutton-ec');
		button.style.opacity = '0.5';
	} else if(set === 'delete') {
		modeText = '<i class="fas fa-eraser"></i> ' + language["Mode-Option4"];
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
	if(typeof candidates[paintIndex] === 'undefined') {
		paintIndex = 'Tossup';
	}
}

// make sure states are proper colors
// if states have invalid colors, turn them white
function verifyMap() {
	states.forEach(function(state) {
		//state.verifyDisabledColor();
		state.verifyTossupColor();
		if(typeof candidates[state.candidate] === 'undefined') {
			// if the current color is out of bounds set it to white
			state.setColor('Tossup', tossupColor);
		} else { 
			// the candidate the state thinks its controled by
			var currentCandidate = state.getCandidate();
			// the candidate the state should be controle by
			var shouldCandidate = candidates[state.getCandidate()].name;

			// if these values differ, change the state to tossup
			if(currentCandidate !== shouldCandidate) {
				state.setColor('Tossup', tossupColor);
			} else if(state.getCandidate() === 'Tossup') {
				state.setColor('Tossup', 2);	
			}else {
				var candidate = candidates[state.getCandidate()];
				if(candidate.singleColor === true) {
					state.setColor(state.getCandidate(), 0);
				} else {
					state.setColor(state.getCandidate(), state.getColorValue());
				}
			}
		}
	});

	proportionalStates.forEach(function(state) {
		state.verifyTossupColor();
		if(typeof candidates[state.candidate] === 'undefined') {
			// if the current color is out of bounds set it to white
			state.setColor('Tossup', tossupColor);
		} else { 
			// the candidate the state thinks its controled by
			var currentCandidate = state.getCandidate();
			// the candidate the state should be controle by
			var shouldCandidate = candidates[state.getCandidate()].name;

			// if these values differ, change the state to tossup
			if(currentCandidate !== shouldCandidate) {
				state.setColor('Tossup', tossupColor);
			} else if(state.getCandidate() === 'Tossup') {
				state.setColor('Tossup', 2);	
			}else {
				var candidate = candidates[state.getCandidate()];
				if(candidate.singleColor === true) {
					state.setColor(state.getCandidate(), 0);
				} else {
					state.setColor(state.getCandidate(), state.getColorValue());
				}
			}
		}
	});
	
	if(loadConfig.filename === './res/lte_house.svg') {
		updateLTEHouse();
	}
}

// sets all states to white
function clearMap() {
	loadMap(loadConfig.filename, loadConfig.fontsize, loadConfig.strokewidth, loadConfig.dataid, loadConfig.type, loadConfig.year, {updateText: mapOptions.updateText});
	setLockMap(false);
}

// iterate over each state and delegate votes to the candidate
function countVotes() {
	var mid = document.getElementById("battlechartmid");
	if(mid !== null) {
		mid.setAttribute("fill", TOSSUP.colors[2]);
	}

	if(mapType === 'primary' || mapType === 'proportional') {
		for(var key in candidates) {
			var candidate = candidates[key];
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
		for(var key in candidates) {
			var candidate = candidates[key];
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

// change the colors of the districts so that they are the
// color of the majority
function updateLTEHouse() {
	var outlines = document.getElementById('outlines');

	var children = outlines.children;

	var districts = [];

	for(var index = 0; index < children.length; ++index) {
		var child = children[index];

		if(child.id.includes('-LTEHOUSE')) {
			districts.push(child);	
		}
	}

	districts.forEach(function(element) {
		var districtname = element.id.split('-')[0];
		var count = {};

		// loop through each district seat (because they are states)
		for(var index = 0; index < states.length; ++index) {
			var seat = states[index];
			// if the name of the district isnt in the seat skip it
			if(seat.name.includes(districtname) == false) {
				continue;
			}
			// look at the candidate and count it
			var candidate = seat.getCandidate();
			if(candidate in count) {
				count[candidate] += 1;
			} else {
				count[candidate] = 1;
			}
		}
		
		var majorCandidate = 'Tossup';
		var majorCount = 0;
	
		// find the candidate with the most seats
		for(var key in count) {
			if(count[key] > majorCount) {
				majorCandidate = key;
				majorCount = count[key];
			} else if(count[key] == majorCount) {
				majorCandidate = 'Tossup';
			}
		}
	
		// set the fill of the district
		if(majorCandidate === 'Tossup') {
			element.style.fill = candidates[majorCandidate].colors[2];
		} else {
			element.style.fill = candidates[majorCandidate].colors[0];
		}
	});
}

// updates the information of the chart (so the numbers change)
function updateChart() {
	if(chartType === 'verticalbattle' ||
		chartType === 'horizontalbattle') {
		updateBattleChart();
		return;
	} else if(chartType === 'horizontalBar') {
		updateBarChart();
	} else {
		updateNonRadarChart();	
	}

	chart.config.data = chartData;
	chart.update();
}

function updateBarChart() {
	chartData.labels = [];
	chartData.datasets[0].data = [];
	chartData.datasets[0].backgroundColor = [];
	chartData.datasets[1].data = [];
	chartData.datasets[1].backgroundColor = [];
	chartData.datasets[2].data = [];
	chartData.datasets[2].backgroundColor = [];
	chartData.datasets[3].data = [];
	chartData.datasets[3].backgroundColor = [];
	
	// each label is a candidate
	for(var key in candidates) {
		chartData.labels.push(key);
	}

	if(chartLeans) {
		for(var probIndex = 0; probIndex < 4; ++probIndex) {
			for(var key in candidates) {
				var candidate = candidates[key];
				var name = candidate.name;
				var count = candidate.probVoteCounts[probIndex];
				chartData.datasets[probIndex].data.push(count);

				var color = candidate.colors[probIndex];
				chartData.datasets[probIndex].backgroundColor.push(color);
			}
		}
	} else {
		for(var key in candidates) {
			var candidate = candidates[key];
			var name = candidate.name;
			var count = candidate.voteCount;
			chartData.datasets[0].data.push(count);

			if(key === 'Tossup') {
				var color = candidate.colors[2];
				chartData.datasets[0].backgroundColor.push(color);

			} else {
				var color = candidate.colors[0];
				chartData.datasets[0].backgroundColor.push(color);
			}
		}

	}
}

function updateNonRadarChart() {
	chartData.labels = [];

	chartData.datasets[0].data = [];
	chartData.datasets[0].backgroundColor = [];
	chartData.datasets[0].borderColor = chartBorderColor;
	chartData.datasets[0].borderWidth = chartBorderWidth;

	// loop though candidates
	var candidateIndex = -1;
	for(var key in candidates) {
		++candidateIndex;
		var candidate = candidates[key];
		var name = candidate.name;
		var voteCount = candidate.voteCount;
		var color = candidate.colors[0];
		if(candidateIndex == 0) {
			color = candidates['Tossup'].colors[tossupColor];
			// append the candidate label
			chartData.labels[0] = 'Tossup';
			// append the vote count
			chartData.datasets[0].data[0] = voteCount;
			// change the background color of the visual
			chartData.datasets[0].backgroundColor.push(color);
		} else if(chartLeans) {
			for(var probIndex = 0; probIndex < 4; ++probIndex) {
				var count = candidate.probVoteCounts[probIndex];
				color = candidate.colors[probIndex];
				var index = (probIndex + (candidateIndex * 4)) - 3;
				chartData.labels[index] = name;
				chartData.datasets[0].data[index] = count;
				chartData.datasets[0].backgroundColor.push(color);
			}
		} else {
			var count = candidate.voteCount;
			color = candidate.colors[0];
			chartData.labels[candidateIndex] = name;
			chartData.datasets[0].data[candidateIndex] = count;
			chartData.datasets[0].backgroundColor.push(color);
		}
	}
}

// displays the vote count on the legend
// makes sure that the selected candidate is highlighted
function updateLegend() {
	var index = -1;
	for(var key in candidates) {
		var candidate = candidates[key];
		++index;
		var html = document.getElementById(candidate.name + '-text');

		var newHTML = candidate.name;

		if(legendCounter == true) {
			newHTML += ' ' + candidate.voteCount;
		}

		if(html !== null) {
			html.innerHTML = newHTML;
		}

		if(key === paintIndex) {
			selectCandidateDisplay(html.parentElement);
		}
	}
}

function centerMap() {
	if(panObject === null)
		return;

	panObject.resize();
	panObject.fit();
	panObject.center();
	panObject.zoomBy(0.85);
}

function toggleLTELogo() {
	var lteLogo = document.getElementById('logo-div');
	if(lteLogo.style.display === '') {
		lteLogo.style.display = 'inline';
	} else if(lteLogo.style.display === 'inline') {
		lteLogo.style.display = '';
	}
}

function toggleRedEagleLogo() {
	var redEagleLogo = document.getElementById('logo-redeagle-div');
	if(redEagleLogo.style.display === '') {
		redEagleLogo.style.display = 'inline';
	} else if(redEagleLogo.style.display === 'inline') {
		redEagleLogo.style.display = '';
	}
}

function setColors(palette) {
	var solid = document.getElementById('solid');
	var likely = document.getElementById('likely');
	var leaning =  document.getElementById('leaning');
	var tilting = document.getElementById('tilting');

	if(palette === 'red') {
		solid.value = '#bf1d29';
		likely.value = '#ff5865';
		leaning.value = '#ff8b98';
		tilting.value ='#cf8980';
	} else if(palette === 'blue') {
		solid.value = '#1c408c';
		likely.value = '#577ccc';
		leaning.value = '#8aafff';
		tilting.value = '#949bb3';
	} else if(palette === 'green') {
		solid.value = '#1c8c28';
		likely.value = '#50c85e';
		leaning.value = '#8aff97';
		tilting.value = '#7a997e';
	} else if(palette === 'yellow') {
		solid.value = '#e6b700';
		likely.value = '#e8c84d';
		leaning.value = '#ffe78a';
		tilting.value = '#b8a252';
	} else {
		solid.value = cookies[palette + 'solid'];
		likely.value = cookies[palette + 'likely'];
		leaning.value = cookies[palette + 'leaning'];
		tilting.value = cookies[palette + 'tilting'];
	}
}

function onResize() {
	centerMap();

	// make sure the height is maxed out if the chart is on the bottom	
	if(chartPosition === 'bottom') {
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

function appendCookie(key, value) {
	cookies[key] = value;
	var cookie = "";
	var expire = new Date(Date.now() + 60 * 1000 * 60 * 12 * 7 * 100).toString();
	cookie = key + '=' + cookies[key] + '; expires=' + expire + ';';
	document.cookie = cookie;
	console.log('append cookie: key=' + key + ' value=' + value);
}

function loadCookies() {
	// preload all color cookies with black
	for(var i = 1; i < 5; ++i) {
		cookies['custom' + i + 'solid'] = '#000000';
		cookies['custom' + i + 'likely'] = '#000000';
		cookies['custom' + i + 'leaning'] = '#000000';
		cookies['custom' + i + 'tilting'] = '#000000';
	}
	cookies['theme'] = 'default';
	var decode = decodeURIComponent(document.cookie);
	var loadedCookies = decode.split('; ');
	for(var index in loadedCookies) {
		var cookie = loadedCookies[index].split('=');
		var key = cookie[0];
		var result = cookie[1]
		cookies[key] = result;
	}
}

function customColorBackground() {
	var c1 = document.getElementById('custom1button');
	c1.style.background = 'linear-gradient(to right,' +
		cookies['custom1solid'] + ',' +
		cookies['custom1likely'] + ',' +
		cookies['custom1leaning'] + ',' +
		cookies['custom1tilting'] + ')';
	var c2 = document.getElementById('custom2button');
	c2.style.background = 'linear-gradient(to right,' +
		cookies['custom2solid'] + ',' +
		cookies['custom2likely'] + ',' +
		cookies['custom2leaning'] + ',' +
		cookies['custom2tilting'] + ')';
	var c3 = document.getElementById('custom3button');
	c3.style.background = 'linear-gradient(to right,' +
		cookies['custom3solid'] + ',' +
		cookies['custom3likely'] + ',' +
		cookies['custom3leaning'] + ',' +
		cookies['custom3tilting'] + ')';
	var c4 = document.getElementById('custom4button');
	c4.style.background = 'linear-gradient(to right,' +
		cookies['custom4solid'] + ',' +
		cookies['custom4likely'] + ',' +
		cookies['custom4leaning'] + ',' +
		cookies['custom4tilting'] + ')';
}

function start() {
	initCandidates();
	initChart();
	setChart('horizontalbattle');
	loadCookies();

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
					loadSavedMap_new(data);
				} catch(e) {
					console.log('Map Load: Attemping old file load');
					loadSavedMap_old(data);
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
							loadSavedMap_new(data);
						} catch(e) {
							console.log('Map Load: Attemping old file load');
							loadSavedMap_old(data);
						}
					},
					error: function(a, b, c) {
						console.log("Map Load: Did not find saved map");
						loadMap('./res/usa_presidential.svg', 16, 1, 'usa_ec',"presidential", "open", {updateText: true});

						var notification = document.getElementById('notification');
						var message = notification.querySelector('#notification-message');
						var title = notification.querySelector('#notification-title');
						title.innerHTML = 'Sorry';
						message.innerHTML = 'The map you are looking for does not exist.<br><br>This feature is still in development and it may have been deleted.';
						notification.style.display = 'inline';
					}
				});
				/*
				console.log("Map Load: Did not find saved map");
				loadMap('./res/usa_presidential.svg', 16, 1, 'usa_ec',"presidential", "open", {updateText: true});

				var notification = document.getElementById('notification');
				var message = notification.querySelector('#notification-message');
				var title = notification.querySelector('#notification-title');
				title.innerHTML = 'Sorry';
				message.innerHTML = 'The map you are looking for does not exist.<br><br>This feature is still in development and it may have been deleted.';
				notification.style.display = 'inline';
				*/
			}
		});

	} else if(php_load_type_map === true) {
		loadPreset("classic");
		loadMapFromId(php_load_map_id);
	} else {
		loadPreset("classic");
		loadMap("./res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true, voters: 'usa_voting_pop', enablePopularVote: true});
	}
}

window.onload = function() {
	windowLoaded = true;
}

start();
