var enablePopularVote = false;
var enableCongress = false;
var enableCongressContested = false;

class MapLoader {
	static loadPresetMap(preset, options) {
		// Remove all candidates, and load the ones for the map
		CandidateManager.initCandidates();

		var enableHouse = false;

		if(options) {
			enableHouse = options.enableCongress;
		}
		
		if(preset === 'USA_2020_house_cook') {
			enableCongressContested = true;
			enableHouse = true;
		}

		$.ajax({
			url: "./res/presets/" + preset,
			type: "GET",
			processData: false,
			contentType: false,
			success: function(a, b, c) {
				console.log("Found preset map...");
				try {
					MapLoader.loadSavedMap_new(a, {enableCongress: enableHouse});
				} catch(e) {
					MapLoader.loadSavedMap_old(a, {enableCongress: enableHouse});
					console.log('New file load failed, attempting old');
				}
			},
			error: function(a, b, c) {
				console.log("Did not find preset map...");
				MapLoader.loadMap("../res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true});
			}
		});
	}

	static loadMapFromURL(URL) {
		console.log('Map Loader: ' + URL);
		$.ajax({
			url: URL,
			type: "POST",
			success: function(data) {
				console.log("Map Load: Found saved map");
				try {
					console.log('Map Loader: Attemping new file load');
					MapLoader.loadSavedMap_new(data);
				} catch(e) {
					console.log('Map Loader: Attemping old file load');
					MapLoader.loadSavedMap_old(data);
				}
			},
			error: function() {
				console.log("Map Loader: Did not find saved map");
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

	// Load map based off of php t parameter
	static loadMapFromId(id) {
		switch(id) {
			case "USA_current_house":
				MapLoader.loadPresetMap(id, {enableCongress: true});
				break;
			case "USA_current_senate":
			case "USA_2024_projection":
			case "USA_2020_cook":
			case "USA_2020_inside":
			case "USA_2020_sabatos":
			case "USA_2020_house_cook":
			case "USA_2016_presidential":
			case "USA_2012_presidential":
			case "USA_2008_presidential":
			case "USA_2004_presidential":
			case "USA_2000_presidential":
			case "USA_1996_presidential":
			case "USA_1992_presidential":
			case "USA_1988_presidential":
			case "USA_1984_presidential":
			case "USA_1980_presidential":
			case "USA_1976_presidential":
			case "USA_1972_presidential":
			case "USA_1968_presidential":
			case "USA_1964_presidential":
			case "USA_1960_presidential":
			case "USA_1956_presidential":
			case "USA_1952_presidential":
			case "USA_1948_presidential":
			case "USA_1944_presidential":
			case "USA_1940_presidential":
			case "USA_1936_presidential":
			case "USA_1932_presidential":
			case "USA_1928_presidential":
			case "USA_1924_presidential":
			case "USA_1920_presidential":
			case "USA_1916_presidential":
			case "USA_1912_presidential":
			case "USA_1908_presidential":
			case "USA_1904_presidential":
			case "USA_1900_presidential":
			case "USA_1896_presidential":
			case "USA_1892_presidential":
			case "USA_1888_presidential":
			case "USA_1884_presidential":
			case "USA_1880_presidential":
			case "USA_1876_presidential":
			case "USA_1876_presidential":
			case "USA_1872_presidential":
			case "USA_1868_presidential":
			case "USA_1864_presidential":
			case "USA_2016_presidential_county":
			case "UnitedKingdom_current_parliament":
				MapLoader.loadPresetMap(id);
				break;
			case "USA_trump_impeachment_support":
				MapLoader.loadPresetMap('usa/' + id);
				break;
			case "Canada_2019_house_of_commons":
				MapLoader.loadPresetMap('can/' + id, {enableCongress: true});
				break;
			case "USA_Canada":
				MapLoader.loadMap("./res/usa_canada.svg", 16, 0.01, "congressional", "presidential", "open", {updateText: false});
				break;
			case "USA_2020_presidential":
				MapLoader.loadMap("./res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true, voters: 'usa_voting_pop', enablePopularVote: true});
				break;
			case "USA_split_maine":
				MapLoader.loadMap("./res/usa_1972_presidential.svg", 16, 1, "usa_1972_ec", "presidential", "open", {updateText: true});
				break;
			case "USA_2020_senatorial":
			case "USA_2020_senate":
				MapLoader.loadMap("./res/usa_senate.svg", 16, 1, "usa_senate", "senatorial", "2020", {updateText: false});
				break;
			case "USA_2020_gubernatorial":
			case "USA_2020_governors":
				MapLoader.loadMap("./res/usa_gubernatorial.svg", 16, 1, "usa_gubernatorial", "gubernatorial", "2020", {updateText: false});
				break;
			case "USA_2020_democratic_primary":
				MapLoader.loadMap("./res/usa_dem_primary.svg", 16, 1, "dem_primary", "primary", "open", {updateText: false});
				PresetLoader.loadPreset('democratic primary');
				break;
			case "USA_2020_republican_primary":
				MapLoader.loadMap("./res/usa_rep_primary.svg", 16, 1, "rep_primary", "primary", "open",{updateText: false});
				PresetLoader.loadPreset('republican primary');
				break;
			case "USA_county":
				MapLoader.loadMap("./res/usa_county.svg", 16, 0.075, "congressional", "congressional", "open", {updateText: false});
				break;
			case "USA_congressional":
			case "USA_2020_house":
				MapLoader.loadMap("./res/usa_congressional_2018.svg", 16, 0.075, "congressional", "congressional", "open", {updateText: false, enableCongress: true});
				break;
			case "USA_congressional_2008":
			case "USA_2008_house":
				MapLoader.loadMap("./res/usa_congressional_2008.svg", 16, 0.005, "congressional", "congressional", "open", {updateText: false});
				break;
			case "USA_gubernatorial":
			case "USA_governors":
				MapLoader.loadMap("./res/usa_gubernatorial.svg", 16, 1.5, "usa_gubernatorial", "gubernatorial", "open", {updateText: false});
				break;
			case "USA_senatorial":
			case "USA_senate":
				MapLoader.loadMap("./res/usa_senate.svg", 16, 1.5, "usa_senate", "senatorial", "open", {updateText: false});
				break;
			case "USA_takeall":
				MapLoader.loadMap("./res/usa_no_districts.svg", 16, 1, "usa_no_districts_ec", "presidential", "open", {updateText: true});
				break;
			case "USA_proportional":
				MapLoader.loadMap("./res/usa_no_districts.svg", 16, 1, "usa_no_districts_ec", "proportional", "open", {updateText: true});
				break;
			case "USA_pre_civilwar":
				MapLoader.loadMap("./res/usa_pre_civilwar.svg", 16, 1, "usa_pre_civilwar_ec", "presidential", "open", {updateText: true});
				break;
			case "Pakistan_national_assembly":
				MapLoader.loadMap("./res/pak/pakistan.svg", 16, 0.08, "congressional", "congressional", "open", {updateText: false});
				break;
			case "Germany_states":
				MapLoader.loadMap("./res/germany.svg", 16, 1, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('germany')
				break;
			case "Germany_constituencies":
			case "Germany_bundestag":
				MapLoader.loadMap("./res/germany_constituencies.svg", 16, 0.25, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('germany')
				break;
			case "France_constituencies":
			case "France_national_assembly":
				MapLoader.loadMap("./res/france_constituencies.svg", 16, 0.25, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('france')
				break;
			case "Netherlands_provinces":
				MapLoader.loadMap("./res/netherlands_provinces.svg", 16, 0.15, "netherlands_provinces", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('netherlands');
				break;
			case "Netherlands_gemeenten":
				MapLoader.loadMap("./res/netherlands_gemeenten.svg", 16, 0.15, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('netherlands');
				break;
			case "Italy_states":
				MapLoader.loadMap("./res/italy.svg", 16, 1, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('italy')
				break;
			case "Portugal_assembly_of_the_republic":
				MapLoader.loadMap("./res/portugal_constituencies.svg", 16, 0.25, "portugal_constituencies", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('portugal');
				break;
			case "Spain_constituencies":
			case "Spain_congress_of_deputies":
				MapLoader.loadMap("./res/spain_constituencies.svg", 16, 0.25, "spain_constituencies", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('spain');
				break;
			case "Turkey_national_assembly":
				MapLoader.loadMap("./res/turkey_provinces.svg", 16, 0.5, "turkey_national_assembly", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('turkey');
				break;
			case "India_lok_sabha":
				MapLoader.loadMap("./res/india_constituencies.svg", 16, 0.1, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('india');
				break;
			case "UnitedKingdom_constituencies":
			case "UnitedKingdom_house_of_commons":
				MapLoader.loadMap("./res/unitedkingdom.svg", 16, 0.075, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('uk')
				break;
			case "Ireland_constituencies":
			case "Ireland_dail_eireann":
				MapLoader.loadMap("./res/ireland_constituencies.svg", 16, 0.075, "ireland_constituencies", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('ireland')
				break;
			case "Canada_provinces":
				MapLoader.loadMap("./res/canada_states.svg", 38, 2, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('canada')
				break;
			case "Canada_constituencies":
			case "Canada_house_of_commons":
				MapLoader.loadMap("./res/canada_constituencies.svg", 16, 0.1, "congressional", "congressional", "open", {updateText: true});
				PresetLoader.loadPreset('canada')
				break;
			case "Australia_constituencies":
			case 'Australia_house_of_representatives':
				MapLoader.loadMap("./res/australia_constituencies.svg", 16, 0.5, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('australia')
				break;
			case "Australia_states":
				MapLoader.loadMap("./res/australia.svg", 16, 0.075, "congressional", "presidential", "open", {updateText: false});
				PresetLoader.loadPreset('australia')
				break;
			case "Brazil_deputies":
			case 'Brazil_chamber_of_deputies':
				MapLoader.loadMap("./res/brazil_states.svg", 16, 50, "brazil_deputies", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('brazil');
				break;
			case 'Brazil_federal_senate':
				MapLoader.loadMap('./res/brazil_states.svg', 16, 50, "brazil_senate", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('brazil');
				break;
			case 'Russia_federal_council':
				MapLoader.loadMap('./res/russia_federal_subjects.svg', 16, 0.25, 'russia_federal_council', 'proportional', 'open', {updateText: false});
				PresetLoader.loadPreset('russia');
				break;
			case 'Russia_duma':
				MapLoader.loadMap('./res/russia_constituencies.svg', 16, 0.15, 'duma', 'congressional', 'open', {updateText: false});
				PresetLoader.loadPreset('russia');
				break;
			case "Trinidad_Tobago_house_of_representatives":
				MapLoader.loadMap("./res/trinidad_tobago_house_of_representatives.svg", 16, 0.25, "congressional", "congressional", "open", {updateText: false});
				PresetLoader.loadPreset('trinidad_tobago');
				break;
			case "Switzerland_national_council":
				MapLoader.loadMap("./res/che/switzerland_cantons.svg", 16, 0.25, "switzerland_national_council", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('switzerland');
				break;
			case "Switzerland_council_of_states":
				MapLoader.loadMap("./res/che/switzerland_cantons.svg", 16, 0.25, "switzerland_council_of_states", "proportional", "open", {updateText: false});
				PresetLoader.loadPreset('switzerland');
				break;
			case "EuropeanUnion":
				MapLoader.loadMap("./res/eu.svg", 16, 0.25, "eu_parliament", "primary", "open", {updateText: false});
				break;
			case "World":
				MapLoader.loadMap("./res/world.svg", 38, 0.25, "congressional", "congressional", "open", {updateText: false});
				break;
			case "LTE_presidential":
				MapLoader.loadMap("./res/lte_president.svg", 30, 1, "lte_ec", "presidential", "open", {updateText: true});
				break;
			case "LTE_senatorial":
				MapLoader.loadMap("./res/lte_senate.svg", 35, 1, "ltesenate", "senatorial", "open", {updateText: false});
				break;
			case "LTE_congressional":
				MapLoader.loadMap("./res/lte_house.svg", 35, 1, "congressional", "congressional", "open", {updateText: false});
				break;
			default:
				MapLoader.loadMap("./res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true, voters: 'usa_voting_pop', enablePopularVote: true});
				break;
		}
	}

	// loads the svg element into the HTML
	static loadMap(filename, fontsize, strokewidth, dataid, type, year, options) {

		// if the svg is already loaded dont load another
		if(MapLoader.save_filename === filename &&
			MapLoader.save_dataid === dataid &&
			MapLoader.save_type === type &&
			MapLoader.save_year === year &&
			MapLoader.save_fontsize === fontsize &&
			MapLoader.save_strokewidth === strokewidth) {
			if(options.onLoad) {
				options.onLoad();
			}

			if(options.clear && options.clear === true) {

			} else {
				return;
			}
		}

		MapLoader.save_filename = filename;
		MapLoader.save_dataid = dataid;
		MapLoader.save_type = type;
		MapLoader.save_year = year;
		MapLoader.save_fontsize = fontsize;
		MapLoader.save_strokewidth = strokewidth;

		if(options) {
			enablePopularVote = options.enablePopularVote;
			verifyPopularVote();
			enableCongress = options.enableCongress;
			verifyCongress();
		}

		var mapHTML = document.getElementById('map-div');
		mapHTML.style.visibility = 'hidden';

		totalVotes = 0;

		/* TURNING OFF LABELS BREAKS THE LEANS ON THE GRAPH */
		strokeMultiplier = strokewidth;
		var dataname = './data/' + type + '_' + year;

		mapOptions.updateText = options.updateText;

		console.log('Loading ' + filename);
		$('#map-div').load(filename, function(a) {
			console.log('Done loading ' + filename);
			MapLoader.onLoadSVG();
		
			if(mobile === true) {
				InputManager.enableInputMobile();
			} else if(mobile === false) {
				InputManager.enableInputDesktop();
			}

			MapManager.centerMap();
			onResize();

			var textHTML = document.getElementById('text');
			if(textHTML !== null) {
				// convert font size to string with px
				textHTML.style.fontSize = '' + fontsize + 'px';
			}

			MapLoader.initData(dataid);

			// count the votes and update the displayed
			// numbers on the chart and legend

			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();
			setCongressOnHover();
			
			setPalette(CookieManager.cookies['theme']);
		
			PresetLoader.blockPresets = false;		

			if(mode !== 'paint' && mode !== 'move' && mode !== 'paintmove') {
				setMode('paint');
			}

			var finishOptions = function() {
				if(options.onLoad) {
					options.onLoad();
				}
				setCongressContested();

				if(options.voters) {
					for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
						var state = states[stateIndex];
						state.voters = data[options.voters][state.name];
						state.popularVote = {};
						state.popularVote['Tossup'] = state.voters;
					}

					countPopularVote();
				}

				// disable the load screen when the map is finished loading
				var loadScreen = document.getElementById('application-loading');
				setTimeout(function() {
					loadScreen.style.display = 'none';
				}, 350);
			}

			if(type === 'senatorial' && year !== 'open') {
				PresetLoader.blockPresets = true;
				MapLoader.loadSenateFile(dataname, finishOptions);
			} else if(type === 'gubernatorial' && year !== 'open') {
				PresetLoader.blockPresets = true;
				MapLoader.loadGubernatorialFile(dataname, finishOptions);
			} else {
				mapHTML.style.visibility = 'visible';
				finishOptions();
			}
		});
	}

	static onLoadSVG() {
		ifInIframe();
	}

	static loadGubernatorialFile(gubernatorialfile, onLoad) {

		if(gubernatorialfile.includes('open') == false) {
		}

		CandidateManager.initCandidates();
		
		var candidateNames = {};

		$.get(gubernatorialfile, function(data) {
			console.log('Done loading ' + gubernatorialfile);

			var loadMode = 'candidate';
			var lines = data.split('\n');

			// if the last element is empty remove it
			if(lines[lines.length - 1] === '') {
				lines.pop();
			}

			for(var index = 0; index < lines.length; ++index) {
				var line = lines[index].trim();
				if(loadMode === 'candidate') {
					if(line === '!') {
						loadMode = 'disable';
					} else {
						var split = line.split(' ');
						candidateNames[split[0]] = split[1];
						var candidate = new Candidate(split[1], [split[2], split[3], split[4], split[5]]);
						CandidateManager.candidates[split[1]] = candidate;
					}

				} else if(loadMode === 'disable') {
					var split = line.split(' ');
					var state = states.find(state => state.name === split[0]);
					var candidate = candidateNames[split[1]];

					if(split[1] === 'o') {
						state.setColor('Tossup', 2);
					} else {
						state.setColor(candidate, 0);
						state.toggleLock();
					}
				}
			}

			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();

			var mapHTML = document.getElementById('map-div');
			mapHTML.style.visibility = 'visible';

			onLoad();
		});
	}

	static loadSenateFile(senatefile, onLoad) {

		if(senatefile.includes('open') == false) {
			//blockPresets = true;
		}

		CandidateManager.initCandidates();

		var candidateNames = {};

		console.log(senatefile);
		$.get(senatefile, function(data) {
			console.log('Done loading ' + senatefile);
		
			var loadMode = 'candidate';
			var lines = data.split('\n');
			if(lines[lines.length - 1] === '') {
				lines.pop();
			}
			for(var index = 0; index < lines.length; ++index) {
				var line = lines[index].trim();
				if(loadMode === 'candidate') {
					if(line === '!') {
						loadMode = 'disable';
					} else {
						var split = line.split(' ');
						candidateNames[split[0]] = split[1];
						var candidate = new Candidate(split[1], [split[2], split[3], split[4], split[5]]);
						CandidateManager.candidates[split[1]] = candidate;
					}

				} else if(loadMode === 'disable') {
					var split = line.split(' ');
					var state = states.find(state => state.name === split[0]);
					var special = states.find(state => state.name === split[0] + '-S');

					if(split[1] === 'o') {
						state.setColor('Tossup', 2);
					} else {
						state.setColor(
							candidateNames[split[1]], 0);
						//state.toggleDisable();
						state.toggleLock();
						
					}

					if(split[2] === 'o') {
						special.setColor('Tossup', 2);
					} else {
						special.setColor(
							candidateNames[split[2]], 0);
						//special.toggleDisable();
						special.toggleLock();
					}
				}
			}

			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();

			var mapHTML = document.getElementById('map-div');
			mapHTML.style.visibility = 'visible';

			onLoad();
		});
	}

	static loadSavedMap_new(data, options) {
		var obj = JSON.parse(data);	

		if(options) {
			enableCongress = options.enableCongress;
		} else {
			enableCongress = false;
		}

		MapLoader.loadMap(obj['filename'], obj['fontsize'], obj['strokewidth'], obj['dataid'],
				obj['type'], obj['year'],
		{	
			enableCongress: enableCongress,
			updateText: obj['updatetext'],
			onLoad: function() {
			mapOptions.updateText = obj['updatetext'];
			for(var candidateName in obj.candidates) {
				if(candidateName === 'Tossup') {
					continue;
				}
				var candidate = obj.candidates[candidateName];
				CandidateManager.addCandidate(candidateName, candidate['solid'], candidate['likely'], candidate['lean'], candidate['tilt']);
			}

			for(var stateName in obj.states) {
				var stateData = obj.states[stateName];
				var state = states.filter(state => state.name === stateName)[0];
				state.setVoteCount(stateData['votecount'], obj['updatetext']);
				state.setColor(stateData['candidate'], stateData['colorvalue']);
				state.delegates = stateData['delegates'];
				if(stateData['disabled']) {
					state.toggleDisable();
				}
			}

			for(var stateName in obj.proportional) {
				var stateData = obj.proportional[stateName];
				var state = proportionalStates.filter(state => state.name === stateName)[0];
				state.setVoteCount(stateData['votecount'], obj['updatetext']);
				state.setColor(stateData['candidate'], stateData['colorvalue']);
				state.delegates = stateData['delegates'];
				if(stateData['disabled']) { 
					state.toggleDisable();
				}
			}

			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();

			var mapHTML = document.getElementById('map-div');
			mapHTML.style.visibility = 'visible';
			
			gtag('event', 'load', {
				'event_category': 'load_map',
				'event_label': 'loaded saved map new version ' + currentCache,
				'non_interaction': true
			});
		}});
	}

	static loadSavedMap_old(data, options) {
		var lines = data.split('\n');
		var meta = lines[0].split(' ');
		if(options) {
			enableCongress = options.enableCongress;
		} else {
			enableCongress = false;
		}
		
		MapLoader.loadMap(meta[0], meta[1], meta[2], meta[3], meta[4], meta[5], {enableCongress: enableCongress,
			onLoad: function() {
			console.log("Loading saved map...");

			// --- RUN THIS AFTER THE MAP HAS BEEN LOADED ---
		
			// parse each candidate in the file
			// add them to the map
			var candidateEndLine = meta[6];
			for(var candidateIndex = 1; candidateIndex < candidateEndLine; ++candidateIndex) {
				var candidate = lines[candidateIndex].split(' ');
				CandidateManager.addCandidate(candidate[0].replace(/\%/g, " "), candidate[1], candidate[2], candidate[3], candidate[4]);
			}

			// parse each state in the file
			// change them to their candidate
			for(var stateDataIndex = candidateEndLine; stateDataIndex < lines.length - 1; ++stateDataIndex) {
				var stateIndex = stateDataIndex - candidateEndLine;
				var stateData = lines[stateDataIndex].split(' ');
				var stateName = stateData[0];
				var state = states[stateIndex];
				var updateText = (meta[7] === 'true');
				mapOptions.updateText = updateText;

				var voteCount = parseInt(stateData[stateData.length - 2]);
				state.setVoteCount(voteCount, updateText);	
				
				// if its a primary map
				if(MapLoader.save_type === 'primary' || MapLoader.save_type === 'proportional') {
					var majorityCandidate = "Tossup";
					var majorityVoteCount = 0;
					var state = states.find(state => state.name === stateData[0]);

					for(var candidateIndex = 0; candidateIndex < candidateEndLine - 1; ++candidateIndex) {
						// get the candidate name
						var candidateName = lines[candidateIndex + 1].split(' ')[0];
						candidateName = candidateName.replace(/\%/g, " ");

						// read in the delegate count
						var delegates = stateData[4 + candidateIndex];

						// set the delegate  count
						state.delegates[candidateName] = parseInt(delegates);
						if(parseInt(delegates) > majorityVoteCount) {
							majorityVoteCount = parseInt(delegates);
							majorityCandidate = candidateName;
						} else if(parseInt(delegates) === majorityVoteCount) {
							majorityCandidate = 'Tossup';
						}
					}

					state.delegates['Tossup'] = parseInt(stateData[3]);

					// set the color to the candidate with the most delegates
					if(majorityCandidate === 'Tossup') {
						state.setColor('Tossup', 2);
					}
					else {
						state.setColor(majorityCandidate, 0);
					}
					
				}
				// otherwise
				else {
					// get the candidate
					var candidateName = stateData[1].replace(/\%/g, " ");
					// set the proper color
					state.setColor(candidateName, parseInt(stateData[2]));
				}
				
				var disable = (stateData[stateData.length - 1] === 't');
				if(disable === true) {
					state.toggleDisable();
				}
			}
			
			countVotes();
			ChartManager.updateChart();
			LegendManager.updateLegend();
			
			gtag('event', 'load', {
				'event_category': 'load_map',
				'event_label': 'loaded saved map old version ' + currentCache,
				'non_interaction': true
			});
		}
			,
			updateText: meta[7]
		});
	}

	static loadFileMap() {
		var file = document.getElementById('loadfile').files[0];
		var fileReader = new FileReader();
		fileReader.onload = function(loadEvent) {
			var a = loadEvent.target.result;
			try {
				MapLoader.loadSavedMap_new(a);
			} catch(e) {
				console.log('New file load failed, attempting old');
				MapLoader.loadSavedMap_old(a);
			}
		}
		fileReader.readAsText(file, 'UTF-8');
	}

	// reads through the SVG and sets up states and buttons
	static initData(dataid) {
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
				if(MapLoader.save_type === 'congressional' ||
				MapLoader.save_type === 'presidential' ||
				MapLoader.save_type === 'gubernatorial') {
					htmlElement.setAttribute('onmouseover', 'if(KeyboardManager.keyStates[70]){buttonClick(this, {setSolid: true});}');
				}
				buttons.push(htmlElement);
			} else if(name.includes('-land')) {
				htmlElement.setAttribute('onclick', 'landClick(this)');
				if(MapLoader.save_type === 'congressional' ||
				MapLoader.save_type === 'presidential' ||
				MapLoader.save_type === 'gubernatorial') {
					htmlElement.setAttribute('onmouseover', 'if(KeyboardManager.keyStates[70]){landClick(this, {setSolid: true});}');
				}
				lands.push(htmlElement);
			} else {
				htmlElement.setAttribute('onclick', 'stateClick(this)');
				states.push(new State(name, htmlElement, dataid));
				var stateIndex = states.length - 1;
				if(MapLoader.save_type === 'congressional' ||
				MapLoader.save_type === 'presidential' ||
				MapLoader.save_type === 'gubernatorial') {
					htmlElement.setAttribute('onmouseover', 'if(KeyboardManager.keyStates[70]){stateClick(this, {setSolid: true});}');
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

	// sets all states to white
	static clearMap() {
		MapLoader.loadMap(MapLoader.save_filename, MapLoader.save_fontsize, MapLoader.save_strokewidth, MapLoader.save_dataid, MapLoader.save_type, MapLoader.save_year, {updateText: mapOptions.updateText, clear: true});
		MapManager.setLockMap(false);
	}
}

MapLoader.save_filename = "";
MapLoader.save_dataid = "";
MapLoader.save_type = "";
MapLoader.save_year = "";
MapLoader.save_fontsize = "";
MapLoader.save_strokewidth = "";
