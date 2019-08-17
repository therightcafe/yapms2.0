// list of candidates
var candidates = {};

class Candidate {
	constructor(name, colors) {
		this.name = name;
		this.colors = colors;
		this.voteCount = 0;
		this.probVoteCounts = [0,0,0,0];
	}
};

var tossupColor = 2;
var TOSSUP = new Candidate('Tossup', ['#000000', '#ffffff', '#bbb7b2', '#000000']);

function initCandidates() {
	candidates = {};
	candidates['Tossup'] = TOSSUP;
}

// i dont think this function call in needed
initCandidates();

function saveCustomColors() {
	var customColorName = document.getElementById('custom-color-name');
	var name = customColorName.value;
	var solid = document.getElementById("solidcustom").value;
	appendCookie(name + "solid", solid);	
	var likely = document.getElementById("likelycustom").value;
	appendCookie(name + "likely", likely);	
	var leaning = document.getElementById("leaningcustom").value;
	appendCookie(name + "leaning", leaning);	
	var tilting = document.getElementById("tiltingcustom").value;
	appendCookie(name + "tilting", tilting);
	setColors(name);
}

// add candidate to the list
// update map, chart and legend
function addCandidate(name, solid, likely, leaning, tilting) {
	//clearDelegates();

	if(name === undefined) {
		var nameHTML = document.getElementById('name');
		if(nameHTML !== null) {
			name = nameHTML.value;
		} else {
			name = "Error";
		}
	}

	// ignore white space candidates
	if(name.trim() === '') {
		return;
	}

	if(solid === undefined) {
		var solidHTML = document.getElementById('solid');
		if(solidHTML !== null) {
			solid = solidHTML.value;
		} else {
			solid = '#000000';
		}
	}

	if(likely === undefined) {
		var likelyHTML = document.getElementById('likely');
		if(likelyHTML !== null) {
			likely = likelyHTML.value;
		} else {
			likely = '#000000';
		}
	}

	if(leaning === undefined) {
		var leaningHTML = document.getElementById('leaning');
		if(leaningHTML !== null) {
			leaning = leaningHTML.value;
		} else {
			leaning = '#000000';
		}
	}

	if(tilting === undefined) {
		var tiltingHTML = document.getElementById('tilting');
		if(tiltingHTML !== null) {
			tilting = tiltingHTML.value;
		} else {
			tilting = '#000000';
		}
		
	}
	
	var candidate = new Candidate(name, [solid, likely, leaning, tilting]);
	candidates[name] = candidate;

	verifyMap();
	verifyPaintIndex();
	countVotes();
	updateChart();
	chart.generateLegend();
	updateLegend();

	countPopularVote();
}

function setCandidate() {
	closeAllPopups();

	var candidateid = document.getElementById('candidate-originalName').value;
	var newname = document.getElementById('candidate-name').value;
	var solidColor = document.getElementById('candidate-solid').value;
	var likelyColor = document.getElementById('candidate-likely').value;
	var leanColor = document.getElementById('candidate-lean').value;
	var tiltcolor = document.getElementById('candidate-tilt').value;

	// only rename the property if the name changed
	if(newname !== candidateid) {
		Object.defineProperty(candidates, newname,
			Object.getOwnPropertyDescriptor(candidates, candidateid));
		setChangeCandidate(candidateid, newname);
		delete candidates[candidateid];
	}

	var candidate = candidates[newname];
	candidate.name = newname;
	candidate.colors[0] = solidColor;
	candidate.colors[1] = likelyColor;
	candidate.colors[2] = leanColor;
	candidate.colors[3] = tiltcolor;

	chart.generateLegend();
	countVotes();
	updateLegend();
	verifyMap();
	updateChart();
}

function deleteCandidate() {
	closeAllPopups();
	var candidateid = document.getElementById('candidate-originalName').value;
	for(var index = 0; index < states.length; ++index) {
		state = states[index];
		// set the candidate to tossup
		if(state.getCandidate() === candidateid) {
			state.setColor('Tossup', 0);
		}

		// if its a primary remove the delegates and set them to tossup
		var dels = state.delegates[candidateid];
		if(dels) {
			state.delegates['Tossup'] += dels;
		}
		state.delegates[candidateid] = undefined;
	}

	delete candidates[candidateid];
	chart.generateLegend();
	countVotes();
	updateLegend();
	verifyMap();
	updateChart();
	countPopularVote();
}

function deleteCandidateByName(name) {
	var candidateid = name;
	for(var index = 0; index < states.length; ++index) {
		state = states[index];
		// set the candidate to tossup
		if(state.getCandidate() === candidateid) {
			state.setColor('Tossup', 0);
		}

		// if its a primary remove the delegates and set them to tossup
		var dels = state.delegates[candidateid];
		if(dels) {
			state.delegates['Tossup'] += dels;
		}
		state.delegates[candidateid] = undefined;
	}

	delete candidates[candidateid];
	chart.generateLegend();
	countVotes();
	updateLegend();
	verifyMap();
	updateChart();
	countPopularVote();
}

function deleteCandidateByNameConfirm(name) {
	closeAllPopups();
	var popup = document.getElementById("deletecandidateconfirm");
	var hidden = document.getElementById("delete-candidate-name");
	hidden.value = name;
	popup.style.display = 'inline';
}
