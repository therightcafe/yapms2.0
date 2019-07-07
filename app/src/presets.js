
function blockPresetNotify() {
	var notification = document.getElementById('notification');
	notification.style.display = 'inline';
	var message = notification.querySelector('#notification-message');
	var notificationText = 'Presets cannot be changed while editing a historical ' + mapType + ' map';
	message.innerHTML = notificationText;
	var title = notification.querySelector('#notification-title');
	title.innerHTML = 'Sorry';
}

function loadPreset(value) {
	if(blockPresets) {
		blockPresetNotify();
		return;
	}
	
	clearDelegates();
	initCandidates();

	switch(value) {
		case 'tossup':
			break;
		case 'classic':
			loadPresetClassic();
			break;
		case 'libertarian':
			loadPresetLibertarian();
			break;
		case 'green':
			loadPresetGreen();
			break;
		case 'majors':
			loadPresetMajors();
			break;
		case 'france':
			loadPresetFrance();
			break;
		case 'germany':
			loadPresetGermany();
			break;
		case 'italy':
			loadPresetItaly();
			break;
		case 'uk':
			loadPresetUK();
			break;
		case 'canada':
			loadPresetCanada();
			break;
		case 'australia':
			loadPresetAustralia();
			break;
	}
	
	verifyMap();
	verifyPaintIndex();
	countVotes();
	updateChart();
	chart.generateLegend();
	updateLegend();
}

// republicans vs democrats
function loadPresetClassic() {
	var republican = new Candidate('Republican', 
		['#BF1D29', '#FF5865', '#FF8B98', '#Cf8980']);
	var democrat = new Candidate('Democrat',
		['#1C408C', '#577CCC', '#8AAFFF', '#949BB3']);

	candidates['Republican'] = republican;
	candidates['Democrat'] = democrat;
}

// republican vs democrat vs libertarian
function loadPresetLibertarian() {
	var republican = new Candidate('Republican', 
		['#BF1D29', '#FF5865', '#FF8B98', '#Cf8980']);
	var democrat = new Candidate('Democrat',
		['#1C408C', '#577CCC', '#8AAFFF', '#949BB3']);
	var libertarian = new Candidate('Libertarian',
		['#e6b700', '#e8c84d', '#ffe78a', '#b8a252']);

	candidates['Republican'] = republican;
	candidates['Democrat'] = democrat;
	candidates['Libertarian'] = libertarian;
}

// republican vs democrat vs green
function loadPresetGreen() {
	var republican = new Candidate('Republican', 
		['#BF1D29', '#FF5865', '#FF8B98', '#Cf8980']);
	var democrat = new Candidate('Democrat',
		['#1C408C', '#577CCC', '#8AAFFF', '#949BB3']);
	var green = new Candidate('Green',
		['#1c8c28', '#50c85e', '#8aff97', '#7a997e']);

	candidates['Republican'] = republican;
	candidates['Democrat'] = democrat;
	candidates['Green'] = green;
}

// republican vs democrat vs green vs libertarian
function loadPresetMajors() {
	var republican = new Candidate('Republican', 
		['#BF1D29', '#FF5865', '#FF8B98', '#Cf8980']);
	var democrat = new Candidate('Democrat',
		['#1C408C', '#577CCC', '#8AAFFF', '#949BB3']);
	var green = new Candidate('Green',
		['#1c8c28', '#50c85e', '#8aff97', '#7a997e']);
	var libertarian = new Candidate('Libertarian',
		['#e6b700', '#e8c84d', '#ffe78a', '#b8a252']);

	candidates['Republican'] = republican;
	candidates['Democrat'] = democrat;
	candidates['Green'] = green;
	candidates['Libertarian'] = libertarian;
}

// French parties
function loadPresetFrance() {
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

	candidates['LREM'] = lrem;
	candidates['RN'] = rn;
	candidates['EÉLV'] = eelv;
	candidates['LR'] = lr;
	candidates['LFI'] = lfi;
	candidates['PS'] = ps;
	toggleLegendLeans()
}

// German parties
function loadPresetGermany() {
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

	candidates['CDU/CSU'] = union;
	candidates['SPD'] = spd;
	candidates['GRÜNE'] = grn;
	candidates['AfD'] = afd;
	candidates['FDP'] = fdp;
	candidates['LINKE'] = dl;
	toggleLegendLeans()
}

// Italian parties
function loadPresetItaly() {
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

	candidates['Lega'] = lega;
	candidates['PD'] = pd;
	candidates['M5S'] = mcs;
	candidates['FI'] = fi;
	candidates['FdI'] = fdi;
	candidates['+EU'] = eu;
	toggleLegendLeans()
}

// British parties
function loadPresetUK() {
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
	var chuk = new Candidate('CHUK',
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

	candidates['BXP'] = bxp;
	candidates['LDM'] = ldm;
	candidates['LAB'] = lab;
	candidates['GRN'] = grn
	candidates['CON'] = con;
	candidates['SNP'] = snp;
	candidates['CHUK'] = chuk;
	candidates['PC'] = pc;
	candidates['SF'] = sf;
	candidates['DUP'] = dup;
	candidates['UUP'] = uup;
	candidates['APNI'] = apni;
	toggleLegendLeans()
}

// Canadian parties
function loadPresetCanada() {
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
	var ppl = new Candidate('PPL',
		['#2A317C', '#2A317C', '#2A317C', '#2A317C']);

	candidates['CON'] = con;
	candidates['LIB'] = lib;
	candidates['NDP'] = ndp;
	candidates['GRN'] = grn;
	candidates['BQC'] = bqc;
	candidates['PPL'] = ppl;
	toggleLegendLeans()
}

// Australian parties
function loadPresetAustralia() {
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

	candidates['LIB'] = lib;
	candidates['LNP'] = lnp;
	candidates['NAT'] = nat;
	candidates['CLP'] = clp;
	candidates['IND'] = ind;
	candidates['CEN'] = cen;
	candidates['GRN'] = grn;
	candidates['LAB'] = lab;
	toggleLegendLeans()
}
