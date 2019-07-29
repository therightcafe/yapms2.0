
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
		case 'spain':
			loadPresetSpain();
			break;
		case 'netherlands':
			loadPresetNetherlands();
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

// Spanish Parties
function loadPresetSpain() {
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

	candidates['PSOE'] = psoe;
	candidates['PP'] = pp;
	candidates['CS'] = cs;
	candidates['Unidas Podemos'] = unidas;
	candidates['Vox'] = vox;
	candidates['ERC-Sobiranistes'] = erc;
	candidates['JxCat-Junts'] = jxcat;
	candidates['EAJ/PNV'] = eajpnv;
	candidates['EH Bildu'] = eh;
	candidates['Compromís 2019'] = compromis;
	candidates['CCa-PNC'] = cca;
	candidates['PRC'] = prc;
	toggleLegendLeans();
}

// Dutch Parties
function loadPresetNetherlands() {
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

	candidates['FvD'] = fvd;
	candidates['VVD'] = vvd;
	candidates['CDA'] = cda;
	candidates['GL'] = gl;
	candidates['PvdA'] = pvda;
	candidates['D66'] = d66;
	candidates['PVV'] = pvv;
	candidates['SP'] = sp;
	candidates['CU'] = cu;
	candidates['PvdD'] = pvdd;
	candidates['50+'] = a50;
	candidates['DENK'] = denk;
	toggleLegendLeans();
}
