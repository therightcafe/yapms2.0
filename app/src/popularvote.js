var lastViewPopularVote = "";

function numberWithCommas(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function verifyPopularVote() {
	if(mobile) {
		return false;
	}

	if(enablePopularVote) {
		var element = document.getElementById('sidebar-popularvote');
		element.style.display = 'block';
		element = document.getElementById('sidebar-national-popularvote');
		element.style.display = 'block';
		element = document.getElementById('sidebar-popularvote-settings');
		element.style.display = 'block';
		return true;
	} else {
		var element = document.getElementById('sidebar-popularvote');
		element.style.display = 'none';
		element = document.getElementById('sidebar-national-popularvote');
		element.style.display = 'none';
		element = document.getElementById('sidebar-popularvote-settings');
		element.style.display = 'none';
		return false;
	}
}

function autoMarginsOnClick() {
	if(verifyPopularVote() === false) {
		return;
	}

	var autoMargins = document.getElementById('popularvote-automargins').checked;

	if(autoMargins === false) {
		return; 
	}

	// loop through all states and set the margins
	for(var index in states) {
		var state = states[index];

		var win = 0;
		var winCandidate = "Tossup";
		var secondWin = 0;
		var secondWinCandidate = "Tossup";
		for(var candidate in candidates) {
			var votes = state.popularVote[candidate];
			if(votes > win) {
				secondWin = win;
				secondWinCandidate = winCandidate;
				win = votes;
				winCandidate = candidate;
			} else if(votes > secondWin) {
				secondWin = votes;
				secondWinCandidate = candidate;
			}
		}

		var combine = win + secondWin;
		var margin = ((win / combine) * 100) - 50;
		if(winCandidate === 'Tossup') {
			state.setColor('Tossup', 0);
		} else {
			if(margin < 5.0) {
				state.setColor(winCandidate, 3);
			} else if(margin < 10.0) {
				state.setColor(winCandidate, 2);
			} else if(margin < 15.0) {
				state.setColor(winCandidate, 1);
			} else {
				state.setColor(winCandidate, 0);
			}
		}
	}
}

function viewPopularVote(state) {
	if(verifyPopularVote() === false) {
		return;
	}

	lastViewPopularVote = state;

	var popularVoteCalc = document.getElementById('sidebar-popularvote');
	if(state.disabled) {
		popularVoteCalc.style.display = 'none';	
	} else {
		popularVoteCalc.style.display = 'block';	
	}
	var title = document.getElementById("popularvote-state-title");
	title.innerHTML = state.name;

	var message = document.getElementById("popularvote-message");
	message.innerHTML = "";
	
	var ranges = document.getElementById("popularvote-ranges");
	while(ranges.firstChild) {
		ranges.removeChild(ranges.firstChild);
	}
	
	if(state.name.includes('-AL')) {
		title.innerHTML = "Select a disctrict to set popular vote";
		return;
	}

	var displayTossup = document.createElement('DIV');
	displayTossup.setAttribute('id', 'popular-display-Tossup');

	var displayTurnout = document.createElement('DIV');
	displayTurnout.setAttribute('id', 'popularvote-turnout-display');
	displayTurnout.innerHTML = 'Turnout - ' + state.turnout + '%';
	var turnoutRange = document.createElement('INPUT');
	turnoutRange.setAttribute('id', 'popularvote-turnout');
	turnoutRange.setAttribute('type', 'range');
	turnoutRange.setAttribute('max', 100);
	turnoutRange.setAttribute('step', 0.1);
	turnoutRange.setAttribute('value', state.turnout);

	turnoutRange.onchange = (function() {
		return function() {
			var turnout = document.getElementById('popularvote-turnout').value;
			state.turnout = turnout;

			state.setColor('Tossup', 0, true);

			for(var key in candidates) {
				if(key === 'Tossup') {
					continue;
				}
				var range = document.getElementById('popular-range-' + key);
				range.setAttribute('max', (state.voters * (turnout / 100.0)));
			}

			var displayTurnout = document.getElementById('popularvote-turnout-display');
			displayTurnout.innerHTML = 'Turnout - ' + this.value + '%';

			countPopularVote();
		}
	})();

	turnoutRange.oninput = (function() {
		return function() {
			var displayTurnout = document.getElementById('popularvote-turnout-display');
			displayTurnout.innerHTML = 'Turnout - ' + this.value + '%';
		}
	})();

	ranges.append(displayTurnout);
	ranges.appendChild(turnoutRange);

	var max  = state.voters * (state.turnout / 100.0);
	var total = 0;

	for(var key in candidates) {
		if(key === 'Tossup')
			continue;

		var range = document.createElement('INPUT');
		range.setAttribute('id', 'popular-range-' + key);
		range.setAttribute('type', 'range');
		range.setAttribute('max', max);
		range.setAttribute('step', 1);
		if(typeof state.popularVote[key] === 'undefined') {
			state.popularVote[key] = 0;
		}
		range.value = state.popularVote[key];
		total += state.popularVote[key];
		// create display for slider
		var display = document.createElement('DIV');
		display.setAttribute('id', 'popular-display-' + key);
		display.innerHTML = key + ' - ' + numberWithCommas(range.value) + ' - ' +
			((state.popularVote[key] / max) * 100).toFixed(2) + '%';


		range.onchange = (function() {
			return function(b) {
				var totalVotes = 0;
				for(var candidate in candidates) {
					if(candidate === 'Tossup')
						continue;
					var range = document.getElementById('popular-range-' + candidate);
					var rangeValue = parseInt(range.value);
					state.popularVote[candidate] = rangeValue;
					totalVotes += rangeValue;
				}
				state.popularVote['Tossup'] = state.voters - totalVotes;

				var autoMargins = document.getElementById('popularvote-automargins').checked;
				if(autoMargins) {
					// Calculate the margin of victory
					var win = 0;
					var winCandidate = "Tossup";
					var secondWin = 0;
					var secondWinCandidate = "Tossup";
					for(var candidate in candidates) {
						// don't compare margins with the no vote
						if(candidate === 'Tossup')
							continue;
						var votes = state.popularVote[candidate];
						if(votes > win) {
							secondWin = win;
							secondWinCandidate = winCandidate;
							win = votes;
							winCandidate = candidate;
						} else if(votes > secondWin) {
							secondWin = votes;
							secondWinCandidate = candidate;
						}
					}

					var combine = win + secondWin;
					var margin = (((win - secondWin) / combine) * 100);
					if(winCandidate === 'Tossup') {
						state.setColor('Tossup', 0);
					} else {
						if(margin < 5.0) {
							state.setColor(winCandidate, 3);
						} else if(margin < 10.0) {
							state.setColor(winCandidate, 2);
						} else if(margin < 15.0) {
							state.setColor(winCandidate, 1);
						} else {
							state.setColor(winCandidate, 0);
						}
					}
				}

				countPopularVote();
				countVotes();
				updateLegend();
				updateChart();
			}
		})();

		range.oninput = (function() {
			var refkey = key;
			var refdisplay = display;
			var refdisplayTossup = displayTossup;
			var prevvalue = parseInt(range.value);
			var refstate = state;
			var refcandidate = key;
			return function(b) {
				total -= prevvalue;
				total += parseInt(this.value);

				max = state.voters * (state.turnout / 100.0);

				if(total > max) {
					var diff = total - max;
					total -= diff;
					this.value -= diff;
				}
				
				prevvalue = parseInt(this.value);

				displayTossup.innerHTML = 'Tossup - ' + numberWithCommas((max - total).toFixed(0)) + ' - ' +
					(( (max - total) / max) * 100).toFixed(2) + '%';
				
				// update the display	
				refdisplay.innerHTML = refkey + ' - ' + numberWithCommas(this.value) + ' - ' + 
					((this.value / max) * 100).toFixed(2) + '%';
	
				state.popularVote[refkey] = parseInt(this.value);
			}
		})();
		
		ranges.appendChild(display);
		ranges.appendChild(range);
	}

	displayTossup.innerHTML = 'Tossup - ' + numberWithCommas((max - total).toFixed(0)) + ' - ' + (( (max - total) / max) * 100).toFixed(2) + '%';
	ranges.appendChild(displayTossup);
}

function countPopularVote() {
	if(verifyPopularVote() === false) {
		return;
	}

	var ranges = document.getElementById("national-popularvote-ranges");
	while(ranges.firstChild) {
		ranges.removeChild(ranges.firstChild);
	}

	var popularVote = {};
	var splitState = {};

	for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
		var state = states[stateIndex];

		// skip at large state portions
		if(state.name.includes('-AL')) {
			continue;
		}

		for(var candidate in state.popularVote) {


			if(state.popularVote[candidate]) {
				if(popularVote[candidate]) {
					popularVote[candidate] += state.popularVote[candidate];
					
				} else {
					popularVote[candidate] = 0;
					popularVote[candidate] += state.popularVote[candidate];
				}
			
				if(state.name.includes('-') && state.name.includes('AL') === false) {
					var mainName = state.name.split('-')[0];
					var district = parseInt(state.name.split('-')[1]);
					if(typeof splitState[mainName] === 'undefined') {
						splitState[mainName] = []; 
					}

					if(typeof splitState[mainName][district] === 'undefined') {
						splitState[mainName][district] = {};
					}

					splitState[mainName][district][candidate] = state.popularVote[candidate];
				}
			} else {
				state.popularVote[candidate] = 0;
			}
		}
	}

	for(var stateKey in splitState) {
		var winCount = 0;
		var winCandidate = "Tossup";
		for(var candidate in candidates) {
			var votes = 0;
			for(var districtKey in splitState[stateKey]) {
				votes += splitState[stateKey][districtKey][candidate];
			}
			if(votes > winCount) {
				winCount = votes;
				winCandidate = candidate;
			}
		}

		var state = states.filter(obj => {
			return obj.name === stateKey + '-AL';	
		})[0];

		if(winCount === 0) {
			state.popularVote = 0;
			state.setColor('Tossup', 0);
		} else {
			state.popularVote = winCount;
			state.setColor(winCandidate, 0);
		}
	}

	for(var candidate in popularVote) {
		var display = document.createElement('DIV');
		display.setAttribute('id', 'national-popular-display-' + candidate);
		display.innerHTML = candidate + ' - ' + numberWithCommas(popularVote[candidate]);
		ranges.appendChild(display);
	}
}
