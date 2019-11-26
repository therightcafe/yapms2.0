function buttonClick(clickElement) {
	if(php_candidate_edit === false)
		return;

	if(mode === 'paint' || mode === 'fill') {
		buttonClickPaint(clickElement);
	} else if(mode === 'ec') {
		buttonClickEC(clickElement);
	} else if(mode === 'delete') {
		buttonClickDelete(clickElement);
	}
	
	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend(); }

function buttonClickPaint(clickElement) {
	var id = clickElement.getAttribute('id').split('-')[0];
	var state = states.find(state => state.name === id);
	stateClickPaint(state);
}

function buttonClickEC(clickElement) {
	var id = clickElement.getAttribute('id');
	var split = id.split('-');
	var state = states.find(state => state.name === split[0]);
	var ecedit = document.getElementById('ecedit');
	var eceditText = document.getElementById('ecedit-message');
	var input = document.getElementById('state-ec');
	var stateId = document.getElementById('state-id');
	eceditText.innerHTML = 'Set ' + split[0] + ' delegates';
	input.value = state.voteCount;
	stateId.value = split[0];
	ecedit.style.display = 'inline';
}

function buttonClickDelete(clickElement) {
	var id = clickElement.getAttribute('id');
	var split = id.split('-');
	var state = states.find(state => state.name === split[0]);
	state.toggleDisable();
}

function landClick(clickElement) {
	if(php_candidate_edit === false)
		return;

	if(mode === 'move') {
		return;
	}

	var setSolid = KeyboardManager.quickFill();

	var id = clickElement.getAttribute('id');
	var split = id.split('-');
	var stateName = split[0];
	var districtName = split[1];

	var AL;
	var districts = [];

	// get each district
	states.forEach(function(state, index) {
		if(state.name.includes(stateName)) {
			districts.push(state);
			if(state.name.includes('AL')) {
				AL = state;
			}
		}
	});

	if(mode === 'paint' || mode === 'paintmove' || mode === 'fill') {
		// check if each district has the same candidate and color value
		if(setSolid) {
			AL.setColor(paintIndex, 0);
		} else {
			AL.incrementCandidateColor(paintIndex);
		}
		districts.forEach(function(district) {
			district.setColor(AL.getCandidate(), AL.getColorValue());
		});
	} else if(mode === 'delete') {
		districts.forEach(function(district) {
			district.toggleDisable();
		});
	}

	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend();
}

function stateClick(clickElement) {
	if(php_candidate_edit === false)
		return;

	var id = clickElement.getAttribute('id');
	var state = states.find(state => state.name === id);

	switch(mode) {
		case 'paint':
		case 'fill':
			Simulator.view(state);
			if(Simulator.ignoreClick === false) {
				stateClickPaint(state);
			}
			break;
		case 'ec':
			stateClickEC(state);
			break;
		case 'delete':
			stateClickDelete(state);
			break;
	}

	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend();
}

var tooltipTimeout = null;

function stateClickPaint(state, options = {proportional: false}) {
	if(state.disabled) {
		return;
	}
	
	if(mode === 'fill' && options.proportional === false) {
		if(KeyboardManager.quickFill()) {
			state.setColor(paintIndex, 0);
		/*
			state.delegates = {};
			state.delegates['Tossup'] = 0;
			state.delegates[paintIndex] = state.voteCount;
		*/
		} else {
			state.incrementCandidateColor(paintIndex);
		}

		return;
	} else if(mode === 'paint' && KeyboardManager.quickFill() && options.proportional === false) {
		state.setColor(paintIndex, 0);
		/*
		state.delegates = {};
		state.delegates['Tossup'] = 0;
		state.delegates[paintIndex] = state.voteCount;
		*/
		return;
	}

	LogoManager.loadButtons();
	closeAllPopups();
	var demdel = document.getElementById('demdel');
	demdel.style.display = 'flex';
	var message = document.getElementById('demdel-message');
	if(state.name !== 'SU') {
		message.innerHTML = state.name + '<br><small>' + state.voteCount + ' delegates</small>';
	} else {
		message.innerHTML = 'Super<br><small>' + state.voteCount + ' delegates</small>';
	}
	var hidden = document.getElementById('demdel-state-name');
	hidden.value = state.name;
	var ranges = document.getElementById('demdel-ranges');

	// remove old sliders
	while(ranges.firstChild) {
		ranges.removeChild(ranges.firstChild);
	}

	var max  = state.voteCount;
	var total = 0;

	var displayTossup = document.createElement('DIV');
	displayTossup.setAttribute('id', 'display-Tossup');

	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup')
			continue;
		// create slider, set their max to the states delegate count
		var range = document.createElement('INPUT');
		range.setAttribute('id', 'range-' + key);
		range.setAttribute('type', 'range');
		range.setAttribute('max', max);
		if(state.delegates[key] === undefined) {
			state.delegates[key] = 0;
		}
		range.value = state.delegates[key];
		total += state.delegates[key];
		// create display for slider
		var display = document.createElement('DIV');
		display.setAttribute('id', 'display-' + key);
		display.innerHTML = key + ' - ' + range.value + ' - ' +
			((state.delegates[key] / max) * 100).toFixed(2) + '%';

		// this is how you reference the display DOM
		// im not sure exactly what this is but its weird
		range.oninput = (function() {
			var refstate = state;
			var refkey = key;
			var refdisplay = display;
			var refdisplayTossup = displayTossup;
			var prevvalue = parseInt(range.value);
			return function(b) {
				total -= prevvalue;
				total += parseInt(this.value);

				if(total > max) {
					var diff = total - max;
					total -= diff;
					this.value -= diff;
				}
				
				prevvalue = parseInt(this.value);

				displayTossup.innerHTML = 'Tossup - ' + (max - total) + ' - ' +
					(( (max - total) / max) * 100).toFixed(2) + '%';
				
				// update the display	
				refdisplay.innerHTML = refkey + ' - ' + this.value + ' - ' + 
					((this.value / max) * 100).toFixed(2) + '%';
		
				refstate.setDelegates("Tossup", (max - total));	
				refstate.setDelegates(refkey, parseInt(this.value));	
				countVotes();
				ChartManager.updateChart();
				LegendManager.updateLegend();
			}
		})();

		ranges.appendChild(display);
		ranges.appendChild(range);
	}

	displayTossup.innerHTML = 'Tossup - ' + (max - total) + ' - ' + (( (max - total) / max) * 100).toFixed(2) + '%';
	ranges.appendChild(displayTossup);
}

function stateClickDelete(state) {
	state.toggleDisable();
}

function stateClickEC(state) {
	if(state.disabled === false) {
		var ecedit = document.getElementById('ecedit');
		var eceditText = document.getElementById('ecedit-message');
		var input = document.getElementById('state-ec');
		var stateId = document.getElementById('state-id');
		eceditText.innerHTML = 'Set ' + state.name + ' delegates';
		input.value = state.voteCount;
		stateId.value = state.name;
		ecedit.style.display = 'inline';
	}
}

function specialClick(clickElement, e) {
	var id = clickElement.getAttribute('id');
	var state = states.find(state => state.name === id);

	if(mode === 'paint' || mode === 'fill') {
		state.incrementCandidateColor(paintIndex);
		countVotes();
		ChartManager.updateChart();
		LegendManager.updateLegend();
	}
}

function legendClick(candidate, button) {
	paintIndex = candidate;
	LegendManager.selectCandidateDisplay(button);
}
