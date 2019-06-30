function updateBattleChart() {

	if(Object.keys(candidates).length > 3) {
		if(mobile) {
			setChart('pie', 'bottom');
		} else {
			setChart('pie');
		}

		return;
	}

	var tossup = document.getElementById('tossupbar');

	var topbar = document.getElementById('topbar');
	var topbarSolid = document.getElementById('topbar-solid');
	var topbarLikely = document.getElementById('topbar-likely');
	var topbarLean = document.getElementById('topbar-lean');
	var topbarTilt = document.getElementById('topbar-tilt');

	var bottombar = document.getElementById('bottombar');
	var bottombarSolid = document.getElementById('bottombar-solid');
	var bottombarLikely = document.getElementById('bottombar-likely');
	var bottombarLean = document.getElementById('bottombar-lean');
	var bottombarTilt = document.getElementById('bottombar-tilt');

	// this is for when the candidates get removed
	// if a candidate gets removed, it will not get cleared from
	// the graph in the loop below
	topbar.style.flexBasis = '';
	bottombar.style.flexBasis = '';

	var candidateIndex = -1;
	for(var key in candidates) {
		++candidateIndex;

		var candidate = candidates[key];

		if(candidateIndex == 0) {
			tossup.style.background = candidate.colors[2];
			
			tossup.style.flexBasis = '' + (candidate.voteCount / totalVotes) * 100 + '%';
			if(chartLabels) {
				tossup.innerHTML = '<p>' + candidate.voteCount + '</p>';
			} else {
				tossup.innerHTML = '<p></p>';
			}
		} else if(candidateIndex == 1) {
			topbar.style.flexBasis = '' + 
				(candidate.voteCount / totalVotes) * 100 + '%';
			if(chartLeans) {
				topbarSolid.style.flexBasis = '' + 
					(candidate.probVoteCounts[0] / candidate.voteCount) * 100 + '%';
				topbarSolid.style.background = candidate.colors[0];

				topbarLikely.style.flexBasis = '' + 
					(candidate.probVoteCounts[1] / candidate.voteCount) * 100 + '%';
				topbarLikely.style.background = candidate.colors[1];

				topbarLean.style.flexBasis = '' + 
					(candidate.probVoteCounts[2] / candidate.voteCount) * 100 + '%';
				topbarLean.style.background = candidate.colors[2];

				topbarTilt.style.flexBasis = '' +
					(candidate.probVoteCounts[3] / candidate.voteCount) * 100 + '%';
				topbarTilt.style.background = candidate.colors[3];
				
				if(chartLabels) {
					topbarSolid.innerHTML = '<p>'+candidate.probVoteCounts[0]+'</p>';
					topbarLikely.innerHTML = '<p>'+candidate.probVoteCounts[1]+'</p>';
					topbarLean.innerHTML = '<p>'+candidate.probVoteCounts[2]+'</p>';
					topbarTilt.innerHTML = '<p>' + candidate.probVoteCounts[3] + '</p>';
				} else {
					topbarSolid.innerHTML = '<p></p>';
					topbarLikely.innerHTML = '<p></p>';
					topbarLean.innerHTML = '<p></p>';
					topbarTilt.innerHTML = '<p></p>';
				}
			} else {
				topbarSolid.style.flexBasis = '100%'; 
				topbarSolid.style.background = candidate.colors[0];
				topbarLikely.style.flexBasis = '0%';
				topbarLikely.style.background = candidate.colors[1];
				topbarLean.style.flexBasis = '0%'; 
				topbarLean.style.background = candidate.colors[2];
				topbarTilt.style.flexBasis = '0%';
				topbarTilt.style.background = candidate.colors[3];

				if(chartLabels) {
					topbarSolid.innerHTML = '<p>' + (
						candidate.probVoteCounts[0] 
						+ candidate.probVoteCounts[1]
						+ candidate.probVoteCounts[2]
						+ candidate.probVoteCounts[3]) + '</p>';
					topbarLikely.innerHTML = '<p></p>';
					topbarLean.innerHTML = '<p></p>';
					topbarTilt.innerHTML = '<p></p>';
				} else {
					topbarSolid.innerHTML = '<p></p>';
					topbarLikely.innerHTML = '<p></p>';
					topbarLean.innerHTML = '<p></p>';
					topbarTilt.innerHTML = '<p></p>';
				}
			}

		} else if(candidateIndex == 2) {
			bottombar.style.flexBasis = '' + 
				(candidate.voteCount / totalVotes) * 100 + '%';
			if(chartLeans) {
				bottombarSolid.style.flexBasis = '' + 
					(candidate.probVoteCounts[0] / candidate.voteCount) * 100 + '%';
				bottombarSolid.style.background = candidate.colors[0];

				bottombarLikely.style.flexBasis = '' + 
					(candidate.probVoteCounts[1] / candidate.voteCount) * 100 + '%';
				bottombarLikely.style.background = candidate.colors[1];

				bottombarLean.style.flexBasis = '' + 
					(candidate.probVoteCounts[2] / candidate.voteCount) * 100 + '%';
				bottombarLean.style.background = candidate.colors[2];
				
				bottombarTilt.style.flexBasis = '' +
					(candidate.probVoteCounts[3] / candidate.voteCount) * 100 + '%';
				bottombarTilt.style.background = candidate.colors[3];

				if(chartLabels) {
					bottombarSolid.innerHTML = '<p>'+candidate.probVoteCounts[0]+'</p>';
					bottombarLikely.innerHTML = '<p>'+candidate.probVoteCounts[1]+'</p>';
					bottombarLean.innerHTML = '<p>'+candidate.probVoteCounts[2]+'</p>';
					bottombarTilt.innerHTML = '<p>' + candidate.probVoteCounts[3] + '</p>';
				} else {
					bottombarSolid.innerHTML = '<p></p>';
					bottombarLikely.innerHTML = '<p></p>';
					bottombarLean.innerHTML = '<p></p>';
					bottombarTilt.innerHTML = '<p></p>';
				}
			} else {	
				bottombarSolid.style.flexBasis = '100%';
				bottombarSolid.style.background = candidate.colors[0];
				bottombarLikely.style.flexBasis = '0%';
				bottombarLikely.style.background = candidate.colors[1];
				bottombarLean.style.flexBasis = '0%'; 
				bottombarLean.style.background = candidate.colors[2];
				bottombarTilt.style.flexBasis = '0%';
				bottombarTilt.style.background = candidate.colors[3];

				if(chartLabels) {
					bottombarSolid.innerHTML = '<p>' + (
						candidate.probVoteCounts[0] 
						+ candidate.probVoteCounts[1]
						+ candidate.probVoteCounts[2]
						+ candidate.probVoteCounts[3]) + '</p>';
					bottombarLikely.innerHTML = '<p></p>';
					bottombarLean.innerHTML = '<p></p>';
					bottombarTilt.innerHTML = '<p></p>';
				} else {
					bottombarSolid.innerHTML = '<p></p>';
					bottombarLikely.innerHTML = '<p></p>';
					bottombarLean.innerHTML = '<p></p>';
					bottombarTilt.innerHTML = '<p></p>';
				}
			}
		}
	}
}

