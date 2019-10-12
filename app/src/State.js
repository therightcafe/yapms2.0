var totalVotes = 0;

class State {
	constructor(name, htmlElement, dataid) {
		this.name = name;
		this.colorValue = 1;
		this.htmlElement = htmlElement;
		this.candidate = 'Tossup';
		this.dataid = dataid;
		this.voteCount = 0;
		this.voteCount_beforeDisable = 0;
		this.resetVoteCount();
		this.disabled = false;
		this.locked = false;
		this.voters = 0;
		this.popularVote = {};
		this.turnout = 100;
		this.onChange = function() { 
		}
	}

	resetVoteCount() {
		if(this.dataid === 'congressional' ||
			this.dataid === 'usa_gubernatorial') {
			this.setVoteCount(1, false);
			this.voteCount_beforeDisable = 1;
		} else if(this.dataid === 'senate') {
			this.setVoteCount(2, false);
			this.voteCount_beforeDisable = 2;
		} else if(this.dataid === 'ltesenate') {
			this.setVoteCount(1, false);
			this.voteCount_beforeDisable = 1;
		} else if(this.dataid === 'dem_primary' ||
				this.dataid === 'rep_primary') {
			this.setVoteCount(data[this.dataid][this.name], false);
			this.voteCount_beforeDisable = data[this.dataid][this.name];
		}else if(this.dataid === 'usa_1972_ec') {
			this.setVoteCount(data[this.dataid][this.name], true);
			this.voteCount_beforeDisable = data[this.dataid][this.name];
		} else if(this.dataid === 'russia_federal_council') {
			this.setVoteCount(2, false);
			this.voteCount_beforeDisable = 2;
		} else if(this.dataid === 'duma') {
			if(this.name === 'Russia') {
				this.setVoteCount(225, false);
				this.voteCount_beforeDisable = 225;
			} else {
				this.setVoteCount(1, false);
				this.voteCount_beforeDisable = 1;
			}
		} else {
			this.setVoteCount(data[this.dataid][this.name], false);
			this.voteCount_beforeDisable = data[this.dataid][this.name];
		}
	}

	getCandidate() { 
		return this.candidate; 
	}

	getName() { 
		return this.name; 
	}
	
	getColorValue() { 
		return this.colorValue; 
	}

	getVoteCount() { 
		return this.voteCount; 
	}
	
	setVoteCount(value, updateText) {
		var diff = value - this.voteCount;
		this.voteCount = value;
		this.delegates = {};
		this.delegates['Tossup'] = value;
		if(MapLoader.save_type === 'proportional' || MapLoader.save_type === 'primary') {
			this.candidate = 'Tossup';
			this.setColor('Tossup', 2);
		}
		totalVotes += diff;

		// update the html text display
		if(updateText === true) {
			var stateText = document.getElementById(this.name + '-text');
			var text = this.name + ' ' + value;
			if(stateText !== null) {
				// the text elements in an svg are inside spans
				if(typeof stateText.childNodes[1] !== 'undefined') {
					stateText.childNodes[1].innerHTML = ' ' + value;
				} else {
					stateText.childNodes[0].innerHTML = this.name + ' ' + value;
				}
			}
		}
	}

	getHtml() { 
		return this.htmlElement; 
	}

	getDisplayColor() {
		return this.htmlElement.style.fill;
	}

	setDisplayColor(color) {
		this.htmlElement.style.fill = color;

		var button = document.getElementById(this.name + '-button');
		if(button !== null) {
			button.style.fill = color;
		}

		var land = document.getElementById(this.name + '-land');
		if(land !== null) {
			land.style.fill = color;
		}
	}

	verifyTossupColor() {
		if(this.candidate === 'Tossup') {
			this.setDisplayColor(CandidateManager.TOSSUP.colors[2]);
		}
	}

	toggleLock() {
		if(this.locked == false) {
			this.disabled = true;

			this.locked = !this.locked;
			if(this.name.includes('-S')) {
				this.htmlElement.style.visibility = 'hidden';
			}
			this.setDisplayColor(CandidateManager.TOSSUP.colors[2]);
			this.htmlElement.setAttribute('fill-opacity', '0.2');
			this.htmlElement.setAttribute('stroke-opacity', '0.2');
			var stateText = document.getElementById(this.name + '-text');
			if(stateText !== null) {
				stateText.setAttribute('fill-opacity', '0.2');
			}

			var land = document.getElementById(this.name + '-land');
			if(land !== null) {
				land.setAttribute('fill-opacity', '0.2');
				land.setAttribute('stroke-opacity', '0.2');
			}

			var button = document.getElementById(this.name + '-button');
			if(button !== null) {
				button.setAttribute('fill-opacity', '0.2');
				button.setAttribute('stroke-opacity', '0.2');
			}

			var stateLandText = document.getElementById(this.name.split("-")[0] + '-text');
			if(stateLandText !== null) {
//				stateLandText.setAttribute('fill-opacity', '0.25');
			}

		} else if(this.locked == true) {
			this.disabled = false;
			this.locked = !this.locked;
			this.setColor(this.getCandidate(), this.getColorValue());
			this.htmlElement.setAttribute('fill-opacity', '1.0');
			this.htmlElement.setAttribute('stroke-opacity', '1.0');
			if(this.name.includes('-S')) {
				this.htmlElement.style.visibility = 'visible';
			}
			var stateText = document.getElementById(this.name + '-text');
			if(stateText !== null) {
				stateText.setAttribute('fill-opacity', '1.0');
			}
			var land = document.getElementById(this.name + '-land');
			if(land != null) {
				land.setAttribute('fill-opacity', '1.0');
				land.setAttribute('stroke-opacity', '1.0');
			}
			
			var button = document.getElementById(this.name + '-button');
			if(button !== null) {
				button.setAttribute('fill-opacity', '1.0');
				button.setAttribute('stroke-opacity', '1.0');
			}
			
			var stateLandText = document.getElementById(this.name.split("-")[0] + '-text');
			if(stateLandText !== null) {
//				stateLandText.setAttribute('fill-opacity', '1.0');
			}
		}
	}

	toggleDisable() {
		if(this.locked == true) {
			return;
		}

		if(this.disabled == false) {
			this.setVoteCount(0, MapLoader.save_type === "presidential");
			this.setColor('Tossup', 2);

			//this.setDisplayColor(candidates['Tossup'].colors[1]);
			this.disabled = !this.disabled;
			this.htmlElement.setAttribute('fill-opacity', '0.25');
			this.htmlElement.setAttribute('stroke-opacity', '0.25');
			if(this.name.includes('-S')) {
	//			this.htmlElement.style.visibility = 'hidden';
			}
		
			if(MapLoader.save_type !== 'senatorial') {
				var stateText = document.getElementById(this.name + '-text');
				if(stateText !== null) {
					stateText.setAttribute('fill-opacity', '0.25');
				}
			}

			var land = document.getElementById(this.name + '-land');
			if(land !== null) {
				land.setAttribute('fill-opacity', '0.25');
				land.setAttribute('stroke-opacity', '0.25');
			}

			var button = document.getElementById(this.name + '-button');
			if(button !== null) {
				button.setAttribute('fill-opacity', '0.25');
				button.setAttribute('stroke-opacity', '0.25');
			}

			if(MapLoader.save_type !== 'senatorial') {
				var stateLandText = document.getElementById(this.name.split("-")[0] + '-text');
				if(stateLandText !== null) {
					stateLandText.setAttribute('fill-opacity', '0.25');
				}
			}

		} else if(this.disabled == true) {
			this.resetVoteCount();
			this.setVoteCount(this.voteCount, MapLoader.save_type === "presidential");
			//this.setVoteCount(this.voteCount_beforeDisable, save_type === "presidential");
			this.disabled = !this.disabled;
			this.setColor(this.getCandidate(), this.getColorValue());
			this.htmlElement.setAttribute('fill-opacity', '1.0');
			this.htmlElement.setAttribute('stroke-opacity', '1.0');
			if(this.name.includes('-S')) {
				this.htmlElement.style.visibility = 'visible';
			}
			var stateText = document.getElementById(this.name + '-text');
			if(stateText !== null) {
				stateText.setAttribute('fill-opacity', '1.0');
			}
			var land = document.getElementById(this.name + '-land');
			if(land != null) {
				land.setAttribute('fill-opacity', '1.0');
				land.setAttribute('stroke-opacity', '1.0');
			}
			
			var button = document.getElementById(this.name + '-button');
			if(button !== null) {
				button.setAttribute('fill-opacity', '1.0');
				button.setAttribute('stroke-opacity', '1.0');
			}
			
			var stateLandText = document.getElementById(this.name.split("-")[0] + '-text');
			if(stateLandText !== null) {
				stateLandText.setAttribute('fill-opacity', '1.0');
			}
		}
	}

	// only incrememnt though the colors of the specified candidate
	// if the state isn't this candidates color, start at solid
	incrementCandidateColor(candidate, setPopularVote) {
		if(this.disabled) {
			return;
		}

		// if changing color set to solor
		if(this.candidate !== candidate) {
			this.colorValue = 0;
		}
		// otherwise increment
		else {
			this.colorValue += 1;
		}

		// keep the color value within bounds
		if(this.candidate === 'Tossup') {
			// if the candidate is tossup go to max
			if(this.colorValue >= 3) {
				this.colorValue = 0;
			}

		} else {
			// if the candidate is anything else...
			//if(this.colorValue >= maxColorValue + 1) {
			if(this.colorValue >= maxColorValues) {
				this.colorValue = 0;
			}

			if(CandidateManager.candidates[candidate].singleColor) {
				this.colorValue = 0;
			}
		}

		// make sure the candidate value is correct
		this.candidate = candidate;

		// skip black color for tossup candidate
		if(this.candidate === 'Tossup') {
			this.colorValue = CandidateManager.tossupColor;
		}

		var color = CandidateManager.TOSSUP.colors[CandidateManager.tossupColor];
		
		if(this.candidate in CandidateManager.candidates &&
			CandidateManager.candidates[this.candidate].colors !== undefined && 
			CandidateManager.candidates[this.candidate].colors !== null) {
			// get color
			color = CandidateManager.candidates[this.candidate].colors[this.colorValue];
			// set color
			this.htmlElement.style.fill = color;
		}

		var land = document.getElementById(this.name + '-land');
		if(land != null) {
			land.style.fill = color;
		}

		var button = document.getElementById(this.name + '-button');
		if(button != null) {
			button.style.fill = color;
		}

		if(setPopularVote) {
			for(var key in CandidateManager.candidates) {
				if(key === candidate) {
					this.popularVote[key] = this.voters * (this.turnout / 100.0);
				} else {
					this.popularVote[key] = 0;
				}
			}
		}

		if(typeof this.onChange === 'function') {
			this.onChange();
		}
	}

	// directly change the color of a state (add error checking pls)
	setColor(candidate, colorValue, setPopularVote) {
		if(this.disabled) {
			return;
		}

		this.candidate = candidate;

		// prevent black color
		if(candidate === 'Tossup' && colorValue == 0) {
			colorValue = 2;
		}

		this.colorValue = colorValue;
		
		var color = CandidateManager.candidates[candidate].colors[colorValue];

		this.htmlElement.style.fill = color;

		var land = document.getElementById(this.name + '-land');
		if(land != null) {
			land.style.fill = color;
		}

		var button = document.getElementById(this.name + '-button');
		if(button != null) {
			button.style.fill = color;
		}

		if(setPopularVote) {
			for(var key in CandidateManager.candidates) {
				if(key === candidate) {
					this.popularVote[key] = this.voters * (this.turnout / 100.0);
				} else {
					this.popularVote[key] = 0;
				}
			}
		}
		
		if(typeof this.onChange === 'function') {
			this.onChange();
		}
	}

	static setEC() {
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
		ChartManager.updateChart();
		LegendManager.updateLegend();
		MapManager.verifyMap();
	}
};
