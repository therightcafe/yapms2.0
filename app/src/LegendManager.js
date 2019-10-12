class LegendManager {
	static toggleLegendCounter() {
		LegendManager.legendCounter = !LegendManager.legendCounter;
		LegendManager.updateLegend();
	}

	static toggleLegendLeans() {
		LegendManager.legendLeans = !LegendManager.legendLeans;
		ChartManager.chart.generateLegend();
		LegendManager.updateLegend();
	}
	
	static selectCandidateDisplay(html) {
		var legendButtons = html.parentElement.children;

		for(var index = 0; index < legendButtons.length; ++index) {
			var button = legendButtons[index];
			var text = button.childNodes[0];
			text.style.padding = '4px';
		}
		
		html.childNodes[0].style.padding = '7px';
	}

	static updateLegend() {
		for(var key in CandidateManager.candidates) {
			var candidate = CandidateManager.candidates[key];
			var html = document.getElementById(candidate.name + '-text');

			var newHTML = candidate.name;

			if(LegendManager.legendCounter == true) {
				newHTML += ' ' + candidate.voteCount;
			}

			if(html !== null) {
				html.innerHTML = newHTML;
			}

			if(key === paintIndex) {
				LegendManager.selectCandidateDisplay(html.parentElement);
			}
		}
	}
}

LegendManager.legendCounter = true;
LegendManager.legendLeans = true;
