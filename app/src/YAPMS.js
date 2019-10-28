class Account {
	static register() {
		var formData = new FormData();
		var email = document.getElementById('email-input').value;
		formData.append('email', email);
		$.ajax({
			url: "https://yapms.org/auth/register.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Register: ' + data);
				//alert(data);
				var arr = data.split(' ');
				var registerInfo = document.getElementById('register-info');
				closeAllPopups();
				if(arr[0] === 'good') {
					displayNotification('Account Registered',
						'Please check your email, and click the verification link. (check your spam)');	
				} else if(arr[1] === 'inuse') {
					displayNotification('Register Error',
						'Account Already Registered');	
				} else if(arr[1] === 'inactive') {
					displayNotification('Register Error',
						'Verification Email Already Sent (check your spam)');	
				} else if(arr[1] === 'resent') {
					displayNotification('Account Registered',
						'Please check your email, and click the verification link. (check your spam)');	
				} else if(arr[1] === 'invalid_email') {
					displayNotification('Register Error',
						email + ' is not a valid email');	
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
				var registerInfo = document.getElementById('register-info');
				registerInfo.innerHTML = 'Connection Error';	
			}	
		});
	}

	static login() {
		var formData = new FormData();
		var email = document.getElementById('email-login').value;
		var pass = document.getElementById('password-login').value;
		formData.append('email', email);
		formData.append('password', pass);
		$.ajax({
			url: "https://yapms.org/auth/login.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Login: ' + data);
				var arr = data.split(' ');
				Account.verifyState();
				document.getElementById('password-login').value = "";
				if(arr[0] === 'good') {
					loginInfo.innerHTML = 'Please enter your credentials';
					closeAllPopups();
				} else if(arr[0] === 'bad') {
					var loginInfo = document.getElementById('login-info');
					if(arr[1] === 'account_innactive') {
						loginInfo.innerHTML = 'Inactive Account';
					} else if(arr[1] === 'incorrect_login') {
						loginInfo.innerHTML = 'Incorrect Login';
					}
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
				var loginInfo = document.getElementById('login-info');
				loginInfo.innerHTML = 'Connection Error';
			}	
		});
	}

	static verifyState() {
		var formData = new FormData();
		formData.append('email', Account.email);
		$.ajax({
			url: "https://yapms.org/auth/verify_login.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Verify Login: ' + data);
				var arr = data.split(' ');
				Account.isLoggedIn = (arr[0] === 'good');
				if(Account.isLoggedIn) {
					Account.email = arr[1];
					Account.id = arr[2];
				} else {
					Account.id = null;
					Account.email = null;	
				}
				Account.updateHTML();
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static logout() {
		closeAllPopups();
		$.ajax({
			url: "https://yapms.org/auth/logout.php",
			type: "POST",
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Logout: ' + data);
				Account.verifyState();
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static save() {
		closeAllPopups();
		var formData = new FormData();
		//formData.append("img", img);
	
		var mapName = document.getElementById('savemap-name');
		if(mapName) {
			formData.append("mapName", mapName.value);
			mapName.value = '';
		}
	
		var data = {};
		data['filename'] = MapLoader.save_filename;
		data['dataid'] = MapLoader.save_dataid;
		data['type'] = MapLoader.save_type;
		data['year'] = MapLoader.save_year;
		data['fontsize'] = MapLoader.save_fontsize;
		data['strokewidth'] = MapLoader.save_strokewidth;
		data['updatetext'] = mapOptions.updateText;
		data['candidates'] = {};
		data['states'] = {};
		data['proportional'] = {};

		for(var key in CandidateManager.candidates) {
			if(key === 'Tossup') {
				continue;
			}
			var candidate = CandidateManager.candidates[key];
			data['candidates'][candidate.name] = {};
			data['candidates'][candidate.name]['solid'] = candidate.colors[0];
			data['candidates'][candidate.name]['likely'] = candidate.colors[1];
			data['candidates'][candidate.name]['lean'] = candidate.colors[2];
			data['candidates'][candidate.name]['tilt'] = candidate.colors[3];
		}

		for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
			var state = states[stateIndex];
			data['states'][state.name] = {};
			data['states'][state.name]['candidate'] = state.candidate;
			data['states'][state.name]['delegates'] = state.delegates;
			data['states'][state.name]['votecount'] = state.voteCount;
			data['states'][state.name]['colorvalue'] = state.colorValue;
			data['states'][state.name]['disabled'] = state.disabled;
		}

		for(var stateIndex = 0; stateIndex < proportionalStates.length; ++stateIndex) {
			var state = proportionalStates[stateIndex];
			data['proportional'][state.name] = {};
			data['proportional'][state.name]['candidate'] = state.candidate;
			data['proportional'][state.name]['delegates'] = state.delegates;
			data['proportional'][state.name]['votecount'] = state.voteCount;
			data['proportional'][state.name]['colorvalue'] = state.colorValue;
			data['proportional'][state.name]['disabled'] = state.disabled;
		}
		
		formData.append("data", JSON.stringify(data));

		$.ajax({
			url: "https://yapms.org/upload_user.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Save: ' + data);
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	}

	static changePassword() {
		var formData = new FormData();
		var current = document.getElementById('password-reset-1').value;
		var newPass = document.getElementById('password-reset-2').value;
		var verifyPass = document.getElementById('password-reset-3').value;
		formData.append('current', current);
		formData.append('new', newPass);
		formData.append('verify', verifyPass);
		$.ajax({
			url: "https://yapms.org/auth/change_password.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Change Password: ' + data);
				var arr = data.split(' ');
				var passwordChangeInfo = document.getElementById('passwordchange-info');
				if(arr[0] === 'good') {
					closeAllPopups();
					displayNotification('Password Change',
						'Your password has been changed');
					passwordChangeInfo.innerHTML = 'Please enter current and new password';
					document.getElementById('password-reset-1').value = "";
					document.getElementById('password-reset-2').value = "";
					document.getElementById('password-reset-3').value = "";
				} else if(arr[0] === 'bad') {
					if(arr[1] === 'verify_incorrect') {
						passwordChangeInfo.innerHTML = 'Passwords do not match';
					} else if(arr[1] === 'incorrect_pass') {
						passwordChangeInfo.innerHTML = 'Current password incorrect';
					} else if(arr[1] === 'no_post') {
						passwordChangeInfo.innerHTML = 'Missing information';
					}
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static forgotPassword() {
		var formData = new FormData();
		var email = document.getElementById('email-forgot-input').value;
		formData.append('email', email);
		$.ajax({
			url: "https://yapms.org/auth/forgot_password.php",
			type: "POST",
			data: formData,
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				console.log('Forgot Password: ' + data);
				var arr = data.split(' ');
				closeAllPopups();
				if(arr[0] === 'good') {
					if(arr[1] === 'reset_sent') {
						displayNotification('Password Reset',
							'Password reset email sent. (check your spam)');	
					}
				} else if(arr[0] === 'bad') {
					if(arr[1] === 'innactive_account') {
						displayNotification('Password Reset Error',
							email + ' is not active. Please register or verify.');	
					} else if(arr[1] === 'recent_verification') {
						displayNotification('Password Reset Error',
							'Password was recently reset, please wait.');	
					} else if(arr[1] === 'please_register') {
						displayNotification('Password Reset Error',
							email + ' is not registered. Please register.');	
					}
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}	
		});
	}

	static getMaps() {
		$.ajax({
			url: "https://yapms.org/get_maps_users.php",
			type: "POST",
			processData: false,
			contentType: false,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success: function(data) {
				var html = '';
				var arr = data.split(' ');
				var content = document.getElementById("mymapmenu-content");
				for(var fileIndex = 0; fileIndex < arr.length; ++fileIndex) {
					var fileName = arr[fileIndex].split('/');
					var name = fileName[3].split('-')[1].split('.')[0];
					var e = document.createElement('a');
					e.className = 'selectmenu-button';
					e.onclick = (function() {
						var url = "https://testing.yapms.com/app/?u=" + Account.id + '&m=' + name;
						return function() {
							window.location.href = url;
						}
					})();
					var t = document.createElement('div');
					t.className = "selectmenu-button-text";
					var text = document.createTextNode(name);
					t.appendChild(text);
					e.appendChild(t);
					content.appendChild(e);
				}
			},
			error: function(a, b, c) {
				console.log(a);
				console.log(b);
				console.log(c);
			}
		});
	}

	static updateHTML() {
		var loginButton = document.getElementById('login-button');
		var accountButton = document.getElementById('account-button');
		var saveButton = document.getElementById('save-button');
		var mymapsButton = document.getElementById('mymaps-button');
		var accountEmail = document.getElementById('account-email');

		if(Account.isLoggedIn) {
			loginButton.style.display = 'none';
			accountButton.style.display = '';
			saveButton.style.display = '';
			mymapsButton.style.display = '';
			accountEmail.innerHTML = Account.email;
		} else {
			loginButton.style.display = '';
			accountButton.style.display = 'none';
			saveButton.style.display = 'none';
			mymapsButton.style.display = 'none';
		}
	}
}

Account.email = null;
Account.id = null;
Account.isLoggedIn = false;
// list of candidates

class Candidate {
	constructor(name, colors) {
		this.name = name;
		this.colors = colors;
		this.voteCount = 0;
		this.probVoteCounts = [0,0,0,0];

		if(colors[0] === colors[1] &&
			colors[0] === colors[2] &&
			colors[0] === colors[3]) {
			this.singleColor = true;
		} else {
			this.singleColor = false;
		}
	}
};

class CandidateManager {
	static initCandidates() {
		CandidateManager.candidates = {};
		CandidateManager.candidates['Tossup'] = CandidateManager.TOSSUP;
	}

	static deleteCandidate() {
		closeAllPopups();
		var candidateid = document.getElementById('candidate-originalName').value;
		for(var index = 0; index < states.length; ++index) {
			var state = states[index];
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

		delete CandidateManager.candidates[candidateid];
		ChartManager.chart.generateLegend();
		countVotes();
		LegendManager.updateLegend();
		MapManager.verifyMap();
		ChartManager.updateChart();
		countPopularVote();
	}

	static deleteCandidateByName(name) {
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

		delete CandidateManager.candidates[candidateid];
		ChartManager.chart.generateLegend();
		countVotes();
		LegendManager.updateLegend();
		MapManager.verifyMap();
		ChartManager.updateChart();
		countPopularVote();
	}

	static setCandidate() {
		closeAllPopups();

		var candidateid = document.getElementById('candidate-originalName').value;
		var newname = document.getElementById('candidate-name').value;
		var solidColor = document.getElementById('candidate-solid').value;
		var likelyColor = document.getElementById('candidate-likely').value;
		var leanColor = document.getElementById('candidate-lean').value;
		var tiltColor = document.getElementById('candidate-tilt').value;

		// only rename the property if the name changed
		if(newname !== candidateid) {
			Object.defineProperty(CandidateManager.candidates, newname,
				Object.getOwnPropertyDescriptor(CandidateManager.candidates, candidateid));
			setChangeCandidate(candidateid, newname);
			delete CandidateManager.candidates[candidateid];
		}

		var candidate = CandidateManager.candidates[newname];
		candidate.name = newname;
		candidate.colors[0] = solidColor;
		candidate.colors[1] = likelyColor;
		candidate.colors[2] = leanColor;
		candidate.colors[3] = tiltColor;
		
		if(solidColor === likelyColor &&
			solidColor === leanColor &&
			solidColor === tiltColor) {
			candidate.singleColor = true;
			candidate.probVoteCounts[0] += 
				candidate.probVoteCounts[1] +
				candidate.probVoteCounts[2] +
				candidate.probVoteCounts[3];
			candidate.probVoteCounts[1] = 0;
			candidate.probVoteCounts[2] = 0;
			candidate.probVoteCounts[3] = 0;
		} else {
			candidate.singleColor = false;
		}

		ChartManager.chart.generateLegend();
		MapManager.verifyMap();
		countVotes();
		LegendManager.updateLegend();
		ChartManager.updateChart();
	}

	static addCandidate(name, solid, likely, leaning, tilting) {
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
		CandidateManager.candidates[name] = candidate;

		MapManager.verifyMap();
		verifyPaintIndex();
		countVotes();
		ChartManager.updateChart();
		ChartManager.chart.generateLegend();
		LegendManager.updateLegend();

		countPopularVote();
	}
	
	static saveCustomColors() {
		var customColorName = document.getElementById('custom-color-name');
		var name = customColorName.value;
		var solid = document.getElementById("solidcustom").value;
		CookieManager.appendCookie(name + "solid", solid);	
		var likely = document.getElementById("likelycustom").value;
		CookieManager.appendCookie(name + "likely", likely);	
		var leaning = document.getElementById("leaningcustom").value;
		CookieManager.appendCookie(name + "leaning", leaning);	
		var tilting = document.getElementById("tiltingcustom").value;
		CookieManager.appendCookie(name + "tilting", tilting);
		CandidateManager.setColors(name);
	}

	static setColors(palette) {
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
			solid.value = CookieManager.cookies[palette + 'solid'];
			likely.value = CookieManager.cookies[palette + 'likely'];
			leaning.value = CookieManager.cookies[palette + 'leaning'];
			tilting.value = CookieManager.cookies[palette + 'tilting'];
		}
	}
}

CandidateManager.candidates = {};
CandidateManager.tossupColor = 2;
CandidateManager.TOSSUP = new Candidate('Tossup', ['#000000', '#ffffff', '#bbb7b2', '#000000']);
class ChartManager {
	static initChart() {
		ChartManager.chartOptions = {
			// This basically inserts HTML into the legend-div div
			// it's a WIP
			legendCallback: function(chart) {
				console.log("Generating Legend...");
				var legendDiv = document.getElementById('legend-div');
				legendDiv.innerHTML = '';
				var index = -1;
				for(var key in CandidateManager.candidates) {
					var candidate = CandidateManager.candidates[key];
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
						var color = candidate.colors[CandidateManager.tossupColor];
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
						&& MapLoader.save_year === '2020' && 
						(MapLoader.save_type === 'senatorial' || MapLoader.save_type === 'gubernatorial')) {
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

					if(key !== 'Tossup' && LegendManager.legendLeans) {
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
				legendText.style.backgroundColor = CandidateManager.candidates['Tossup'].colors[CandidateManager.tossupColor];
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

		ChartManager.chartBarScales = {
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

		ChartManager.chartPieScales = {
			yAxes: [{
				display: false
			}],
			xAxes: [{
				display: false
			}]
		}
		
		ChartManager.chartPolarScales = {
			display: false
		}

		ChartManager.chartRadarScales = {
			display: false
		}

		ChartManager.chartOptions.scales = ChartManager.chartPieScales;

		Chart.defaults.global.elements.rectangle.borderWidth = 2;
		
		// get the context
		var ctx = document.getElementById('chart-canvas').getContext('2d');
		ctx.height = 200;

		// create the chart
		ChartManager.chart = new Chart(ctx, {
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
			options: ChartManager.chartOptions,
			maintainAspectRatio: true
		});

		ChartManager.chart.generateLegend();

		ChartManager.chartType = 'doughnut';
	}

	// dynamically change the chart from one form to another
	static setChart(type, position) {
		console.log('Set Chart - ' + type);
		var sidebar = document.getElementById('chart-div');
		var chartHTML = document.getElementById('chart');
		var html = document.getElementById('chart-canvas');
		var ctx = html.getContext('2d');
		var battlechart = document.getElementById('battlechart');
		chartHTML.style.display = 'inline-block';
		battlechart.style.display = 'none';
		sidebar.style.display = 'flex';
		
		sidebar.style.width = '28vw';

		if(type === 'none') {
			html.style.display = 'none';

			unsetBattleHorizontal();
			sidebar.style.display = 'none';

			ChartManager.chartType = type;
			MapManager.centerMap();
			return;
		} else if(type === 'horizontalbattle' || type === 'verticalbattle') {
			if(Object.keys(CandidateManager.candidates).length > 3) {
			
				displayNotification('Sorry',
					'This chart requires that there be two candidates');
				return;
			}
			
			if(type === 'horizontalbattle') {
				setBattleHorizontal();
				var logo = document.getElementById('logo-div');
				logo.style.width = '15%';
				logo.style.height = '100%';

				sidebar.style.borderRight = '0px';
				sidebar.style.borderTop = '1px solid black';

				logo = document.getElementById('logo-redeagle-div');
				logo.style.width = '15%';
				logo.style.height = '100%';
				
				logo = document.getElementById('logo-pg-div');
				logo.style.width = '15%';
				logo.style.height = '100%';
				
				logo = document.getElementById('yapms-watermark');
				logo.style.width = '15%';
				logo.style.height = '100%';
			}
			else {
				unsetBattleHorizontal();
				sidebar.style.width = '20vw';	
				var logo = document.getElementById('logo-div');
				logo.style.width = '100%';
				logo.style.height = '15%';
				sidebar.style.borderTop = '0px';
				sidebar.style.borderRight = '1px solid black';
				
				logo = document.getElementById('logo-redeagle-div');
				logo.style.width = '100%';
				logo.style.height = '15%';
				
				logo = document.getElementById('logo-pg-div');
				logo.style.width = '100%';
				logo.style.height = '15%';
				logo = document.getElementById('yapms-watermark');
				logo.style.width = '100%';
				logo.style.height = '15%';
			}

			html.style.display = 'none';
			chartHTML.style.display = 'none';
			battlechart.style.display = 'flex';
			ChartManager.chartType = type;
			ChartManager.updateChart();
			MapManager.centerMap();
			return;
		} 
		
		unsetBattleHorizontal();

		ChartManager.chartPosition = position;	
		if(position === 'bottom') {
			var application = document.getElementById('application');
			application.style.flexDirection = 'column-reverse';
			
			var map = document.getElementById('map-div');
			map.style.height = '80%';

			//var sidebar = document.getElementById('chart-div');
			sidebar.style.flexDirection = 'row';
			sidebar.style.width = '100%';	
			sidebar.style.height = '20%';
			sidebar.style.borderRight = '0px';
			sidebar.style.borderTop = '1px solid black';
		
			var charthtml = document.getElementById('chart');
			charthtml.style.height = 'auto';
			charthtml.style.width = '' + (sidebar.offsetHeight - 5) + 'px';

			var logo = document.getElementById('logo-div');
			logo.style.width = '15%';
			logo.style.height = '100%';
			logo = document.getElementById('logo-redeagle-div');
			logo.style.width = '15%';
			logo.style.height = '100%';
			logo = document.getElementById('logo-pg-div');
			logo.style.width = '15%';
			logo.style.height = '100%';
			logo = document.getElementById('yapms-watermark');
			logo.style.width = '15%';
			logo.style.height = '100%';
		} else {
			var application = document.getElementById('application');
			application.style.flexDirection = 'row';

			var map = document.getElementById('map-div');
			map.style.height = '100%';

			//var sidebar = document.getElementById('chart-div');
			sidebar.style.flexDirection = 'column';
			sidebar.style.width = '28vw';	
			sidebar.style.height = '100%';
			sidebar.style.borderTop = '0px';
			sidebar.style.borderRight = '1px solid black';
			
			var charthtml = document.getElementById('chart');
			charthtml.style.width = '100%';
			
			var logo = document.getElementById('logo-div');
			logo.style.width = '100%';
			logo.style.height = '15%';
			logo = document.getElementById('logo-redeagle-div');
			logo.style.width = '100%';
			logo.style.height = '15%';
			logo = document.getElementById('logo-pg-div');
			logo.style.width = '100%';
			logo.style.height = '15%';
			logo = document.getElementById('yapms-watermark');
			logo.style.width = '100%';
			logo.style.height = '15%';
		}

		MapManager.centerMap();
			
		ChartManager.chartType = type;
		
		ChartManager.chartData = {
			labels:[],
			datasets: [{
				borderColor: ChartManager.chartBorderColor,
				borderWidth: ChartManager.chartBorderWidth,
				data:[]
			}]
		};

		html.style.display = 'inline-block';

		// set the proper scales
		if(type === 'horizontalBar') {
			ChartManager.chartOptions.scales = ChartManager.chartBarScales;
			delete ChartManager.chartOptions.scale;
			// horizontal bar needs multiple datasets
			for(var i = 0; i < 3; ++i) {
				ChartManager.chartData.datasets.push({
					borderColor: ChartManager.chartBorderColor,
					borderWidth: ChartManager.chartBorderWidth,
					data:[]
				});
			}
		} else if(type === 'pie' || type === 'doughnut') {
			ChartManager.chartOptions.scales = ChartManager.chartPieScales;
			delete ChartManager.chartOptions.scale;
		}

		// first destroy the chart
		ChartManager.chart.destroy();
		// then rebuild
		ChartManager.chart = new Chart(ctx, {type: type, data: ChartManager.chartData, options: ChartManager.chartOptions});
		countVotes();
		ChartManager.updateChart();
	}

	static rebuildChart() {
		var html = document.getElementById('chart-canvas');
		var ctx = html.getContext('2d');
		//var type = chart.config.type;
		ChartManager.chart.destroy();
		ChartManager.chart = new Chart(ctx, {
			type: ChartManager.chart.config.type, 
			data: ChartManager.chartData, 
			options: ChartManager.chartOptions
		});
		
		// dont display the chart if its a battle chart
		if(ChartManager.chartType === 'battle') {	
			var chartcontainer = document.getElementById('chart');
			chartcontainer.style.display = 'none';
		}

		ChartManager.updateChart();
	}

	// updates the information of the chart (so the numbers change)
	static updateChart() {
		if(ChartManager.chartType === 'verticalbattle' ||
			ChartManager.chartType === 'horizontalbattle') {
			updateBattleChart();
			return;
		} else if(ChartManager.chartType === 'horizontalBar') {
			ChartManager.updateBarChart();
		} else {
			ChartManager.updateNonRadarChart();	
		}

		ChartManager.chart.config.data = ChartManager.chartData;
		ChartManager.chart.update();
	}

	static updateBarChart() {
		ChartManager.chartData.labels = [];
		ChartManager.chartData.datasets[0].data = [];
		ChartManager.chartData.datasets[0].backgroundColor = [];
		ChartManager.chartData.datasets[1].data = [];
		ChartManager.chartData.datasets[1].backgroundColor = [];
		ChartManager.chartData.datasets[2].data = [];
		ChartManager.chartData.datasets[2].backgroundColor = [];
		ChartManager.chartData.datasets[3].data = [];
		ChartManager.chartData.datasets[3].backgroundColor = [];
		
		// each label is a candidate
		for(var key in CandidateManager.candidates) {
			ChartManager.chartData.labels.push(key);
		}

		if(ChartManager.chartLeans) {
			for(var probIndex = 0; probIndex < 4; ++probIndex) {
				for(var key in CandidateManager.candidates) {
					var candidate = CandidateManager.candidates[key];
					var name = candidate.name;
					var count = candidate.probVoteCounts[probIndex];
					ChartManager.chartData.datasets[probIndex].data.push(count);

					var color = candidate.colors[probIndex];
					ChartManager.chartData.datasets[probIndex].backgroundColor.push(color);
				}
			}
		} else {
			for(var key in CandidateManager.candidates) {
				var candidate = CandidateManager.candidates[key];
				var name = candidate.name;
				var count = candidate.voteCount;
				ChartManager.chartData.datasets[0].data.push(count);

				if(key === 'Tossup') {
					var color = candidate.colors[2];
					ChartManager.chartData.datasets[0].backgroundColor.push(color);

				} else {
					var color = candidate.colors[0];
					ChartManager.chartData.datasets[0].backgroundColor.push(color);
				}
			}
		}
	}

	static updateNonRadarChart() {
		ChartManager.chartData.labels = [];

		ChartManager.chartData.datasets[0].data = [];
		ChartManager.chartData.datasets[0].backgroundColor = [];
		ChartManager.chartData.datasets[0].borderColor = ChartManager.chartBorderColor;
		ChartManager.chartData.datasets[0].borderWidth = ChartManager.chartBorderWidth;

		// loop though candidates
		var candidateIndex = -1;
		for(var key in CandidateManager.candidates) {
			++candidateIndex;
			var candidate = CandidateManager.candidates[key];
			var name = candidate.name;
			var voteCount = candidate.voteCount;
			var color = candidate.colors[0];
			if(candidateIndex == 0) {
				color = CandidateManager.candidates['Tossup'].colors[CandidateManager.tossupColor];
				// append the candidate label
				ChartManager.chartData.labels[0] = 'Tossup';
				// append the vote count
				ChartManager.chartData.datasets[0].data[0] = voteCount;
				// change the background color of the visual
				ChartManager.chartData.datasets[0].backgroundColor.push(color);
			} else if(ChartManager.chartLeans) {
				for(var probIndex = 0; probIndex < 4; ++probIndex) {
					var count = candidate.probVoteCounts[probIndex];
					color = candidate.colors[probIndex];
					var index = (probIndex + (candidateIndex * 4)) - 3;
					ChartManager.chartData.labels[index] = name;
					ChartManager.chartData.datasets[0].data[index] = count;
					ChartManager.chartData.datasets[0].backgroundColor.push(color);
				}
			} else {
				var count = candidate.voteCount;
				color = candidate.colors[0];
				ChartManager.chartData.labels[candidateIndex] = name;
				ChartManager.chartData.datasets[0].data[candidateIndex] = count;
				ChartManager.chartData.datasets[0].backgroundColor.push(color);
			}
		}
	}

	static toggleChartLabels() {
		ChartManager.chartLabels = !ChartManager.chartLabels;
		if(ChartManager.chartOptions.plugins.datalabels.display != false) {
			ChartManager.chartOptions.plugins.datalabels.display = false;
		} else {
			ChartManager.chartOptions.plugins.datalabels.display = function(context) {
				return context.dataset.data[context.dataIndex] !== 0;
			}
		}

		ChartManager.rebuildChart();
	}

	static toggleChartLeans() {
		ChartManager.chartLeans = !ChartManager.chartLeans;
		ChartManager.rebuildChart();
		updateBattleChart();
	}
}

ChartManager.chart = null;
ChartManager.chartBorderWidth = 2;
ChartManager.chartBorderColor = '#000000';
ChartManager.chartData = {
	labels:[],
	datasets: [{
		label: "",
		backgroundColor: [],
		borderColor: ChartManager.chartBorderColor,
		borderWidth: ChartManager.chartBorderWidth,
		data:[]
	}, {}, {}, {}]
}
ChartManager.chartOptions = null;
ChartManager.chartType = null;
ChartManager.chartPosition = null;
ChartManager.chartPieScales = null;
ChartManager.chartBarScales = null;
ChartManager.chartPolarScales = null;
ChartManager.chartRadarScales = null;

ChartManager.chartLeans = true;
ChartManager.chartLabels = true;
class CookieManager {
	static appendCookie(key, value) {
		CookieManager.cookies[key] = value;
		var cookie = "";
		var expire = new Date(Date.now() + 60 * 1000 * 60 * 12 * 7 * 100).toString();
		cookie = key + '=' + CookieManager.cookies[key] + '; expires=' + expire + ';';
		document.cookie = cookie;
		console.log('Append cookie: key=' + key + ' value=' + value);
	}

	static loadCookies() {
		// preload all color cookies with black
		for(var i = 1; i < 5; ++i) {
			CookieManager.cookies['custom' + i + 'solid'] = '#000000';
			CookieManager.cookies['custom' + i + 'likely'] = '#000000';
			CookieManager.cookies['custom' + i + 'leaning'] = '#000000';
			CookieManager.cookies['custom' + i + 'tilting'] = '#000000';
		}
		CookieManager.cookies['theme'] = 'default';
		var decode = decodeURIComponent(document.cookie);
		var loadedCookies = decode.split('; ');
		for(var index in loadedCookies) {
			var cookie = loadedCookies[index].split('=');
			var key = cookie[0];
			var result = cookie[1]
			CookieManager.cookies[key] = result;
		}
	}

	static loadCustomColors() {
		var c1 = document.getElementById('custom1button');
		c1.style.background = 'linear-gradient(to right,' +
			CookieManager.cookies['custom1solid'] + ',' +
			CookieManager.cookies['custom1likely'] + ',' +
			CookieManager.cookies['custom1leaning'] + ',' +
			CookieManager.cookies['custom1tilting'] + ')';
		var c2 = document.getElementById('custom2button');
		c2.style.background = 'linear-gradient(to right,' +
			CookieManager.cookies['custom2solid'] + ',' +
			CookieManager.cookies['custom2likely'] + ',' +
			CookieManager.cookies['custom2leaning'] + ',' +
			CookieManager.cookies['custom2tilting'] + ')';
		var c3 = document.getElementById('custom3button');
		c3.style.background = 'linear-gradient(to right,' +
			CookieManager.cookies['custom3solid'] + ',' +
			CookieManager.cookies['custom3likely'] + ',' +
			CookieManager.cookies['custom3leaning'] + ',' +
			CookieManager.cookies['custom3tilting'] + ')';
		var c4 = document.getElementById('custom4button');
		c4.style.background = 'linear-gradient(to right,' +
			CookieManager.cookies['custom4solid'] + ',' +
			CookieManager.cookies['custom4likely'] + ',' +
			CookieManager.cookies['custom4leaning'] + ',' +
			CookieManager.cookies['custom4tilting'] + ')';
	}
}

CookieManager.cookies = {};
class InputManager {
	static enableInputDesktop() {
		var enablePan = false;
		var enableZoom = false;
		if(MapManager.panObject != null) {
			enablePan = MapManager.panObject.isPanEnabled();
			enableZoom = MapManager.panObject.isZoomEnabled();
		}

		MapManager.panObject = svgPanZoom('#svgdata', {
			fit: true,
			center: true,
			contain: false,
			panEnabled: true,
			zoomEnabled: true,
			dblClickZoomEnabled: false,
			maxZoom: 100,
			zoomScaleSensitivity: 0.06
		});
	}

	static enableInputMobile() {
		var eventHandler = {
			haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel'],
			init: function(options) {
				var instance = options.instance;
				var initialScale = 1;
				var pannedX = 0;
				var pannedY = 0;

				this.hammer = Hammer(options.svgElement, {
					inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
				});
			
				this.hammer.get('pinch').set({enable: true});

				this.hammer.on('panstart panmove', function(ev) {
					if(ev.type === 'panstart') {
						pannedX = 0;
						pannedY = 0;
					}
					instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY});
					pannedX = ev.deltaX;
					pannedY = ev.deltaY;			
				});

				this.hammer.on('pinchstart pinchmove', function(ev) {
					if(ev.type === 'pinchstart') {
						initialScale = instance.getZoom();
						instance.zoomAtPoint(initialScale * ev.scale, {x: ev.center.x, y: ev.center.y});
					}
					
					instance.zoomAtPoint(initialScale * ev.scale, {x: ev.center.x, y: ev.center.y});
				});
			}
		
		}

		MapManager.panObject = svgPanZoom('#svgdata', {
			fit: true,
			center: true,
			contain: false,
			maxZoom: 70,
			dblClickZoomEnabled: false,
			customEventsHandler: eventHandler
		});

/*
		$('html').on('pinch', function(event) {
			event.gesture.preventDefault();
		});
*/
	}
}
class KeyboardManager {
	static init() {
		$("html").keydown(function(event) {
			KeyboardManager.keyStates[event.which] = true;
		});

		$("html").keyup(function(event) {
			KeyboardManager.keyStates[event.which] = false;
		});

		$("html").mouseleave(function(event) {
			KeyboardManager.keyStates = {};
		});

		$("html").mouseenter(function(event) {
			KeyboardManager.keyStates = {};
		});
	}
}

KeyboardManager.keyStates = {};
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
class LogoManager {
	static toggleLTE() {
		var lteLogo = document.getElementById('logo-div');
		if(lteLogo.style.display === '') {
			lteLogo.style.display = 'inline';
		} else if(lteLogo.style.display === 'inline') {
			lteLogo.style.display = '';
		}
	}

	static toggleRedEagle() {
		var redEagleLogo = document.getElementById('logo-redeagle-div');
		if(redEagleLogo.style.display === '') {
			redEagleLogo.style.display = 'inline';
		} else if(redEagleLogo.style.display === 'inline') {
			redEagleLogo.style.display = '';
		}
	}

	static togglePG() {
		var pgLogo = document.getElementById('logo-pg-div');
		if(pgLogo.style.display === '') {
			pgLogo.style.display = 'inline';
		} else if(pgLogo.style.display === 'inline') {
			pgLogo.style.display = '';
		}
	}

	static loadLogos() {
		var redEagleLogo = document.getElementById('logo-redeagle-div');
		redEagleLogo.style.backgroundImage = 'url("https://www.yapms.com/app/res/redeagletv.png")';

		var lteLogo = document.getElementById('logo-div');
		lteLogo.style.backgroundImage = 'url("https://www.yapms.com/app/res/lte.jpg")';

		var pgLogo = document.getElementById('logo-pg-div');
		pgLogo.style.backgroundImage = 'url("https://www.yapms.com/app/res/pg.png")';
	}

	static loadButtons() {
		var backButtons = document.getElementsByClassName("backbutton");
		var closeButtons = document.getElementsByClassName("closebutton");

		for(var index = 0; index < backButtons.length; ++index) {
			var button = backButtons[index];
			button.setAttribute("data", "./html/backbutton.svg");
		}

		for(var index = 0; index < closeButtons.length; ++index) {
			var button = closeButtons[index];
			button.setAttribute("data", "./html/closebutton.svg");
		}
	}

	static loadFlags() {
		var countries = ['aus', 'usa', 'bra', 'can', 'ger', 'ind',
			'ita', 'ire', 'ned', 'prt', 'rus', 'esp', 'tur',
			'ukd', 'eu', 'un', 'fra', 'tat', 'che'];
	
		for(var countryIndex = 0; countryIndex < countries.length; ++countryIndex) {	
			var country = countries[countryIndex];
			var elements = document.getElementsByClassName("flag-" + country);
			for(var elementIndex = 0; elementIndex < elements.length; ++elementIndex) {
				var flag = elements[elementIndex];
				flag.setAttribute("src", "res/flags/" + country + ".svg");
			}	
		}
	}
}
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
			case "Canada_2019_house_of_commons":
				MapLoader.loadPresetMap('can/' + id);
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
				//if(obj['type'] !== 'gubernatorial' &&
				//	obj['type'] !== 'senatorial') {
					if(stateData['disabled']) {
						state.toggleDisable();
					}
				//}
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
		MapLoader.loadMap(MapLoader.save_filename, MapLoader.save_fontsize, MapLoader.save_strokewidth, MapLoader.save_dataid, MapLoader.save_type, MapLoader.save_year, {updateText: mapOptions.updateText});
		MapManager.setLockMap(false);
	}
}

MapLoader.save_filename = "";
MapLoader.save_dataid = "";
MapLoader.save_type = "";
MapLoader.save_year = "";
MapLoader.save_fontsize = "";
MapLoader.save_strokewidth = "";
class PresetLoader {
	static blockPresetNotify() {
		var notification = document.getElementById('notification');
		notification.style.display = 'inline';
		var message = notification.querySelector('#notification-message');
		var notificationText = 'Presets cannot be changed while editing a historical ' + MapLoader.save_type + ' map';
		message.innerHTML = notificationText;
		var title = notification.querySelector('#notification-title');
		title.innerHTML = 'Sorry';
	}

	static loadPreset(value) {
		if(blockPresets) {
			blockPresetNotify();
			return;
		}
	
		CandidateManager.initCandidates();

		switch(value) {
			case 'classic':
				PresetLoader.loadPresetClassic();
				break;
			case 'republican primary':
				PresetLoader.loadPresetRepublicanPrimary();
				break;
			case 'democratic primary':
				PresetLoader.loadPresetDemocraticPrimary();
				break;
			case 'france':
				PresetLoader.loadPresetFrance();
				break;
			case 'germany':
				PresetLoader.loadPresetGermany();
				break;
			case 'india':
				PresetLoader.loadPresetIndia();
				break;
			case 'italy':
				PresetLoader.loadPresetItaly();
				break;
			case 'uk':
				PresetLoader.loadPresetUK();
				break;
			case 'canada':
				PresetLoader.loadPresetCanada();
				break;
			case 'australia':
				PresetLoader.loadPresetAustralia();
				break;
			case 'spain':
				PresetLoader.loadPresetSpain();
				break;
			case 'turkey':
				PresetLoader.loadPresetTurkey();
				break;
			case 'trinidad_tobago':
				PresetLoader.loadPresetTrinidadTobago();
				break;
			case 'netherlands':
				PresetLoader.loadPresetNetherlands();
				break;
			case 'brazil':
				PresetLoader.loadPresetBrazil();
				break;
			case 'ireland':
				PresetLoader.loadPresetIreland();
				break;
			case 'russia':
				PresetLoader.loadPresetRussia();
				break;
			case 'switzerland':
				PresetLoader.loadPresetSwitzerland();
				break;
			case 'portugal':
				PresetLoader.loadPresetPortugal();
				break;
		}
		
		MapManager.verifyMap();
		verifyPaintIndex();
		countVotes();
		ChartManager.updateChart();
		ChartManager.chart.generateLegend();
		LegendManager.updateLegend();
	}

	// republicans vs democrats
	static loadPresetClassic() {
		var republican = new Candidate('Republican', 
			['#BF1D29', '#FF5865', '#FF8B98', '#Cf8980']);
		var democrat = new Candidate('Democrat',
			['#1C408C', '#577CCC', '#8AAFFF', '#949BB3']);

		CandidateManager.candidates['Republican'] = republican;
		CandidateManager.candidates['Democrat'] = democrat;
	}

	static loadPresetRepublicanPrimary() {
		var trump = new Candidate('Trump',
			['#bf1d29','#bf1d29','#bf1d29','#bf1d29']);
		var weld = new Candidate('Weld',
			['#e6b700','#e6b700','#e6b700','#e6b700']);
		var walsh = new Candidate('Walsh',
			['#1c408c','#1c408c','#1c408c','#1c408c']);
		var sanford = new Candidate('Sanford',
			['#1c8c28','#1c8c28','#1c8c28','#1c8c28']);
		
		CandidateManager.candidates['Trump'] = trump;
		CandidateManager.candidates['Weld'] = weld;
		CandidateManager.candidates['Walsh'] = walsh;
		CandidateManager.candidates['Sanford'] = sanford;
	}

	static loadPresetDemocraticPrimary() {
		var biden = new Candidate('Biden',
			['#009900','#009900','#009900','#009900']);
		var harris = new Candidate('Harris',
			['#ff9900','#ff9900','#ff9900','#ff9900']);
		var sanders = new Candidate('Sanders',
			['#457fff','#457fff','#457fff','#457fff']);
		var warren = new Candidate('Warren',
			['#996600','#996600','#996600','#996600']);
		var buttigieg = new Candidate('Buttigieg',
			['#990099','#990099','#990099','#990099']);
		var orourke = new Candidate('O\'Rourke',
			['#ff66ff','#ff66ff','#ff66ff','#ff66ff']);
		var booker = new Candidate('Booker',
			['#66ccff','#66ccff','#66ccff','#66ccff']);
		var yang = new Candidate('Yang',
			['#3da882','#3da882','#3da882','#3da882']);
		
		CandidateManager.candidates['Biden'] = biden;
		CandidateManager.candidates['Harris'] = harris;
		CandidateManager.candidates['Sanders'] = sanders;
		CandidateManager.candidates['Warren'] = warren;
		CandidateManager.candidates['Buttigieg'] = buttigieg;
		CandidateManager.candidates['O\'Rourke'] = orourke;
		CandidateManager.candidates['Booker'] = booker;
		CandidateManager.candidates['Yang'] = yang;
	}

	// French parties
	static loadPresetFrance() {
		var lrem = new Candidate('LREM', 
			['#ccb800', '#ccb800', '#ccb800', '#ccb800']);
		var rn = new Candidate('RN',
			['#0D378A', '#0D378A', '#0D378A', '#0D378A']);
		var eelv = new Candidate('EÉLV',
			['#00C000', '#00C000', '#00C000', '#00C000']);
		var lr = new Candidate('LR',
			['#0066CC', '#0066CC', '#0066CC', '#0066CC']);
		var lfi = new Candidate('LFI',
			['#CC2443', '#CC2443', '#CC2443', '#CC2443']);
		var ps = new Candidate('PS',
			['#FF8080', '#FF8080', '#FF8080', '#FF8080']);

		CandidateManager.candidates['LREM'] = lrem;
		CandidateManager.candidates['RN'] = rn;
		CandidateManager.candidates['EÉLV'] = eelv;
		CandidateManager.candidates['LR'] = lr;
		CandidateManager.candidates['LFI'] = lfi;
		CandidateManager.candidates['PS'] = ps;
		LegendManager.toggleLegendLeans()
	}

	// German parties
	static loadPresetGermany() {
		var union = new Candidate('CDU/CSU', 
			['#000000', '#000000', '#000000', '#000000']);
		var spd = new Candidate('SPD',
			['#F0001C', '#F0001C', '#F0001C', '#F0001C']);
		var grn = new Candidate('GRÜNE',
			['#46962B', '#46962B', '#46962B', '#46962B']);
		var afd = new Candidate('AfD',
			['#009EE0', '#009EE0', '#009EE0', '#009EE0']);
		var fdp = new Candidate('FDP',
			['#dec200', '#dec200', '#dec200', '#dec200']);
		var dl = new Candidate('LINKE',
			['#BE3075', '#BE3075', '#BE3075', '#BE3075']);

		CandidateManager.candidates['CDU/CSU'] = union;
		CandidateManager.candidates['SPD'] = spd;
		CandidateManager.candidates['GRÜNE'] = grn;
		CandidateManager.candidates['AfD'] = afd;
		CandidateManager.candidates['FDP'] = fdp;
		CandidateManager.candidates['LINKE'] = dl;
		LegendManager.toggleLegendLeans()
	}

	// Italian parties
	static loadPresetItaly() {
		var lega = new Candidate('Lega', 
			['#008F21', '#008F21', '#008F21', '#008F21']);
		var pd = new Candidate('PD',
			['#FF3643', '#FF3643', '#FF3643', '#FF3643']);
		var mcs = new Candidate('M5S',
			['#FFEB3B', '#FFEB3B', '#FFEB3B', '#FFEB3B']);
		var fi = new Candidate('FI',
			['#318CE7', '#318CE7', '#318CE7', '#318CE7']);
		var fdi = new Candidate('FdI',
			['#003397', '#003397', '#003397', '#003397']);
		var eu = new Candidate('+Eu',
			['#FFD700', '#FFD700', '#FFD700', '#FFD700']);

		CandidateManager.candidates['Lega'] = lega;
		CandidateManager.candidates['PD'] = pd;
		CandidateManager.candidates['M5S'] = mcs;
		CandidateManager.candidates['FI'] = fi;
		CandidateManager.candidates['FdI'] = fdi;
		CandidateManager.candidates['+EU'] = eu;
		LegendManager.toggleLegendLeans()
	}

	// British parties
	static loadPresetUK() {
		var bxp = new Candidate('BXP',
			['#12B6CF', '#12B6CF', '#12B6CF', '#12B6CF']);
		var ldm = new Candidate('LDM',
			['#FDBB30', '#FDBB30', '#FDBB30', '#FDBB30']);
		var lab = new Candidate('LAB',
			['#DC241f', '#DC241f', '#DC241f', '#DC241f']);
		var grn = new Candidate('GRN',
			['#6AB023', '#6AB023', '#6AB023', '#6AB023']);
		var con = new Candidate('CON', 
			['#0087DC', '#0087DC', '#0087DC', '#0087DC']);
		var snp = new Candidate('SNP',
			['#cccc00', '#cccc00', '#cccc00', '#cccc00']);
		var tig = new Candidate('TIG',
			['#222221', '#222221', '#222221', '#222221']);
		var ukip = new Candidate('UKIP',
			['#70147A', '#70147A', '#70147A', '#70147A']);
		var pc = new Candidate('PC',
			['#008142', '#008142', '#008142', '#008142']);
		var sf = new Candidate('SF',
			['#008800', '#008800', '#008800', '#008800']);
		var dup = new Candidate('DUP',
			['#D46A4C', '#D46A4C', '#D46A4C', '#D46A4C']);
		var uup = new Candidate('UUP',
			['#9999FF', '#9999FF', '#9999FF', '#9999FF']);
		var apni = new Candidate('APNI',
			['#F6CB2F', '#F6CB2F', '#F6CB2F', '#F6CB2F']);

		CandidateManager.candidates['BXP'] = bxp;
		CandidateManager.candidates['LDM'] = ldm;
		CandidateManager.candidates['LAB'] = lab;
		CandidateManager.candidates['GRN'] = grn
		CandidateManager.candidates['CON'] = con;
		CandidateManager.candidates['SNP'] = snp;
		CandidateManager.candidates['TIG'] = tig;
		CandidateManager.candidates['PC'] = pc;
		CandidateManager.candidates['SF'] = sf;
		CandidateManager.candidates['DUP'] = dup;
		CandidateManager.candidates['UUP'] = uup;
		CandidateManager.candidates['APNI'] = apni;
		LegendManager.toggleLegendLeans()
	}

	// Canadian parties
	static loadPresetCanada() {
		var con = new Candidate('CON', 
			['#6495ED', '#6495ED', '#6495ED', '#6495ED']);
		var lib = new Candidate('LIB',
			['#F08080', '#F08080', '#F08080', '#F08080']);
		var ndp = new Candidate('NDP',
			['#F4A460', '#F4A460', '#F4A460', '#F4A460']);
		var grn = new Candidate('GRN',
			['#9ACD32', '#9ACD32', '#9ACD32', '#9ACD32']);
		var bqc = new Candidate('BQC',
			['#87CEFA', '#87CEFA', '#87CEFA', '#87CEFA']);
		var ppc = new Candidate('PPC',
			['#83789E', '#83789E', '#83789E', '#83789E']);

		CandidateManager.candidates['CON'] = con;
		CandidateManager.candidates['LIB'] = lib;
		CandidateManager.candidates['NDP'] = ndp;
		CandidateManager.candidates['GRN'] = grn;
		CandidateManager.candidates['BQC'] = bqc;
		CandidateManager.candidates['PPC'] = ppc;
		LegendManager.toggleLegendLeans()
	}

	// Australian parties
	static loadPresetAustralia() {
		var lib = new Candidate('LIB', 
			['#0047AB', '#0047AB', '#0047AB', '#0047AB']);
		var lnp = new Candidate('LNP',
			['#063C7C', '#063C7C', '#063C7C', '#063C7C']);
		var nat = new Candidate('NAT',
			['#006644', '#006644', '#006644', '#006644']);
		var clp = new Candidate('CLP',
			['#F8981D', '#F8981D', '#F8981D', '#F8981D']);
		var ind = new Candidate('IND',
			['#C0C0C0', '#C0C0C0', '#C0C0C0', '#C0C0C0']);
		var cen = new Candidate('CEN',
			['#ff6300', '#ff6300', '#ff6300', '#ff6300']);
		var grn = new Candidate('GRN',
			['#39B54A', '#39B54A', '#39B54A', '#39B54A']);
		var lab = new Candidate('LAB',
			['#DE3533', '#DE3533', '#DE3533', '#DE3533']);

		CandidateManager.candidates['LIB'] = lib;
		CandidateManager.candidates['LNP'] = lnp;
		CandidateManager.candidates['NAT'] = nat;
		CandidateManager.candidates['CLP'] = clp;
		CandidateManager.candidates['IND'] = ind;
		CandidateManager.candidates['CEN'] = cen;
		CandidateManager.candidates['GRN'] = grn;
		CandidateManager.candidates['LAB'] = lab;
		LegendManager.toggleLegendLeans()
	}

	// Spanish Parties
	static loadPresetSpain() {
		var psoe = new Candidate('PSOE',
			['#EF1C27', '#EF1C27', '#EF1C27', '#EF1C27']);
		var pp = new Candidate('PP',
			['#1D84CE', '#1D84CE', '#1D84CE', '#1D84CE']);
		var cs = new Candidate('CS',
			['#EB6109', '#EB6109', '#EB6109', '#EB6109']);
		var unidas = new Candidate('Unidas Podemos',
			['#7B4977', '#7B4977', '#7B4977', '#7B4977']);
		var vox = new Candidate('Vox',
			['#63BE21', '#63BE21', '#63BE21', '#63BE21']);
		var erc = new Candidate('ERC-Sobiranistes',
			['#FFB232', '#FFB232', '#FFB232', '#FFB232']);
		var jxcat = new Candidate('JxCat-Junts',
			['#ED5975', '#ED5975', '#ED5975', '#ED5975']);
		var eajpnv = new Candidate('EAJ/PNV',
			['#4AAE4A', '#4AAE4A', '#4AAE4A', '#4AAE4A']);
		var eh = new Candidate('EH Bildu',
			['#B5CF18', '#B5CF18', '#B5CF18', '#B5CF18']);
		var compromis = new Candidate('Compromís 2019',
			['#EC8953', '#EC8953', '#EC8953', '#EC8953']);
		var cca = new Candidate('CCa-PNC',
			['#FFD700', '#FFD700', '#FFD700', '#FFD700']);
		var prc = new Candidate('PRC',
			['#C2CE0C', '#C2CE0C', '#C2CE0C', '#C2CE0C']);

		CandidateManager.candidates['PSOE'] = psoe;
		CandidateManager.candidates['PP'] = pp;
		CandidateManager.candidates['CS'] = cs;
		CandidateManager.candidates['Unidas Podemos'] = unidas;
		CandidateManager.candidates['Vox'] = vox;
		CandidateManager.candidates['ERC-Sobiranistes'] = erc;
		CandidateManager.candidates['JxCat-Junts'] = jxcat;
		CandidateManager.candidates['EAJ/PNV'] = eajpnv;
		CandidateManager.candidates['EH Bildu'] = eh;
		CandidateManager.candidates['Compromís 2019'] = compromis;
		CandidateManager.candidates['CCa-PNC'] = cca;
		CandidateManager.candidates['PRC'] = prc;
		LegendManager.toggleLegendLeans();
	}

	// Turkish Parties
	static loadPresetTurkey() {
		var akp = new Candidate('AKP',
			['#ffcc00','#ffcc00','#ffcc00','#ffcc00']);
		var mhp = new Candidate('MHP',
			['#870000','#870000','#870000','#870000']);
		var bbp = new Candidate('BBP',
			['#cc5252','#cc5252','#cc5252','#cc5252']);
		var chp = new Candidate('CHP',
			['#e30000','#e30000','#e30000','#e30000']);
		var hdp = new Candidate('HDP',
			['#951b88','#951b88','#951b88','#951b88']);
		var iyi = new Candidate('IYI',
			['#0099cc','#0099cc','#0099cc','#0099cc']);
		var sp = new Candidate('SP',
			['#ff5f5f','#ff5f5f','#ff5f5f','#ff5f5f']);
		var tip = new Candidate('TIP',
			['#990000','#990000','#990000','#990000']);
		var dp = new Candidate('DP',
			['#ff3333','#ff3333','#ff3333','#ff3333']);
		var ind = new Candidate('Ind',
			['#b0b0b0','#b0b0b0','#b0b0b0','#b0b0b0']);

		CandidateManager.candidates['AKP'] = akp;
		CandidateManager.candidates['MHP'] = mhp;
		CandidateManager.candidates['BBP'] = bbp;
		CandidateManager.candidates['CHP'] = chp;
		CandidateManager.candidates['HDP'] = hdp;
		CandidateManager.candidates['IYI'] = iyi;
		CandidateManager.candidates['SP'] = sp;
		CandidateManager.candidates['TIP'] = tip;
		CandidateManager.candidates['DP'] = dp;
		CandidateManager.candidates['Ind'] = ind;
	}
	
	// Trinidad and Tobago Parties
	static loadPresetTrinidadTobago() {
		var pnm = new Candidate('PNM',
			['#ff0000','#ff0000','#ff0000','#ff0000']);
		var unc = new Candidate('UNC',
			['#e8ac41','#e8ac41','#e8ac41','#e8ac41']);
		var cop = new Candidate('COP',
			['#000000','#000000','#000000','#000000']);
		var pdp = new Candidate('PDP',
			['#32cd32','#32cd32','#32cd32','#32cd32']);

		CandidateManager.candidates['PNM'] = pnm;
		CandidateManager.candidates['UNC'] = unc;
		CandidateManager.candidates['COP'] = cop;
		CandidateManager.candidates['PDP'] = pdp;
	}

	// Dutch Parties
	static loadPresetNetherlands() {
		var fvd = new Candidate('FvD',
			['#841818','#841818','#841818','#841818']);
		var vvd = new Candidate('VVD',
			['#21276A','#21276A','#21276A','#21276A']);
		var cda = new Candidate('CDA',
			['#007C5E','#007C5E','#007C5E','#007C5E']);
		var gl = new Candidate('GL',
			['#83BD00','#83BD00','#83BD00','#83BD00']);
		var pvda = new Candidate('PvdA',
			['#E12B1A','#E12B1A','#E12B1A','#E12B1A']);
		var d66 = new Candidate('D66',
			['#00B13D','#00B13D','#00B13D','#00B13D']);
		var pvv = new Candidate('PVV',
			['#21468B','#21468B','#21468B','#21468B']);
		var sp = new Candidate('SP',
			['#EE161F','#EE161F','#EE161F','#EE161F']);
		var cu = new Candidate('CU',
			['#00A7EB','#00A7EB','#00A7EB','#00A7EB']);
		var pvdd = new Candidate('PvdD',
			['#006B28','#006B28','#006B28','#006B28']);
		var a50 = new Candidate('50+',
			['#932390','#932390','#932390','#932390']);
		var sgp = new Candidate('SGP',
			['#E95D0F','#E95D0F','#E95D0F','#E95D0F']);
		var denk = new Candidate('DENK',
			['#00A7EB','#00A7EB','#00A7EB','#00A7EB']);

		CandidateManager.candidates['FvD'] = fvd;
		CandidateManager.candidates['VVD'] = vvd;
		CandidateManager.candidates['CDA'] = cda;
		CandidateManager.candidates['GL'] = gl;
		CandidateManager.candidates['PvdA'] = pvda;
		CandidateManager.candidates['D66'] = d66;
		CandidateManager.candidates['PVV'] = pvv;
		CandidateManager.candidates['SP'] = sp;
		CandidateManager.candidates['CU'] = cu;
		CandidateManager.candidates['PvdD'] = pvdd;
		CandidateManager.candidates['50+'] = a50;
		CandidateManager.candidates['DENK'] = denk;
		LegendManager.toggleLegendLeans();
	}

	// Brazilian Parties
	static loadPresetBrazil() {
		var psl = new Candidate('PSL',
			['#203B78','#203B78','#203B78','#203B78']);
		var pp = new Candidate('PP',
			['#7DC9FF','#7DC9FF','#7DC9FF','#7DC9FF']);
		var pl = new Candidate('PL',
			['#0F0073','#0F0073','#0F0073','#0F0073']);
		var psd = new Candidate('PSD',
			['#FFA500','#FFA500','#FFA500','#FFA500']);
		var mdb = new Candidate('MDB',
			['#30914D','#30914D','#30914D','#30914D']);
		var prb = new Candidate('PRB',
			['#00E6A8','#00E6A8','#00E6A8','#00E6A8']);
		var psdb = new Candidate('PSDB',
			['#0080FF','#0080FF','#0080FF','#0080FF']);
		var dem = new Candidate('DEM',
			['#8CC63E','#8CC63E','#8CC63E','#8CC63E']);
		var sd = new Candidate('SD',
			['#FF9C2B','#FF9C2B','#FF9C2B','#FF9C2B']);
		var pode = new Candidate('PODE',
			['#2DA933','#2DA933','#2DA933','#2DA933']);
		var ptb = new Candidate('PTB',
			['#7B7B7B','#7B7B7B','#7B7B7B','#7B7B7B']);
		var psc = new Candidate('PSC',
			['#009118','#009118','#009118','#009118']);
		var novo = new Candidate('NOVO',
			['#FF4D00','#FF4D00','#FF4D00','#FF4D00']);
		var patri = new Candidate('PATRI',
			['#CCAA00','#CCAA00','#CCAA00','#CCAA00']);
		
		CandidateManager.candidates['PSL'] = psl;
		CandidateManager.candidates['PP'] = pp;
		CandidateManager.candidates['PL'] = pl;
		CandidateManager.candidates['PSD'] = psd;
		CandidateManager.candidates['MDB'] = mdb;
		CandidateManager.candidates['PRB'] = prb;
		CandidateManager.candidates['PSDB'] = psdb;

		var pt = new Candidate('PT',
			['#CC0000','#CC0000','#CC0000','#CC0000']);
		var psb = new Candidate('PSB',
			['#FFCC00','#FFCC00','#FFCC00','#FFCC00']);
		var pdt = new Candidate('PDT',
			['#FF0000','#FF0000','#FF0000','#FF0000']);
		var psol = new Candidate('PSOL',
			['#700000','#700000','#700000','#700000']);
		var pcdob = new Candidate('PCdoB',
			['#A30000','#A30000','#A30000','#A30000']);
		var cidadania = new Candidate('CIDADANIA',
			['#FF9191','#FF9191','#FF9191','#FF9191']);
		var pmn = new Candidate('PMN',
			['#DD3333','#DD3333','#DD3333','#DD3333']);
		var rede = new Candidate('REDE',
			['#00C2BB','#00C2BB','#00C2BB','#00C2BB']);

		CandidateManager.candidates['PT'] = pt;
		CandidateManager.candidates['PSB'] = psb;
		CandidateManager.candidates['PDT'] = pdt;
		CandidateManager.candidates['PSOL'] = psol;

		var pros = new Candidate('PROS',
			['#FF5460','#FF5460','#FF5460','#FF5460']);
		var avante = new Candidate('AVANTE',
			['#ED5F36','#ED5F36','#ED5F36','#ED5F36']);

		CandidateManager.candidates['PROS'] = pros;
		CandidateManager.candidates['AVANTE'] = avante;
	}

	static loadPresetIreland() {
		var finegael= new Candidate('FG',
			['#6699FF','#6699FF','#6699FF','#6699FF']);
		var fiannafail = new Candidate('FF',
			['#66BB66','#66BB66','#66BB66','#66BB66']);
		var sinnfein = new Candidate('SF',
			['#326760','#326760','#326760','#326760']);
		var labour = new Candidate('Lab',
			['#CC0000','#CC0000','#CC0000','#CC0000']);
		var aaapbp = new Candidate('AAA-PBP',
			['#E5E500','#E5E500','#E5E500','#E5E500']);
		var inds4change = new Candidate('I4C',
			['#FFC0CB','#FFC0CB','#FFC0CB','#FFC0CB']);
		var socialdemocrats = new Candidate('SD',
			['#752F8B','#752F8B','#752F8B','#752F8B']);
		var green = new Candidate('GP',
			['#99CC33','#99CC33','#99CC33','#99CC33']);
		var indy = new Candidate('Ind',
			['#CCCCCC','#CCCCCC','#CCCCCC','#CCCCCC']);

		CandidateManager.candidates['FG'] = finegael;
		CandidateManager.candidates['FF'] = fiannafail;
		CandidateManager.candidates['SF'] = sinnfein;
		CandidateManager.candidates['Lab'] = labour;
		CandidateManager.candidates['AAA-PBP'] = aaapbp;
		CandidateManager.candidates['I4C'] = inds4change;
		CandidateManager.candidates['SD'] = socialdemocrats;
		CandidateManager.candidates['GP'] = green;
		CandidateManager.candidates['Ind'] = indy;
	}

	static loadPresetRussia() {
		var unitedrussia = new Candidate('ER',
			['#0C2C84','#0C2C84','#0C2C84','#0C2C84']);
		var libdem = new Candidate('LDPR',
			['#2862B3','#2862B3','#2862B3','#2862B3']);
		var communist = new Candidate('CPRF',
			['#D70000','#D70000','#D70000','#D70000']);
		var patriots = new Candidate('Patriots',
			['#F6DF3B','#F6DF3B','#F6DF3B','#F6DF3B']);
		var just = new Candidate('CP',
			['#FAB512','#FAB512','#FAB512','#FAB512']);
		var rodina = new Candidate('Rodina',
			['#EA484A','#EA484A','#EA484A','#EA484A']);
		var yabloko = new Candidate('Yabloko',
			['#00A800','#00A800','#00A800','#00A800']);
		var indy = new Candidate('Ind',
			['#CCCCCC','#CCCCCC','#CCCCCC','#CCCCCC']);

		CandidateManager.candidates['ER'] = unitedrussia;
		CandidateManager.candidates['LDPR'] = libdem;
		CandidateManager.candidates['CPRF'] = communist;
		CandidateManager.candidates['Patriots'] = patriots;
		CandidateManager.candidates['CP'] = just;
		CandidateManager.candidates['Rodina'] = rodina;
		CandidateManager.candidates['Yabloko'] = yabloko;
		CandidateManager.candidates['Ind'] = indy;
	}

	static loadPresetPortugal() {
		var ps = new Candidate('PS', 
			['#ff61ea','#ff61ea','#ff61ea','#ff61ea']);
		var indy = new Candidate('Ind', 
			['#aaaaaa','#aaaaaa','#aaaaaa','#aaaaaa']);
		var be = new Candidate('BE', 
			['#870909','#870909','#870909','#870909']);
		var pcp = new Candidate('PCP', 
			['#ff0000','#ff0000','#ff0000','#ff0000']);
		var pev = new Candidate('PEV', 
			['#008000','#008000','#008000','#008000']);
		var ppdpsd = new Candidate('PPD/PSD',
			['#ff9900','#ff9900','#ff9900','#ff9900']);
		var cdspp = new Candidate('CDS-PP',
			['#00daff','#00daff','#00daff','#00daff']);
		var pan = new Candidate('PAN',
			['#008080','#008080','#008080','#008080']);

		CandidateManager.candidates['PS'] = ps;
		CandidateManager.candidates['BE'] = be;
		CandidateManager.candidates['PCP'] = pcp;
		CandidateManager.candidates['PEV'] = pev;
		CandidateManager.candidates['PPD/PSD'] = ppdpsd;
		CandidateManager.candidates['CDS-PP'] = cdspp;
		CandidateManager.candidates['PAN'] = pan;
		CandidateManager.candidates['Ind'] = indy;
	}

	static loadPresetIndia() {
		var bjp = new Candidate('BJP',
			['#ff9933','#ff9933','#ff9933','#ff9933']);
		var ysrcp = new Candidate('YSRCP',
			['#1569c7','#1569c7','#1569c7','#1569c7']);
		var ss = new Candidate('SS',
			['#ff6634','#ff6634','#ff6634','#ff6634']);
		var jd = new Candidate('JD',
			['#004285','#004285','#004285','#004285']);
		var bjd= new Candidate('BJD',
			['#006400','#006400','#006400','#006400']);
		var bsp = new Candidate('BSP',
			['#0000ff','#0000ff','#0000ff','#0000ff']);
		var trs = new Candidate('TRS',
			['#ff89ce','#ff89ce','#ff89ce','#ff89ce']);
		var ljp = new Candidate('LJP',
			['#40ff7e','#40ff7e','#40ff7e','#40ff7e']);

		var inc = new Candidate('INC',
			['#00bfff','#00bfff','#00bfff','#00bfff']);
		var dmk = new Candidate('DMK',
			['#de1100','#de1100','#de1100','#de1100']);
		var ncp = new Candidate('NCP',
			['#008080','#008080','#008080','#008080']);

		var aitc = new Candidate('AITC',
			['#00f200','#00f200','#00f200','#00f200']);
		var sp = new Candidate('SP',
			['#a30000','#a30000','#a30000','#a30000']);

		CandidateManager.candidates['BJP'] = bjp;
		CandidateManager.candidates['YSRCP'] = ysrcp;
		CandidateManager.candidates['SS'] = ss;
		CandidateManager.candidates['JD'] = jd;
		CandidateManager.candidates['BJD'] = bjd;
		CandidateManager.candidates['BSP'] = bsp;
		CandidateManager.candidates['TRS'] = trs;
		CandidateManager.candidates['LJP'] = ljp;
		CandidateManager.candidates['INC'] = inc;
		CandidateManager.candidates['DMK'] = dmk;
		CandidateManager.candidates['NCP'] = ncp;
		CandidateManager.candidates['AITC'] = aitc;
		CandidateManager.candidates['SP'] = sp;
	}

	static loadPresetSwitzerland() {
		var svpudc = new Candidate('SVP/UDC', 
			['#088a4b','#088a4b','#088a4b','#088a4b']);
		var fdpplr = new Candidate('FDP/PLR', 
			['#0e52a0','#0e52a0','#0e52a0','#0e52a0']);
		var spps = new Candidate('SDP/PSS', 
			['#FA1360','#FA1360','#FA1360','#FA1360']);
		var gpspes = new Candidate('GPS/PES', 
			['#01df01','#01df01','#01df01','#01df01']);
		var cvppdc = new Candidate('CVP/PDC', 
			['#ef7d00','#ef7d00','#ef7d00','#ef7d00']);
		var glppvl = new Candidate('GLP/PVL',
			['#a6cf42','#a6cf42','#a6cf42','#a6cf42']);
		var bdppdb = new Candidate('BDP/PBD',
			['#000000','#000000','#000000','#000000']);
		var evppev = new Candidate('EVP/PEV',
			['#ffd735','#ffd735','#ffd735','#ffd735']);
		var ldt = new Candidate('LdT',
			['#6495ed','#6495ed','#6495ed','#6495ed']);
		var pdapst = new Candidate('PdA/PST',
			['#FF0000','#FF0000','#FF0000','#FF0000']);
		var sols = new Candidate('SolS',
			['#ababab','#ababab','#ababab','#ababab']);
		var eduudf = new Candidate('EDU/UDF',
			['#9b2a58','#9b2a58','#9b2a58','#9b2a58']);

		CandidateManager.candidates['SVP/UDD'] = svpudc ;
		CandidateManager.candidates['FDP/PLR'] = fdpplr;
		CandidateManager.candidates['SP/PS'] = spps;
		CandidateManager.candidates['GPS/PES'] = gpspes;
		CandidateManager.candidates['CVP/PDC'] = cvppdc;
		CandidateManager.candidates['GLP/PVL'] = glppvl;
		CandidateManager.candidates['BDP/PBD'] = bdppdb;
		CandidateManager.candidates['EVP/PEV'] = evppev;
		CandidateManager.candidates['PdA/PST'] = pdapst;
		CandidateManager.candidates['SolS'] = sols;
		CandidateManager.candidates['EDU/UDF'] = eduudf;
		CandidateManager.candidates['LdT'] = ldt;
	}
}

PresetLoader.blockPresets = false;
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
		} else if(this.dataid === 'brazil_senate') {
			this.setVoteCount(3, false);
			this.voteCount_beforeDisable = 3;
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
function updateBattleChart() {

	if(Object.keys(CandidateManager.candidates).length > 3) {
		if(mobile) {
			ChartManager.setChart('pie', 'bottom');
		} else {
			ChartManager.setChart('pie');
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
	for(var key in CandidateManager.candidates) {
		++candidateIndex;

		var candidate = CandidateManager.candidates[key];

		if(candidateIndex == 0) {
			tossup.style.background = candidate.colors[2];
			
			tossup.style.flexBasis = '' + (candidate.voteCount / totalVotes) * 100 + '%';
			if(ChartManager.chartLabels) {
				tossup.innerHTML = '<p>' + candidate.voteCount + '</p>';
			} else {
				tossup.innerHTML = '<p></p>';
			}
		} else if(candidateIndex == 1) {
			topbar.style.flexBasis = '' + 
				(candidate.voteCount / totalVotes) * 100 + '%';
			if(ChartManager.chartLeans) {
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
				
				if(ChartManager.chartLabels) {
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

				if(ChartManager.chartLabels) {
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
			if(ChartManager.chartLeans) {
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

				if(ChartManager.chartLabels) {
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

				if(ChartManager.chartLabels) {
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

function buttonClick(clickElement, options) {
	if(mode === 'move') {
		return;
	} else if(mode === 'paint' || mode === 'paintmove') {
		if(MapLoader.save_type === 'primary' || MapLoader.save_type === 'proportional') {
			buttonClickPaintProportional(clickElement);
		} else {

			buttonClickPaint(clickElement, options);
		}
	} else if(mode === 'ec') {
		buttonClickEC(clickElement);
	} else if(mode === 'delete') {
		buttonClickDelete(clickElement);
	}
	
	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend();
}

function buttonClickPaint(clickElement, options) {
	var id = clickElement.getAttribute('id').split('-')[0];
	var state = states.find(state => state.name === id);
	stateClickPaint(state, options);
	//state.incrementCandidateColor(paintIndex);
}

function buttonClickPaintProportional(clickElement) {
	var id = clickElement.getAttribute('id').split('-')[0];
	var state = states.find(state => state.name === id);
	stateClickPaintProportional(state);
}

function buttonClickEC(clickElement) {
	var id = clickElement.getAttribute('id');
	var split = id.split('-');
	var state = states.find(state => state.name === split[0]);
	var ecedit = document.getElementById('ecedit');
	var eceditText = document.getElementById('ecedit-message');
	var input = document.getElementById('state-ec');
	var stateId = document.getElementById('state-id');
	eceditText.innerHTML = 'Set ' + split[0] + ' electoral college';
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

function landClick(clickElement, options) {
	if(mode === 'move') {
		return;
	}

	var setSolid = false;
	if(options) {
		setSolid = options.setSolid;
	}

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

	// make the popular vote calculator point to the AL
	viewPopularVote(AL);

	if(mode === 'paint' || mode === 'paintmove') {
		// check if each district has the same candidate and color value
		if(setSolid === false) {
			AL.incrementCandidateColor(paintIndex);
		} else {
			AL.setColor(paintIndex, 0);
		}
		districts.forEach(function(district) {
			district.setColor(AL.getCandidate(), AL.getColorValue(), true);
		});
	} else if(mode === 'delete') {
		districts.forEach(function(district) {
			district.toggleDisable();
		});
	}

	countVotes();
	ChartManager.updateChart();
	LegendManager.updateLegend();
	countPopularVote();
}

function stateClick(clickElement, options) {
	// first element is the state
	// second element might be button
	//var split = id.split('-');
	// get state where state.name equals the id attribute
	//var state = states.find(state => state.name === split[0]);
	var id = clickElement.getAttribute('id');
	var state = states.find(state => state.name === id);

	switch(mode) {
		case 'paint':
		case 'paintmove':
			if(MapLoader.save_type === 'primary' || MapLoader.save_type === 'proportional') {
				stateClickPaintProportional(state, id);
			} else if(MapLoader.save_type === 'usapopular') {
				stateClickPaintProportional(state, id);	
			} else {
				stateClickPaint(state, options);
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

function stateClickPaint(state, options) {

	if(state.candidate === 'Tossup' && paintIndex === 'Tossup') {
		var tooltip = document.getElementById('legend-tooltip');
		if(tooltip) {
			tooltip.style.opacity = 0.7;

			if(tooltipTimeout) {
				window.clearTimeout(tooltipTimeout);
			}

			tooltipTimeout = setTimeout(function() {
				tooltip.style.opacity = 0.0;
			}, 3000);
		}
	}

	if(mobile === false) {
		var setPopularVoteElement = document.getElementById('popularvote-clicksetpv');
		var setPopularVote = false;
		if(setPopularVoteElement) {
			setPopularVote = setPopularVoteElement.checked;
		}

		var setSolid = false;
		if(options) {
			setSolid = options.setSolid;
		}

		if(setSolid) {
			state.setColor(paintIndex, 0, setPopularVote);
		} else {
			state.incrementCandidateColor(paintIndex, setPopularVote);
		}

		if(state.name.includes('-D')) {
			var autoMarginsElement = document.getElementById('popularvote-automargins');
			var autoMargins = false;
			if(autoMarginsElement) {
				autoMargins = autoMarginsElement.checked;
			}

			var avoidALMarginsElement = document.getElementById('popularvote-avoidalmargins').checked;
			var avoidALMargins = false;
			if(avoidALMarginsElement) {
				avoidALMargins = avoidALMarginsElement.checked;
			}

			if(autoMargins === true && avoidALMargins === false) {
				calculateAutoMarginAL(state.name.split('-')[0]);
			}
		}

		viewPopularVote(state);
		countPopularVote(options);
	} else {
		state.incrementCandidateColor(paintIndex);
	}
}

function stateClickPaintProportional(state, id) {
	if(state === undefined) {
		alert("FAIL");
	}

	if(state.disabled) {
		return;
	}

	closeAllPopups();
	var demdel = document.getElementById('demdel');
	demdel.style.display = 'flex';
	var message = document.getElementById('demdel-message');
	if(state.name !== 'SU') {
		message.innerHTML = state.name + ' - ' + state.voteCount + ' delegates';
	} else {
		message.innerHTML = 'Super - ' + state.voteCount + ' delegates';
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
		eceditText.innerHTML = 'Set ' + state.name + ' electoral college';
		input.value = state.voteCount;
		stateId.value = state.name;
		ecedit.style.display = 'inline';
	}
}

function specialClick(clickElement, e) {
	var id = clickElement.getAttribute('id');
	var state = states.find(state => state.name === id);
	if(mode === 'move') {

	} else if(mode === 'paint' || mode === 'paintmove') {
		state.incrementCandidateColor(paintIndex);
		countVotes();
		ChartManager.updateChart();
		LegendManager.updateLegend();
	}
}

// when a button on the legend is clicked, it saves the selected candidate
// to a variable, so that you can paint with it
function legendClick(candidate, button) {

	if(mode === 'move') {

	} else if(mode === 'paint' || mode === 'paintmove') {
		paintIndex = candidate;
		LegendManager.selectCandidateDisplay(button);
	} else if(mode === 'candidate' && candidate !== 'Tossup') {
		var candidateedit = document.getElementById('candidateedit');
		candidateedit.style.display = 'inline';
		var nameinput = document.getElementById('candidate-name');
		nameinput.value = candidate;
		var solidinput = document.getElementById('candidate-solid');
		solidinput.value = CandidateManager.candidates[candidate].colors[0];
		var likelyinput = document.getElementById('candidate-likely');
		likelyinput.value = CandidateManager.candidates[candidate].colors[1];
		var leaninput = document.getElementById('candidate-lean');
		leaninput.value = CandidateManager.candidates[candidate].colors[2];
		var tiltinput = document.getElementById('candidate-tilt');
		tiltinput.value = CandidateManager.candidates[candidate].colors[3];
		var hiddeninput = document.getElementById('candidate-originalName');
		var message = document.getElementById('candidateedit-message');
		message.innerHTML = 'Edit ' + candidate;
		hiddeninput.value = candidate;
	} else if(mode === 'deletecandidate' && candidate !== 'Tossup') {
		CandidateManager.deleteCandidateByName(candidate);		
	}
}
function verifyCongress() {
	if(mobile) {
		return false;
	}

	var element = document.getElementById('sidebar-congress');

	if(enableCongress) {
		element.style.display = 'block';
		return true;
	} else {
		element.style.display = 'none';
		return false;
	}
}

function verifyCongressContested() {

	if(mobile) {
		return false;
	}

	var element = document.getElementById('sidebar-congress-contested');

	if(enableCongressContested) {
		element.style.display = 'block';
		return true;
	} else {
		element.style.display = 'none';
		return false;
	}
}

function setCongressContested() {

	if(verifyCongressContested() === false) {
		return;
	}

	var element = document.getElementById('sidebar-congress-contested');

	db_getCongress(function(data) {
		for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
			var state = states[stateIndex];
			var stateName = state.name.split('-')[0];
			var district = state.name.split('-')[1];

			// Convert district to a number
			// AL -> 0, 01 -> 1, 02 -> 2
			var districtIndex = district;
			if(districtIndex === 'AL') {
				districtIndex = '0';
			}
			districtIndex = parseInt(districtIndex).toString();
			
			var districtData = data.filter(obj => {
				return obj.State === stateName &&
					obj.District === districtIndex;
			})[0];

			if(state.colorValue !== 0) {
				var district = document.createElement('div');
				district.setAttribute('class', 'sidebar-box');

				var title = document.createElement('h3');
				title.innerHTML = state.name;
				district.appendChild(title);

				var rep = document.createElement('div');
				rep.innerHTML = districtData.Representative + ' - ' + districtData.Party;
				district.appendChild(rep);

				var color = document.createElement('div');
				color.setAttribute('class', 'sidebar-congress-colors');
				var proj = document.createElement('div');
				proj.innerHTML = '<span>Projection</span>';
				proj.setAttribute('class', 'sidebar-congress-color');
				proj.style.backgroundColor = state.htmlElement.style.fill;
				color.appendChild(proj);
				var map = document.createElement('div');
				map.innerHTML = '<span>Map</span>';
				map.setAttribute('class', 'sidebar-congress-color');
				map.style.backgroundColor = state.htmlElement.style.fill;
				map.style.cursor = 'pointer';
				state.onChange = (function() {
					var m = map;
					var s = state;
					return function() {
						m.style.backgroundColor = s.htmlElement.style.fill;
					}
				})();

				map.onclick = (function() {
					var s = state;
					var m = map;
					return function() {
						s.incrementCandidateColor(paintIndex, false);	
						m.style.backgroundColor = s.htmlElement.style.fill;
					}
				})();
				color.appendChild(map);

				district.appendChild(color);
				element.appendChild(district);
			}
		}
	});

}

function setCongressOnHover() {

	if(verifyCongress() === false) {
		return;
	}

	db_getCongress(function(data) {
		for(var stateIndex = 0, length = states.length; stateIndex < length; ++stateIndex) {
			var state = states[stateIndex];

			state.htmlElement.onmouseover = (function() {
				var stateName = state.name.split('-')[0];
				var district = state.name.split('-')[1];

				// Convert district to a number
				// AL -> 0, 01 -> 1, 02 -> 2
				var districtIndex = district;
				if(districtIndex === 'AL') {
					districtIndex = '0';
				}
				districtIndex = parseInt(districtIndex).toString();

				var districtData = data.filter(obj => {
					return obj.State === stateName &&
						obj.District === districtIndex;
				})[0];

				return function() {
					var element = document.getElementById('sidebar-congress-district');
					element.innerHTML = stateName + '-' + district;
					element = document.getElementById('sidebar-congress-representative');
					element.innerHTML = districtData.Representative;
					element = document.getElementById('sidebar-congress-party');
					element.innerHTML = districtData.Party;

					if(KeyboardManager.keyStates[70]) {
						stateClick(this, {setSolid: true});
					}
				}
			})();
		}
	});
}

function db_getCongress(onLoad) {
	$.ajax({
		url: 'req_congress.php',
		type: 'GET',
		success : function(data) {
			var obj = jQuery.parseJSON(data);
			onLoad(obj);
		},
		error : function(a, b, c) {
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
}
data = {
'turkey_national_assembly': {'Adana': 15, 'Adıyaman':5, 'Afyonkarahisar':6, 'Ağrı':4, 'Aksaray':4, 'Amasya':3, 'Ankara':36, 'Antalya':16, 'Ardahan':2, 'Artvin':2, 'Aydın':8, 'Balıkesir':9, 'Bartın':2, 'Batman': 5, 'Bayburt':1, 'Bilecik':2, 'Bingöl':3, 'Bitlis':3, 'Bolu':3, 'Burdur':3, 'Bursa':20, 'Çanakkale':4, 'Çankırı':2, 'Çorum':4, 'Denizli':8, 'Diyarbakır':12, 'Düzce':3, 'Edirne':4, 'Elazığ':5, 'Erzincan':2, 'Erzurum':6, 'Eskişehir':7, 'Gaziantep':14, 'Giresun':4, 'Gümüşhane':2, 'Hakkâri':3, 'Hatay':11, 'Iğdır':2, 'Isparta':4, 'İstanbul':98, 'İzmir':28, 'Kahramanmaraş':8, 'Kars':3, 'Kastamonu':3, 'Karabük':3, 'Karaman':3, 'Kayseri':10, 'Kilis':2, 'Kırklareli':3, 'Kırıkkale':3, 'Kırşehir':2, 'Kocaeli':13, 'Konya':15, 'Kütahya':5, 'Malatya':6, 'Manisa':10, 'Mardin':6, 'Mersin':13, 'Muğla':7, 'Muş':4, 'Nevşehir':3, 'Niğde':3, 'Ordu':6, 'Osmaniye':4, 'Rize':3, 'Sakarya':7, 'Samsun':9, 'Siirt':3, 'Sinop':2, 'Sivas':5, 'Şanlıurfa':14, 'Şırnak':4, 'Tekirdağ':7, 'Tokat':5, 'Trabzon':6, 'Tunceli':2, 'Uşak':3, 'Van':8, 'Yalova':3, 'Yozgat':4, 'Zonguldak':5},

'portugal_constituencies': {'Lisbon': 47, 'Porto': 39, 'Braga': 19, 'Setúbal': 18, 'Aveiro': 16, 'Leiria': 10, 'Coimbra': 9, 'Faro': 9, 'Santarém': 9, 'Viseu': 9, 'Madeira': 6, 'Viana do Castelo': 6, 'Azores': 5, 'Vila Real': 5, 'Guarda': 4, 'Castelo Branco': 4, 'Beja': 3, 'Bragança': 3, 'Évora': 3, 'Portalegre': 2, 'Europe': 2, 'Outside Europe': 2},

'ireland_constituencies': {'Donegal': 5, 'Sligo-Leitrim': 4, 'Mayo': 4, 'Galway-West': 5, 'Clare': 4, 'Kerry': 5, 'Cork South-West': 3, 'Cork North-West': 3, 'Limerick County': 3, 'Limerick City': 4, 'Cork South-Central': 4, 'Cork North-Central': 4, 'Cork East': 4, 'Waterford': 4, 'Tipperary': 5, 'Carlow-Kilkenny': 5, 'Wexford': 5, 'Wicklow & East Carlow': 5, 'Kildare North': 4, 'Kildare South': 3, 'Laois': 3, 'Offaly': 3, 'Galway-East': 3, 'Roscommon-Galway': 3, 'Longford-Westmeath': 4, 'Meath West': 3, 'Meath East': 3, 'Louth': 5, 'Cavan-Monaghan': 4, 'Sligo-Leitrim': 4, 'Donegal': 5, 'Dublin Fingal': 5, 'Dublin West': 4, 'Dublin North-West': 3, 'Dublin Bay North': 5, 'Dublin Mid-West': 4, 'Dublin South-Central': 4, 'Dublin Central': 3, 'Dublin Bay South': 4, 'Dublin South-West': 5, 'Dublin Rathdown': 3, 'Dún Laoghaire': 4},

'brazil_deputies':{'São Paulo': 70, 'Minas Gerais': 53, 'Rio de Janeiro': 46, 'Bahia': 39, 'Rio Grande do Sul': 31, 'Paraná': 30, 'Pernambuco': 25, 'Ceará': 22, 'Maranhão': 18, 'Goiás': 17, 'Pará': 17, 'Santa Catarina': 16, 'Paraíba': 12, 'Espírito Santo': 10, 'Piauí': 10, 'Alagoas': 9, 'Acre': 8, 'Amazonas': 8, 'Amapá': 8, 'Distrito Federal do Brasil': 8, 'Mato Grosso do Sul': 8, 'Mato Grosso': 8, 'Rio Grande do Norte': 8, 'Rondônia': 8, 'Roraima': 8, 'Sergipe': 8, 'Tocantins': 8},

'netherlands_provinces':{'Groningen': 43, 'Friesland': 43, 'Drenthe': 41, 'Overijssel': 47, 'Flevoland': 41, 'Gelderland': 55, 'Utrecht': 49, 'Noord-Holland': 55, 'Zuid-Holland': 55, 'Zeeland': 39, 'Noord-Brabant': 55, 'Limburg': 47},

'spain_constituencies': {'La Coruña': 8, 'Pontevedra': 7, 'Lugo': 4, 'Orense': 4, 'Asturias': 7, 'León': 4,'Zamora': 3, 'Salamanca': 4, 'Cáceres': 4, 'Badajoz': 6, 'Huelva': 5, 'Seville': 12, 'Cádiz': 9, 'Cordoba': 6, 'Málaga': 11, 'Granada': 7, 'Almeria': 6, 'Jaen': 5, 'Murcia': 10, 'Alicante': 12, 'Albacete': 4, 'Ciudad Real': 5, 'Toledo': 6, 'Cuenca': 3, 'Valencia': 15, 'Castellón': 5, 'Teruel': 3, 'Guadalajara': 3, 'Madrid': 37, 'Avila': 3, 'Segovia': 3, 'Valladolid': 5, 'Palencia': 3, 'Burgos': 4, 'Soria': 2, 'Zaragoza': 7, 'Tarragona': 6, 'Barcelona': 32, 'Girona': 6, 'Lreida': 4, 'Huesca': 3, 'Navarre': 5, 'La Rioja': 4, 'Álava': 4, 'Guipuzcoa': 6, 'Biscay': 8, 'Cantabria': 5, 'Ceuta': 1, 'Melilla': 1, 'Santa Cruz de Tenerife': 7, 'Las Palmas': 8, 'Balearic Islands': 8},

'switzerland_national_council': {'Aargau': 16, 'Appenzell Outer Rhodes': 1, 'Appenzell Inner Rhodes': 1, 'Basel-Landschaft': 7, 'Basel-Stadt': 5, 'Bern': 24, 'Fribourg': 7, 'Geneva': 12, 'Glarus': 1, 'Graubünden': 5, 'Jura': 2, 'Lucerne': 9, 'Neuchâtel': 4, 'Nidwalden': 1, 'Obwalden': 1, 'St. Gallen': 12, 'Schaffhausen': 2, 'Schwyz': 4, 'Solothurn': 6, 'Thurgau': 6, 'Ticino': 8, 'Uri': 1, 'Vaud': 19, 'Valais': 8, 'Zurich': 35, 'Zug': 3},

'switzerland_council_of_states': {'Aargau': 2, 'Appenzell Outer Rhodes': 1, 'Appenzell Inner Rhodes': 1, 'Basel-Landschaft': 1, 'Basel-Stadt': 1, 'Bern': 2, 'Fribourg': 2, 'Geneva': 2, 'Glarus': 2, 'Graubünden': 2, 'Jura': 2, 'Lucerne': 2, 'Neuchâtel': 2, 'Nidwalden': 1, 'Obwalden': 1, 'St. Gallen': 2, 'Schaffhausen': 2, 'Schwyz': 2, 'Solothurn': 2, 'Thurgau': 2, 'Ticino': 2, 'Uri': 2, 'Vaud': 2, 'Valais': 2, 'Zurich': 2, 'Zug': 2},

'usa_voting_pop': {'AL': 3766477, 'AK': 554567, 'AZ': 5299579, 'AR': 2283195, 'CA': 30157154, 'CO': 4279173, 'CT': 2823158, 'DE': 747791, 'FL': 16465727, 'GA': 7798827, 'HI': 1120541, 'ID': 1245967, 'IL': 9875430, 'IN': 5057601, 'IA': 2403962, 'KS': 2192338, 'KY': 3426345, 'LA': 3567717, 'ME': 1081705, 'ME-AL': 1081705, 'ME-D1': 555860, 'ME-D2': 525845, 'MD': 4667719, 'MA': 5433677, 'MI': 7737243, 'MN': 4231619, 'MS': 2267438, 'MO': 4706137, 'MT': 814909, 'NE': 1445479, 'NE-AL': 1445479, 'NE-D1': 493216, 'NE-D2': 493516, 'NE-D3': 458747, 'NV': 2262631, 'NH': 1074207, 'NJ': 6969717, 'NM': 1590352, 'NY': 15564730, 'NC': 7848068, 'ND': 581641, 'OH': 9002201, 'OK': 2961933, 'OR': 3224738, 'PA': 10109422, 'RI': 848045, 'SC': 3863498, 'SD': 652167, 'TN': 5149399, 'TX': 20568009, 'UT': 2129444, 'VT': 506066, 'VA': 6541685, 'WA': 5658502, 'WV': 1456034, 'WI': 4491015, 'WY': 446600, 'DC': 560277},

'usa_ec': {'AL': 9, 'AK': 3, 'AZ': 11, 'AR': 6, 'CA': 55, 'CO': 9, 'CT': 7, 'DE': 3, 'FL': 29, 'GA': 16, 'HI': 4, 'ID': 4, 'IL': 20, 'IN': 11, 'IA': 6, 'KS': 6, 'KY': 8, 'LA': 8, 'ME': 4, 'ME-AL': 2, 'ME-D1': 1, 'ME-D2': 1, 'MD': 10, 'MA': 11, 'MI': 16, 'MN': 10, 'MS': 6, 'MO': 10, 'MT': 3, 'NE': 5, 'NE-AL': 2, 'NE-D1': 1, 'NE-D2': 1, 'NE-D3': 1, 'NV': 6, 'NH': 4, 'NJ': 14, 'NM': 5, 'NY': 29, 'NC': 15, 'ND': 3, 'OH': 18, 'OK': 7, 'OR': 7, 'PA': 20, 'RI': 4, 'SC': 9, 'SD': 3, 'TN': 11, 'TX': 38, 'UT': 6, 'VT': 3, 'VA': 13, 'WA': 12, 'WV': 5, 'WI': 10, 'WY': 3, 'DC': 3},

'usa_1972_ec': {'AL': 9, 'AK': 3, 'AZ': 6, 'AR': 6, 'CA': 45, 'CO': 7, 'CT': 8, 'DE': 3, 'FL': 17, 'GA': 12, 'HI': 4, 'ID': 4, 'IL': 26, 'IN': 13, 'IA': 8, 'KS': 7, 'KY': 9, 'LA': 10, 'ME': 4, 'ME-AL': 2, 'ME-D1': 1, 'ME-D2': 1, 'MD': 10, 'MA': 14, 'MI': 21, 'MN': 10, 'MS': 7, 'MO': 12, 'MT': 4, 'NE': 5, 'NV': 3, 'NH': 4, 'NJ': 17, 'NM': 4, 'NY': 41, 'NC': 13, 'ND': 3, 'OH': 25, 'OK': 8, 'OR': 6, 'PA': 27, 'RI': 4, 'SC': 8, 'SD': 4, 'TN': 10, 'TX': 26, 'UT': 4, 'VT': 3, 'VA': 11, 'WA': 9, 'WV': 6, 'WI': 11, 'WY': 3, 'DC': 3},

'usa_pre_civilwar_ec': {'AL': 9, 'AK': 0, 'AZ': 0, 'AR': 4, 'CA': 4, 'CO': 0, 'CT': 6, 'DE': 3, 'FL': 3, 'GA': 10, 'HI': 0, 'ID': 0, 'IL': 11, 'IN': 13, 'IA': 4, 'KS': 0, 'KY': 12, 'LA': 6, 'ME': 8, 'MD': 8, 'MA': 13, 'MI': 6, 'MN': 4, 'MS': 7, 'MO': 9, 'MT': 0, 'NE': 0, 'NV': 0, 'NH': 5, 'NJ': 7, 'NM': 0, 'NY': 35, 'NC': 10, 'ND': 0, 'OH': 23, 'OK': 0, 'OR': 3, 'PA': 27, 'RI': 4, 'SC': 8, 'SD': 0, 'TN': 12, 'TX': 4, 'UT': 0, 'VT': 5, 'VA': 15, 'WA': 0, 'WI': 5, 'WY': 0, 'DC': 0},

'usa_no_districts_ec': {'AL': 9, 'AK': 3, 'AZ': 11, 'AR': 6, 'CA': 55, 'CO': 9, 'CT': 7, 'DE': 3, 'FL': 29, 'GA': 16, 'HI': 4, 'ID': 4, 'IL': 20, 'IN': 11, 'IA': 6, 'KS': 6, 'KY': 8, 'LA': 8, 'ME': 4,'MD': 10, 'MA': 11, 'MI': 16, 'MN': 10, 'MS': 6, 'MO': 10, 'MT': 3, 'NE': 5, 'NV': 6, 'NH': 4, 'NJ': 14, 'NM': 5, 'NY': 29, 'NC': 15, 'ND': 3, 'OH': 18, 'OK': 7, 'OR': 7, 'PA': 20, 'RI': 4, 'SC': 9, 'SD': 3, 'TN': 11, 'TX': 38, 'UT': 6, 'VT': 3, 'VA': 13, 'WA': 12, 'WV': 5, 'WI': 10, 'WY': 3, 'DC': 3},

'usa_senate': {'AL': 1, 'AL-S': 1, 'AK': 1, 'AK-S': 1, 'AZ': 1, 'AZ-S': 1, 'AR': 1, 'AR-S': 1, 'CA': 1, 'CA-S': 1, 'CO': 1, 'CO-S': 1, 'CT': 1, 'CT-S': 1, 'DE': 1, 'DE-S': 1, 'FL': 1, 'FL-S': 1, 'GA': 1, 'GA-S': 1, 'HI': 1, 'HI-S': 1, 'ID': 1, 'ID-S': 1, 'IL': 1, 'IL-S': 1, 'IN': 1, 'IN-S': 1, 'IA': 1, 'IA-S': 1, 'KS': 1, 'KS-S': 1, 'KY': 1, 'KY-S': 1, 'LA': 1, 'LA-S': 1, 'ME': 1, 'ME-S': 1, 'MD': 1, 'MD-S': 1, 'MA': 1, 'MA-S': 1, 'MI': 1, 'MI-S': 1, 'MN': 1, 'MN-S': 1, 'MS': 1, 'MS-S': 1, 'MO': 1, 'MO-S': 1, 'MT': 1, 'MT-S': 1, 'NE': 1, 'NE-S': 1, 'NV': 1, 'NV-S': 1, 'NH': 1, 'NH-S': 1, 'NJ': 1, 'NJ-S': 1, 'NM': 1, 'NM-S': 1, 'NY': 1, 'NY-S': 1, 'NC': 1, 'NC-S': 1, 'ND': 1, 'ND-S': 1, 'OH': 1, 'OH-S': 1, 'OK': 1, 'OK-S': 1, 'OR': 1, 'OR-S': 1, 'PA': 1, 'PA-S': 1, 'RI': 1, 'RI-S': 1, 'SC': 1,'SC-S': 1, 'SD': 1, 'SD-S': 1, 'TN': 1, 'TN-S': 1, 'TX': 1, 'TX-S': 1, 'UT': 1, 'UT-S': 1, 'VT': 1, 'VT-S': 1, 'VA': 1, 'VA-S': 1, 'WA': 1, 'WA-S': 1, 'WV': 1, 'WV-S': 1, 'WI': 1, 'WI-S': 1, 'WY': 1, 'WY-S': 1},

'usa_gubernatorial': {'AL': 1, 'AK': 1, 'AZ': 1, 'AR': 1, 'CA': 1, 'CO': 1, 'CT': 1, 'DE': 1, 'FL': 1, 'GA': 1, 'HI': 1, 'ID': 1, 'IL': 1, 'IN': 1, 'IA': 1, 'KS': 1, 'KY': 1, 'LA': 1, 'ME': 1,'MD': 1, 'MA': 1, 'MI': 1, 'MN': 1, 'MS': 1, 'MO': 1, 'MT': 1, 'NE': 1, 'NV': 1, 'NH': 1, 'NJ': 1, 'NM': 1, 'NY': 1, 'NC': 1, 'ND': 1, 'OH': 1, 'OK': 1, 'OR': 1, 'PA': 1, 'RI': 1, 'SC': 1, 'SD': 1, 'TN': 1, 'TX': 1, 'UT': 1, 'VT': 1, 'VA': 1, 'WA': 1, 'WV': 1, 'WI': 1, 'WY': 1},

'lte_ec': {'NE': 11, 'SE': 9, 'MW': 8, 'WE': 6, 'SW': 5, 'OV': 7},

'dem_primary': {'AL': 52, 'AK': 14, 'AS': 6, 'AZ': 67, 'AR': 31, 'CA': 416, 'CO': 67, 'CT': 49, 'DE': 17, 'DA': 13, 'DC': 17, 'FL': 219, 'GA': 105, 'GU': 6, 'HI': 22, 'ID': 20, 'IL': 155, 'IN': 70, 'IA': 41, 'KS': 33, 'KY': 46, 'LA': 50, 'ME': 24, 'MD': 79, 'MA': 91, 'MI': 125, 'MN': 75, 'MS': 36, 'MO': 68, 'MT': 16, 'NE': 25, 'NV': 36, 'NH': 24, 'NJ': 107, 'NM': 29, 'NY': 224, 'NC': 110, 'ND': 14, 'NI': 6, 'OH': 136, 'OK': 37, 'OR': 52, 'PA': 153, 'PR': 51, 'RI': 21, 'SC': 54, 'SD': 14, 'SU': 764, 'TN': 64, 'TX': 228, 'UT': 29, 'VT': 16, 'VI': 6, 'VA': 99, 'WA': 89, 'WV': 24, 'WI': 77, 'WY': 13},

'rep_primary': {'AL': 50, 'AK': 28, 'AS': 9, 'AZ': 57, 'AR': 40, 'CA': 172, 'CO': 37, 'CT': 28, 'DE': 16, 'DC': 19, 'FL': 122, 'GA': 76, 'GU': 9, 'HI': 19, 'ID': 32, 'IL': 67, 'IN': 70, 'IA': 40, 'KS': 39, 'KY': 46, 'LA': 46, 'ME': 22, 'MD': 38, 'MA': 41, 'MI': 73, 'MN': 39, 'MS': 39, 'MO': 54, 'MT': 27, 'NE': 36, 'NV': 25, 'NH': 22, 'NJ': 49, 'NM': 22, 'NY': 95, 'NC': 71, 'ND': 29, 'NI': 9, 'OH': 82, 'OK': 43, 'OR': 28, 'PA': 88, 'PR': 23, 'RI': 19, 'SC': 50, 'SD': 29, 'TN': 58, 'TX': 155, 'UT': 40, 'VT': 17, 'VI': 9, 'VA': 49, 'WA': 44, 'WV': 34, 'WI': 52, 'WY': 29},

'eu_parliament': {'IE-S':5,'IE-N':4,'IE-D':4,'BE-D':12,'BE-F':8,'BE-G':1,'FR':79,'ES':59,'PT':21,'IT':76,'MT':6,'CY':6,'GR':21,'BG':17,'RO':33,'HR':12,'HU':21,'SL':8,'AT':19,'SK':14,'CZ':21,'PO':52,'LI':11,'LV':8,'EE':7,'FI':14,'SE':21,'DK':14,'NL':29,'LU':6,'DE':96}
}
/*!
 * html2canvas 1.0.0-rc.5 <https://html2canvas.hertzen.com>
 * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
!function(A,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(A=A||self).html2canvas=e()}(this,function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var r=function(A,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,e){A.__proto__=e}||function(A,e){for(var t in e)e.hasOwnProperty(t)&&(A[t]=e[t])})(A,e)};function A(A,e){function t(){this.constructor=A}r(A,e),A.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var K=function(){return(K=Object.assign||function(A){for(var e,t=1,r=arguments.length;t<r;t++)for(var n in e=arguments[t])Object.prototype.hasOwnProperty.call(e,n)&&(A[n]=e[n]);return A}).apply(this,arguments)};function a(B,s,o,i){return new(o||(o=Promise))(function(A,e){function t(A){try{n(i.next(A))}catch(A){e(A)}}function r(A){try{n(i.throw(A))}catch(A){e(A)}}function n(e){e.done?A(e.value):new o(function(A){A(e.value)}).then(t,r)}n((i=i.apply(B,s||[])).next())})}function S(t,r){var n,B,s,A,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return A={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(A[Symbol.iterator]=function(){return this}),A;function e(e){return function(A){return function(e){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,B&&(s=2&e[0]?B.return:e[0]?B.throw||((s=B.return)&&s.call(B),0):B.next)&&!(s=s.call(B,e[1])).done)return s;switch(B=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,B=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(s=0<(s=o.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){o.label=e[1];break}if(6===e[0]&&o.label<s[1]){o.label=s[1],s=e;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(e);break}s[2]&&o.ops.pop(),o.trys.pop();continue}e=r.call(t,o)}catch(A){e=[6,A],B=0}finally{n=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,A])}}}var I=(n.prototype.add=function(A,e,t,r){return new n(this.left+A,this.top+e,this.width+t,this.height+r)},n.fromClientRect=function(A){return new n(A.left,A.top,A.width,A.height)},n);function n(A,e,t,r){this.left=A,this.top=e,this.width=t,this.height=r}for(var T=function(A){return I.fromClientRect(A.getBoundingClientRect())},c=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(55296<=n&&n<=56319&&t<r){var B=A.charCodeAt(t++);56320==(64512&B)?e.push(((1023&n)<<10)+(1023&B)+65536):(e.push(n),t--)}else e.push(n)}return e},l=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,B="";++n<t;){var s=A[n];s<=65535?r.push(s):(s-=65536,r.push(55296+(s>>10),s%1024+56320)),(n+1===t||16384<r.length)&&(B+=String.fromCharCode.apply(String,r),r.length=0)}return B},e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Q="undefined"==typeof Uint8Array?[]:new Uint8Array(256),t=0;t<e.length;t++)Q[e.charCodeAt(t)]=t;function B(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))}var s=(o.prototype.get=function(A){var e;if(0<=A){if(A<55296||56319<A&&A<=65535)return e=((e=this.index[A>>5])<<2)+(31&A),this.data[e];if(A<=65535)return e=((e=this.index[2048+(A-55296>>5)])<<2)+(31&A),this.data[e];if(A<this.highStart)return e=2080+(A>>11),e=this.index[e],e+=A>>5&63,e=((e=this.index[e])<<2)+(31&A),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},o);function o(A,e,t,r,n,B){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=r,this.index=n,this.data=B}function C(A,e,t,r){var n=r[t];if(Array.isArray(A)?-1!==A.indexOf(n):A===n)for(var B=t;B<=r.length;){if((i=r[++B])===e)return!0;if(i!==H)break}if(n===H)for(B=t;0<B;){var s=r[--B];if(Array.isArray(A)?-1!==A.indexOf(s):A===s)for(var o=t;o<=r.length;){var i;if((i=r[++o])===e)return!0;if(i!==H)break}if(s!==H)break}return!1}function g(A,e){for(var t=A;0<=t;){var r=e[t];if(r!==H)return r;t--}return 0}function w(A,e,t,r,n){if(0===t[r])return Y;var B=r-1;if(Array.isArray(n)&&!0===n[B])return Y;var s=B-1,o=1+B,i=e[B],a=0<=s?e[s]:0,c=e[o];if(2===i&&3===c)return Y;if(-1!==j.indexOf(i))return"!";if(-1!==j.indexOf(c))return Y;if(-1!==$.indexOf(c))return Y;if(8===g(B,e))return"÷";if(11===q.get(A[B])&&(c===X||c===P||c===x))return Y;if(7===i||7===c)return Y;if(9===i)return Y;if(-1===[H,d,f].indexOf(i)&&9===c)return Y;if(-1!==[p,N,m,O,y].indexOf(c))return Y;if(g(B,e)===v)return Y;if(C(23,v,B,e))return Y;if(C([p,N],L,B,e))return Y;if(C(12,12,B,e))return Y;if(i===H)return"÷";if(23===i||23===c)return Y;if(16===c||16===i)return"÷";if(-1!==[d,f,L].indexOf(c)||14===i)return Y;if(36===a&&-1!==rA.indexOf(i))return Y;if(i===y&&36===c)return Y;if(c===R&&-1!==Z.concat(R,m,D,X,P,x).indexOf(i))return Y;if(-1!==Z.indexOf(c)&&i===D||-1!==Z.indexOf(i)&&c===D)return Y;if(i===M&&-1!==[X,P,x].indexOf(c)||-1!==[X,P,x].indexOf(i)&&c===b)return Y;if(-1!==Z.indexOf(i)&&-1!==AA.indexOf(c)||-1!==AA.indexOf(i)&&-1!==Z.indexOf(c))return Y;if(-1!==[M,b].indexOf(i)&&(c===D||-1!==[v,f].indexOf(c)&&e[1+o]===D)||-1!==[v,f].indexOf(i)&&c===D||i===D&&-1!==[D,y,O].indexOf(c))return Y;if(-1!==[D,y,O,p,N].indexOf(c))for(var Q=B;0<=Q;){if((w=e[Q])===D)return Y;if(-1===[y,O].indexOf(w))break;Q--}if(-1!==[M,b].indexOf(c))for(Q=-1!==[p,N].indexOf(i)?s:B;0<=Q;){var w;if((w=e[Q])===D)return Y;if(-1===[y,O].indexOf(w))break;Q--}if(J===i&&-1!==[J,G,V,z].indexOf(c)||-1!==[G,V].indexOf(i)&&-1!==[G,k].indexOf(c)||-1!==[k,z].indexOf(i)&&c===k)return Y;if(-1!==tA.indexOf(i)&&-1!==[R,b].indexOf(c)||-1!==tA.indexOf(c)&&i===M)return Y;if(-1!==Z.indexOf(i)&&-1!==Z.indexOf(c))return Y;if(i===O&&-1!==Z.indexOf(c))return Y;if(-1!==Z.concat(D).indexOf(i)&&c===v||-1!==Z.concat(D).indexOf(c)&&i===N)return Y;if(41===i&&41===c){for(var u=t[B],U=1;0<u&&41===e[--u];)U++;if(U%2!=0)return Y}return i===P&&c===x?Y:"÷"}function u(t,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var e=function(A,n){void 0===n&&(n="strict");var B=[],s=[],o=[];return A.forEach(function(A,e){var t=q.get(A);if(50<t?(o.push(!0),t-=50):o.push(!1),-1!==["normal","auto","loose"].indexOf(n)&&-1!==[8208,8211,12316,12448].indexOf(A))return s.push(e),B.push(16);if(4!==t&&11!==t)return s.push(e),31===t?B.push("strict"===n?L:X):t===W?B.push(_):29===t?B.push(_):43===t?131072<=A&&A<=196605||196608<=A&&A<=262141?B.push(X):B.push(_):void B.push(t);if(0===e)return s.push(e),B.push(_);var r=B[e-1];return-1===eA.indexOf(r)?(s.push(s[e-1]),B.push(r)):(s.push(e),B.push(_))}),[s,B,o]}(t,A.lineBreak),r=e[0],n=e[1],B=e[2];return"break-all"!==A.wordBreak&&"break-word"!==A.wordBreak||(n=n.map(function(A){return-1!==[D,_,W].indexOf(A)?X:A})),[r,n,"keep-all"===A.wordBreak?B.map(function(A,e){return A&&19968<=t[e]&&t[e]<=40959}):void 0]}var i,U,E,F,h,H=10,d=13,f=15,p=17,N=18,m=19,R=20,L=21,v=22,O=24,D=25,b=26,M=27,y=28,_=30,P=32,x=33,V=34,z=35,X=37,J=38,G=39,k=40,W=42,Y="×",q=(i=function(A){var e,t,r,n,B,s=.75*A.length,o=A.length,i=0;"="===A[A.length-1]&&(s--,"="===A[A.length-2]&&s--);var a="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.slice?new ArrayBuffer(s):new Array(s),c=Array.isArray(a)?a:new Uint8Array(a);for(e=0;e<o;e+=4)t=Q[A.charCodeAt(e)],r=Q[A.charCodeAt(e+1)],n=Q[A.charCodeAt(e+2)],B=Q[A.charCodeAt(e+3)],c[i++]=t<<2|r>>4,c[i++]=(15&r)<<4|n>>2,c[i++]=(3&n)<<6|63&B;return a}("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"),U=Array.isArray(i)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t}(i):new Uint32Array(i),E=Array.isArray(i)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t}(i):new Uint16Array(i),F=B(E,12,U[4]/2),h=2===U[5]?B(E,(24+U[4])/2):function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))}(U,Math.ceil((24+U[4])/4)),new s(U[0],U[1],U[2],U[3],F,h)),Z=[_,36],j=[1,2,3,5],$=[H,8],AA=[M,b],eA=j.concat($),tA=[J,G,k,V,z],rA=[f,d],nA=(BA.prototype.slice=function(){return l.apply(void 0,this.codePoints.slice(this.start,this.end))},BA);function BA(A,e,t,r){this.codePoints=A,this.required="!"===e,this.start=t,this.end=r}var sA,oA;(oA=sA||(sA={}))[oA.STRING_TOKEN=0]="STRING_TOKEN",oA[oA.BAD_STRING_TOKEN=1]="BAD_STRING_TOKEN",oA[oA.LEFT_PARENTHESIS_TOKEN=2]="LEFT_PARENTHESIS_TOKEN",oA[oA.RIGHT_PARENTHESIS_TOKEN=3]="RIGHT_PARENTHESIS_TOKEN",oA[oA.COMMA_TOKEN=4]="COMMA_TOKEN",oA[oA.HASH_TOKEN=5]="HASH_TOKEN",oA[oA.DELIM_TOKEN=6]="DELIM_TOKEN",oA[oA.AT_KEYWORD_TOKEN=7]="AT_KEYWORD_TOKEN",oA[oA.PREFIX_MATCH_TOKEN=8]="PREFIX_MATCH_TOKEN",oA[oA.DASH_MATCH_TOKEN=9]="DASH_MATCH_TOKEN",oA[oA.INCLUDE_MATCH_TOKEN=10]="INCLUDE_MATCH_TOKEN",oA[oA.LEFT_CURLY_BRACKET_TOKEN=11]="LEFT_CURLY_BRACKET_TOKEN",oA[oA.RIGHT_CURLY_BRACKET_TOKEN=12]="RIGHT_CURLY_BRACKET_TOKEN",oA[oA.SUFFIX_MATCH_TOKEN=13]="SUFFIX_MATCH_TOKEN",oA[oA.SUBSTRING_MATCH_TOKEN=14]="SUBSTRING_MATCH_TOKEN",oA[oA.DIMENSION_TOKEN=15]="DIMENSION_TOKEN",oA[oA.PERCENTAGE_TOKEN=16]="PERCENTAGE_TOKEN",oA[oA.NUMBER_TOKEN=17]="NUMBER_TOKEN",oA[oA.FUNCTION=18]="FUNCTION",oA[oA.FUNCTION_TOKEN=19]="FUNCTION_TOKEN",oA[oA.IDENT_TOKEN=20]="IDENT_TOKEN",oA[oA.COLUMN_TOKEN=21]="COLUMN_TOKEN",oA[oA.URL_TOKEN=22]="URL_TOKEN",oA[oA.BAD_URL_TOKEN=23]="BAD_URL_TOKEN",oA[oA.CDC_TOKEN=24]="CDC_TOKEN",oA[oA.CDO_TOKEN=25]="CDO_TOKEN",oA[oA.COLON_TOKEN=26]="COLON_TOKEN",oA[oA.SEMICOLON_TOKEN=27]="SEMICOLON_TOKEN",oA[oA.LEFT_SQUARE_BRACKET_TOKEN=28]="LEFT_SQUARE_BRACKET_TOKEN",oA[oA.RIGHT_SQUARE_BRACKET_TOKEN=29]="RIGHT_SQUARE_BRACKET_TOKEN",oA[oA.UNICODE_RANGE_TOKEN=30]="UNICODE_RANGE_TOKEN",oA[oA.WHITESPACE_TOKEN=31]="WHITESPACE_TOKEN",oA[oA.EOF_TOKEN=32]="EOF_TOKEN";function iA(A){return 48<=A&&A<=57}function aA(A){return iA(A)||65<=A&&A<=70||97<=A&&A<=102}function cA(A){return 10===A||9===A||32===A}function QA(A){return function(A){return function(A){return 97<=A&&A<=122}(A)||function(A){return 65<=A&&A<=90}(A)}(A)||function(A){return 128<=A}(A)||95===A}function wA(A){return QA(A)||iA(A)||45===A}function uA(A,e){return 92===A&&10!==e}function UA(A,e,t){return 45===A?QA(e)||uA(e,t):!!QA(A)||!(92!==A||!uA(A,e))}function lA(A,e,t){return 43===A||45===A?!!iA(e)||46===e&&iA(t):iA(46===A?e:A)}var CA={type:sA.LEFT_PARENTHESIS_TOKEN},gA={type:sA.RIGHT_PARENTHESIS_TOKEN},EA={type:sA.COMMA_TOKEN},FA={type:sA.SUFFIX_MATCH_TOKEN},hA={type:sA.PREFIX_MATCH_TOKEN},HA={type:sA.COLUMN_TOKEN},dA={type:sA.DASH_MATCH_TOKEN},fA={type:sA.INCLUDE_MATCH_TOKEN},pA={type:sA.LEFT_CURLY_BRACKET_TOKEN},NA={type:sA.RIGHT_CURLY_BRACKET_TOKEN},KA={type:sA.SUBSTRING_MATCH_TOKEN},IA={type:sA.BAD_URL_TOKEN},TA={type:sA.BAD_STRING_TOKEN},mA={type:sA.CDO_TOKEN},RA={type:sA.CDC_TOKEN},LA={type:sA.COLON_TOKEN},vA={type:sA.SEMICOLON_TOKEN},OA={type:sA.LEFT_SQUARE_BRACKET_TOKEN},DA={type:sA.RIGHT_SQUARE_BRACKET_TOKEN},bA={type:sA.WHITESPACE_TOKEN},SA={type:sA.EOF_TOKEN},MA=(yA.prototype.write=function(A){this._value=this._value.concat(c(A))},yA.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==SA;)A.push(e),e=this.consumeToken();return A},yA.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case 34:return this.consumeStringToken(34);case 35:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),r=this.peekCodePoint(2);if(wA(e)||uA(t,r)){var n=UA(e,t,r)?2:1,B=this.consumeName();return{type:sA.HASH_TOKEN,value:B,flags:n}}break;case 36:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),FA;break;case 39:return this.consumeStringToken(39);case 40:return CA;case 41:return gA;case 42:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),KA;break;case 43:if(lA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 44:return EA;case 45:var s=A,o=this.peekCodePoint(0),i=this.peekCodePoint(1);if(lA(s,o,i))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(UA(s,o,i))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(45===o&&62===i)return this.consumeCodePoint(),this.consumeCodePoint(),RA;break;case 46:if(lA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 47:if(42===this.peekCodePoint(0))for(this.consumeCodePoint();;){var a=this.consumeCodePoint();if(42===a&&47===(a=this.consumeCodePoint()))return this.consumeToken();if(-1===a)return this.consumeToken()}break;case 58:return LA;case 59:return vA;case 60:if(33===this.peekCodePoint(0)&&45===this.peekCodePoint(1)&&45===this.peekCodePoint(2))return this.consumeCodePoint(),this.consumeCodePoint(),mA;break;case 64:var c=this.peekCodePoint(0),Q=this.peekCodePoint(1),w=this.peekCodePoint(2);if(UA(c,Q,w))return B=this.consumeName(),{type:sA.AT_KEYWORD_TOKEN,value:B};break;case 91:return OA;case 92:if(uA(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case 93:return DA;case 61:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),hA;break;case 123:return pA;case 125:return NA;case 117:case 85:var u=this.peekCodePoint(0),U=this.peekCodePoint(1);return 43!==u||!aA(U)&&63!==U||(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case 124:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),dA;if(124===this.peekCodePoint(0))return this.consumeCodePoint(),HA;break;case 126:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),fA;break;case-1:return SA}return cA(A)?(this.consumeWhiteSpace(),bA):iA(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):QA(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:sA.DELIM_TOKEN,value:l(A)}},yA.prototype.consumeCodePoint=function(){var A=this._value.shift();return void 0===A?-1:A},yA.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},yA.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},yA.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();aA(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;63===e&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t){var r=parseInt(l.apply(void 0,A.map(function(A){return 63===A?48:A})),16),n=parseInt(l.apply(void 0,A.map(function(A){return 63===A?70:A})),16);return{type:sA.UNICODE_RANGE_TOKEN,start:r,end:n}}var B=parseInt(l.apply(void 0,A),16);if(45===this.peekCodePoint(0)&&aA(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();for(var s=[];aA(e)&&s.length<6;)s.push(e),e=this.consumeCodePoint();return n=parseInt(l.apply(void 0,s),16),{type:sA.UNICODE_RANGE_TOKEN,start:B,end:n}}return{type:sA.UNICODE_RANGE_TOKEN,start:B,end:B}},yA.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return"url"===A.toLowerCase()&&40===this.peekCodePoint(0)?(this.consumeCodePoint(),this.consumeUrlToken()):40===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:sA.FUNCTION_TOKEN,value:A}):{type:sA.IDENT_TOKEN,value:A}},yA.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),-1===this.peekCodePoint(0))return{type:sA.URL_TOKEN,value:""};var e,t=this.peekCodePoint(0);if(39===t||34===t){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===sA.STRING_TOKEN&&(this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0))?(this.consumeCodePoint(),{type:sA.URL_TOKEN,value:r.value}):(this.consumeBadUrlRemnants(),IA)}for(;;){var n=this.consumeCodePoint();if(-1===n||41===n)return{type:sA.URL_TOKEN,value:l.apply(void 0,A)};if(cA(n))return this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:sA.URL_TOKEN,value:l.apply(void 0,A)}):(this.consumeBadUrlRemnants(),IA);if(34===n||39===n||40===n||0<=(e=n)&&e<=8||11===e||14<=e&&e<=31||127===e)return this.consumeBadUrlRemnants(),IA;if(92===n){if(!uA(n,this.peekCodePoint(0)))return this.consumeBadUrlRemnants(),IA;A.push(this.consumeEscapedCodePoint())}else A.push(n)}},yA.prototype.consumeWhiteSpace=function(){for(;cA(this.peekCodePoint(0));)this.consumeCodePoint()},yA.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(41===A||-1===A)return;uA(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},yA.prototype.consumeStringSlice=function(A){for(var e="";0<A;){var t=Math.min(6e4,A);e+=l.apply(void 0,this._value.splice(0,t)),A-=t}return this._value.shift(),e},yA.prototype.consumeStringToken=function(A){for(var e="",t=0;;){var r=this._value[t];if(-1===r||void 0===r||r===A)return e+=this.consumeStringSlice(t),{type:sA.STRING_TOKEN,value:e};if(10===r)return this._value.splice(0,t),TA;if(92===r){var n=this._value[t+1];-1!==n&&void 0!==n&&(10===n?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):uA(r,n)&&(e+=this.consumeStringSlice(t),e+=l(this.consumeEscapedCodePoint()),t=-1))}t++}},yA.prototype.consumeNumber=function(){var A=[],e=4,t=this.peekCodePoint(0);for(43!==t&&45!==t||A.push(this.consumeCodePoint());iA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var r=this.peekCodePoint(1);if(46===t&&iA(r))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;iA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0),r=this.peekCodePoint(1);var n=this.peekCodePoint(2);if((69===t||101===t)&&((43===r||45===r)&&iA(n)||iA(r)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;iA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[function(A){var e=0,t=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(t=-1),e++);for(var r=[];iA(A[e]);)r.push(A[e++]);var n=r.length?parseInt(l.apply(void 0,r),10):0;46===A[e]&&e++;for(var B=[];iA(A[e]);)B.push(A[e++]);var s=B.length,o=s?parseInt(l.apply(void 0,B),10):0;69!==A[e]&&101!==A[e]||e++;var i=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(i=-1),e++);for(var a=[];iA(A[e]);)a.push(A[e++]);var c=a.length?parseInt(l.apply(void 0,a),10):0;return t*(n+o*Math.pow(10,-s))*Math.pow(10,i*c)}(A),e]},yA.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],r=this.peekCodePoint(0),n=this.peekCodePoint(1),B=this.peekCodePoint(2);if(UA(r,n,B)){var s=this.consumeName();return{type:sA.DIMENSION_TOKEN,number:e,flags:t,unit:s}}return 37===r?(this.consumeCodePoint(),{type:sA.PERCENTAGE_TOKEN,number:e,flags:t}):{type:sA.NUMBER_TOKEN,number:e,flags:t}},yA.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(aA(A)){for(var e=l(A);aA(this.peekCodePoint(0))&&e.length<6;)e+=l(this.consumeCodePoint());cA(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(e,16);return 0===t||function(A){return 55296<=A&&A<=57343}(t)||1114111<t?65533:t}return-1===A?65533:A},yA.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(wA(e))A+=l(e);else{if(!uA(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),A;A+=l(this.consumeEscapedCodePoint())}}},yA);function yA(){this._value=[]}var _A=(PA.create=function(A){var e=new MA;return e.write(A),new PA(e.read())},PA.parseValue=function(A){return PA.create(A).parseComponentValue()},PA.parseValues=function(A){return PA.create(A).parseComponentValues()},PA.prototype.parseComponentValue=function(){for(var A=this.consumeToken();A.type===sA.WHITESPACE_TOKEN;)A=this.consumeToken();if(A.type===sA.EOF_TOKEN)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);for(var e=this.consumeComponentValue();(A=this.consumeToken()).type===sA.WHITESPACE_TOKEN;);if(A.type===sA.EOF_TOKEN)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},PA.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(e.type===sA.EOF_TOKEN)return A;A.push(e),A.push()}},PA.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case sA.LEFT_CURLY_BRACKET_TOKEN:case sA.LEFT_SQUARE_BRACKET_TOKEN:case sA.LEFT_PARENTHESIS_TOKEN:return this.consumeSimpleBlock(A.type);case sA.FUNCTION_TOKEN:return this.consumeFunction(A)}return A},PA.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(t.type===sA.EOF_TOKEN||Be(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},PA.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:sA.FUNCTION};;){var t=this.consumeToken();if(t.type===sA.EOF_TOKEN||t.type===sA.RIGHT_PARENTHESIS_TOKEN)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},PA.prototype.consumeToken=function(){var A=this._tokens.shift();return void 0===A?SA:A},PA.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},PA);function PA(A){this._tokens=A}function xA(A){return A.type===sA.DIMENSION_TOKEN}function VA(A){return A.type===sA.NUMBER_TOKEN}function zA(A){return A.type===sA.IDENT_TOKEN}function XA(A){return A.type===sA.STRING_TOKEN}function JA(A,e){return zA(A)&&A.value===e}function GA(A){return A.type!==sA.WHITESPACE_TOKEN}function kA(A){return A.type!==sA.WHITESPACE_TOKEN&&A.type!==sA.COMMA_TOKEN}function WA(A){var e=[],t=[];return A.forEach(function(A){if(A.type===sA.COMMA_TOKEN){if(0===t.length)throw new Error("Error parsing function args, zero tokens for arg");return e.push(t),void(t=[])}A.type!==sA.WHITESPACE_TOKEN&&t.push(A)}),t.length&&e.push(t),e}function YA(A){return A.type===sA.NUMBER_TOKEN||A.type===sA.DIMENSION_TOKEN}function qA(A){return A.type===sA.PERCENTAGE_TOKEN||YA(A)}function ZA(A){return 1<A.length?[A[0],A[1]]:[A[0]]}function jA(A,e,t){var r=A[0],n=A[1];return[ae(r,e),ae(void 0!==n?n:r,t)]}function $A(A){return A.type===sA.DIMENSION_TOKEN&&("deg"===A.unit||"grad"===A.unit||"rad"===A.unit||"turn"===A.unit)}function Ae(A){switch(A.filter(zA).map(function(A){return A.value}).join(" ")){case"to bottom right":case"to right bottom":case"left top":case"top left":return[se,se];case"to top":case"bottom":return Qe(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[se,ie];case"to right":case"left":return Qe(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[ie,ie];case"to bottom":case"top":return Qe(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[ie,se];case"to left":case"right":return Qe(270)}return 0}function ee(A){return 0==(255&A)}function te(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"}function re(A,e){if(A.type===sA.NUMBER_TOKEN)return A.number;if(A.type!==sA.PERCENTAGE_TOKEN)return 0;var t=3===e?1:255;return 3===e?A.number/100*t:Math.round(A.number/100*t)}function ne(A){var e=A.filter(kA);if(3===e.length){var t=e.map(re),r=t[0],n=t[1],B=t[2];return ue(r,n,B,1)}if(4!==e.length)return 0;var s=e.map(re),o=(r=s[0],n=s[1],B=s[2],s[3]);return ue(r,n,B,o)}var Be=function(A,e){return e===sA.LEFT_CURLY_BRACKET_TOKEN&&A.type===sA.RIGHT_CURLY_BRACKET_TOKEN||(e===sA.LEFT_SQUARE_BRACKET_TOKEN&&A.type===sA.RIGHT_SQUARE_BRACKET_TOKEN||e===sA.LEFT_PARENTHESIS_TOKEN&&A.type===sA.RIGHT_PARENTHESIS_TOKEN)},se={type:sA.NUMBER_TOKEN,number:0,flags:4},oe={type:sA.PERCENTAGE_TOKEN,number:50,flags:4},ie={type:sA.PERCENTAGE_TOKEN,number:100,flags:4},ae=function(A,e){if(A.type===sA.PERCENTAGE_TOKEN)return A.number/100*e;if(xA(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},ce=function(A){if(A.type===sA.DIMENSION_TOKEN)switch(A.unit){case"deg":return Math.PI*A.number/180;case"grad":return Math.PI/200*A.number;case"rad":return A.number;case"turn":return 2*Math.PI*A.number}throw new Error("Unsupported angle type")},Qe=function(A){return Math.PI*A/180},we=function(A){if(A.type===sA.FUNCTION){var e=he[A.name];if(void 0===e)throw new Error('Attempting to parse an unsupported color function "'+A.name+'"');return e(A.values)}if(A.type===sA.HASH_TOKEN){if(3===A.value.length){var t=A.value.substring(0,1),r=A.value.substring(1,2),n=A.value.substring(2,3);return ue(parseInt(t+t,16),parseInt(r+r,16),parseInt(n+n,16),1)}if(4===A.value.length){t=A.value.substring(0,1),r=A.value.substring(1,2),n=A.value.substring(2,3);var B=A.value.substring(3,4);return ue(parseInt(t+t,16),parseInt(r+r,16),parseInt(n+n,16),parseInt(B+B,16)/255)}if(6===A.value.length){t=A.value.substring(0,2),r=A.value.substring(2,4),n=A.value.substring(4,6);return ue(parseInt(t,16),parseInt(r,16),parseInt(n,16),1)}if(8===A.value.length){t=A.value.substring(0,2),r=A.value.substring(2,4),n=A.value.substring(4,6),B=A.value.substring(6,8);return ue(parseInt(t,16),parseInt(r,16),parseInt(n,16),parseInt(B,16)/255)}}if(A.type===sA.IDENT_TOKEN){var s=He[A.value.toUpperCase()];if(void 0!==s)return s}return He.TRANSPARENT},ue=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(255*r)<<0)>>>0};function Ue(A,e,t){return t<0&&(t+=1),1<=t&&(t-=1),t<1/6?(e-A)*t*6+A:t<.5?e:t<2/3?6*(e-A)*(2/3-t)+A:A}function le(A){var e=A.filter(kA),t=e[0],r=e[1],n=e[2],B=e[3],s=(t.type===sA.NUMBER_TOKEN?Qe(t.number):ce(t))/(2*Math.PI),o=qA(r)?r.number/100:0,i=qA(n)?n.number/100:0,a=void 0!==B&&qA(B)?ae(B,1):1;if(0==o)return ue(255*i,255*i,255*i,1);var c=i<=.5?i*(1+o):i+o-i*o,Q=2*i-c,w=Ue(Q,c,s+1/3),u=Ue(Q,c,s),U=Ue(Q,c,s-1/3);return ue(255*w,255*u,255*U,a)}var Ce,ge,Ee,Fe,he={hsl:le,hsla:le,rgb:ne,rgba:ne},He={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199};(ge=Ce||(Ce={}))[ge.VALUE=0]="VALUE",ge[ge.LIST=1]="LIST",ge[ge.IDENT_VALUE=2]="IDENT_VALUE",ge[ge.TYPE_VALUE=3]="TYPE_VALUE",ge[ge.TOKEN_VALUE=4]="TOKEN_VALUE",(Fe=Ee||(Ee={}))[Fe.BORDER_BOX=0]="BORDER_BOX",Fe[Fe.PADDING_BOX=1]="PADDING_BOX";function de(A){var e=we(A[0]),t=A[1];return t&&qA(t)?{color:e,stop:t}:{color:e,stop:null}}function fe(A,t){var e=A[0],r=A[A.length-1];null===e.stop&&(e.stop=se),null===r.stop&&(r.stop=ie);for(var n=[],B=0,s=0;s<A.length;s++){var o=A[s].stop;if(null!==o){var i=ae(o,t);B<i?n.push(i):n.push(B),B=i}else n.push(null)}var a=null;for(s=0;s<n.length;s++){var c=n[s];if(null===c)null===a&&(a=s);else if(null!==a){for(var Q=s-a,w=(c-n[a-1])/(1+Q),u=1;u<=Q;u++)n[a+u-1]=w*u;a=null}}return A.map(function(A,e){return{color:A.color,stop:Math.max(Math.min(1,n[e]/t),0)}})}function pe(A,e,t){var r="number"==typeof A?A:function(A,e,t){var r=e/2,n=t/2,B=ae(A[0],e)-r,s=n-ae(A[1],t);return(Math.atan2(s,B)+2*Math.PI)%(2*Math.PI)}(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),B=e/2,s=t/2,o=n/2,i=Math.sin(r-Math.PI/2)*o,a=Math.cos(r-Math.PI/2)*o;return[n,B-a,B+a,s-i,s+i]}function Ne(A,e){return Math.sqrt(A*A+e*e)}function Ke(A,e,B,s,o){return[[0,0],[0,e],[A,0],[A,e]].reduce(function(A,e){var t=e[0],r=e[1],n=Ne(B-t,s-r);return(o?n<A.optimumDistance:n>A.optimumDistance)?{optimumCorner:e,optimumDistance:n}:A},{optimumDistance:o?1/0:-1/0,optimumCorner:null}).optimumCorner}function Ie(A){var n=Qe(180),B=[];return WA(A).forEach(function(A,e){if(0===e){var t=A[0];if(t.type===sA.IDENT_TOKEN&&-1!==["top","left","right","bottom"].indexOf(t.value))return void(n=Ae(A));if($A(t))return void(n=(ce(t)+Qe(270))%Qe(360))}var r=de(A);B.push(r)}),{angle:n,stops:B,type:xe.LINEAR_GRADIENT}}function Te(A){return 0===A[0]&&255===A[1]&&0===A[2]&&255===A[3]}var me={name:"background-clip",initialValue:"border-box",prefix:!(Fe[Fe.CONTENT_BOX=2]="CONTENT_BOX"),type:Ce.LIST,parse:function(A){return A.map(function(A){if(zA(A))switch(A.value){case"padding-box":return Ee.PADDING_BOX;case"content-box":return Ee.CONTENT_BOX}return Ee.BORDER_BOX})}},Re={name:"background-color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"},Le=function(A,e,t,r,n){var B="http://www.w3.org/2000/svg",s=document.createElementNS(B,"svg"),o=document.createElementNS(B,"foreignObject");return s.setAttributeNS(null,"width",A.toString()),s.setAttributeNS(null,"height",e.toString()),o.setAttributeNS(null,"width","100%"),o.setAttributeNS(null,"height","100%"),o.setAttributeNS(null,"x",t.toString()),o.setAttributeNS(null,"y",r.toString()),o.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(o),o.appendChild(n),s},ve=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})},Oe={get SUPPORT_RANGE_BOUNDS(){var A=function(A){if(A.createRange){var e=A.createRange();if(e.getBoundingClientRect){var t=A.createElement("boundtest");t.style.height="123px",t.style.display="block",A.body.appendChild(t),e.selectNode(t);var r=e.getBoundingClientRect(),n=Math.round(r.height);if(A.body.removeChild(t),123===n)return!0}}return!1}(document);return Object.defineProperty(Oe,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch(A){return!1}return!0}(document);return Object.defineProperty(Oe,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A="function"==typeof Array.from&&"function"==typeof window.fetch?function(r){var A=r.createElement("canvas"),n=100;A.width=n,A.height=n;var B=A.getContext("2d");if(!B)return Promise.reject(!1);B.fillStyle="rgb(0, 255, 0)",B.fillRect(0,0,n,n);var e=new Image,s=A.toDataURL();e.src=s;var t=Le(n,n,0,0,e);return B.fillStyle="red",B.fillRect(0,0,n,n),ve(t).then(function(A){B.drawImage(A,0,0);var e=B.getImageData(0,0,n,n).data;B.fillStyle="red",B.fillRect(0,0,n,n);var t=r.createElement("div");return t.style.backgroundImage="url("+s+")",t.style.height="100px",Te(e)?ve(Le(n,n,0,0,t)):Promise.reject(!1)}).then(function(A){return B.drawImage(A,0,0),Te(B.getImageData(0,0,n,n).data)}).catch(function(){return!1})}(document):Promise.resolve(!1);return Object.defineProperty(Oe,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=void 0!==(new Image).crossOrigin;return Object.defineProperty(Oe,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A="string"==typeof(new XMLHttpRequest).responseType;return Object.defineProperty(Oe,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Oe,"SUPPORT_CORS_XHR",{value:A}),A}},De=(be.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.debug?console.debug.apply(console,[this.id,this.getTime()+"ms"].concat(A)):this.info.apply(this,A))},be.prototype.getTime=function(){return Date.now()-this.start},be.create=function(A){be.instances[A.id]=new be(A)},be.destroy=function(A){delete be.instances[A]},be.getInstance=function(A){var e=be.instances[A];if(void 0===e)throw new Error("No logger instance found with id "+A);return e},be.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&"undefined"!=typeof window&&window.console&&"function"==typeof console.info&&console.info.apply(console,[this.id,this.getTime()+"ms"].concat(A))},be.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.error?console.error.apply(console,[this.id,this.getTime()+"ms"].concat(A)):this.info.apply(this,A))},be.instances={},be);function be(A){var e=A.id,t=A.enabled;this.id=e,this.enabled=t,this.start=Date.now()}var Se=(Me.create=function(A,e){return Me._caches[A]=new ye(A,e)},Me.destroy=function(A){delete Me._caches[A]},Me.open=function(A){var e=Me._caches[A];if(void 0!==e)return e;throw new Error('Cache with key "'+A+'" not found')},Me.getOrigin=function(A){var e=Me._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},Me.isSameOrigin=function(A){return Me.getOrigin(A)===Me._origin},Me.setContext=function(A){Me._link=A.document.createElement("a"),Me._origin=Me.getOrigin(A.location.href)},Me.getInstance=function(){var A=Me._current;if(null===A)throw new Error("No cache instance attached");return A},Me.attachInstance=function(A){Me._current=A},Me.detachInstance=function(){Me._current=null},Me._caches={},Me._origin="about:blank",Me._current=null,Me);function Me(){}var ye=(_e.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(Ye(A)||Ge(A))&&(this._cache[A]=this.loadImage(A)),e},_e.prototype.match=function(A){return this._cache[A]},_e.prototype.loadImage=function(s){return a(this,void 0,void 0,function(){var e,r,t,n,B=this;return S(this,function(A){switch(A.label){case 0:return e=Se.isSameOrigin(s),r=!ke(s)&&!0===this._options.useCORS&&Oe.SUPPORT_CORS_IMAGES&&!e,t=!ke(s)&&!e&&"string"==typeof this._options.proxy&&Oe.SUPPORT_CORS_XHR&&!r,e||!1!==this._options.allowTaint||ke(s)||t||r?(n=s,t?[4,this.proxy(n)]:[3,2]):[2];case 1:n=A.sent(),A.label=2;case 2:return De.getInstance(this.id).debug("Added image "+s.substring(0,256)),[4,new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,(We(n)||r)&&(t.crossOrigin="anonymous"),t.src=n,!0===t.complete&&setTimeout(function(){return A(t)},500),0<B._options.imageTimeout&&setTimeout(function(){return e("Timed out ("+B._options.imageTimeout+"ms) loading image")},B._options.imageTimeout)})];case 3:return[2,A.sent()]}})})},_e.prototype.has=function(A){return void 0!==this._cache[A]},_e.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},_e.prototype.proxy=function(B){var s=this,o=this._options.proxy;if(!o)throw new Error("No proxy defined");var i=B.substring(0,256);return new Promise(function(e,t){var r=Oe.SUPPORT_RESPONSE_TYPE?"blob":"text",n=new XMLHttpRequest;if(n.onload=function(){if(200===n.status)if("text"==r)e(n.response);else{var A=new FileReader;A.addEventListener("load",function(){return e(A.result)},!1),A.addEventListener("error",function(A){return t(A)},!1),A.readAsDataURL(n.response)}else t("Failed to proxy resource "+i+" with status code "+n.status)},n.onerror=t,n.open("GET",o+"?url="+encodeURIComponent(B)+"&responseType="+r),"text"!=r&&n instanceof XMLHttpRequest&&(n.responseType=r),s._options.imageTimeout){var A=s._options.imageTimeout;n.timeout=A,n.ontimeout=function(){return t("Timed out ("+A+"ms) proxying "+i)}}n.send()})},_e);function _e(A,e){this.id=A,this._options=e,this._cache={}}function Pe(A){var n=rt.CIRCLE,B=Bt.FARTHEST_CORNER,s=[],o=[];return WA(A).forEach(function(A,e){var t=!0;if(0===e?t=A.reduce(function(A,e){if(zA(e))switch(e.value){case"center":return o.push(oe),!1;case"top":case"left":return o.push(se),!1;case"right":case"bottom":return o.push(ie),!1}else if(qA(e)||YA(e))return o.push(e),!1;return A},t):1===e&&(t=A.reduce(function(A,e){if(zA(e))switch(e.value){case"circle":return n=rt.CIRCLE,!1;case et:return n=rt.ELLIPSE,!1;case tt:case Ze:return B=Bt.CLOSEST_SIDE,!1;case je:return B=Bt.FARTHEST_SIDE,!1;case $e:return B=Bt.CLOSEST_CORNER,!1;case"cover":case At:return B=Bt.FARTHEST_CORNER,!1}else if(YA(e)||qA(e))return Array.isArray(B)||(B=[]),B.push(e),!1;return A},t)),t){var r=de(A);s.push(r)}}),{size:B,shape:n,stops:s,position:o,type:xe.RADIAL_GRADIENT}}var xe,Ve,ze=/^data:image\/svg\+xml/i,Xe=/^data:image\/.*;base64,/i,Je=/^data:image\/.*/i,Ge=function(A){return Oe.SUPPORT_SVG_DRAWING||!qe(A)},ke=function(A){return Je.test(A)},We=function(A){return Xe.test(A)},Ye=function(A){return"blob"===A.substr(0,4)},qe=function(A){return"svg"===A.substr(-3).toLowerCase()||ze.test(A)},Ze="closest-side",je="farthest-side",$e="closest-corner",At="farthest-corner",et="ellipse",tt="contain";(Ve=xe||(xe={}))[Ve.URL=0]="URL",Ve[Ve.LINEAR_GRADIENT=1]="LINEAR_GRADIENT",Ve[Ve.RADIAL_GRADIENT=2]="RADIAL_GRADIENT";var rt,nt,Bt,st;(nt=rt||(rt={}))[nt.CIRCLE=0]="CIRCLE",nt[nt.ELLIPSE=1]="ELLIPSE",(st=Bt||(Bt={}))[st.CLOSEST_SIDE=0]="CLOSEST_SIDE",st[st.FARTHEST_SIDE=1]="FARTHEST_SIDE",st[st.CLOSEST_CORNER=2]="CLOSEST_CORNER",st[st.FARTHEST_CORNER=3]="FARTHEST_CORNER";var ot=function(A){if(A.type===sA.URL_TOKEN){var e={url:A.value,type:xe.URL};return Se.getInstance().addImage(A.value),e}if(A.type!==sA.FUNCTION)throw new Error("Unsupported image type");var t=ct[A.name];if(void 0===t)throw new Error('Attempting to parse an unsupported image function "'+A.name+'"');return t(A.values)};var it,at,ct={"linear-gradient":function(A){var n=Qe(180),B=[];return WA(A).forEach(function(A,e){if(0===e){var t=A[0];if(t.type===sA.IDENT_TOKEN&&"to"===t.value)return void(n=Ae(A));if($A(t))return void(n=ce(t))}var r=de(A);B.push(r)}),{angle:n,stops:B,type:xe.LINEAR_GRADIENT}},"-moz-linear-gradient":Ie,"-ms-linear-gradient":Ie,"-o-linear-gradient":Ie,"-webkit-linear-gradient":Ie,"radial-gradient":function(A){var B=rt.CIRCLE,s=Bt.FARTHEST_CORNER,o=[],i=[];return WA(A).forEach(function(A,e){var t=!0;if(0===e){var r=!1;t=A.reduce(function(A,e){if(r)if(zA(e))switch(e.value){case"center":return i.push(oe),A;case"top":case"left":return i.push(se),A;case"right":case"bottom":return i.push(ie),A}else(qA(e)||YA(e))&&i.push(e);else if(zA(e))switch(e.value){case"circle":return B=rt.CIRCLE,!1;case et:return B=rt.ELLIPSE,!1;case"at":return!(r=!0);case Ze:return s=Bt.CLOSEST_SIDE,!1;case"cover":case je:return s=Bt.FARTHEST_SIDE,!1;case tt:case $e:return s=Bt.CLOSEST_CORNER,!1;case At:return s=Bt.FARTHEST_CORNER,!1}else if(YA(e)||qA(e))return Array.isArray(s)||(s=[]),s.push(e),!1;return A},t)}if(t){var n=de(A);o.push(n)}}),{size:s,shape:B,stops:o,position:i,type:xe.RADIAL_GRADIENT}},"-moz-radial-gradient":Pe,"-ms-radial-gradient":Pe,"-o-radial-gradient":Pe,"-webkit-radial-gradient":Pe,"-webkit-gradient":function(A){var e=Qe(180),s=[],o=xe.LINEAR_GRADIENT,t=rt.CIRCLE,r=Bt.FARTHEST_CORNER;return WA(A).forEach(function(A,e){var t=A[0];if(0===e){if(zA(t)&&"linear"===t.value)return void(o=xe.LINEAR_GRADIENT);if(zA(t)&&"radial"===t.value)return void(o=xe.RADIAL_GRADIENT)}if(t.type===sA.FUNCTION)if("from"===t.name){var r=we(t.values[0]);s.push({stop:se,color:r})}else if("to"===t.name)r=we(t.values[0]),s.push({stop:ie,color:r});else if("color-stop"===t.name){var n=t.values.filter(kA);if(2===n.length){r=we(n[1]);var B=n[0];VA(B)&&s.push({stop:{type:sA.PERCENTAGE_TOKEN,number:100*B.number,flags:B.flags},color:r})}}}),o===xe.LINEAR_GRADIENT?{angle:(e+Qe(180))%Qe(360),stops:s,type:o}:{size:r,shape:t,stops:s,position:[],type:o}}},Qt={name:"background-image",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){if(0===A.length)return[];var e=A[0];return e.type===sA.IDENT_TOKEN&&"none"===e.value?[]:A.filter(function(A){return kA(A)&&function(A){return A.type!==sA.FUNCTION||ct[A.name]}(A)}).map(ot)}},wt={name:"background-origin",initialValue:"border-box",prefix:!1,type:Ce.LIST,parse:function(A){return A.map(function(A){if(zA(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},ut={name:"background-position",initialValue:"0% 0%",type:Ce.LIST,prefix:!1,parse:function(A){return WA(A).map(function(A){return A.filter(qA)}).map(ZA)}};(at=it||(it={}))[at.REPEAT=0]="REPEAT",at[at.NO_REPEAT=1]="NO_REPEAT",at[at.REPEAT_X=2]="REPEAT_X";var Ut,lt,Ct={name:"background-repeat",initialValue:"repeat",prefix:!(at[at.REPEAT_Y=3]="REPEAT_Y"),type:Ce.LIST,parse:function(A){return WA(A).map(function(A){return A.filter(zA).map(function(A){return A.value}).join(" ")}).map(gt)}},gt=function(A){switch(A){case"no-repeat":return it.NO_REPEAT;case"repeat-x":case"repeat no-repeat":return it.REPEAT_X;case"repeat-y":case"no-repeat repeat":return it.REPEAT_Y;case"repeat":default:return it.REPEAT}};(lt=Ut||(Ut={})).AUTO="auto",lt.CONTAIN="contain";function Et(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"}}function Ft(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:Ce.LIST,parse:function(A){return ZA(A.filter(qA))}}}var ht,Ht,dt={name:"background-size",initialValue:"0",prefix:!(lt.COVER="cover"),type:Ce.LIST,parse:function(A){return WA(A).map(function(A){return A.filter(ft)})}},ft=function(A){return zA(A)||qA(A)},pt=Et("top"),Nt=Et("right"),Kt=Et("bottom"),It=Et("left"),Tt=Ft("top-left"),mt=Ft("top-right"),Rt=Ft("bottom-right"),Lt=Ft("bottom-left");(Ht=ht||(ht={}))[Ht.NONE=0]="NONE",Ht[Ht.SOLID=1]="SOLID";function vt(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"none":return ht.NONE}return ht.SOLID}}}function Ot(A){return{name:"border-"+A+"-width",initialValue:"0",type:Ce.VALUE,prefix:!1,parse:function(A){return xA(A)?A.number:0}}}var Dt,bt,St=vt("top"),Mt=vt("right"),yt=vt("bottom"),_t=vt("left"),Pt=Ot("top"),xt=Ot("right"),Vt=Ot("bottom"),zt=Ot("left"),Xt={name:"color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"},Jt={name:"display",initialValue:"inline-block",prefix:!1,type:Ce.LIST,parse:function(A){return A.filter(zA).reduce(function(A,e){return A|Gt(e.value)},0)}},Gt=function(A){switch(A){case"block":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0};(bt=Dt||(Dt={}))[bt.NONE=0]="NONE",bt[bt.LEFT=1]="LEFT",bt[bt.RIGHT=2]="RIGHT",bt[bt.INLINE_START=3]="INLINE_START";var kt,Wt,Yt,qt,Zt={name:"float",initialValue:"none",prefix:!(bt[bt.INLINE_END=4]="INLINE_END"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"left":return Dt.LEFT;case"right":return Dt.RIGHT;case"inline-start":return Dt.INLINE_START;case"inline-end":return Dt.INLINE_END}return Dt.NONE}},jt={name:"letter-spacing",initialValue:"0",prefix:!1,type:Ce.VALUE,parse:function(A){return A.type===sA.IDENT_TOKEN&&"normal"===A.value?0:A.type===sA.NUMBER_TOKEN?A.number:A.type===sA.DIMENSION_TOKEN?A.number:0}},$t={name:"line-break",initialValue:(Wt=kt||(kt={})).NORMAL="normal",prefix:!(Wt.STRICT="strict"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"strict":return kt.STRICT;case"normal":default:return kt.NORMAL}}},Ar={name:"line-height",initialValue:"normal",prefix:!1,type:Ce.TOKEN_VALUE},er={name:"list-style-image",initialValue:"none",type:Ce.VALUE,prefix:!1,parse:function(A){return A.type===sA.IDENT_TOKEN&&"none"===A.value?null:ot(A)}};(qt=Yt||(Yt={}))[qt.INSIDE=0]="INSIDE";var tr,rr,nr={name:"list-style-position",initialValue:"outside",prefix:!(qt[qt.OUTSIDE=1]="OUTSIDE"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"inside":return Yt.INSIDE;case"outside":default:return Yt.OUTSIDE}}};(rr=tr||(tr={}))[rr.NONE=-1]="NONE",rr[rr.DISC=0]="DISC",rr[rr.CIRCLE=1]="CIRCLE",rr[rr.SQUARE=2]="SQUARE",rr[rr.DECIMAL=3]="DECIMAL",rr[rr.CJK_DECIMAL=4]="CJK_DECIMAL",rr[rr.DECIMAL_LEADING_ZERO=5]="DECIMAL_LEADING_ZERO",rr[rr.LOWER_ROMAN=6]="LOWER_ROMAN",rr[rr.UPPER_ROMAN=7]="UPPER_ROMAN",rr[rr.LOWER_GREEK=8]="LOWER_GREEK",rr[rr.LOWER_ALPHA=9]="LOWER_ALPHA",rr[rr.UPPER_ALPHA=10]="UPPER_ALPHA",rr[rr.ARABIC_INDIC=11]="ARABIC_INDIC",rr[rr.ARMENIAN=12]="ARMENIAN",rr[rr.BENGALI=13]="BENGALI",rr[rr.CAMBODIAN=14]="CAMBODIAN",rr[rr.CJK_EARTHLY_BRANCH=15]="CJK_EARTHLY_BRANCH",rr[rr.CJK_HEAVENLY_STEM=16]="CJK_HEAVENLY_STEM",rr[rr.CJK_IDEOGRAPHIC=17]="CJK_IDEOGRAPHIC",rr[rr.DEVANAGARI=18]="DEVANAGARI",rr[rr.ETHIOPIC_NUMERIC=19]="ETHIOPIC_NUMERIC",rr[rr.GEORGIAN=20]="GEORGIAN",rr[rr.GUJARATI=21]="GUJARATI",rr[rr.GURMUKHI=22]="GURMUKHI",rr[rr.HEBREW=22]="HEBREW",rr[rr.HIRAGANA=23]="HIRAGANA",rr[rr.HIRAGANA_IROHA=24]="HIRAGANA_IROHA",rr[rr.JAPANESE_FORMAL=25]="JAPANESE_FORMAL",rr[rr.JAPANESE_INFORMAL=26]="JAPANESE_INFORMAL",rr[rr.KANNADA=27]="KANNADA",rr[rr.KATAKANA=28]="KATAKANA",rr[rr.KATAKANA_IROHA=29]="KATAKANA_IROHA",rr[rr.KHMER=30]="KHMER",rr[rr.KOREAN_HANGUL_FORMAL=31]="KOREAN_HANGUL_FORMAL",rr[rr.KOREAN_HANJA_FORMAL=32]="KOREAN_HANJA_FORMAL",rr[rr.KOREAN_HANJA_INFORMAL=33]="KOREAN_HANJA_INFORMAL",rr[rr.LAO=34]="LAO",rr[rr.LOWER_ARMENIAN=35]="LOWER_ARMENIAN",rr[rr.MALAYALAM=36]="MALAYALAM",rr[rr.MONGOLIAN=37]="MONGOLIAN",rr[rr.MYANMAR=38]="MYANMAR",rr[rr.ORIYA=39]="ORIYA",rr[rr.PERSIAN=40]="PERSIAN",rr[rr.SIMP_CHINESE_FORMAL=41]="SIMP_CHINESE_FORMAL",rr[rr.SIMP_CHINESE_INFORMAL=42]="SIMP_CHINESE_INFORMAL",rr[rr.TAMIL=43]="TAMIL",rr[rr.TELUGU=44]="TELUGU",rr[rr.THAI=45]="THAI",rr[rr.TIBETAN=46]="TIBETAN",rr[rr.TRAD_CHINESE_FORMAL=47]="TRAD_CHINESE_FORMAL",rr[rr.TRAD_CHINESE_INFORMAL=48]="TRAD_CHINESE_INFORMAL",rr[rr.UPPER_ARMENIAN=49]="UPPER_ARMENIAN",rr[rr.DISCLOSURE_OPEN=50]="DISCLOSURE_OPEN";function Br(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:Ce.TOKEN_VALUE}}var sr,or,ir={name:"list-style-type",initialValue:"none",prefix:!(rr[rr.DISCLOSURE_CLOSED=51]="DISCLOSURE_CLOSED"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"disc":return tr.DISC;case"circle":return tr.CIRCLE;case"square":return tr.SQUARE;case"decimal":return tr.DECIMAL;case"cjk-decimal":return tr.CJK_DECIMAL;case"decimal-leading-zero":return tr.DECIMAL_LEADING_ZERO;case"lower-roman":return tr.LOWER_ROMAN;case"upper-roman":return tr.UPPER_ROMAN;case"lower-greek":return tr.LOWER_GREEK;case"lower-alpha":return tr.LOWER_ALPHA;case"upper-alpha":return tr.UPPER_ALPHA;case"arabic-indic":return tr.ARABIC_INDIC;case"armenian":return tr.ARMENIAN;case"bengali":return tr.BENGALI;case"cambodian":return tr.CAMBODIAN;case"cjk-earthly-branch":return tr.CJK_EARTHLY_BRANCH;case"cjk-heavenly-stem":return tr.CJK_HEAVENLY_STEM;case"cjk-ideographic":return tr.CJK_IDEOGRAPHIC;case"devanagari":return tr.DEVANAGARI;case"ethiopic-numeric":return tr.ETHIOPIC_NUMERIC;case"georgian":return tr.GEORGIAN;case"gujarati":return tr.GUJARATI;case"gurmukhi":return tr.GURMUKHI;case"hebrew":return tr.HEBREW;case"hiragana":return tr.HIRAGANA;case"hiragana-iroha":return tr.HIRAGANA_IROHA;case"japanese-formal":return tr.JAPANESE_FORMAL;case"japanese-informal":return tr.JAPANESE_INFORMAL;case"kannada":return tr.KANNADA;case"katakana":return tr.KATAKANA;case"katakana-iroha":return tr.KATAKANA_IROHA;case"khmer":return tr.KHMER;case"korean-hangul-formal":return tr.KOREAN_HANGUL_FORMAL;case"korean-hanja-formal":return tr.KOREAN_HANJA_FORMAL;case"korean-hanja-informal":return tr.KOREAN_HANJA_INFORMAL;case"lao":return tr.LAO;case"lower-armenian":return tr.LOWER_ARMENIAN;case"malayalam":return tr.MALAYALAM;case"mongolian":return tr.MONGOLIAN;case"myanmar":return tr.MYANMAR;case"oriya":return tr.ORIYA;case"persian":return tr.PERSIAN;case"simp-chinese-formal":return tr.SIMP_CHINESE_FORMAL;case"simp-chinese-informal":return tr.SIMP_CHINESE_INFORMAL;case"tamil":return tr.TAMIL;case"telugu":return tr.TELUGU;case"thai":return tr.THAI;case"tibetan":return tr.TIBETAN;case"trad-chinese-formal":return tr.TRAD_CHINESE_FORMAL;case"trad-chinese-informal":return tr.TRAD_CHINESE_INFORMAL;case"upper-armenian":return tr.UPPER_ARMENIAN;case"disclosure-open":return tr.DISCLOSURE_OPEN;case"disclosure-closed":return tr.DISCLOSURE_CLOSED;case"none":default:return tr.NONE}}},ar=Br("top"),cr=Br("right"),Qr=Br("bottom"),wr=Br("left");(or=sr||(sr={}))[or.VISIBLE=0]="VISIBLE",or[or.HIDDEN=1]="HIDDEN",or[or.SCROLL=2]="SCROLL";function ur(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:Ce.TYPE_VALUE,format:"length-percentage"}}var Ur,lr,Cr,gr,Er={name:"overflow",initialValue:"visible",prefix:!(or[or.AUTO=3]="AUTO"),type:Ce.LIST,parse:function(A){return A.filter(zA).map(function(A){switch(A.value){case"hidden":return sr.HIDDEN;case"scroll":return sr.SCROLL;case"auto":return sr.AUTO;case"visible":default:return sr.VISIBLE}})}},Fr={name:"overflow-wrap",initialValue:(lr=Ur||(Ur={})).NORMAL="normal",prefix:!(lr.BREAK_WORD="break-word"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"break-word":return Ur.BREAK_WORD;case"normal":default:return Ur.NORMAL}}},hr=ur("top"),Hr=ur("right"),dr=ur("bottom"),fr=ur("left");(gr=Cr||(Cr={}))[gr.LEFT=0]="LEFT",gr[gr.CENTER=1]="CENTER";var pr,Nr,Kr={name:"text-align",initialValue:"left",prefix:!(gr[gr.RIGHT=2]="RIGHT"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"right":return Cr.RIGHT;case"center":case"justify":return Cr.CENTER;case"left":default:return Cr.LEFT}}};(Nr=pr||(pr={}))[Nr.STATIC=0]="STATIC",Nr[Nr.RELATIVE=1]="RELATIVE",Nr[Nr.ABSOLUTE=2]="ABSOLUTE",Nr[Nr.FIXED=3]="FIXED";var Ir,Tr,mr={name:"position",initialValue:"static",prefix:!(Nr[Nr.STICKY=4]="STICKY"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"relative":return pr.RELATIVE;case"absolute":return pr.ABSOLUTE;case"fixed":return pr.FIXED;case"sticky":return pr.STICKY}return pr.STATIC}},Rr={name:"text-shadow",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){return 1===A.length&&JA(A[0],"none")?[]:WA(A).map(function(A){for(var e={color:He.TRANSPARENT,offsetX:se,offsetY:se,blur:se},t=0,r=0;r<A.length;r++){var n=A[r];YA(n)?(0===t?e.offsetX=n:1===t?e.offsetY=n:e.blur=n,t++):e.color=we(n)}return e})}};(Tr=Ir||(Ir={}))[Tr.NONE=0]="NONE",Tr[Tr.LOWERCASE=1]="LOWERCASE",Tr[Tr.UPPERCASE=2]="UPPERCASE";var Lr,vr,Or={name:"text-transform",initialValue:"none",prefix:!(Tr[Tr.CAPITALIZE=3]="CAPITALIZE"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"uppercase":return Ir.UPPERCASE;case"lowercase":return Ir.LOWERCASE;case"capitalize":return Ir.CAPITALIZE}return Ir.NONE}},Dr={name:"transform",initialValue:"none",prefix:!0,type:Ce.VALUE,parse:function(A){if(A.type===sA.IDENT_TOKEN&&"none"===A.value)return null;if(A.type!==sA.FUNCTION)return null;var e=br[A.name];if(void 0===e)throw new Error('Attempting to parse an unsupported transform function "'+A.name+'"');return e(A.values)}},br={matrix:function(A){var e=A.filter(function(A){return A.type===sA.NUMBER_TOKEN}).map(function(A){return A.number});return 6===e.length?e:null},matrix3d:function(A){var e=A.filter(function(A){return A.type===sA.NUMBER_TOKEN}).map(function(A){return A.number}),t=e[0],r=e[1],n=(e[2],e[3],e[4]),B=e[5],s=(e[6],e[7],e[8],e[9],e[10],e[11],e[12]),o=e[13];e[14],e[15];return 16===e.length?[t,r,n,B,s,o]:null}},Sr={type:sA.PERCENTAGE_TOKEN,number:50,flags:4},Mr=[Sr,Sr],yr={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:Ce.LIST,parse:function(A){var e=A.filter(qA);return 2!==e.length?Mr:[e[0],e[1]]}};(vr=Lr||(Lr={}))[vr.VISIBLE=0]="VISIBLE",vr[vr.HIDDEN=1]="HIDDEN";var _r,Pr,xr={name:"visible",initialValue:"none",prefix:!(vr[vr.COLLAPSE=2]="COLLAPSE"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"hidden":return Lr.HIDDEN;case"collapse":return Lr.COLLAPSE;case"visible":default:return Lr.VISIBLE}}};(Pr=_r||(_r={})).NORMAL="normal",Pr.BREAK_ALL="break-all";var Vr,zr,Xr={name:"word-break",initialValue:"normal",prefix:!(Pr.KEEP_ALL="keep-all"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"break-all":return _r.BREAK_ALL;case"keep-all":return _r.KEEP_ALL;case"normal":default:return _r.NORMAL}}},Jr={name:"z-index",initialValue:"auto",prefix:!1,type:Ce.VALUE,parse:function(A){if(A.type===sA.IDENT_TOKEN)return{auto:!0,order:0};if(VA(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},Gr={name:"opacity",initialValue:"1",type:Ce.VALUE,prefix:!1,parse:function(A){return VA(A)?A.number:1}},kr={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"},Wr={name:"text-decoration-line",initialValue:"none",prefix:!1,type:Ce.LIST,parse:function(A){return A.filter(zA).map(function(A){switch(A.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(A){return 0!==A})}},Yr={name:"font-family",initialValue:"",prefix:!1,type:Ce.LIST,parse:function(A){return A.filter(qr).map(function(A){return A.value})}},qr=function(A){return A.type===sA.STRING_TOKEN||A.type===sA.IDENT_TOKEN},Zr={name:"font-size",initialValue:"0",prefix:!1,type:Ce.TYPE_VALUE,format:"length"},jr={name:"font-weight",initialValue:"normal",type:Ce.VALUE,prefix:!1,parse:function(A){if(VA(A))return A.number;if(zA(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},$r={name:"font-variant",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){return A.filter(zA).map(function(A){return A.value})}};(zr=Vr||(Vr={})).NORMAL="normal",zr.ITALIC="italic";function An(A,e){return 0!=(A&e)}function en(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""}var tn={name:"font-style",initialValue:"normal",prefix:!(zr.OBLIQUE="oblique"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"oblique":return Vr.OBLIQUE;case"italic":return Vr.ITALIC;case"normal":default:return Vr.NORMAL}}},rn={name:"content",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){if(0===A.length)return[];var e=A[0];return e.type===sA.IDENT_TOKEN&&"none"===e.value?[]:A}},nn={name:"counter-increment",initialValue:"none",prefix:!0,type:Ce.LIST,parse:function(A){if(0===A.length)return null;var e=A[0];if(e.type===sA.IDENT_TOKEN&&"none"===e.value)return null;for(var t=[],r=A.filter(GA),n=0;n<r.length;n++){var B=r[n],s=r[n+1];if(B.type===sA.IDENT_TOKEN){var o=s&&VA(s)?s.number:1;t.push({counter:B.value,increment:o})}}return t}},Bn={name:"counter-reset",initialValue:"none",prefix:!0,type:Ce.LIST,parse:function(A){if(0===A.length)return[];for(var e=[],t=A.filter(GA),r=0;r<t.length;r++){var n=t[r],B=t[r+1];if(zA(n)&&"none"!==n.value){var s=B&&VA(B)?B.number:0;e.push({counter:n.value,reset:s})}}return e}},sn={name:"quotes",initialValue:"none",prefix:!0,type:Ce.LIST,parse:function(A){if(0===A.length)return null;var e=A[0];if(e.type===sA.IDENT_TOKEN&&"none"===e.value)return null;var t=[],r=A.filter(XA);if(r.length%2!=0)return null;for(var n=0;n<r.length;n+=2){var B=r[n].value,s=r[n+1].value;t.push({open:B,close:s})}return t}},on={name:"box-shadow",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){return 1===A.length&&JA(A[0],"none")?[]:WA(A).map(function(A){for(var e={color:255,offsetX:se,offsetY:se,blur:se,spread:se,inset:!1},t=0,r=0;r<A.length;r++){var n=A[r];JA(n,"inset")?e.inset=!0:YA(n)?(0===t?e.offsetX=n:1===t?e.offsetY=n:2===t?e.blur=n:e.spread=n,t++):e.color=we(n)}return e})}},an=(cn.prototype.isVisible=function(){return 0<this.display&&0<this.opacity&&this.visibility===Lr.VISIBLE},cn.prototype.isTransparent=function(){return ee(this.backgroundColor)},cn.prototype.isTransformed=function(){return null!==this.transform},cn.prototype.isPositioned=function(){return this.position!==pr.STATIC},cn.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},cn.prototype.isFloating=function(){return this.float!==Dt.NONE},cn.prototype.isInlineLevel=function(){return An(this.display,4)||An(this.display,33554432)||An(this.display,268435456)||An(this.display,536870912)||An(this.display,67108864)||An(this.display,134217728)},cn);function cn(A){this.backgroundClip=Un(me,A.backgroundClip),this.backgroundColor=Un(Re,A.backgroundColor),this.backgroundImage=Un(Qt,A.backgroundImage),this.backgroundOrigin=Un(wt,A.backgroundOrigin),this.backgroundPosition=Un(ut,A.backgroundPosition),this.backgroundRepeat=Un(Ct,A.backgroundRepeat),this.backgroundSize=Un(dt,A.backgroundSize),this.borderTopColor=Un(pt,A.borderTopColor),this.borderRightColor=Un(Nt,A.borderRightColor),this.borderBottomColor=Un(Kt,A.borderBottomColor),this.borderLeftColor=Un(It,A.borderLeftColor),this.borderTopLeftRadius=Un(Tt,A.borderTopLeftRadius),this.borderTopRightRadius=Un(mt,A.borderTopRightRadius),this.borderBottomRightRadius=Un(Rt,A.borderBottomRightRadius),this.borderBottomLeftRadius=Un(Lt,A.borderBottomLeftRadius),this.borderTopStyle=Un(St,A.borderTopStyle),this.borderRightStyle=Un(Mt,A.borderRightStyle),this.borderBottomStyle=Un(yt,A.borderBottomStyle),this.borderLeftStyle=Un(_t,A.borderLeftStyle),this.borderTopWidth=Un(Pt,A.borderTopWidth),this.borderRightWidth=Un(xt,A.borderRightWidth),this.borderBottomWidth=Un(Vt,A.borderBottomWidth),this.borderLeftWidth=Un(zt,A.borderLeftWidth),this.boxShadow=Un(on,A.boxShadow),this.color=Un(Xt,A.color),this.display=Un(Jt,A.display),this.float=Un(Zt,A.cssFloat),this.fontFamily=Un(Yr,A.fontFamily),this.fontSize=Un(Zr,A.fontSize),this.fontStyle=Un(tn,A.fontStyle),this.fontVariant=Un($r,A.fontVariant),this.fontWeight=Un(jr,A.fontWeight),this.letterSpacing=Un(jt,A.letterSpacing),this.lineBreak=Un($t,A.lineBreak),this.lineHeight=Un(Ar,A.lineHeight),this.listStyleImage=Un(er,A.listStyleImage),this.listStylePosition=Un(nr,A.listStylePosition),this.listStyleType=Un(ir,A.listStyleType),this.marginTop=Un(ar,A.marginTop),this.marginRight=Un(cr,A.marginRight),this.marginBottom=Un(Qr,A.marginBottom),this.marginLeft=Un(wr,A.marginLeft),this.opacity=Un(Gr,A.opacity);var e=Un(Er,A.overflow);this.overflowX=e[0],this.overflowY=e[1<e.length?1:0],this.overflowWrap=Un(Fr,A.overflowWrap),this.paddingTop=Un(hr,A.paddingTop),this.paddingRight=Un(Hr,A.paddingRight),this.paddingBottom=Un(dr,A.paddingBottom),this.paddingLeft=Un(fr,A.paddingLeft),this.position=Un(mr,A.position),this.textAlign=Un(Kr,A.textAlign),this.textDecorationColor=Un(kr,A.textDecorationColor||A.color),this.textDecorationLine=Un(Wr,A.textDecorationLine),this.textShadow=Un(Rr,A.textShadow),this.textTransform=Un(Or,A.textTransform),this.transform=Un(Dr,A.transform),this.transformOrigin=Un(yr,A.transformOrigin),this.visibility=Un(xr,A.visibility),this.wordBreak=Un(Xr,A.wordBreak),this.zIndex=Un(Jr,A.zIndex)}var Qn,wn=function(A){this.content=Un(rn,A.content),this.quotes=Un(sn,A.quotes)},un=function(A){this.counterIncrement=Un(nn,A.counterIncrement),this.counterReset=Un(Bn,A.counterReset)},Un=function(A,e){var t=new MA,r=null!=e?e.toString():A.initialValue;t.write(r);var n=new _A(t.read());switch(A.type){case Ce.IDENT_VALUE:var B=n.parseComponentValue();return A.parse(zA(B)?B.value:A.initialValue);case Ce.VALUE:return A.parse(n.parseComponentValue());case Ce.LIST:return A.parse(n.parseComponentValues());case Ce.TOKEN_VALUE:return n.parseComponentValue();case Ce.TYPE_VALUE:switch(A.format){case"angle":return ce(n.parseComponentValue());case"color":return we(n.parseComponentValue());case"image":return ot(n.parseComponentValue());case"length":var s=n.parseComponentValue();return YA(s)?s:se;case"length-percentage":var o=n.parseComponentValue();return qA(o)?o:se}}throw new Error("Attempting to parse unsupported css format type "+A.format)},ln=function(A){this.styles=new an(window.getComputedStyle(A,null)),this.textNodes=[],this.elements=[],null!==this.styles.transform&&uB(A)&&(A.style.transform="none"),this.bounds=T(A),this.flags=0},Cn=function(A,e){this.text=A,this.bounds=e},gn=function(A){var e=A.ownerDocument;if(e){var t=e.createElement("html2canvaswrapper");t.appendChild(A.cloneNode(!0));var r=A.parentNode;if(r){r.replaceChild(t,A);var n=T(t);return t.firstChild&&r.replaceChild(t.firstChild,t),n}}return new I(0,0,0,0)},En=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),I.fromClientRect(n.getBoundingClientRect())},Fn=function(A,e){return 0!==e.letterSpacing?c(A).map(function(A){return l(A)}):hn(A,e)},hn=function(A,e){for(var t,r=function(A,e){var t=c(A),r=u(t,e),n=r[0],B=r[1],s=r[2],o=t.length,i=0,a=0;return{next:function(){if(o<=a)return{done:!0,value:null};for(var A=Y;a<o&&(A=w(t,B,n,++a,s))===Y;);if(A===Y&&a!==o)return{done:!0,value:null};var e=new nA(t,A,i,a);return i=a,{value:e,done:!1}}}}(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap===Ur.BREAK_WORD?"break-word":e.wordBreak}),n=[];!(t=r.next()).done;)t.value&&n.push(t.value.slice());return n},Hn=function(A,e){this.text=dn(A.data,e.textTransform),this.textBounds=function(A,t,r){var e=Fn(A,t),n=[],B=0;return e.forEach(function(A){if(t.textDecorationLine.length||0<A.trim().length)if(Oe.SUPPORT_RANGE_BOUNDS)n.push(new Cn(A,En(r,B,A.length)));else{var e=r.splitText(A.length);n.push(new Cn(A,gn(r))),r=e}else Oe.SUPPORT_RANGE_BOUNDS||(r=r.splitText(A.length));B+=A.length}),n}(this.text,e,A)},dn=function(A,e){switch(e){case Ir.LOWERCASE:return A.toLowerCase();case Ir.CAPITALIZE:return A.replace(fn,pn);case Ir.UPPERCASE:return A.toUpperCase();default:return A}},fn=/(^|\s|:|-|\(|\))([a-z])/g,pn=function(A,e,t){return 0<A.length?e+t.toUpperCase():A},Nn=(A(Kn,Qn=ln),Kn);function Kn(A){var e=Qn.call(this,A)||this;return e.src=A.currentSrc||A.src,e.intrinsicWidth=A.naturalWidth,e.intrinsicHeight=A.naturalHeight,Se.getInstance().addImage(e.src),e}var In,Tn=(A(mn,In=ln),mn);function mn(A){var e=In.call(this,A)||this;return e.canvas=A,e.intrinsicWidth=A.width,e.intrinsicHeight=A.height,e}var Rn,Ln=(A(vn,Rn=ln),vn);function vn(A){var e=Rn.call(this,A)||this,t=new XMLSerializer;return e.svg="data:image/svg+xml,"+encodeURIComponent(t.serializeToString(A)),e.intrinsicWidth=A.width.baseVal.value,e.intrinsicHeight=A.height.baseVal.value,Se.getInstance().addImage(e.svg),e}var On,Dn=(A(bn,On=ln),bn);function bn(A){var e=On.call(this,A)||this;return e.value=A.value,e}var Sn,Mn=(A(yn,Sn=ln),yn);function yn(A){var e=Sn.call(this,A)||this;return e.start=A.start,e.reversed="boolean"==typeof A.reversed&&!0===A.reversed,e}var _n,Pn=[{type:sA.DIMENSION_TOKEN,flags:0,unit:"px",number:3}],xn=[{type:sA.PERCENTAGE_TOKEN,flags:0,number:50}],Vn="checkbox",zn="radio",Xn="password",Jn=707406591,Gn=(A(kn,_n=ln),kn);function kn(A){var e=_n.call(this,A)||this;switch(e.type=A.type.toLowerCase(),e.checked=A.checked,e.value=function(A){var e=A.type===Xn?new Array(A.value.length+1).join("•"):A.value;return 0===e.length?A.placeholder||"":e}(A),e.type!==Vn&&e.type!==zn||(e.styles.backgroundColor=3739148031,e.styles.borderTopColor=e.styles.borderRightColor=e.styles.borderBottomColor=e.styles.borderLeftColor=2779096575,e.styles.borderTopWidth=e.styles.borderRightWidth=e.styles.borderBottomWidth=e.styles.borderLeftWidth=1,e.styles.borderTopStyle=e.styles.borderRightStyle=e.styles.borderBottomStyle=e.styles.borderLeftStyle=ht.SOLID,e.styles.backgroundClip=[Ee.BORDER_BOX],e.styles.backgroundOrigin=[0],e.bounds=function(A){return A.width>A.height?new I(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new I(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A}(e.bounds)),e.type){case Vn:e.styles.borderTopRightRadius=e.styles.borderTopLeftRadius=e.styles.borderBottomRightRadius=e.styles.borderBottomLeftRadius=Pn;break;case zn:e.styles.borderTopRightRadius=e.styles.borderTopLeftRadius=e.styles.borderBottomRightRadius=e.styles.borderBottomLeftRadius=xn}return e}var Wn,Yn=(A(qn,Wn=ln),qn);function qn(A){var e=Wn.call(this,A)||this,t=A.options[A.selectedIndex||0];return e.value=t&&t.text||"",e}var Zn,jn=(A($n,Zn=ln),$n);function $n(A){var e=Zn.call(this,A)||this;return e.value=A.value,e}function AB(A){return we(_A.create(A).parseComponentValue())}var eB,tB=(A(rB,eB=ln),rB);function rB(A){var e=eB.call(this,A)||this;e.src=A.src,e.width=parseInt(A.width,10)||0,e.height=parseInt(A.height,10)||0,e.backgroundColor=e.styles.backgroundColor;try{if(A.contentWindow&&A.contentWindow.document&&A.contentWindow.document.documentElement){e.tree=iB(A.contentWindow.document.documentElement);var t=A.contentWindow.document.documentElement?AB(getComputedStyle(A.contentWindow.document.documentElement).backgroundColor):He.TRANSPARENT,r=A.contentWindow.document.body?AB(getComputedStyle(A.contentWindow.document.body).backgroundColor):He.TRANSPARENT;e.backgroundColor=ee(t)?ee(r)?e.styles.backgroundColor:r:t}}catch(A){}return e}function nB(A){return"STYLE"===A.tagName}var BB=["OL","UL","MENU"],sB=function(A,e,t){for(var r=A.firstChild,n=void 0;r;r=n)if(n=r.nextSibling,QB(r)&&0<r.data.trim().length)e.textNodes.push(new Hn(r,e.styles));else if(wB(r)){var B=oB(r);B.styles.isVisible()&&(aB(r,B,t)?B.flags|=4:cB(B.styles)&&(B.flags|=2),-1!==BB.indexOf(r.tagName)&&(B.flags|=8),e.elements.push(B),dB(r)||gB(r)||fB(r)||sB(r,B,t))}},oB=function(A){return hB(A)?new Nn(A):FB(A)?new Tn(A):gB(A)?new Ln(A):UB(A)?new Dn(A):lB(A)?new Mn(A):CB(A)?new Gn(A):fB(A)?new Yn(A):dB(A)?new jn(A):HB(A)?new tB(A):new ln(A)},iB=function(A){var e=oB(A);return e.flags|=4,sB(A,e,e),e},aB=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||EB(A)&&t.styles.isTransparent()},cB=function(A){return A.isPositioned()||A.isFloating()},QB=function(A){return A.nodeType===Node.TEXT_NODE},wB=function(A){return A.nodeType===Node.ELEMENT_NODE},uB=function(A){return void 0!==A.style},UB=function(A){return"LI"===A.tagName},lB=function(A){return"OL"===A.tagName},CB=function(A){return"INPUT"===A.tagName},gB=function(A){return"svg"===A.tagName},EB=function(A){return"BODY"===A.tagName},FB=function(A){return"CANVAS"===A.tagName},hB=function(A){return"IMG"===A.tagName},HB=function(A){return"IFRAME"===A.tagName},dB=function(A){return"TEXTAREA"===A.tagName},fB=function(A){return"SELECT"===A.tagName},pB=(NB.prototype.getCounterValue=function(A){var e=this.counters[A];return e&&e.length?e[e.length-1]:1},NB.prototype.getCounterValues=function(A){var e=this.counters[A];return e||[]},NB.prototype.pop=function(A){var e=this;A.forEach(function(A){return e.counters[A].pop()})},NB.prototype.parse=function(A){var t=this,e=A.counterIncrement,r=A.counterReset,n=!0;null!==e&&e.forEach(function(A){var e=t.counters[A.counter];e&&0!==A.increment&&(n=!1,e[Math.max(0,e.length-1)]+=A.increment)});var B=[];return n&&r.forEach(function(A){var e=t.counters[A.counter];B.push(A.counter),e||(e=t.counters[A.counter]=[]),e.push(A.reset)}),B},NB);function NB(){this.counters={}}function KB(r,A,e,n,t,B){return r<A||e<r?yB(r,t,0<B.length):n.integers.reduce(function(A,e,t){for(;e<=r;)r-=e,A+=n.values[t];return A},"")+B}function IB(A,e,t,r){for(var n="";t||A--,n=r(A)+n,e<=(A/=e)*e;);return n}function TB(A,e,t,r,n){var B=t-e+1;return(A<0?"-":"")+(IB(Math.abs(A),B,r,function(A){return l(Math.floor(A%B)+e)})+n)}function mB(A,e,t){void 0===t&&(t=". ");var r=e.length;return IB(Math.abs(A),r,!1,function(A){return e[Math.floor(A%r)]})+t}function RB(A,e,t,r,n,B){if(A<-9999||9999<A)return yB(A,tr.CJK_DECIMAL,0<n.length);var s=Math.abs(A),o=n;if(0===s)return e[0]+o;for(var i=0;0<s&&i<=4;i++){var a=s%10;0==a&&An(B,1)&&""!==o?o=e[a]+o:1<a||1==a&&0===i||1==a&&1===i&&An(B,2)||1==a&&1===i&&An(B,4)&&100<A||1==a&&1<i&&An(B,8)?o=e[a]+(0<i?t[i-1]:"")+o:1==a&&0<i&&(o=t[i-1]+o),s=Math.floor(s/10)}return(A<0?r:"")+o}var LB,vB,OB={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},DB={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},bB={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},SB={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},MB="마이너스",yB=function(A,e,t){var r=t?". ":"",n=t?"、":"",B=t?", ":"",s=t?" ":"";switch(e){case tr.DISC:return"•"+s;case tr.CIRCLE:return"◦"+s;case tr.SQUARE:return"◾"+s;case tr.DECIMAL_LEADING_ZERO:var o=TB(A,48,57,!0,r);return o.length<4?"0"+o:o;case tr.CJK_DECIMAL:return mB(A,"〇一二三四五六七八九",n);case tr.LOWER_ROMAN:return KB(A,1,3999,OB,tr.DECIMAL,r).toLowerCase();case tr.UPPER_ROMAN:return KB(A,1,3999,OB,tr.DECIMAL,r);case tr.LOWER_GREEK:return TB(A,945,969,!1,r);case tr.LOWER_ALPHA:return TB(A,97,122,!1,r);case tr.UPPER_ALPHA:return TB(A,65,90,!1,r);case tr.ARABIC_INDIC:return TB(A,1632,1641,!0,r);case tr.ARMENIAN:case tr.UPPER_ARMENIAN:return KB(A,1,9999,DB,tr.DECIMAL,r);case tr.LOWER_ARMENIAN:return KB(A,1,9999,DB,tr.DECIMAL,r).toLowerCase();case tr.BENGALI:return TB(A,2534,2543,!0,r);case tr.CAMBODIAN:case tr.KHMER:return TB(A,6112,6121,!0,r);case tr.CJK_EARTHLY_BRANCH:return mB(A,"子丑寅卯辰巳午未申酉戌亥",n);case tr.CJK_HEAVENLY_STEM:return mB(A,"甲乙丙丁戊己庚辛壬癸",n);case tr.CJK_IDEOGRAPHIC:case tr.TRAD_CHINESE_INFORMAL:return RB(A,"零一二三四五六七八九","十百千萬","負",n,14);case tr.TRAD_CHINESE_FORMAL:return RB(A,"零壹貳參肆伍陸柒捌玖","拾佰仟萬","負",n,15);case tr.SIMP_CHINESE_INFORMAL:return RB(A,"零一二三四五六七八九","十百千萬","负",n,14);case tr.SIMP_CHINESE_FORMAL:return RB(A,"零壹贰叁肆伍陆柒捌玖","拾佰仟萬","负",n,15);case tr.JAPANESE_INFORMAL:return RB(A,"〇一二三四五六七八九","十百千万","マイナス",n,0);case tr.JAPANESE_FORMAL:return RB(A,"零壱弐参四伍六七八九","拾百千万","マイナス",n,7);case tr.KOREAN_HANGUL_FORMAL:return RB(A,"영일이삼사오육칠팔구","십백천만",MB,B,7);case tr.KOREAN_HANJA_INFORMAL:return RB(A,"零一二三四五六七八九","十百千萬",MB,B,0);case tr.KOREAN_HANJA_FORMAL:return RB(A,"零壹貳參四五六七八九","拾百千",MB,B,7);case tr.DEVANAGARI:return TB(A,2406,2415,!0,r);case tr.GEORGIAN:return KB(A,1,19999,SB,tr.DECIMAL,r);case tr.GUJARATI:return TB(A,2790,2799,!0,r);case tr.GURMUKHI:return TB(A,2662,2671,!0,r);case tr.HEBREW:return KB(A,1,10999,bB,tr.DECIMAL,r);case tr.HIRAGANA:return mB(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case tr.HIRAGANA_IROHA:return mB(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case tr.KANNADA:return TB(A,3302,3311,!0,r);case tr.KATAKANA:return mB(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case tr.KATAKANA_IROHA:return mB(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case tr.LAO:return TB(A,3792,3801,!0,r);case tr.MONGOLIAN:return TB(A,6160,6169,!0,r);case tr.MYANMAR:return TB(A,4160,4169,!0,r);case tr.ORIYA:return TB(A,2918,2927,!0,r);case tr.PERSIAN:return TB(A,1776,1785,!0,r);case tr.TAMIL:return TB(A,3046,3055,!0,r);case tr.TELUGU:return TB(A,3174,3183,!0,r);case tr.THAI:return TB(A,3664,3673,!0,r);case tr.TIBETAN:return TB(A,3872,3881,!0,r);case tr.DECIMAL:default:return TB(A,48,57,!0,r)}},_B="data-html2canvas-ignore",PB=(xB.prototype.toIFrame=function(A,t){var e=this,r=XB(A,t);if(!r.contentWindow)return Promise.reject("Unable to find iframe window");var n=A.defaultView.pageXOffset,B=A.defaultView.pageYOffset,s=r.contentWindow,o=s.document,i=JB(r).then(function(){return a(e,void 0,void 0,function(){var e;return S(this,function(A){switch(A.label){case 0:return this.scrolledElements.forEach(YB),s&&(s.scrollTo(t.left,t.top),!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||s.scrollY===t.top&&s.scrollX===t.left||(o.documentElement.style.top=-t.top+"px",o.documentElement.style.left=-t.left+"px",o.documentElement.style.position="absolute")),e=this.options.onclone,void 0===this.clonedReferenceElement?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:A.sent(),A.label=2;case 2:return"function"==typeof e?[2,Promise.resolve().then(function(){return e(o)}).then(function(){return r})]:[2,r]}})})});return o.open(),o.write(kB(document.doctype)+"<html></html>"),WB(this.referenceElement.ownerDocument,n,B),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),i},xB.prototype.createElementClone=function(A){return FB(A)?this.createCanvasClone(A):nB(A)?this.createStyleClone(A):A.cloneNode(!1)},xB.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(A,e){return e&&"string"==typeof e.cssText?A+e.cssText:A},""),r=A.cloneNode(!1);return r.textContent=t,r}}catch(A){if(De.getInstance(this.options.id).error("Unable to access cssRules property",A),"SecurityError"!==A.name)throw A}return A.cloneNode(!1)},xB.prototype.createCanvasClone=function(A){if(this.options.inlineImages&&A.ownerDocument){var e=A.ownerDocument.createElement("img");try{return e.src=A.toDataURL(),e}catch(A){De.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted")}}var t=A.cloneNode(!1);try{t.width=A.width,t.height=A.height;var r=A.getContext("2d"),n=t.getContext("2d");return n&&(r?n.putImageData(r.getImageData(0,0,A.width,A.height),0,0):n.drawImage(A,0,0)),t}catch(A){}return t},xB.prototype.cloneNode=function(A){if(QB(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var e=A.ownerDocument.defaultView;if(uB(A)&&e){var t=this.createElementClone(A),r=e.getComputedStyle(A),n=e.getComputedStyle(A,":before"),B=e.getComputedStyle(A,":after");this.referenceElement===A&&(this.clonedReferenceElement=t),EB(t)&&$B(t);for(var s=this.counters.parse(new un(r)),o=this.resolvePseudoContent(A,t,n,LB.BEFORE),i=A.firstChild;i;i=i.nextSibling)wB(i)&&("SCRIPT"===i.tagName||i.hasAttribute(_B)||"function"==typeof this.options.ignoreElements&&this.options.ignoreElements(i))||this.options.copyStyles&&wB(i)&&nB(i)||t.appendChild(this.cloneNode(i));o&&t.insertBefore(o,t.firstChild);var a=this.resolvePseudoContent(A,t,B,LB.AFTER);return a&&t.appendChild(a),this.counters.pop(s),r&&this.options.copyStyles&&!HB(A)&&GB(r,t),0===A.scrollTop&&0===A.scrollLeft||this.scrolledElements.push([t,A.scrollLeft,A.scrollTop]),(dB(A)||fB(A))&&(dB(t)||fB(t))&&(t.value=A.value),t}return A.cloneNode(!1)},xB.prototype.resolvePseudoContent=function(U,A,e,t){var l=this;if(e){var r=e.content,C=A.ownerDocument;if(C&&r&&"none"!==r&&"-moz-alt-content"!==r&&"none"!==e.display){this.counters.parse(new un(e));var g=new wn(e),E=C.createElement("html2canvaspseudoelement");return GB(e,E),g.content.forEach(function(A){if(A.type===sA.STRING_TOKEN)E.appendChild(C.createTextNode(A.value));else if(A.type===sA.URL_TOKEN){var e=C.createElement("img");e.src=A.value,e.style.opacity="1",E.appendChild(e)}else if(A.type===sA.FUNCTION){if("attr"===A.name){var t=A.values.filter(zA);t.length&&E.appendChild(C.createTextNode(U.getAttribute(t[0].value)||""))}else if("counter"===A.name){var r=A.values.filter(kA),n=r[0],B=r[1];if(n&&zA(n)){var s=l.counters.getCounterValue(n.value),o=B&&zA(B)?ir.parse(B.value):tr.DECIMAL;E.appendChild(C.createTextNode(yB(s,o,!1)))}}else if("counters"===A.name){var i=A.values.filter(kA),a=(n=i[0],i[1]);if(B=i[2],n&&zA(n)){var c=l.counters.getCounterValues(n.value),Q=B&&zA(B)?ir.parse(B.value):tr.DECIMAL,w=a&&a.type===sA.STRING_TOKEN?a.value:"",u=c.map(function(A){return yB(A,Q,!1)}).join(w);E.appendChild(C.createTextNode(u))}}}else if(A.type===sA.IDENT_TOKEN)switch(A.value){case"open-quote":E.appendChild(C.createTextNode(en(g.quotes,l.quoteDepth++,!0)));break;case"close-quote":E.appendChild(C.createTextNode(en(g.quotes,--l.quoteDepth,!1)));break;default:E.appendChild(C.createTextNode(A.value))}}),E.className=qB+" "+ZB,A.className+=t===LB.BEFORE?" "+qB:" "+ZB,E}}},xB.destroy=function(A){return!!A.parentNode&&(A.parentNode.removeChild(A),!0)},xB);function xB(A,e){if(this.options=e,this.scrolledElements=[],this.referenceElement=A,this.counters=new pB,this.quoteDepth=0,!A.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(A.ownerDocument.documentElement)}(vB=LB||(LB={}))[vB.BEFORE=0]="BEFORE",vB[vB.AFTER=1]="AFTER";var VB,zB,XB=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(_B,"true"),A.body.appendChild(t),t},JB=function(n){return new Promise(function(e,A){var t=n.contentWindow;if(!t)return A("No window assigned for iframe");var r=t.document;t.onload=n.onload=r.onreadystatechange=function(){t.onload=n.onload=r.onreadystatechange=null;var A=setInterval(function(){0<r.body.childNodes.length&&"complete"===r.readyState&&(clearInterval(A),e(n))},50)}})},GB=function(A,e){for(var t=A.length-1;0<=t;t--){var r=A.item(t);"content"!==r&&e.style.setProperty(r,A.getPropertyValue(r))}return e},kB=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},WB=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},YB=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},qB="___html2canvas___pseudoelement_before",ZB="___html2canvas___pseudoelement_after",jB='{\n    content: "" !important;\n    display: none !important;\n}',$B=function(A){As(A,"."+qB+":before"+jB+"\n         ."+ZB+":after"+jB)},As=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}};(zB=VB||(VB={}))[zB.VECTOR=0]="VECTOR",zB[zB.BEZIER_CURVE=1]="BEZIER_CURVE";function es(A,t){return A.length===t.length&&A.some(function(A,e){return A===t[e]})}var ts=(rs.prototype.add=function(A,e){return new rs(this.x+A,this.y+e)},rs);function rs(A,e){this.type=VB.VECTOR,this.x=A,this.y=e}function ns(A,e,t){return new ts(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)}var Bs=(ss.prototype.subdivide=function(A,e){var t=ns(this.start,this.startControl,A),r=ns(this.startControl,this.endControl,A),n=ns(this.endControl,this.end,A),B=ns(t,r,A),s=ns(r,n,A),o=ns(B,s,A);return e?new ss(this.start,t,B,o):new ss(o,s,n,this.end)},ss.prototype.add=function(A,e){return new ss(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},ss.prototype.reverse=function(){return new ss(this.end,this.endControl,this.startControl,this.start)},ss);function ss(A,e,t,r){this.type=VB.BEZIER_CURVE,this.start=A,this.startControl=e,this.endControl=t,this.end=r}function os(A){return A.type===VB.BEZIER_CURVE}var is,as,cs=function(A){var e=A.styles,t=A.bounds,r=jA(e.borderTopLeftRadius,t.width,t.height),n=r[0],B=r[1],s=jA(e.borderTopRightRadius,t.width,t.height),o=s[0],i=s[1],a=jA(e.borderBottomRightRadius,t.width,t.height),c=a[0],Q=a[1],w=jA(e.borderBottomLeftRadius,t.width,t.height),u=w[0],U=w[1],l=[];l.push((n+o)/t.width),l.push((u+c)/t.width),l.push((B+U)/t.height),l.push((i+Q)/t.height);var C=Math.max.apply(Math,l);1<C&&(n/=C,B/=C,o/=C,i/=C,c/=C,Q/=C,u/=C,U/=C);var g=t.width-o,E=t.height-Q,F=t.width-c,h=t.height-U,H=e.borderTopWidth,d=e.borderRightWidth,f=e.borderBottomWidth,p=e.borderLeftWidth,N=ae(e.paddingTop,A.bounds.width),K=ae(e.paddingRight,A.bounds.width),I=ae(e.paddingBottom,A.bounds.width),T=ae(e.paddingLeft,A.bounds.width);this.topLeftBorderBox=0<n||0<B?us(t.left,t.top,n,B,is.TOP_LEFT):new ts(t.left,t.top),this.topRightBorderBox=0<o||0<i?us(t.left+g,t.top,o,i,is.TOP_RIGHT):new ts(t.left+t.width,t.top),this.bottomRightBorderBox=0<c||0<Q?us(t.left+F,t.top+E,c,Q,is.BOTTOM_RIGHT):new ts(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=0<u||0<U?us(t.left,t.top+h,u,U,is.BOTTOM_LEFT):new ts(t.left,t.top+t.height),this.topLeftPaddingBox=0<n||0<B?us(t.left+p,t.top+H,Math.max(0,n-p),Math.max(0,B-H),is.TOP_LEFT):new ts(t.left+p,t.top+H),this.topRightPaddingBox=0<o||0<i?us(t.left+Math.min(g,t.width+p),t.top+H,g>t.width+p?0:o-p,i-H,is.TOP_RIGHT):new ts(t.left+t.width-d,t.top+H),this.bottomRightPaddingBox=0<c||0<Q?us(t.left+Math.min(F,t.width-p),t.top+Math.min(E,t.height+H),Math.max(0,c-d),Q-f,is.BOTTOM_RIGHT):new ts(t.left+t.width-d,t.top+t.height-f),this.bottomLeftPaddingBox=0<u||0<U?us(t.left+p,t.top+h,Math.max(0,u-p),U-f,is.BOTTOM_LEFT):new ts(t.left+p,t.top+t.height-f),this.topLeftContentBox=0<n||0<B?us(t.left+p+T,t.top+H+N,Math.max(0,n-(p+T)),Math.max(0,B-(H+N)),is.TOP_LEFT):new ts(t.left+p+T,t.top+H+N),this.topRightContentBox=0<o||0<i?us(t.left+Math.min(g,t.width+p+T),t.top+H+N,g>t.width+p+T?0:o-p+T,i-(H+N),is.TOP_RIGHT):new ts(t.left+t.width-(d+K),t.top+H+N),this.bottomRightContentBox=0<c||0<Q?us(t.left+Math.min(F,t.width-(p+T)),t.top+Math.min(E,t.height+H+N),Math.max(0,c-(d+K)),Q-(f+I),is.BOTTOM_RIGHT):new ts(t.left+t.width-(d+K),t.top+t.height-(f+I)),this.bottomLeftContentBox=0<u||0<U?us(t.left+p+T,t.top+h,Math.max(0,u-(p+T)),U-(f+I),is.BOTTOM_LEFT):new ts(t.left+p+T,t.top+t.height-(f+I))};(as=is||(is={}))[as.TOP_LEFT=0]="TOP_LEFT",as[as.TOP_RIGHT=1]="TOP_RIGHT",as[as.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",as[as.BOTTOM_LEFT=3]="BOTTOM_LEFT";function Qs(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]}function ws(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]}var us=function(A,e,t,r,n){var B=(Math.sqrt(2)-1)/3*4,s=t*B,o=r*B,i=A+t,a=e+r;switch(n){case is.TOP_LEFT:return new Bs(new ts(A,a),new ts(A,a-o),new ts(i-s,e),new ts(i,e));case is.TOP_RIGHT:return new Bs(new ts(A,e),new ts(A+s,e),new ts(i,a-o),new ts(i,a));case is.BOTTOM_RIGHT:return new Bs(new ts(i,e),new ts(i,e+o),new ts(A+s,a),new ts(A,a));case is.BOTTOM_LEFT:default:return new Bs(new ts(i,a),new ts(i-s,a),new ts(A,e+o),new ts(A,e))}},Us=function(A,e,t){this.type=0,this.offsetX=A,this.offsetY=e,this.matrix=t,this.target=6},ls=function(A,e){this.type=1,this.target=e,this.path=A},Cs=function(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]},gs=(Es.prototype.getParentEffects=function(){var A=this.effects.slice(0);if(this.container.styles.overflowX!==sr.VISIBLE){var e=Qs(this.curves),t=ws(this.curves);es(e,t)||A.push(new ls(t,6))}return A},Es);function Es(A,e){if(this.container=A,this.effects=e.slice(0),this.curves=new cs(A),null!==A.styles.transform){var t=A.bounds.left+A.styles.transformOrigin[0].number,r=A.bounds.top+A.styles.transformOrigin[1].number,n=A.styles.transform;this.effects.push(new Us(t,r,n))}if(A.styles.overflowX!==sr.VISIBLE){var B=Qs(this.curves),s=ws(this.curves);es(B,s)?this.effects.push(new ls(B,6)):(this.effects.push(new ls(B,2)),this.effects.push(new ls(s,4)))}}function Fs(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))}function hs(A){var e=A.styles,t=A.bounds,r=ae(e.paddingLeft,t.width),n=ae(e.paddingRight,t.width),B=ae(e.paddingTop,t.width),s=ae(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,B+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+B+s))}function Hs(A,e,t){var r=function(A,e){return 0===A?e.bounds:2===A?hs(e):Fs(e)}(Ts(A.styles.backgroundOrigin,e),A),n=function(A,e){return A===Ee.BORDER_BOX?e.bounds:A===Ee.CONTENT_BOX?hs(e):Fs(e)}(Ts(A.styles.backgroundClip,e),A),B=Is(Ts(A.styles.backgroundSize,e),t,r),s=B[0],o=B[1],i=jA(Ts(A.styles.backgroundPosition,e),r.width-s,r.height-o);return[ms(Ts(A.styles.backgroundRepeat,e),i,B,r,n),Math.round(r.left+i[0]),Math.round(r.top+i[1]),s,o]}function ds(A){return zA(A)&&A.value===Ut.AUTO}function fs(A){return"number"==typeof A}var ps=function(c,Q,w,u){c.container.elements.forEach(function(A){var e=An(A.flags,4),t=An(A.flags,2),r=new gs(A,c.getParentEffects());An(A.styles.display,2048)&&u.push(r);var n=An(A.flags,8)?[]:u;if(e||t){var B=e||A.styles.isPositioned()?w:Q,s=new Cs(r);if(A.styles.isPositioned()||A.styles.opacity<1||A.styles.isTransformed()){var o=A.styles.zIndex.order;if(o<0){var i=0;B.negativeZIndex.some(function(A,e){return o>A.element.container.styles.zIndex.order?(i=e,!1):0<i}),B.negativeZIndex.splice(i,0,s)}else if(0<o){var a=0;B.positiveZIndex.some(function(A,e){return o>A.element.container.styles.zIndex.order?(a=e+1,!1):0<a}),B.positiveZIndex.splice(a,0,s)}else B.zeroOrAutoZIndexOrTransformedOrOpacity.push(s)}else A.styles.isFloating()?B.nonPositionedFloats.push(s):B.nonPositionedInlineLevel.push(s);ps(r,s,e?s:w,n)}else A.styles.isInlineLevel()?Q.inlineLevel.push(r):Q.nonInlineLevel.push(r),ps(r,Q,w,n);An(A.flags,8)&&Ns(A,n)})},Ns=function(A,e){for(var t=A instanceof Mn?A.start:1,r=A instanceof Mn&&A.reversed,n=0;n<e.length;n++){var B=e[n];B.container instanceof Dn&&"number"==typeof B.container.value&&0!==B.container.value&&(t=B.container.value),B.listValue=yB(t,B.container.styles.listStyleType,!0),t+=r?-1:1}},Ks=function(A,e,t,r){var n=[];return os(A)?n.push(A.subdivide(.5,!1)):n.push(A),os(t)?n.push(t.subdivide(.5,!0)):n.push(t),os(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),os(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},Is=function(A,e,t){var r=e[0],n=e[1],B=e[2],s=A[0],o=A[1];if(qA(s)&&o&&qA(o))return[ae(s,t.width),ae(o,t.height)];var i=fs(B);if(zA(s)&&(s.value===Ut.CONTAIN||s.value===Ut.COVER))return fs(B)?t.width/t.height<B!=(s.value===Ut.COVER)?[t.width,t.width/B]:[t.height*B,t.height]:[t.width,t.height];var a=fs(r),c=fs(n),Q=a||c;if(ds(s)&&(!o||ds(o)))return a&&c?[r,n]:i||Q?Q&&i?[a?r:n*B,c?n:r/B]:[a?r:t.width,c?n:t.height]:[t.width,t.height];if(i){var w=0,u=0;return qA(s)?w=ae(s,t.width):qA(o)&&(u=ae(o,t.height)),ds(s)?w=u*B:o&&!ds(o)||(u=w/B),[w,u]}var U=null,l=null;if(qA(s)?U=ae(s,t.width):o&&qA(o)&&(l=ae(o,t.height)),null===U||o&&!ds(o)||(l=a&&c?U/r*n:t.height),null!==l&&ds(s)&&(U=a&&c?l/n*r:t.width),null!==U&&null!==l)return[U,l];throw new Error("Unable to calculate background-size for element")},Ts=function(A,e){var t=A[e];return void 0===t?A[0]:t},ms=function(A,e,t,r,n){var B=e[0],s=e[1],o=t[0],i=t[1];switch(A){case it.REPEAT_X:return[new ts(Math.round(r.left),Math.round(r.top+s)),new ts(Math.round(r.left+r.width),Math.round(r.top+s)),new ts(Math.round(r.left+r.width),Math.round(i+r.top+s)),new ts(Math.round(r.left),Math.round(i+r.top+s))];case it.REPEAT_Y:return[new ts(Math.round(r.left+B),Math.round(r.top)),new ts(Math.round(r.left+B+o),Math.round(r.top)),new ts(Math.round(r.left+B+o),Math.round(r.height+r.top)),new ts(Math.round(r.left+B),Math.round(r.height+r.top))];case it.NO_REPEAT:return[new ts(Math.round(r.left+B),Math.round(r.top+s)),new ts(Math.round(r.left+B+o),Math.round(r.top+s)),new ts(Math.round(r.left+B+o),Math.round(r.top+s+i)),new ts(Math.round(r.left+B),Math.round(r.top+s+i))];default:return[new ts(Math.round(n.left),Math.round(n.top)),new ts(Math.round(n.left+n.width),Math.round(n.top)),new ts(Math.round(n.left+n.width),Math.round(n.height+n.top)),new ts(Math.round(n.left),Math.round(n.height+n.top))]}},Rs="Hidden Text",Ls=(vs.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),r=this._document.createElement("img"),n=this._document.createElement("span"),B=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",B.appendChild(t),r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",r.width=1,r.height=1,r.style.margin="0",r.style.padding="0",r.style.verticalAlign="baseline",n.style.fontFamily=A,n.style.fontSize=e,n.style.margin="0",n.style.padding="0",n.appendChild(this._document.createTextNode(Rs)),t.appendChild(n),t.appendChild(r);var s=r.offsetTop-n.offsetTop+2;t.removeChild(n),t.appendChild(this._document.createTextNode(Rs)),t.style.lineHeight="normal",r.style.verticalAlign="super";var o=r.offsetTop-t.offsetTop+2;return B.removeChild(t),{baseline:s,middle:o}},vs.prototype.getMetrics=function(A,e){var t=A+" "+e;return void 0===this._data[t]&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},vs);function vs(A){this._data={},this._document=A}var Os=(Ds.prototype.applyEffects=function(A,e){for(var t=this;this._activeEffects.length;)this.popEffect();A.filter(function(A){return An(A.target,e)}).forEach(function(A){return t.applyEffect(A)})},Ds.prototype.applyEffect=function(A){this.ctx.save(),function(A){return 0===A.type}(A)&&(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)),function(A){return 1===A.type}(A)&&(this.path(A.path),this.ctx.clip()),this._activeEffects.push(A)},Ds.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},Ds.prototype.renderStack=function(t){return a(this,void 0,void 0,function(){var e;return S(this,function(A){switch(A.label){case 0:return(e=t.element.container.styles).isVisible()?(this.ctx.globalAlpha=e.opacity,[4,this.renderStackContent(t)]):[3,2];case 1:A.sent(),A.label=2;case 2:return[2]}})})},Ds.prototype.renderNode=function(e){return a(this,void 0,void 0,function(){return S(this,function(A){switch(A.label){case 0:return e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(e)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},Ds.prototype.renderTextWithLetterSpacing=function(t,A){var r=this;0===A?this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+t.bounds.height):c(t.text).map(function(A){return l(A)}).reduce(function(A,e){return r.ctx.fillText(e,A,t.bounds.top+t.bounds.height),A+r.ctx.measureText(e).width},t.bounds.left)},Ds.prototype.createFontStyle=function(A){var e=A.fontVariant.filter(function(A){return"normal"===A||"small-caps"===A}).join(""),t=A.fontFamily.join(", "),r=xA(A.fontSize)?""+A.fontSize.number+A.fontSize.unit:A.fontSize.number+"px";return[[A.fontStyle,e,A.fontWeight,r,t].join(" "),t,r]},Ds.prototype.renderTextNode=function(r,o){return a(this,void 0,void 0,function(){var e,t,n,B,s=this;return S(this,function(A){return e=this.createFontStyle(o),t=e[0],n=e[1],B=e[2],this.ctx.font=t,r.textBounds.forEach(function(r){s.ctx.fillStyle=te(o.color),s.renderTextWithLetterSpacing(r,o.letterSpacing);var A=o.textShadow;A.length&&r.text.trim().length&&(A.slice(0).reverse().forEach(function(A){s.ctx.shadowColor=te(A.color),s.ctx.shadowOffsetX=A.offsetX.number*s.options.scale,s.ctx.shadowOffsetY=A.offsetY.number*s.options.scale,s.ctx.shadowBlur=A.blur.number,s.ctx.fillText(r.text,r.bounds.left,r.bounds.top+r.bounds.height)}),s.ctx.shadowColor="",s.ctx.shadowOffsetX=0,s.ctx.shadowOffsetY=0,s.ctx.shadowBlur=0),o.textDecorationLine.length&&(s.ctx.fillStyle=te(o.textDecorationColor||o.color),o.textDecorationLine.forEach(function(A){switch(A){case 1:var e=s.fontMetrics.getMetrics(n,B).baseline;s.ctx.fillRect(r.bounds.left,Math.round(r.bounds.top+e),r.bounds.width,1);break;case 2:s.ctx.fillRect(r.bounds.left,Math.round(r.bounds.top),r.bounds.width,1);break;case 3:var t=s.fontMetrics.getMetrics(n,B).middle;s.ctx.fillRect(r.bounds.left,Math.ceil(r.bounds.top+t),r.bounds.width,1)}}))}),[2]})})},Ds.prototype.renderReplacedElement=function(A,e,t){if(t&&0<A.intrinsicWidth&&0<A.intrinsicHeight){var r=hs(A),n=ws(e);this.path(n),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(t,0,0,A.intrinsicWidth,A.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},Ds.prototype.renderNodeContent=function(l){return a(this,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a,c,Q,w,u,U;return S(this,function(A){switch(A.label){case 0:this.applyEffects(l.effects,4),e=l.container,t=l.curves,r=e.styles,n=0,B=e.textNodes,A.label=1;case 1:return n<B.length?(s=B[n],[4,this.renderTextNode(s,r)]):[3,4];case 2:A.sent(),A.label=3;case 3:return n++,[3,1];case 4:if(!(e instanceof Nn))return[3,8];A.label=5;case 5:return A.trys.push([5,7,,8]),[4,this.options.cache.match(e.src)];case 6:return w=A.sent(),this.renderReplacedElement(e,t,w),[3,8];case 7:return A.sent(),De.getInstance(this.options.id).error("Error loading image "+e.src),[3,8];case 8:if(e instanceof Tn&&this.renderReplacedElement(e,t,e.canvas),!(e instanceof Ln))return[3,12];A.label=9;case 9:return A.trys.push([9,11,,12]),[4,this.options.cache.match(e.svg)];case 10:return w=A.sent(),this.renderReplacedElement(e,t,w),[3,12];case 11:return A.sent(),De.getInstance(this.options.id).error("Error loading svg "+e.svg.substring(0,255)),[3,12];case 12:return e instanceof tB&&e.tree?[4,new Ds({id:this.options.id,scale:this.options.scale,backgroundColor:e.backgroundColor,x:0,y:0,scrollX:0,scrollY:0,width:e.width,height:e.height,cache:this.options.cache,windowWidth:e.width,windowHeight:e.height}).render(e.tree)]:[3,14];case 13:o=A.sent(),e.width&&e.height&&this.ctx.drawImage(o,0,0,e.width,e.height,e.bounds.left,e.bounds.top,e.bounds.width,e.bounds.height),A.label=14;case 14:if(e instanceof Gn&&(i=Math.min(e.bounds.width,e.bounds.height),e.type===Vn?e.checked&&(this.ctx.save(),this.path([new ts(e.bounds.left+.39363*i,e.bounds.top+.79*i),new ts(e.bounds.left+.16*i,e.bounds.top+.5549*i),new ts(e.bounds.left+.27347*i,e.bounds.top+.44071*i),new ts(e.bounds.left+.39694*i,e.bounds.top+.5649*i),new ts(e.bounds.left+.72983*i,e.bounds.top+.23*i),new ts(e.bounds.left+.84*i,e.bounds.top+.34085*i),new ts(e.bounds.left+.39363*i,e.bounds.top+.79*i)]),this.ctx.fillStyle=te(Jn),this.ctx.fill(),this.ctx.restore()):e.type===zn&&e.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(e.bounds.left+i/2,e.bounds.top+i/2,i/4,0,2*Math.PI,!0),this.ctx.fillStyle=te(Jn),this.ctx.fill(),this.ctx.restore())),bs(e)&&e.value.length){switch(this.ctx.font=this.createFontStyle(r)[0],this.ctx.fillStyle=te(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign=Ms(e.styles.textAlign),U=hs(e),a=0,e.styles.textAlign){case Cr.CENTER:a+=U.width/2;break;case Cr.RIGHT:a+=U.width}c=U.add(a,0,0,-U.height/2+1),this.ctx.save(),this.path([new ts(U.left,U.top),new ts(U.left+U.width,U.top),new ts(U.left+U.width,U.top+U.height),new ts(U.left,U.top+U.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Cn(e.value,c),r.letterSpacing),this.ctx.restore(),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"}if(!An(e.styles.display,2048))return[3,20];if(null===e.styles.listStyleImage)return[3,19];if((Q=e.styles.listStyleImage).type!==xe.URL)return[3,18];w=void 0,u=Q.url,A.label=15;case 15:return A.trys.push([15,17,,18]),[4,this.options.cache.match(u)];case 16:return w=A.sent(),this.ctx.drawImage(w,e.bounds.left-(w.width+10),e.bounds.top),[3,18];case 17:return A.sent(),De.getInstance(this.options.id).error("Error loading list-style-image "+u),[3,18];case 18:return[3,20];case 19:l.listValue&&e.styles.listStyleType!==tr.NONE&&(this.ctx.font=this.createFontStyle(r)[0],this.ctx.fillStyle=te(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",U=new I(e.bounds.left,e.bounds.top+ae(e.styles.paddingTop,e.bounds.width),e.bounds.width,function(A,e){return zA(A)&&"normal"===A.value?1.2*e:A.type===sA.NUMBER_TOKEN?e*A.number:qA(A)?ae(A,e):e}(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Cn(l.listValue,U),r.letterSpacing),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),A.label=20;case 20:return[2]}})})},Ds.prototype.renderStackContent=function(C){return a(this,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a,c,Q,w,u,U,l;return S(this,function(A){switch(A.label){case 0:return[4,this.renderNodeBackgroundAndBorders(C.element)];case 1:A.sent(),e=0,t=C.negativeZIndex,A.label=2;case 2:return e<t.length?(l=t[e],[4,this.renderStack(l)]):[3,5];case 3:A.sent(),A.label=4;case 4:return e++,[3,2];case 5:return[4,this.renderNodeContent(C.element)];case 6:A.sent(),r=0,n=C.nonInlineLevel,A.label=7;case 7:return r<n.length?(l=n[r],[4,this.renderNode(l)]):[3,10];case 8:A.sent(),A.label=9;case 9:return r++,[3,7];case 10:B=0,s=C.nonPositionedFloats,A.label=11;case 11:return B<s.length?(l=s[B],[4,this.renderStack(l)]):[3,14];case 12:A.sent(),A.label=13;case 13:return B++,[3,11];case 14:o=0,i=C.nonPositionedInlineLevel,A.label=15;case 15:return o<i.length?(l=i[o],[4,this.renderStack(l)]):[3,18];case 16:A.sent(),A.label=17;case 17:return o++,[3,15];case 18:a=0,c=C.inlineLevel,A.label=19;case 19:return a<c.length?(l=c[a],[4,this.renderNode(l)]):[3,22];case 20:A.sent(),A.label=21;case 21:return a++,[3,19];case 22:Q=0,w=C.zeroOrAutoZIndexOrTransformedOrOpacity,A.label=23;case 23:return Q<w.length?(l=w[Q],[4,this.renderStack(l)]):[3,26];case 24:A.sent(),A.label=25;case 25:return Q++,[3,23];case 26:u=0,U=C.positiveZIndex,A.label=27;case 27:return u<U.length?(l=U[u],[4,this.renderStack(l)]):[3,30];case 28:A.sent(),A.label=29;case 29:return u++,[3,27];case 30:return[2]}})})},Ds.prototype.mask=function(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath()},Ds.prototype.path=function(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()},Ds.prototype.formatPath=function(A){var r=this;A.forEach(function(A,e){var t=os(A)?A.start:A;0===e?r.ctx.moveTo(t.x,t.y):r.ctx.lineTo(t.x,t.y),os(A)&&r.ctx.bezierCurveTo(A.startControl.x,A.startControl.y,A.endControl.x,A.endControl.y,A.end.x,A.end.y)})},Ds.prototype.renderRepeat=function(A,e,t,r){this.path(A),this.ctx.fillStyle=e,this.ctx.translate(t,r),this.ctx.fill(),this.ctx.translate(-t,-r)},Ds.prototype.resizeImage=function(A,e,t){if(A.width===e&&A.height===t)return A;var r=this.canvas.ownerDocument.createElement("canvas");return r.width=e,r.height=t,r.getContext("2d").drawImage(A,0,0,A.width,A.height,0,0,e,t),r},Ds.prototype.renderBackgroundImage=function(b){return a(this,void 0,void 0,function(){var O,e,D,t,r,n;return S(this,function(A){switch(A.label){case 0:O=b.styles.backgroundImage.length-1,e=function(e){var t,r,n,B,s,o,i,a,c,Q,w,u,U,l,C,g,E,F,h,H,d,f,p,N,K,I,T,m,R,L,v;return S(this,function(A){switch(A.label){case 0:if(e.type!==xe.URL)return[3,5];t=void 0,r=e.url,A.label=1;case 1:return A.trys.push([1,3,,4]),[4,D.options.cache.match(r)];case 2:return t=A.sent(),[3,4];case 3:return A.sent(),De.getInstance(D.options.id).error("Error loading background-image "+r),[3,4];case 4:return t&&(n=Hs(b,O,[t.width,t.height,t.width/t.height]),g=n[0],f=n[1],p=n[2],h=n[3],H=n[4],l=D.ctx.createPattern(D.resizeImage(t,h,H),"repeat"),D.renderRepeat(g,l,f,p)),[3,6];case 5:!function(A){return A.type===xe.LINEAR_GRADIENT}(e)?function(A){return A.type===xe.RADIAL_GRADIENT}(e)&&(C=Hs(b,O,[null,null,null]),g=C[0],E=C[1],F=C[2],h=C[3],H=C[4],d=0===e.position.length?[oe]:e.position,f=ae(d[0],h),p=ae(d[d.length-1],H),N=function(A,e,t,r,n){var B=0,s=0;switch(A.size){case Bt.CLOSEST_SIDE:A.shape===rt.CIRCLE?B=s=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===rt.ELLIPSE&&(B=Math.min(Math.abs(e),Math.abs(e-r)),s=Math.min(Math.abs(t),Math.abs(t-n)));break;case Bt.CLOSEST_CORNER:if(A.shape===rt.CIRCLE)B=s=Math.min(Ne(e,t),Ne(e,t-n),Ne(e-r,t),Ne(e-r,t-n));else if(A.shape===rt.ELLIPSE){var o=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),i=Ke(r,n,e,t,!0),a=i[0],c=i[1];s=o*(B=Ne(a-e,(c-t)/o))}break;case Bt.FARTHEST_SIDE:A.shape===rt.CIRCLE?B=s=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===rt.ELLIPSE&&(B=Math.max(Math.abs(e),Math.abs(e-r)),s=Math.max(Math.abs(t),Math.abs(t-n)));break;case Bt.FARTHEST_CORNER:if(A.shape===rt.CIRCLE)B=s=Math.max(Ne(e,t),Ne(e,t-n),Ne(e-r,t),Ne(e-r,t-n));else if(A.shape===rt.ELLIPSE){o=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r));var Q=Ke(r,n,e,t,!1);a=Q[0],c=Q[1],s=o*(B=Ne(a-e,(c-t)/o))}}return Array.isArray(A.size)&&(B=ae(A.size[0],r),s=2===A.size.length?ae(A.size[1],n):B),[B,s]}(e,f,p,h,H),K=N[0],I=N[1],0<K&&0<K&&(T=D.ctx.createRadialGradient(E+f,F+p,0,E+f,F+p,K),fe(e.stops,2*K).forEach(function(A){return T.addColorStop(A.stop,te(A.color))}),D.path(g),D.ctx.fillStyle=T,K!==I?(m=b.bounds.left+.5*b.bounds.width,R=b.bounds.top+.5*b.bounds.height,v=1/(L=I/K),D.ctx.save(),D.ctx.translate(m,R),D.ctx.transform(1,0,0,L,0,0),D.ctx.translate(-m,-R),D.ctx.fillRect(E,v*(F-R)+R,h,H*v),D.ctx.restore()):D.ctx.fill())):(B=Hs(b,O,[null,null,null]),g=B[0],f=B[1],p=B[2],h=B[3],H=B[4],s=pe(e.angle,h,H),o=s[0],i=s[1],a=s[2],c=s[3],Q=s[4],(w=document.createElement("canvas")).width=h,w.height=H,u=w.getContext("2d"),U=u.createLinearGradient(i,c,a,Q),fe(e.stops,o).forEach(function(A){return U.addColorStop(A.stop,te(A.color))}),u.fillStyle=U,u.fillRect(0,0,h,H),0<h&&0<H&&(l=D.ctx.createPattern(w,"repeat"),D.renderRepeat(g,l,f,p))),A.label=6;case 6:return O--,[2]}})},D=this,t=0,r=b.styles.backgroundImage.slice(0).reverse(),A.label=1;case 1:return t<r.length?(n=r[t],[5,e(n)]):[3,4];case 2:A.sent(),A.label=3;case 3:return t++,[3,1];case 4:return[2]}})})},Ds.prototype.renderBorder=function(e,t,r){return a(this,void 0,void 0,function(){return S(this,function(A){return this.path(function(A,e){switch(e){case 0:return Ks(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return Ks(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return Ks(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return Ks(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}}(r,t)),this.ctx.fillStyle=te(e),this.ctx.fill(),[2]})})},Ds.prototype.renderNodeBackgroundAndBorders=function(c){return a(this,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a=this;return S(this,function(A){switch(A.label){case 0:return this.applyEffects(c.effects,2),e=c.container.styles,t=!ee(e.backgroundColor)||e.backgroundImage.length,r=[{style:e.borderTopStyle,color:e.borderTopColor},{style:e.borderRightStyle,color:e.borderRightColor},{style:e.borderBottomStyle,color:e.borderBottomColor},{style:e.borderLeftStyle,color:e.borderLeftColor}],n=Ss(Ts(e.backgroundClip,0),c.curves),t||e.boxShadow.length?(this.ctx.save(),this.path(n),this.ctx.clip(),ee(e.backgroundColor)||(this.ctx.fillStyle=te(e.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(c.container)]):[3,2];case 1:A.sent(),this.ctx.restore(),e.boxShadow.slice(0).reverse().forEach(function(A){a.ctx.save();var e=Qs(c.curves),t=A.inset?0:1e4,r=function(A,t,r,n,B){return A.map(function(A,e){switch(e){case 0:return A.add(t,r);case 1:return A.add(t+n,r);case 2:return A.add(t+n,r+B);case 3:return A.add(t,r+B)}return A})}(e,-t+(A.inset?1:-1)*A.spread.number,(A.inset?1:-1)*A.spread.number,A.spread.number*(A.inset?-2:2),A.spread.number*(A.inset?-2:2));A.inset?(a.path(e),a.ctx.clip(),a.mask(r)):(a.mask(e),a.ctx.clip(),a.path(r)),a.ctx.shadowOffsetX=A.offsetX.number+t,a.ctx.shadowOffsetY=A.offsetY.number,a.ctx.shadowColor=te(A.color),a.ctx.shadowBlur=A.blur.number,a.ctx.fillStyle=A.inset?te(A.color):"rgba(0,0,0,1)",a.ctx.fill(),a.ctx.restore()}),A.label=2;case 2:s=B=0,o=r,A.label=3;case 3:return s<o.length?(i=o[s]).style===ht.NONE||ee(i.color)?[3,5]:[4,this.renderBorder(i.color,B,c.curves)]:[3,7];case 4:A.sent(),A.label=5;case 5:B++,A.label=6;case 6:return s++,[3,3];case 7:return[2]}})})},Ds.prototype.render=function(t){return a(this,void 0,void 0,function(){var e;return S(this,function(A){switch(A.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=te(this.options.backgroundColor),this.ctx.fillRect(this.options.x-this.options.scrollX,this.options.y-this.options.scrollY,this.options.width,this.options.height)),e=function(A){var e=new gs(A,[]),t=new Cs(e),r=[];return ps(e,t,t,r),Ns(e.container,r),t}(t),[4,this.renderStack(e)];case 1:return A.sent(),this.applyEffects([],2),[2,this.canvas]}})})},Ds);function Ds(A){this._activeEffects=[],this.canvas=A.canvas?A.canvas:document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),(this.options=A).canvas||(this.canvas.width=Math.floor(A.width*A.scale),this.canvas.height=Math.floor(A.height*A.scale),this.canvas.style.width=A.width+"px",this.canvas.style.height=A.height+"px"),this.fontMetrics=new Ls(document),this.ctx.scale(this.options.scale,this.options.scale),this.ctx.translate(-A.x+A.scrollX,-A.y+A.scrollY),this.ctx.textBaseline="bottom",this._activeEffects=[],De.getInstance(A.id).debug("Canvas renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale)}var bs=function(A){return A instanceof jn||(A instanceof Yn||A instanceof Gn&&A.type!==zn&&A.type!==Vn)},Ss=function(A,e){switch(A){case Ee.BORDER_BOX:return Qs(e);case Ee.CONTENT_BOX:return function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]}(e);case Ee.PADDING_BOX:default:return ws(e)}},Ms=function(A){switch(A){case Cr.CENTER:return"center";case Cr.RIGHT:return"right";case Cr.LEFT:default:return"left"}},ys=(_s.prototype.render=function(r){return a(this,void 0,void 0,function(){var e,t;return S(this,function(A){switch(A.label){case 0:return e=Le(Math.max(this.options.windowWidth,this.options.width)*this.options.scale,Math.max(this.options.windowHeight,this.options.height)*this.options.scale,this.options.scrollX*this.options.scale,this.options.scrollY*this.options.scale,r),[4,xs(e)];case 1:return t=A.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=te(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(t,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},_s);function _s(A){this.canvas=A.canvas?A.canvas:document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.options=A,this.canvas.width=Math.floor(A.width*A.scale),this.canvas.height=Math.floor(A.height*A.scale),this.canvas.style.width=A.width+"px",this.canvas.style.height=A.height+"px",this.ctx.scale(this.options.scale,this.options.scale),this.ctx.translate(-A.x+A.scrollX,-A.y+A.scrollY),De.getInstance(A.id).debug("EXPERIMENTAL ForeignObject renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale)}function Ps(A){return we(_A.create(A).parseComponentValue())}var xs=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})};Se.setContext(window);var Vs=function(p,N){return a(void 0,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a,c,Q,w,u,U,l,C,g,E,F,h,H,d,f;return S(this,function(A){switch(A.label){case 0:if(!(e=p.ownerDocument))throw new Error("Element is not attached to a Document");if(!(t=e.defaultView))throw new Error("Document is not attached to a Window");return r=(Math.round(1e3*Math.random())+Date.now()).toString(16),n=EB(p)||function(A){return"HTML"===A.tagName}(p)?function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new I(0,0,r,n)}(e):T(p),B=n.width,s=n.height,o=n.left,i=n.top,a=K({},{allowTaint:!1,imageTimeout:15e3,proxy:void 0,useCORS:!1},N),c={backgroundColor:"#ffffff",cache:N.cache?N.cache:Se.create(r,a),logging:!0,removeContainer:!0,foreignObjectRendering:!1,scale:t.devicePixelRatio||1,windowWidth:t.innerWidth,windowHeight:t.innerHeight,scrollX:t.pageXOffset,scrollY:t.pageYOffset,x:o,y:i,width:Math.ceil(B),height:Math.ceil(s),id:r},Q=K({},c,a,N),w=new I(Q.scrollX,Q.scrollY,Q.windowWidth,Q.windowHeight),De.create({id:r,enabled:Q.logging}),De.getInstance(r).debug("Starting document clone"),u=new PB(p,{id:r,onclone:Q.onclone,ignoreElements:Q.ignoreElements,inlineImages:Q.foreignObjectRendering,copyStyles:Q.foreignObjectRendering}),(U=u.clonedReferenceElement)?[4,u.toIFrame(e,w)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return l=A.sent(),C=e.documentElement?Ps(getComputedStyle(e.documentElement).backgroundColor):He.TRANSPARENT,g=e.body?Ps(getComputedStyle(e.body).backgroundColor):He.TRANSPARENT,E=N.backgroundColor,F="string"==typeof E?Ps(E):null===E?He.TRANSPARENT:4294967295,h=p===e.documentElement?ee(C)?ee(g)?F:g:C:F,H={id:r,cache:Q.cache,canvas:Q.canvas,backgroundColor:h,scale:Q.scale,x:Q.x,y:Q.y,scrollX:Q.scrollX,scrollY:Q.scrollY,width:Q.width,height:Q.height,windowWidth:Q.windowWidth,windowHeight:Q.windowHeight},Q.foreignObjectRendering?(De.getInstance(r).debug("Document cloned, using foreign object rendering"),[4,new ys(H).render(U)]):[3,3];case 2:return d=A.sent(),[3,5];case 3:return De.getInstance(r).debug("Document cloned, using computed rendering"),Se.attachInstance(Q.cache),De.getInstance(r).debug("Starting DOM parsing"),f=iB(U),Se.detachInstance(),h===f.styles.backgroundColor&&(f.styles.backgroundColor=He.TRANSPARENT),De.getInstance(r).debug("Starting renderer"),[4,new Os(H).render(f)];case 4:d=A.sent(),A.label=5;case 5:return!0===Q.removeContainer&&(PB.destroy(l)||De.getInstance(r).error("Cannot detach cloned iframe as it is not in the DOM anymore")),De.getInstance(r).debug("Finished rendering"),De.destroy(r),Se.destroy(r),[2,d]}})})};return function(A,e){return void 0===e&&(e={}),Vs(A,e)}});var textOn = true;
var presentationMode = false;

// when the yapnews div gets resized, center the map
if(document.getElementById("yapnews")) {
	document.getElementById("yapnews").addEventListener("transitionend",
	function() {
		MapManager.centerMap();
	});
}

function enableFullscreen() {
	var el = document.documentElement;
	rfs = el.requestFullScreen ||
		el.webkitRequestFullScreen ||
		el.mozRequestFullScreen ||
		el.msRequestFullScreen;
	
	if(typeof rfs !== 'undefined') {
		rfs.call(el);
	}
}

function displayCandidateEditMenu(candidate) {
	closeAllPopups();
	var candidateedit = document.getElementById('candidateedit');
	candidateedit.style.display = 'flex';
	var nameinput = document.getElementById('candidate-name');
	nameinput.value = candidate;
	var solidinput = document.getElementById('candidate-solid');
	solidinput.value = CandidateManager.candidates[candidate].colors[0];
	var likelyinput = document.getElementById('candidate-likely');
	likelyinput.value = CandidateManager.candidates[candidate].colors[1];
	var leaninput = document.getElementById('candidate-lean');
	leaninput.value = CandidateManager.candidates[candidate].colors[2];
	var tiltinput = document.getElementById('candidate-tilt');
	tiltinput.value = CandidateManager.candidates[candidate].colors[3];
	var hiddeninput = document.getElementById('candidate-originalName');
	var message = document.getElementById('candidateedit-message');
	message.innerHTML = 'Edit ' + candidate;
	hiddeninput.value = candidate;
}

function displayUpdateServiceWorker() {
	var notification = document.getElementById('notification-update-serviceworker');
	notification.style.display = 'inline';
}

function displayNotification(title, text) {
	var notification = document.getElementById('notification');
	var messageHTML = notification.querySelector('#notification-message');
	var titleHTML = notification.querySelector('#notification-title');
	notification.style.display = 'inline';
	messageHTML.innerHTML = text;
	titleHTML.innerHTML = title;
}

function displayAddCandidateMenu(type) {
	CookieManager.loadCustomColors();
	closeAllPopups();
	var addcandidatemenu = document.getElementById('addcandidatemenu');
	addcandidatemenu.style.display = 'flex';
}

function closeAllPopups() {
	var popups = document.getElementsByClassName('popup');
	for(var index = 0; index < popups.length; ++index) {
		var popup = popups[index];
		if(popup.style) {
			popup.style.display = 'none';
		}
	}
}

function displayCustomColorMenu(type) {
	closeAllPopups();
	var customColorName = document.getElementById('custom-color-name');
	customColorName.value = type;
	var miscmenu = document.getElementById('customcolormenu');
	miscmenu.style.display = 'flex';
	document.getElementById("solidcustom").value = CookieManager.cookies[type + 'solid'];
	document.getElementById("likelycustom").value = CookieManager.cookies[type + 'likely'];
	document.getElementById("leaningcustom").value = CookieManager.cookies[type + 'leaning'];
	document.getElementById("tiltingcustom").value = CookieManager.cookies[type + 'tilting'];
}

function setPalette(palette, setCookie) {
	if(setCookie) {
		CookieManager.appendCookie('theme', palette);
	}

	switch(palette) {
		case 'dark':
			darkPalette();
			break;
		case 'greyscale':
			greyscalePalette();
			break;
		case 'light':
			lightPalette();
			break;
		case 'terminal':
			terminalPalette();
			break;
		case 'contrast':
			contrastPalette();
			break;
		case 'metallic':
			metallicPalette();
			break;
		case 'halloween':
			halloweenPalette();
			break;
		case 'default':
			toWinPalette();
			break;
		default:
			toWinPalette();
			break;
	}
}

function darkPalette() {
	setBackgroundColor('#181922');

	setOtherText('white');

	setDisableColor('#212326');
	setTossupColor('#6b6e73');
	setMapStyle('#181922', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#2b2e33');
	setChartBarColor('#2b2e33');
	setChartBarShadow('');
	
	setClickButtonColor('#2b2e33');
	setClickButtonColor('#2B2E33');
	setClickButtonTextColor('#FFFFFF');
	setMenuColor('#000000');
	
	setSideBarColor('#808080');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#777777');

	setBorderStyle('#000000', 7.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = darkPalette;
}

function greyscalePalette() {
	setBackgroundColor('#252525');
	
	setOtherText('white');

	setDisableColor('#212326');
	setTossupColor('#888888');
	setMapStyle('#181922', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#1b1b1b');
	setChartBarColor('#454545');
	setChartBarShadow('');
	
	setClickButtonColor('#454545');
	setClickButtonTextColor('#FFFFFF');
	setMenuColor('#101010');
	
	setSideBarColor('#808080');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#777777');

	setBorderStyle('#252525', 7.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = darkPalette;
}

function terminalPalette() {
	setBackgroundColor('#000000');

	setOtherText('white');

	setDisableColor('#bcc8d9');
	setTossupColor('black');
	setChartBorderStyle(2, '#ffffff');
	setTextStyle('white', 'bold');
	setMapStyle('white', 1.5);
	setChartBarColor('black');
	setChartBarShadow('');

	setClickButtonColor('#000000');
	setClickButtonTextColor('#ffffff');
	setMenuColor('#eeeeee');
	
	setSideBarColor('#eeeeee');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#cccccc');
	
	setBorderStyle('#ffffff', 6.0);
	
	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;
	
	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = terminalPalette;
}

function lightPalette() {
	setBackgroundColor('#dcdcdc');
	
	setOtherText('black');

	setDisableColor('#212326');
	setTossupColor('#696969');
	setMapStyle('#dcdcdc', 1.5);

	setChartBarColor('#3b3e43');
	setChartBarShadow('');

	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#3b3e43');
	
	setClickButtonColor('#3b3e43');
	setClickButtonTextColor('white');
	setMenuColor('#000000');
	
	setSideBarColor('#dcdcdc');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#cccccc');
	
	setBorderStyle('#000000', 6.0);
	
	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;
	
	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = lightPalette;
}

function contrastPalette() {
	setBackgroundColor('#f8f9fa');

	setOtherText('black');

	setDisableColor('#212326');
	setTossupColor('#36454f');
	setMapStyle('#f8f9fa', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#fafafa');
	setChartBarColor('#fafafa');
	setChartBarShadow('');

	setClickButtonColor('#fafafa');
	setClickButtonTextColor('#000000');
	setMenuColor('#222222');
	
	setSideBarColor('#f8f9fa');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#cccccc');
	
	setBorderStyle('#f8f9fa', 6.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#000000';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#000000';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = contrastPalette;
}

function metallicPalette() {
	setBackgroundImage('linear-gradient(#696969, #33353b)');
	
	setOtherText('white');
	
	setDisableColor('#212326');
	setTossupColor('#808080');
	setMapStyle('black', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#33353b');
	setChartBarColor('#33353b');
	setChartBarShadow('');
	
	setClickButtonColor('#33353b');
	setClickButtonTextColor('#FFFFFF');
	setMenuColor('black');
	
	setSideBarColor('#848482');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#666666');
	
	setBorderStyle('#000000', 6.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 2;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 4;
	
	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = metallicPalette;
}

function halloweenPalette() {
	setBackgroundImage('url("./res/images/halloween.jpg")');

	setOtherText('#ffffff');

	setDisableColor('#dddddd');
	setTossupColor('#928e85');
	setMapStyle('#000000', 1.25);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#000000');
	setChartBarColor('#060606');
	setChartBarShadow('0px -5px 5px 2px #060606');

	setSideBarColor('#9c9b98');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#666666');
	
	setClickButtonColor('#060606');
	setClickButtonTextColor('#ffffff');
	setMenuColor('#928e85');
	setBorderStyle('#ffffff', 6.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 0;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 2;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = halloweenPalette;
}

function toWinPalette() {
	setBackgroundColor('#f8f9fa');

	setOtherText('black');

	setDisableColor('#dddddd');
	setTossupColor('#9E8767');
	setMapStyle('#fffbf2', 1);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#fafafa');
	setChartBarColor('#fafafa');
	setChartBarShadow('');
	
	setClickButtonColor('#fafafa');
	setClickButtonTextColor('#000000');
	setMenuColor('#000000');
	
	setSideBarColor('#f8f9fa');
	setSideBarTextStyle('#000000');
	setSideBarH3Border('#cccccc');

	setBorderStyle('#f8f9fa', 6.0);

	ChartManager.chartOptions.plugins.datalabels.borderWidth = 0;
	ChartManager.chartOptions.plugins.datalabels.borderRadius = 2;

	ChartManager.chartBarScales.yAxes[0].ticks.fontColor = '#000000';
	ChartManager.chartBarScales.xAxes[0].ticks.fontColor = '#000000';
	ChartManager.setChart(ChartManager.chartType, ChartManager.chartPosition);
	countVotes();
	MapManager.verifyMap();
	previousPalette = toWinPalette;
}

function setOtherText(color) {
	var text = document.getElementById('othertext');
	if(text) {
		text.setAttribute('fill', color);
	}
}

function setBackgroundImage(img) {
	var body = document.getElementById('application');
	body.style.backgroundColor = '';
	body.style.backgroundImage = img;
}

function setBackgroundColor(color) {
	var body = document.getElementById('application');
	body.style.background = color;
	body.style.backgroundImage = '';
}

function setChartBorderStyle(width, color) {
	ChartManager.chartBorderWidth = width;
	ChartManager.chartBorderColor = color;

	var battlechart = document.getElementById('battlechartright');
	battlechart.style.border = '1px solid ' + color;	
	ChartManager.updateChart();

	var legenddiv = document.getElementById('legend-div');
	legenddiv.style.borderColor = color;
}

function setMenuColor(color) {
	var menu = document.getElementById('menu-div');
	menu.style.backgroundColor = color;
	var clickButtons = document.getElementsByClassName('click-button');
	for(var index = 0; index < clickButtons.length; ++index) {
		button = clickButtons[index];
		button.style.borderColor = color;
	}
}

function setMenuImage(image) {
	var menu = document.getElementById('menu-div');
	menu.style.backgroundImage = image;
	menu.style.backgroundSize = 'contain';
}

function setClickButtonTextColor(color) {
	var clickButtons = document.getElementsByClassName('click-button');
	for(var index = 0; index < clickButtons.length; ++index) {
		button = clickButtons[index];
		button.style.color = color;
	}
}

function setClickButtonColor(color) {
	var clickButtons = document.getElementsByClassName('click-button');
	for(var index = 0; index < clickButtons.length; ++index) {
		button = clickButtons[index];
		button.style.backgroundColor = color;
	}
}

function setDisableColor(color) {
	CandidateManager.TOSSUP.colors[1] = color;
}

function setTossupColor(color) {
	CandidateManager.TOSSUP.colors[2] = color;
	var tossupText = document.getElementById('Tossup-text');
	tossupText.style.backgroundColor = color;
	var addCandidateButton = document.getElementById('addcandidate-button-text');
	addCandidateButton.style.backgroundColor = color;
}

function setMapStyle(color, strokeWidth) {
	var outlines = document.getElementById('outlines');
	outlines.style.stroke = color;
	outlines.style.strokeWidth = strokeWidth * strokeMultiplier;

	var proportional = document.getElementById('proportional');
	if(proportional) {
		proportional.style.stroke = color;
		proportional.style.strokeWidth = strokeWidth * strokeMultiplier;
	}

	var special = document.getElementById('special');
	if(special != null) {
		special.style.stroke = color;
		special.style.strokeWidth = strokeWidth * strokeMultiplier;
	}
}

function setBorderStyle(color, strokeWidth) {
	var border = document.getElementById('*lines*');
	if(border !== null) {
		border.style.stroke = color;
		border.style.strokeWidth = strokeWidth * strokeMultiplier;
	}
}

function setSideBarColor(color) {
	var sidebar = document.getElementById('sidebar');
	if(sidebar) {

	} else {
		return;
	}

	sidebar.style.background = color;
}

function setSideBarTextStyle(color) {
	var sidebar = document.getElementById('sidebar');
	if(sidebar) {

	} else {
		return;
	}
	sidebar.style.color = color;
}

function setSideBarSocialOutline(color, width) {
	var sidebar = document.getElementById('sidebar');
	if(sidebar) {
		var elements = sidebar.querySelectorAll(".sidebar-button");
		for(var index = 0; index < elements.length; ++index) {
			var element = elements[index];
			element.style.borderColor = color;
			element.style.borderWidth = width;
		}
	}
}

function setSideBarH3Border(color) {
	var sidebar = document.getElementById('sidebar');
	if(sidebar) {
		var elements = sidebar.querySelectorAll(".sidebar-box h3");
		for(var index = 0; index < elements.length; ++index) {
			var h3 = elements[index];
			h3.style.borderBottom = '1px solid ' + color;
		}
	}
}

function setChartBarColor(color) {
	var sidebar = document.getElementById('chart-div');
	sidebar.style.background = color;
}

function setChartBarShadow(shadow) {
	var sidebar = document.getElementById('chart-div');
	sidebar.style.boxShadow = shadow;
}

function setTextStyle(color, weight) {
	var text = document.getElementById('text');
	if(text !== null) {
		text.style.strokeWidth = 0;
		text.style.fontWeight = weight;
		text.style.fill = color;
		text.style.textAlign = 'center';
		
		for(key in text.children) {
			var child = text.children[key];
			try {
				child.setAttribute('text-anchor', 'middle');
				child.setAttribute('alignment-baseline', 'central');
			} catch(e) {

			}
		} 
	}

	var battlechart = document.getElementById('battlechart');
	battlechart.style.color = color;
	battlechart.style.fontWeight = weight;

	var legenddiv = document.getElementById('legend-div');
	legenddiv.style.color = color;
	legenddiv.style.weight = weight;
}

function setBattleHorizontal() {
	var application = document.getElementById('application');
	application.style.flexDirection = 'column-reverse';

	var map = document.getElementById('map-div');
	map.style.height = '85%';

	var sidebar = document.getElementById('chart-div');
	sidebar.style.flexDirection = 'row';
	sidebar.style.width = '100%';	
	sidebar.style.height = '15%';

	var battlechart = document.getElementById('battlechart');
	battlechart.style.flexDirection = 'column';
	battlechart.style.height = '75%';
	battlechart.style.margin = '5%';
	
	var battlechartmidpoly = document.getElementById('battlechartmidpoly');
	battlechartmidpoly.setAttribute("transform", "translate(20 0) rotate(90)");

	var battlechartmid = document.getElementById('battlechartmid');
	//battlechartmid.setAttribute('transform', 'rotate(90)');
	battlechartmid.style.height = '100%';
	battlechartmid.style.width = '';

	var battlechartright = document.getElementById('battlechartright');
	battlechartright.style.flexDirection = 'row';
	battlechartright.style.height = '80%';
	battlechartright.style.width = '100%';

	var battlechartleft = document.getElementById('battlechartleft');
	battlechartleft.style.height = '20%';
	battlechartleft.style.width = '100%';

	var topbar = document.getElementById('topbar');
	topbar.style.borderRight = topbar.style.borderBottom;
	topbar.style.borderBottom = '';
	topbar.style.flexDirection = 'row';
	topbar.style.minWidth = '0';

	var bottombar = document.getElementById('bottombar');
	//bottombar.style.boxShadow = '-1px 0px 3px black';
	bottombar.style.borderLeft = bottombar.style.borderTop;	
	bottombar.style.borderTop = '';
	bottombar.style.flexDirection = 'row';
	bottombar.style.minWidth = '0';
}

function unsetBattleHorizontal() {
	var application = document.getElementById('application');
	application.style.flexDirection = 'row';
	
	var map = document.getElementById('map-div');
	map.style.height = '100%';

	var sidebar = document.getElementById('chart-div');
	sidebar.style.flexDirection = 'column';
	sidebar.style.width = '28vw';	
	sidebar.style.height = '100%';

	var battlechart = document.getElementById('battlechart');
	battlechart.style.flexDirection = 'row';
	battlechart.style.height = '100%';
	battlechart.style.margin = '5%';
	if(mobile) {
		battlechart.style.width = '100%';
	} else {
		battlechart.style.width = '50%';
	}
	
	var battlechartmidpoly = document.getElementById('battlechartmidpoly');
	battlechartmidpoly.setAttribute("transform", "translate(0 0) rotate(0)");

	var battlechartmid = document.getElementById('battlechartmid');
//	battlechartmid.setAttribute('transform', 'rotate(0)');
	battlechartmid.style.height = '';
	battlechartmid.style.width = '100%';

	var battlechartright = document.getElementById('battlechartright');
	battlechartright.style.flexDirection = 'column';
	battlechartright.style.width = '85%';
	battlechartright.style.height = '100%';
	var battlechartright = document.getElementById('battlechartleft');
	battlechartleft.style.height = '20%';
	battlechartleft.style.width = '15%';
	
	var topbar = document.getElementById('topbar');
	//topbar.style.boxShadow = '0px -1px 3px black';
	topbar.style.borderBottom = topbar.style.borderRight;
	topbar.style.borderRight = '';
	topbar.style.flexDirection = 'column';
	topbar.style.minWidth = '0';

	var bottombar = document.getElementById('bottombar');
	//bottombar.style.boxShadow = '0px 1px 3px black';
	bottombar.style.borderTop = bottombar.style.borderLeft;
	bottombar.style.borderLeft = '';
	bottombar.style.flexDirection = 'column';
	bottombar.style.minWidth = '0';
}


function toggleYAPNews() {
	var yapnews = document.getElementById("sidebar");
	if(yapnews !== null) {
		if(yapnews.style.display === "none") {
			yapnews.style.display = "inline-flex";
		} else {
			yapnews.style.display = "none";
		}
		MapManager.centerMap();
	}
}

function ifInIframe() {
	if(window.location !== window.parent.location) {
		var element= document.getElementById('sidebar');
		if(element) {
			element.style.display = 'none';
		}
		element = document.getElementById('menu-div');
		if(element) {
			element.style.display = 'none';
		}
		element = document.getElementById('yapms-watermark');
		if(element) {
			element.style.display = 'flex';
		}
		var elements = document.getElementsByClassName('adslot_mobile');
		for(var index = 0; index < elements.length; ++index) {
			element = elements[index];
			element.style.display = 'none';
		}
		setPalette("light", false);
	}
}
function displayVersionInfo() {
	var versioninfotext = document.getElementById('versioninfo-text');
	versioninfotext.innerHTML = currentCache;
}

function displayShareMenu() {
	var sharebuttons = document.getElementById('sharebuttons');
	if(sharebuttons) {
		sharebuttons.style.display = 'none';
	}

	var shareurl = document.getElementById('shareurl');
	if(shareurl) {
		shareurl.style.display = 'none';
		shareurl.innerHTML = '';
	}

	var image = document.getElementById('screenshotimg');
	if(image) {
		image.style.display = 'none';
	}
		
	var loadingAnimation = document.getElementById('loading-animation');
	if(loadingAnimation) {
		loadingAnimation.style.display = '';
	}
}

function displayMenu(name) {
	closeAllPopups();

	var menu = document.getElementById(name);
	menu.style.display = 'flex';

	switch(name) {
		case 'versionmenu':
			displayVersionInfo();
		break;
		case 'sharemenu':
			displayShareMenu();
		break;
	}
}

function hideMenu(name) {
	closeAllPopups();
	var menu = document.getElementById(name);
	menu.style.display = 'none';
}
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
		calculateAutoMargin(state);
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

	var max  = state.voters * (state.turnout / 100.0);
	var total = 0;

	turnoutRange.onchange = (function() {
		return function() {
			var turnout = document.getElementById('popularvote-turnout').value;
			state.turnout = turnout;
			
			var autoMargins = document.getElementById('popularvote-automargins').checked;

			if(autoMargins) {
				state.setColor('Tossup', 0, true);
			}

			for(var key in CandidateManager.candidates) {
				if(key === 'Tossup') {
					continue;
				}
				var range = document.getElementById('popular-range-' + key);
				range.setAttribute('max', (state.voters * (turnout / 100.0)));
				range.value = 0;
				// call on input to reset prevValue to 0
				range.oninput();
				var rangeDisplay = document.getElementById('popular-display-' + key);
				rangeDisplay.innerHTML = key + ' - 0 - 0%';
			}

			var displayTurnout = document.getElementById('popularvote-turnout-display');
			displayTurnout.innerHTML = 'Turnout - ' + this.value + '%';

			var displayTossup = document.getElementById('popular-display-Tossup');
			displayTossup.innerHTML = 'Tossup - ' + numberWithCommas((state.voters * (turnout / 100.0)).toFixed(0)) + ' - 100%';
			
			total = 0;

			countPopularVote();
		}
	})();

	turnoutRange.oninput = (function() {
		return function() {
			var displayTurnout = document.getElementById('popularvote-turnout-display');
			displayTurnout.innerHTML = 'Turnout - ' + this.value + '%';
		}
	})();

	ranges.appendChild(displayTurnout);
	ranges.appendChild(turnoutRange);

	for(var key in CandidateManager.candidates) {
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
				for(var candidate in CandidateManager.candidates) {
					if(candidate === 'Tossup')
						continue;
					var range = document.getElementById('popular-range-' + candidate);
					var rangeValue = 0;
					if(range) {
						rangeValue = parseInt(range.value);
					}
					state.popularVote[candidate] = rangeValue;
					totalVotes += rangeValue;
				}
				state.popularVote['Tossup'] = state.voters - totalVotes;

				var autoMargins = document.getElementById('popularvote-automargins').checked;
				if(autoMargins) {
					calculateAutoMargin(state);

					if(state.name.includes('-D')) {
						var name = state.name.split('-')[0];
						calculateAutoMarginAL(name);
					}
				}

				countPopularVote();
				countVotes();
				LegendManager.updateLegend();
				ChartManager.updateChart();
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
					var district = state.name.split('-')[1];
					if(typeof splitState[mainName] === 'undefined') {
						splitState[mainName] = {}; 
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

	for(var candidate in popularVote) {
		var display = document.createElement('DIV');
		display.setAttribute('id', 'national-popular-display-' + candidate);
		display.innerHTML = candidate + ' - ' + numberWithCommas(popularVote[candidate].toFixed(0));
		ranges.appendChild(display);
	}
}

function calculateAutoMarginAL(stateName) {
	var allDistricts = states.filter(obj => {
		return obj.name.includes(stateName) &&
			obj.name.includes('-AL') === false;
	});

	var atLarge = states.filter(obj => {
		return obj.name.includes(stateName + '-AL');
	})[0];

	var firstCount = 0;
	var firstCandidate = "Tossup";
	var secondCount = 0;
	var secondCandidate = "Tossup";
	for(var candidate in CandidateManager.candidates) {
		if(candidate === 'Tossup')
			continue;

		var votes = 0;
		for(var key in allDistricts) {
			if(allDistricts[key].popularVote[candidate]) {
				votes += allDistricts[key].popularVote[candidate];
			}
		}

		if(votes > firstCount) {
			secondCount = firstCount;
			secondCandidate = firstCandidate;
			firstCount = votes;
			firstCandidate = candidate;
		} else if(votes > secondCount) {
			secondCount = votes;
			secondCandidate = candidate;
		}
	}

	var combine = firstCount + secondCount;
	var margin = (((firstCount - secondCount) / combine) * 100);

	if(firstCandidate === 'Tossup') {
		atLarge.setColor('Tossup', 0, false);
	} else {
		if(margin < 5.0) {
			atLarge.setColor(firstCandidate, 3, false);
		} else if(margin < 10.0) {
			atLarge.setColor(firstCandidate, 2, false);
		} else if(margin < 15.0) {
			atLarge.setColor(firstCandidate, 1, false);
		} else {
			atLarge.setColor(firstCandidate, 0, false);
		}
	}
}

function calculateAutoMargin(state) {
	var win = 0;
	var winCandidate = "Tossup";
	var secondWin = 0;
	var secondWinCandidate = "Tossup";
	for(var candidate in CandidateManager.candidates) {
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
			state.setColor(winCandidate, 3, false);
		} else if(margin < 10.0) {
			state.setColor(winCandidate, 2, false);
		} else if(margin < 15.0) {
			state.setColor(winCandidate, 1, false);
		} else {
			state.setColor(winCandidate, 0, false);
		}
	}
}
function saveMap(img, token) {
	var formData = new FormData();

	formData.append("img", img);
	formData.append("filename", MapLoader.save_filename);
	formData.append("dataid", MapLoader.save_dataid);
	formData.append("type", MapLoader.save_type);
	formData.append("year", MapLoader.save_year);
	formData.append("fontsize", MapLoader.save_fontsize);
	formData.append("strokewidth", MapLoader.save_strokewidth);
	formData.append("captcha", token);
	formData.append("updateText", mapOptions.updateText);
	
	console.log('token: ' + token);

	var candidateData = [];
	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup') {
			continue;
		}
		var candidate = CandidateManager.candidates[key];
		var obj = {
			name: candidate.name,
			solid: candidate.colors[0],
			likely: candidate.colors[1],
			lean: candidate.colors[2],
			tilt: candidate.colors[3]
		};
		candidateData.push(obj);
	}

	formData.append("candidates", JSON.stringify({
		candidate_data: candidateData
	}));

	var stateData = [];
	for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
		var state = states[stateIndex];
		var obj = {
			name: state.name,
			candidate: state.candidate,
			delegates: state.delegates,
			voteCount: state.voteCount,
			colorValue: state.colorValue,
			disabled: state.disabled
		};
		stateData.push(obj);
	}
	formData.append("states", JSON.stringify({
		state_data: stateData
	}));

	var proportionalData = [];
	for(var stateIndex = 0; stateIndex < proportionalStates; ++stateIndex) {
		var state = proportionalStates[stateIndex];
		var obj = {
			name: state.name,
			candidate: state.candidate,
			delegates: state.delegates,
			voteCount: state.voteCount,
			colorValue: state.colorValue,
			disabled: state.disabled
		};
	}
	formData.append("proportionalStates", JSON.stringify({
		proportional_data: proportionalData
	}));

	$.ajax({
		url: "./savemap_simple.php",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: function(a,b,c) {
			console.log(a);
			var data = a.split(' ');
			var url = data[0];
			var filename = data[1];

			var shareurl = document.getElementById('shareurl');
			if(url === 'reCaptcha_Failed(restart_web_browser)') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: possible solution is to restart your web-browser';

			} else if(url === 'reCaptcha_Bot_Detected') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: suspicious activity detected';
				
			} else {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = url;
			}
			
			shareurl.style.display = '';

			var downloadbtn = document.getElementById('downloadbutton');
			if(downloadbtn) {
				downloadbtn.style.display = 'inline-block';
				downloadbtn.setAttribute('href', 'https://yapms.org/downloadmap.php?f=' + filename);
			}
			
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}

			var loadingAnimation = document.getElementById('loading-animation');
			if(loadingAnimation) {
				loadingAnimation.style.display = 'none';
			}
		
			var image = document.getElementById('screenshotimg');
			if(image) {
				image.style.display = '';
			}

			console.log('Map save succeeded');
			gtag('event', 'map_save_succeeded', {
				'event_category': 'map_save',
				'event_label': 'Map save succeeded ' + currentCache 
			});
		},
		error: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}
			
			console.log('Map save failed ' + a);
			gtag('event', 'ma_save_failed', {
				'event_category': 'map_save',
				'event_label': 'Map save failed - ' + a
			});
		}
	});
}

function saveMap_user() {
	var formData = new FormData();
	formData.append('token', Account.token);
	
	var element = document.getElementById('savemap-name');
	formData.append('mapName', element.value);

	var data = {};
	data['filename'] = MapLoader.save_filename;
	data['dataid'] = MapLoader.save_dataid;
	data['type'] = MapLoader.save_type;
	data['year'] = MapLoader.save_year;
	data['fontsize'] = MapLoader.save_fontsize;
	data['strokewidth'] = MapLoader.save_strokewidth;
	data['updatetext'] = mapOptions.updateText;
	data['candidates'] = {};
	data['states'] = {};
	data['proportional'] = {};

	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup') {
			continue;
		}
		var candidate = CandidateManager.candidates[key];
		data['candidates'][candidate.name] = {};
		data['candidates'][candidate.name]['solid'] = candidate.colors[0];
		data['candidates'][candidate.name]['likely'] = candidate.colors[1];
		data['candidates'][candidate.name]['lean'] = candidate.colors[2];
		data['candidates'][candidate.name]['tilt'] = candidate.colors[3];
	}

	for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
		var state = states[stateIndex];
		data['states'][state.name] = {};
		data['states'][state.name]['candidate'] = state.candidate;
		data['states'][state.name]['delegates'] = state.delegates;
		data['states'][state.name]['votecount'] = state.voteCount;
		data['states'][state.name]['colorvalue'] = state.colorValue;
		data['states'][state.name]['disabled'] = state.disabled;
	}

	for(var stateIndex = 0; stateIndex < proportionalStates.length; ++stateIndex) {
		var state = proportionalStates[stateIndex];
		data['proportional'][state.name] = {};
		data['proportional'][state.name]['candidate'] = state.candidate;
		data['proportional'][state.name]['delegates'] = state.delegates;
		data['proportional'][state.name]['votecount'] = state.voteCount;
		data['proportional'][state.name]['colorvalue'] = state.colorValue;
		data['proportional'][state.name]['disabled'] = state.disabled;
	}
	
	formData.append("data", JSON.stringify(data));
	
	$.ajax({
		url: "https://yapms.org/upload_user.php",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: function(data) {
			console.log(data);
		},
		error: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
		}
	});
}

function saveMap_new(img, token) {
	var formData = new FormData();
	formData.append("captcha", token);
	formData.append("img", img);
	
	var data = {};
	data['filename'] = MapLoader.save_filename;
	data['dataid'] = MapLoader.save_dataid;
	data['type'] = MapLoader.save_type;
	data['year'] = MapLoader.save_year;
	data['fontsize'] = MapLoader.save_fontsize;
	data['strokewidth'] = MapLoader.save_strokewidth;
	data['updatetext'] = mapOptions.updateText;
	data['candidates'] = {};
	data['states'] = {};
	data['proportional'] = {};

	var formData = new FormData();
	console.log('token: ' + token);
	formData.append("captcha", token);
	formData.append("img", img);

	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup') {
			continue;
		}
		var candidate = CandidateManager.candidates[key];
		data['candidates'][candidate.name] = {};
		data['candidates'][candidate.name]['solid'] = candidate.colors[0];
		data['candidates'][candidate.name]['likely'] = candidate.colors[1];
		data['candidates'][candidate.name]['lean'] = candidate.colors[2];
		data['candidates'][candidate.name]['tilt'] = candidate.colors[3];
	}

	for(var stateIndex = 0; stateIndex < states.length; ++stateIndex) {
		var state = states[stateIndex];
		data['states'][state.name] = {};
		data['states'][state.name]['candidate'] = state.candidate;
		data['states'][state.name]['delegates'] = state.delegates;
		data['states'][state.name]['votecount'] = state.voteCount;
		data['states'][state.name]['colorvalue'] = state.colorValue;
		data['states'][state.name]['disabled'] = state.disabled;
	}

	for(var stateIndex = 0; stateIndex < proportionalStates.length; ++stateIndex) {
		var state = proportionalStates[stateIndex];
		data['proportional'][state.name] = {};
		data['proportional'][state.name]['candidate'] = state.candidate;
		data['proportional'][state.name]['delegates'] = state.delegates;
		data['proportional'][state.name]['votecount'] = state.voteCount;
		data['proportional'][state.name]['colorvalue'] = state.colorValue;
		data['proportional'][state.name]['disabled'] = state.disabled;
	}
	
	formData.append("data", JSON.stringify(data));

	$.ajax({
		//url: "./savemap_external.php",
		url: "https://yapms.org/upload.php",
		type: "POST",
		data: formData,
		processData: false,
		contentType: false,
		success: function(a,b,c) {
			console.log(a);
			var data = a.split(' ');
			var url = data[0];
			var filename = data[1];

			var shareurl = document.getElementById('shareurl');
			if(url === 'reCaptcha_Failed(restart_web_browser)') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: possible solution is to restart your web-browser';

			} else if(url === 'reCaptcha_Bot_Detected') {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = 'reCaptcha Failed: suspicious activity detected';
				
			} else {
				shareurl.setAttribute('href', url);
				shareurl.innerHTML = url;
			}
			
			shareurl.style.display = '';

			var sharebuttons = document.getElementById('sharebuttons');
			if(sharebuttons) {
				sharebuttons.style.display = 'flex';
			}
			var downloadbtn = document.getElementById('downloadbutton');
			if(downloadbtn) {
				if(mobile) {
					downloadbtn.style.display = 'none';
				} else {
					downloadbtn.style.display = '';
					downloadbtn.setAttribute('href', 'https://yapms.org/downloadmap.php?f=' + filename);
				}
			}

			var loadingAnimation = document.getElementById('loading-animation');
			if(loadingAnimation) {
				loadingAnimation.style.display = 'none';
			}
		
			var image = document.getElementById('screenshotimg');
			if(image) {
				image.style.display = '';
			}

			var facebookBtn = document.getElementById('facebook-share');
			if(facebookBtn) {
				facebookBtn.setAttribute('href', 'https://www.facebook.com/sharer.php?u=' + url);
				facebookBtn.setAttribute('target', '_blank');
			}

			var twitterBtn = document.getElementById('twitter-share');
			if(twitterBtn) {
				twitterBtn.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + url);
				twitterBtn.setAttribute('target', '_blank');
			}

			var redditBtn = document.getElementById('reddit-share');
			if(redditBtn) {
				redditBtn.setAttribute('href', 'https://www.reddit.com/submit?title=My%20YAPms%20Map&url=' + url);
				redditBtn.setAttribute('target', '_blank');
			}

			console.log('Map save NEW succeeded');
			gtag('event', 'map_save_succeeded', {
				'event_category': 'map_save',
				'event_label': 'Map save NEW succeeded ' + currentCache 
			});
		},
		error: function(a,b,c) {
			console.log(a);
			console.log(b);
			console.log(c);
			var button = document.getElementById('share-button');
			if(button) {
				button.setAttribute('onclick', 'share()');
			}
			
			console.log('Map save NEW failed ' + a);
			gtag('event', 'ma_save_failed', {
				'event_category': 'map_save',
				'event_label': 'Map save NEW failed - ' + a
			});
		}
	});
}
var currentCache = 'v0.80.10';

var states = [];
var lands = [];
var buttons = [];
var proportionalStates = [];

// paint data
var paintIndex = 'Tossup';
var maxColorValue = 2;

var mode = 'paint';

var blockPresets = false;

var maxColorValues = 4;

var mapOptions = {
	updateText: true
}

var strokeMultiplier = 1;

var previousPalette = function() {
	toWinPalette();	
};

function share(autoCenter) {
	displayMenu('sharemenu');

	if(grecaptcha) {
		console.log('reCaptcha detected');
	} else {
		console.log('reCaptcha not detected');
		return;
	}
	
	if(autoCenter) {
		MapManager.centerMap();
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
		grecaptcha.execute('6LeDYbEUAAAAANfuJ4FxWVjoxPgDPsFGsdTLr1Jo', {action: 'share'})
		.then(function(token) {
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
	if(KeyboardManager.keyStates[70]) {
		states[stateIndex].incrementCandidateColor(paintIndex);
		countVotes();
		ChartManager.updateChart();
		LegendManager.updateLegend();
	}
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
	for(var key in CandidateManager.candidates) {
		if(key === 'Tossup')
			continue;
		var range = document.getElementById('range-' + key);
		var rangeValue = 0;
		if(range) {
			rangeValue = parseInt(range.value);
		} else {
			gtag('event', 'error', {
				'event_category': 'error',
				'event_label': 'Could not find range element (range-' + key + ') ' + MapLoader.save_filename
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
	ChartManager.updateChart();
	LegendManager.updateLegend();
}

function setMode(set) {
	console.log('mode ' +  mode + ' | set ' + set + 
		' | mapType ' + MapLoader.save_type + ' | mapYear ' + MapLoader.save_year);

	var notification = document.getElementById('notification');
	var message = notification.querySelector('#notification-message');
	var title = notification.querySelector('#notification-title');

	if(MapLoader.save_year !== 'open') {
		if(set === 'ec' || set === 'candidate' || set === 'delete' || set === 'deletecandidate') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a historical ' + MapLoader.save_type + ' map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}

	if(MapLoader.save_type === 'gubernatorial') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a guberatorial map';
			notification.style.display = 'inline';
			console.log('denied');
			return;
		}
	}

	if(MapLoader.save_type === 'senatorial') {
		//if(set === 'delete' || set === 'ec') {
		if(set === 'ec') {
			title.innerHTML = 'Sorry';
			message.innerHTML = 'This mode is not available while editing a senatorial map';
			notification.style.display = 'inline';
			console.log('denied');
			return;

		}
	}

	if(MapLoader.save_type === 'congressional') {
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
		modeText = '<i class="fas fa-paint-brush"></i> paint';
		var button = document.getElementById('modebutton-paint');
		button.style.opacity = '0.5';
	} else if(set === 'ec') {
		modeText = '<i class="fas fa-edit"></i> EC Edit';
		notificationText = "Click on a state to set its electoral college";
		var button = document.getElementById('modebutton-ec');
		button.style.opacity = '0.5';
	} else if(set === 'delete') {
		modeText = '<i class="fas fa-eraser"></i> Disable';
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
	if(typeof CandidateManager.candidates[paintIndex] === 'undefined') {
		paintIndex = 'Tossup';
	}
}

// iterate over each state and delegate votes to the candidate
function countVotes() {
	var mid = document.getElementById("battlechartmid");
	if(mid !== null) {
		mid.setAttribute("fill", CandidateManager.TOSSUP.colors[2]);
	}

	if(MapLoader.save_type === 'primary' || MapLoader.save_type === 'proportional') {
		for(var key in CandidateManager.candidates) {
			var candidate = CandidateManager.candidates[key];
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
		for(var key in CandidateManager.candidates) {
			var candidate = CandidateManager.candidates[key];
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

function onResize() {
	MapManager.centerMap();

	// make sure the height is maxed out if the chart is on the bottom	
	if(ChartManager.chartPosition === 'bottom') {
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

function start() {
	KeyboardManager.init();
	CandidateManager.initCandidates();
	ChartManager.initChart();
	ChartManager.setChart('horizontalbattle');
	CookieManager.loadCookies();

	if(php_load_map === true) {
		console.log('Save Search - yapms.org');
		var customURL = null;
		if(php_load_user === true) {
			customURL = 'https://yapms.org/users/' + php_load_user_id + '/' + php_load_map_id + '.txt'; 	
		} else {
			customURL = 'https://yapms.org/maps/' + php_load_map_id + '.txt'; 	
		}
		$.ajax({
			//url: './maps/' + php_load_map_id + '.txt',
			url: customURL,
			type: "POST",
			success: function(data) {
				console.log("Map Load: Found saved map");
				try {
					console.log('Map Load: Attemping new file load');
					MapLoader.loadSavedMap_new(data);
				} catch(e) {
					console.log(e);
					console.log('Map Load: Attemping old file load');
					MapLoader.loadSavedMap_old(data);
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
							MapLoader.loadSavedMap_new(data);
						} catch(e) {
							console.log('Map Load: Attemping old file load');
							MapLoader.loadSavedMap_old(data);
						}
					},
					error: function(a, b, c) {
						console.log("Map Load: Did not find saved map");
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
		});

	} else if(php_load_type_map === true) {
		PresetLoader.loadPreset("classic");
		MapLoader.loadMapFromId(php_load_map_id);
	} else {
		PresetLoader.loadPreset("classic");
		MapLoader.loadMap("./res/usa_presidential.svg", 16, 1, "usa_ec", "presidential", "open", {updateText: true, voters: 'usa_voting_pop', enablePopularVote: true});
	}

	LogoManager.loadLogos();
	LogoManager.loadButtons();
	LogoManager.loadFlags();

	Account.verifyState();
}

start();
