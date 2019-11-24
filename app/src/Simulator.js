class Simulator {
	static init() {
		if(mobile) {
			return; 
		}

		var noclick = document.getElementById('simulator-noclick');
		noclick.addEventListener('change', function(event) {
			Simulator.ignoreClick = event.target.checked;
		});
		
		var presets = document.getElementById("sidebar-presets-select-simulator");
		presets.addEventListener('change', function(event) {
			switch(this.value) {
				case "cook":
					Simulator.cookPresidentialPreset();
					break;
				case "random":
					Simulator.randomPreset();
					break;
				case "uniform":
					Simulator.uniformPreset();
					break;
			}
		});
	
		var select = document.getElementById("sidebar-presets-select-simulator");
		while(select.firstChild) {
			select.removeChild(select.firstChild);
		}

		var option = document.createElement("option");
		option.text = "Uniform";
		option.value = "uniform";
		presets.appendChild(option);
		
		option = document.createElement("option");
		option.text = "Random";
		option.value = "random";
		presets.appendChild(option);

		if(php_load_map_id === "USA_2020_presidential") {
			option = document.createElement("option");
			option.text = "Cook";
			option.value = "cook";
			presets.appendChild(option);

			if(php_load_map === false) {
				Simulator.cookPresidentialPreset();
			}
		} else {
			if(php_load_map === false) {
				Simulator.uniformPreset();
			}
		}
	}

	static uniformPreset() {
		if(mobile) {
			return; 
		}

		console.log("Simulator: Uniform preset");

		var presets = document.getElementById("sidebar-presets-select-simulator");
		presets.value = "uniform";	
		for(var index = 0; index < states.length; ++index) {
			var state = states[index];
			state.simulator = {};
			for(var key in CandidateManager.candidates) {
				if(key === "Tossup") {
					continue;
				}
				state.simulator[key] = 0;
			}			
		}
		
		for(var index = 0; index < proportionalStates.length; ++index) {
			var state = proportionalStates[index];
			state.simulator = {};
			
			for(var key in CandidateManager.candidates) {
				if(key === "Tossup") {
					continue;
				}
				state.simulator[key] = 0;
			}
		}
	
		if(Simulator.state) {	
			Simulator.view(Simulator.state);
		}
	}

	static randomPreset() {
		if(mobile) {
			return; 
		}
		
		console.log("Simulator: Random preset");

		var presets = document.getElementById("sidebar-presets-select-simulator");
		presets.value = "random";	
		for(var index = 0; index < states.length; ++index) {
			var state = states[index];
			state.simulator = {};
			for(var key in CandidateManager.candidates) {
				if(key === "Tossup") {
					continue;
				}
				state.simulator[key] = Math.random() * 100;
			}			
		}	
		
		for(var index = 0; index < proportionalStates.length; ++index) {
			var state = proportionalStates[index];
			state.simulator = {};
			
			for(var key in CandidateManager.candidates) {
				if(key === "Tossup") {
					continue;
				}
				state.simulator[key] = Math.random() * 100;
			}
		}

		if(Simulator.state) {	
			Simulator.view(Simulator.state);
		}
	}

	static cookPresidentialPreset() {
		if(mobile) {
			return; 
		}
		
		console.log("Simulator: Cook preset");

		var presets = document.getElementById("sidebar-presets-select-simulator");
		presets.value = "cook";	
		PresetLoader.loadPreset('classic');
		for(var index = 0; index < states.length; ++index) {
			var state = states[index];
			state.simulator = {};
			for(var key in CandidateManager.candidates) {
				if(key === "Tossup") {
					continue;
				}
				state.simulator[key] = SimulatorData.USA_2020_Cook[state.name][key];
			}			
		}

		if(Simulator.state) {	
			Simulator.view(Simulator.state);
		}
	}

	static toggle() {
		if(mobile) {
			return; 
		}

		Simulator.enabled = !Simulator.enabled;
		var e1 = document.getElementById('sidebar-state-simulator');
		var e2 = document.getElementById('sidebar-run-simulator');
		var e3 = document.getElementById('sidebar-simulator-head');
		var e4 = document.getElementById('sidebar-settings-simulator');
		var e5 = document.getElementById('sidebar-presets-simulator');
		if(Simulator.enabled) {
			e1.style.display = 'block';
			e2.style.display = 'block';
			e4.style.display = 'block';
			e5.style.display = 'block';
			e3.innerHTML = 'Disable Simulator';
			Simulator.init();
		} else {
			e1.style.display = 'none';
			e2.style.display = 'none';
			e4.style.display = 'none';
			e5.style.display = 'none';
			e3.innerHTML = 'Enable Simulator';
		}
		
		gtag('event', 'click', {
			'event_category': 'tool',
			'event_label': 'Simulator Enabled'
		});
	}

	static view(state) {
		if(mobile) {
			return; 
		}

		if(!Simulator.enabled) {
			return;
		}

		Simulator.state = state;
		
		var ranges = document.getElementById("simulator-ranges");
		while(ranges.firstChild) {
			ranges.removeChild(ranges.firstChild);
		}

		for(var key in CandidateManager.candidates) {
			if(key === "Tossup") {
				continue;
			}
	
			var total = 0;
			for(var stateKey in state.simulator) {
				total += state.simulator[stateKey];
			}
			var percent = 100;
			if(total !== 0) {
				percent = ((state.simulator[key] / total) * 100).toFixed(2);
			}

			var display = document.createElement("DIV");
			display.setAttribute("id", "simulator-display-" + key);
			display.innerHTML = key + " - " + percent + "%";

			var range = document.createElement("INPUT");
			range.setAttribute("id", "simulator-range-" + key);
			range.setAttribute("type", "range");
			range.setAttribute("max", 100);
			range.setAttribute("min", 0);
			range.setAttribute("step", 1);
			range.value = state.simulator[key];

			range.oninput = (function() {
				var refstate = state;
				var refkey = key;
				var refdisplay = display;
				return function() {
					var value = parseInt(this.value);
					refstate.simulator[refkey] = value;
					
					var total = 0;
					for(var key in CandidateManager.candidates) {
						if(key === "Tossup") {
							continue;
						}
						total += refstate.simulator[key];	
					}
					
					for(var key in CandidateManager.candidates) {
						if(key === "Tossup") {
							continue;
						}
						var display = document.getElementById("simulator-display-" + key);
						var percent = 100;
						if(total !== 0) {
							percent = ((refstate.simulator[key] / total) * 100).toFixed(2);
						}
						display.innerHTML = key + " - "  + percent + "%";
					}
				}
			})();
			ranges.appendChild(display);
			ranges.appendChild(range);
		}

		var title = document.getElementById("simulator-state-title");
		if(state.name.match(/(Geometry|path([0-9]+)|g([0-9]+))/g)) {
			title.innerHTML = state.fakename;
		} else {
			title.innerHTML = state.name.replace(/_/g, " ");
		}
	}

	static run() {
		if(mobile) {
			return; 
		}

		MapLoader.clearMapCandidates();
		Simulator.runTimeout = 5000 / states.length;
		Simulator.runStateKey = 0;
		Simulator.runLoop(states, 0, MapLoader.save_type === "proportional" || MapLoader.save_type === "primary");
		Simulator.runLoop(proportionalStates, 0, true);
	}

	static runLoop(stateList, count, proportional) {
		if(stateList.length === 0) {
			return;
		}

		setTimeout(function() {
			var state = stateList[count];
			var candidates = [];
			var totalPower = 0;
			for(var candidateKey in state.simulator) {
				totalPower += state.simulator[candidateKey];
				candidates.push({"name": candidateKey, "power": state.simulator[candidateKey]});
			}

			for(var index = 0; index < candidates.length; ++index) {
				var percentage = 1 / candidates.length;
				if(totalPower !== 0) {
					percentage = candidates[index].power / totalPower;
				}
				if(index !== 0) {
					percentage += candidates[index - 1].percent;
				}
				candidates[index].percent = percentage;
			}

			if(proportional) {
				Simulator.runProportionalState(state, candidates);
			} else {
				Simulator.runTakeAllState(state, candidates);
			}
			
			count += 1;
			
			// Skip disabled states
			while(count < stateList.length &&
				stateList[count].disabled) {
				count += 1;
			}

			if(count < stateList.length) {
				Simulator.runLoop(stateList, count, proportional);
			} else {
				Simulator.runLoopFinish(stateList);
			}
		}, Simulator.runTimeout);
	}
	
	static runTakeAllState(state, candidates) {
		var random = Math.random();
		for(var index = 0; index < candidates.length; ++index) {
			var percent = candidates[index].percent;
			var name = candidates[index].name;
			if(random <= percent) {
				state.setColor(name, 0);
				countVotes();
				ChartManager.updateChart();
				LegendManager.updateLegend();
				break;
			}
		}
	}

	static runProportionalState(state, candidates) {
		var total = state.voteCount;
		for(var index = 0; index < total; ++index) {
			var random = Math.random();
			for(var candidateIndex = 0; candidateIndex < candidates.length; ++candidateIndex) {
				var percent = candidates[candidateIndex].percent;
				if(random <= percent) {
					var name = candidates[candidateIndex].name;
					if(state.delegates[name]) {
						state.delegates[name] += 1;
					} else {
						state.delegates[name] = 1;
					}
					state.delegates["Tossup"] -= 1;
					break;
				}
			}
		}
	
		var majorityIndex = 0;
		for(var candidateIndex = 1; candidateIndex < candidates.length; ++candidateIndex) {
			var checkName = candidates[candidateIndex].name;
			var majorityName = candidates[majorityIndex].name;
			if(state.delegates[checkName] > state.delegates[majorityName]) {
				majorityIndex = candidateIndex;
			}
		}

		state.setColor(candidates[majorityIndex].name, 0);

		countVotes();
		LegendManager.updateLegend();
		ChartManager.updateChart();
	}

	static runLoopFinish(stateList) {
		if(MapLoader.save_dataid === "usa_ec") {
			var me01 = stateList.find(obj => {
				return obj.name === "ME-D1";
			});
			var me02 = stateList.find(obj => {
				return obj.name === "ME-D2";
			});
			if(me01.candidate === me02.candidate) {
				var meal = stateList.find(obj => {
					return obj.name === "ME-AL";
				});

				meal.setColor(me01.candidate, 0);
			}

			var ne01 = stateList.find(obj => {
				return obj.name === "NE-D1";
			});
			var ne02 = stateList.find(obj => {
				return obj.name === "NE-D2";
			});
			var ne03 = stateList.find(obj => {
				return obj.name === "NE-D3";
			});
			if(ne01.candidate === ne02.candidate && ne02.candidate === ne03.candidate) {
				var neal = stateList.find(obj => {
					return obj.name === "NE-AL";
				});
				neal.setColor(ne01.candidate, 0);
			}
		}	
	}
}

Simulator.enabled = false;
Simulator.runStateKey = 0;
Simulator.runStateKeyProportional = 0;
Simulator.runTimeout = 100;
Simulator.ignoreClick = false;
Simulator.state = null;
