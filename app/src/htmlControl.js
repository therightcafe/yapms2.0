var textOn = true;

// when the yapnews div gets resized, center the map
if(document.getElementById("yapnews")) {
	document.getElementById("yapnews").addEventListener("transitionend",
	function() {
		centerMap();
	});
}

function selectCandidateDisplay(html) {
	var legendButtons = html.parentElement.children;

	for(var index = 0; index < legendButtons.length; ++index) {
		var button = legendButtons[index];
		var text = button.childNodes[0];
		text.style.padding = '4px';
	}
	
	html.childNodes[0].style.padding = '7px';
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

function displayShare() {
	closeAllPopups();
	var share = document.getElementById('share');
	share.style.display = 'inline';

	var downloadbtn = document.getElementById('downloadbutton');
	if(downloadbtn) {
		downloadbtn.style.display = 'none';
	}

	var shareurl = document.getElementById('shareurl');
	shareurl.innerHTML = "Please wait for your share and download link...";
}

function displayMapMenu(type) {
	closeAllPopups();
	var mapmenu = document.getElementById('mapmenu');
	mapmenu.style.display = 'flex';
}

function displayCountryMenu(type) {
	var mapmenu = document.getElementById('mapmenu-' + type);
	mapmenu.style.display = 'flex';
}

function displayPresetMenu(type) {
	closeAllPopups();
	var presetmenu = document.getElementById('presetmenu');
	presetmenu.style.display = 'flex';
}

function displayChartMenu(type) {
	closeAllPopups();
	var chartmenu = document.getElementById('chartmenu');
	chartmenu.style.display = 'flex';
}

function displayLoadMenu(type) {
	closeAllPopups();
	var loadmenu = document.getElementById('loadmenu');
	loadmenu.style.display = 'block';
}

function displayCountersMenu(type) {
	closeAllPopups();
	var countersmenu = document.getElementById('countersmenu');
	countersmenu.style.display = 'flex';
}

function displayThemeMenu(type) {
	closeAllPopups();
	var thememenu = document.getElementById('thememenu');
	thememenu.style.display = 'flex';
}

function displayModeMenu(type) {
	closeAllPopups();
	var modemenu = document.getElementById('modemenu');
	modemenu.style.display = 'flex';
}

function displayAddCandidateMenu(type) {
	customColorBackground();
	closeAllPopups();
	var addcandidatemenu = document.getElementById('addcandidatemenu');
	addcandidatemenu.style.display = 'flex';
}

function displayVersionInfo() {
	closeAllPopups();
	var versioninfo = document.getElementById('versioninfo');
	var versioninfotext = document.getElementById('versioninfo-text');

	versioninfo.style.display = 'inline';
	versioninfotext.innerHTML = currentCache;
}

function closeAllPopups() {
	var popups = document.getElementsByClassName('popup');
	for(var index = 0; index < popups.length; ++index) {
		var popup = popups[index];
		popup.style.display = 'none';
	}
}

function displayMiscMenu(type) {
	closeAllPopups();
	var miscmenu = document.getElementById('miscmenu');
	miscmenu.style.display = 'flex';
}

function displayCustomColorMenu(type) {
	closeAllPopups();
	var customColorName = document.getElementById('custom-color-name');
	customColorName.value = type;
	var miscmenu = document.getElementById('customcolormenu');
	miscmenu.style.display = 'flex';
	document.getElementById("solidcustom").value = cookies[type + 'solid'];
	document.getElementById("likelycustom").value = cookies[type + 'likely'];
	document.getElementById("leaningcustom").value = cookies[type + 'leaning'];
	document.getElementById("tiltingcustom").value = cookies[type + 'tilting'];
}

function setPalette(palette) {
	switch(palette) {
		case 'dark':
			darkPalette();
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
		case 'default':
			toWinPalette();
			break;
		default:
			toWinPalette();
			break;
	}
}

function darkPalette() {
	appendCookie('theme', 'dark');
	var body = document.getElementById('application');
	body.style.backgroundColor = '#181922';
	body.style.backgroundImage  = '';

	setDisableColor('#212326');
	setTossupColor('#6b6e73');
	setMapStyle('#181922', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#2b2e33');
	setSideBarColor('#2b2e33');
	
	setClickButtonColor('#2b2e33');
	setClickButtonColor('#ffffff');
	setClickButtonTextColor('#000000');
	setMenuColor('#2f3136');
	setMenuColor('#000000');

	setBorderStyle('#000000', 7.0);

	chartOptions.plugins.datalabels.borderWidth = 2;
	chartOptions.plugins.datalabels.borderRadius = 4;

	chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	setChart(chartType, chartPosition);
	countVotes();
	verifyMap();
	previousPalette = darkPalette;
}

function terminalPalette() {
	appendCookie('theme', 'terminal');
	var body = document.getElementById('application');
	body.style.backgroundColor = '#000000';
	body.style.backgroundImage  = '';

	setDisableColor('#bcc8d9');
	setTossupColor('black');
	setChartBorderStyle(2, '#ffffff');
	setTextStyle('white', 'bold');
	setMapStyle('white', 1.5);
	setSideBarColor('black');

	setClickButtonColor('#000000');
	setClickButtonTextColor('#ffffff');
	setMenuColor('#eeeeee');
	
	setBorderStyle('#ffffff', 6.0);
	
	chartOptions.plugins.datalabels.borderWidth = 2;
	chartOptions.plugins.datalabels.borderRadius = 4;
	
	chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	setChart(chartType, chartPosition);
	countVotes();
	verifyMap();
	previousPalette = terminalPalette;
}

function lightPalette() {
	appendCookie('theme', 'light');
	var body = document.getElementById('application');
	body.style.backgroundColor = '#dcdcdc';
	body.style.backgroundImage  = '';

	setDisableColor('#212326');
	setTossupColor('#696969');
	setMapStyle('#dcdcdc', 1.5);

	setSideBarColor('#3b3e43');

	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#3b3e43');
	
	setClickButtonColor('#3b3e43');
	setClickButtonTextColor('white');
	setMenuColor('#000000');
	
	setBorderStyle('#000000', 6.0);
	
	chartOptions.plugins.datalabels.borderWidth = 2;
	chartOptions.plugins.datalabels.borderRadius = 4;
	
	chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	setChart(chartType, chartPosition);
	countVotes();
	verifyMap();
	previousPalette = lightPalette;
}

function contrastPalette() {
	appendCookie('theme', 'contrast');
	var body = document.getElementById('application');
	body.style.backgroundColor = '#f8f9fa';
	body.style.backgroundImage  = '';
	
	setDisableColor('#212326');
	setTossupColor('#36454f');
	setMapStyle('#f8f9fa', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#fafafa');
	setSideBarColor('#fafafa');

	setClickButtonColor('#fafafa');
	setClickButtonTextColor('#000000');
	setMenuColor('#222222');
	
	setBorderStyle('#f8f9fa', 6.0);

	chartOptions.plugins.datalabels.borderWidth = 2;
	chartOptions.plugins.datalabels.borderRadius = 4;

	chartBarScales.yAxes[0].ticks.fontColor = '#000000';
	chartBarScales.xAxes[0].ticks.fontColor = '#000000';
	setChart(chartType, chartPosition);
	countVotes();
	verifyMap();
	previousPalette = contrastPalette;
}

function metallicPalette() {
	appendCookie('theme', 'metallic');
	var body = document.getElementById('application');
	//body.style.backgroundImage  = 'radial-gradient(#2f3136, #181922)';
	body.style.backgroundImage  = 'linear-gradient(#696969, #33353b)';

	var menu = document.getElementById('menu-div');
	menu.style.backgroundColor = '#2f3136'
	
	setDisableColor('#212326');
	setTossupColor('#808080');
	setMapStyle('black', 1.5);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#33353b');
	setSideBarColor('#33353b');
	
	setClickButtonColor('white');
	setClickButtonTextColor('black');
	setMenuColor('black');
	
	setBorderStyle('#000000', 6.0);

	chartOptions.plugins.datalabels.borderWidth = 2;
	chartOptions.plugins.datalabels.borderRadius = 4;
	
	chartBarScales.yAxes[0].ticks.fontColor = '#ffffff';
	chartBarScales.xAxes[0].ticks.fontColor = '#ffffff';
	setChart(chartType, chartPosition);
	countVotes();
	verifyMap();
	previousPalette = metallicPalette;
}

function toWinPalette() {
	appendCookie('theme', 'default');
	var body = document.getElementById('application');
	body.style.backgroundColor = '#f8f9fa';
	body.style.backgroundImage  = '';

	var menu = document.getElementById('menu-div');
	menu.style.backgroundColor = '#202020';

	setDisableColor('#dddddd');
	setTossupColor('#bbaa90');
	setMapStyle('#fffbf2', 1);
	setTextStyle('white', 'bold');
	setChartBorderStyle(1, '#fafafa');
	setSideBarColor('#fafafa');
	
	setClickButtonColor('#fafafa');
	setClickButtonTextColor('#000000');
	setMenuColor('#000000');

	setBorderStyle('#f8f9fa', 6.0);

	chartOptions.plugins.datalabels.borderWidth = 0;
	chartOptions.plugins.datalabels.borderRadius = 2;

	chartBarScales.yAxes[0].ticks.fontColor = '#000000';
	chartBarScales.xAxes[0].ticks.fontColor = '#000000';
	setChart(chartType, chartPosition);
	countVotes();
	verifyMap();
	previousPalette = toWinPalette;
}

function setChartBorderStyle(width, color) {
	chartBorderWidth = width;
	chartBorderColor = color;

	var battlechart = document.getElementById('battlechartright');
	battlechart.style.border = '1px solid ' + color;	
	updateChart();

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
	
	var yapnewsClose = document.getElementById('yapnews-close');
	if(yapnewsClose !== null) {
	yapnewsClose.style.borderColor = color;
	}
}

function setClickButtonTextColor(color) {
	var clickButtons = document.getElementsByClassName('click-button');
	for(var index = 0; index < clickButtons.length; ++index) {
		button = clickButtons[index];
		button.style.color = color;
	}

	var l1 = document.getElementById('yapnews-close-l1');
	if(l1 !== null) {
		l1.setAttribute('stroke', color);
	}
	var l2 = document.getElementById('yapnews-close-l2');
	if(l2 !== null) {
	l2.setAttribute('stroke', color);
	}
}

function setClickButtonColor(color) {
	var clickButtons = document.getElementsByClassName('click-button');
	for(var index = 0; index < clickButtons.length; ++index) {
		button = clickButtons[index];
		button.style.backgroundColor = color;
	}

	var yapnewsClose = document.getElementById('yapnews-close');
	if(yapnewsClose !== null) {
		yapnewsClose.style.backgroundColor = color;
	}
}

function setDisableColor(color) {
	TOSSUP.colors[1] = color;
	//verifyMap();
}

function setTossupColor(color) {
	TOSSUP.colors[2] = color;
	var tossupText = document.getElementById('Tossup-text');
	tossupText.style.backgroundColor = color;
	var addCandidateButton = document.getElementById('addcandidate-button-text');
	addCandidateButton.style.backgroundColor = color;
}

function setMapStyle(color, strokeWidth) {
	var outlines = document.getElementById('outlines');
	outlines.style.stroke = color;
	outlines.style.strokeWidth = strokeWidth * strokeMultiplier;

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
	var sidebar = document.getElementById('chart-div');
	sidebar.style.background = color;
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

// dynamically change the chart from one form to another
function setChart(type, position) {
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

		chartType = type;
		centerMap();
		return;
	} else if(type === 'horizontalbattle' || type === 'verticalbattle') {
		if(Object.keys(candidates).length > 3) {
		
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
		}

		html.style.display = 'none';
		chartHTML.style.display = 'none';
		battlechart.style.display = 'flex';
		chartType = type;
		updateChart();
		centerMap();
		return;
	} 
	
	unsetBattleHorizontal();

	chartPosition = position;	
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
	}


	centerMap();
		
	chartType = type;
	
	chartData = {
		labels:[],
		datasets: [{
			borderColor: chartBorderColor,
			borderWidth: chartBorderWidth,
			data:[]
		}]
	};


	html.style.display = 'inline-block';

	// set the proper scales
	if(type === 'horizontalBar') {
		chartOptions.scales = chartBarScales;
		delete chartOptions.scale;
		// horizontal bar needs multiple datasets
		for(var i = 0; i < 3; ++i) {
			chartData.datasets.push({
				borderColor: chartBorderColor,
				borderWidth: chartBorderWidth,
				data:[]
			});
		}
	} else if(type === 'pie' || type === 'doughnut') {
		chartOptions.scales = chartPieScales;
		delete chartOptions.scale;
	}

	// first destroy the chart
	chart.destroy();
	// then rebuild
	chart = new Chart(ctx, {type: type, data: chartData, options: chartOptions});
	countVotes();
	updateChart();
}

function toggleYAPNews() {
	var yapnews = document.getElementById("sidebar");
	if(yapnews !== null) {
		if(yapnews.style.display === "none") {
			yapnews.style.display = "inline-flex";
		} else {
			yapnews.style.display = "none";
		}
		centerMap();
	}
}
