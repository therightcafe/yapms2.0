class MapManager {
	static centerMap() {
		if(MapManager.panObject === null)
			return;

		MapManager.panObject.resize();
		MapManager.panObject.fit();
		MapManager.panObject.center();
		MapManager.panObject.zoomBy(0.85);
	}

	static setLockMap(set) {
		var lockButton = document.getElementById('lockbutton');
		if(set === true) {
			if(lockButton) {
				lockButton.style.opacity = '0.5';
			}
			MapManager.panObject.disablePan();
			MapManager.panObject.disableZoom();
			MapManager.lockedMap = true;
		} else {
			if(lockButton) {
				lockButton.style.opacity = '1';
			}
			MapManager.panObject.enablePan();
			MapManager.panObject.enableZoom();
			MapManager.lockedMap = false;
		}
	}

	static toggleLockMap() {
		var lockButton = document.getElementById('lockbutton');
		if(MapManager.lockedMap) {
			if(lockButton) {
				lockButton.style.opacity = '1';
			}
			MapManager.panObject.enablePan();
			MapManager.panObject.enableZoom();
			MapManager.lockedMap = false;
		} else {
			if(lockButton) {
				lockButton.style.opacity = '0.5';
			}
			MapManager.panObject.disablePan();
			MapManager.panObject.disableZoom();
			MapManager.lockedMap = true;
		}
	}

	static verifyMap() {
		states.forEach(function(state) {
			//state.verifyDisabledColor();
			state.verifyTossupColor();
			if(typeof CandidateManager.candidates[state.candidate] === 'undefined') {
				// if the current color is out of bounds set it to white
				state.setColor('Tossup', CandidateManager.tossupColor);
			} else { 
				// the candidate the state thinks its controled by
				var currentCandidate = state.getCandidate();
				// the candidate the state should be controle by
				var shouldCandidate = CandidateManager.candidates[state.getCandidate()].name;

				// if these values differ, change the state to tossup
				if(currentCandidate !== shouldCandidate) {
					state.setColor('Tossup', CandidateManager.tossupColor);
				} else if(state.getCandidate() === 'Tossup') {
					state.setColor('Tossup', 2);	
				}else {
					var candidate = CandidateManager.candidates[state.getCandidate()];
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
			if(typeof CandidateManager.candidates[state.candidate] === 'undefined') {
				// if the current color is out of bounds set it to white
				state.setColor('Tossup', CandidateManager.tossupColor);
			} else { 
				// the candidate the state thinks its controled by
				var currentCandidate = state.getCandidate();
				// the candidate the state should be controle by
				var shouldCandidate = CandidateManager.candidates[state.getCandidate()].name;

				// if these values differ, change the state to tossup
				if(currentCandidate !== shouldCandidate) {
					state.setColor('Tossup', CandidateManager.tossupColor);
				} else if(state.getCandidate() === 'Tossup') {
					state.setColor('Tossup', 2);	
				}else {
					var candidate = CandidateManager.candidates[state.getCandidate()];
					if(candidate.singleColor === true) {
						state.setColor(state.getCandidate(), 0);
					} else {
						state.setColor(state.getCandidate(), state.getColorValue());
					}
				}
			}
		});
	}
}

MapManager.lockedMap = false;
MapManager.panObject = null;
