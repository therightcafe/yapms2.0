var indexCache = 'i0.71.33';
var staticCache = 's0.71.33';

var _indexCache = [
	'./',
	'./index.php',
	'./offline.php',

	'./app/',
	'./app/index.php',
	
	'./app/html/battlechart.html',
	'./app/html/closebutton.svg',
	'./app/html/backbutton.svg',
	'./app/html/loading.svg',

/*
	'./app/src/main.js',
	'./app/src/mobile.js',
	'./app/src/PresetLoader.js',
	'./app/src/MapLoader.js',
	'./app/src/LogoManager.js',
	'./app/src/CookieManager.js',
	'./app/src/ChartManager.js',
	'./app/src/InputManager.js',
	'./app/src/savemap.js',
	'./app/src/htmlControl.js',
	'./app/src/html2canvas.min.js',
	'./app/src/data.js',
	'./app/src/click.js',
	'./app/src/battlechart.js',
	'./app/src/State.js',
	'./app/src/Candidate.js',
	'./app/src/yapnews.js',
	'./app/src/popularvote.js',
	'./app/src/congress.js',
	'./app/src/keyboard.js',
	'./app/src/menuControl.js',
*/
	'./app/src/YAPMS.js',

	'./app/?t=USA_current_house',
	'./app/?t=USA_current_senate',
	'./app/?t=USA_2016_presidential_county',
	'./app/?t=USA_2020_presidential',
	'./app/?t=USA_2020_cook',
	'./app/?t=USA_2020_inside',
	'./app/?t=USA_2020_sabatos',
	'./app/?t=USA_2020_senate',
	'./app/?t=USA_2020_governors',
	'./app/?t=USA_2020_house',
	'./app/?t=USA_2020_democratic_primary',
	'./app/?t=USA_2020_republican_primary',
	'./app/?t=USA_county',
	'./app/?t=USA_governors',
	'./app/?t=USA_senate',
	'./app/?t=USA_takeall',
	'./app/?t=USA_proportional',
	'./app/?t=USA_split_maine',
	'./app/?t=USA_2024_projection',
	'./app/?t=USA_2020_house_cook',

	'./app/?t=Germany_states',
	'./app/?t=Germany_bundestag',
	'./app/?t=Spain_congress_of_deputies',
	'./app/?t=Portugal_assembly_of_the_republic',
	'./app/?t=Italy_states',
	'./app/?t=UnitedKingdom_house_of_commons',
	'./app/?t=Canada_provinces',
	'./app/?t=Canada_house_of_commons',
	'./app/?t=Australia_states',
	'./app/?t=Australia_house_of_representatives',
	'./app/?t=Brazil_chamber_of_deputies',
	'./app/?t=France_national_assembly',
	'./app/?t=Russia_duma',
	'./app/?t=Russia_federal_council',
	'./app/?t=Netherlands_provinces',
	'./app/?t=Netherlands_gemeenten',
	'./app/?t=Ireland_dail_eireann',
	'./app/?t=Turkey_national_assembly',
	'./app/?t=UnitedKingdom_current_parliament',

/*
	'./app/style/battlechart.css',
	'./app/style/battlechartmobile.css',
	'./app/style/legend.css',
	'./app/style/menu.css',
	'./app/style/popup.css',
	'./app/style/selectmenu.css',
	'./app/style/sidebar.css',
	'./app/style/style.css',
	'./app/style/yapnews.css',
*/
	'./app/style/YAPMS.css',
	'./app/style/mobile.css',
	'./style.css'
];

var _staticCache = [
	'./app/res/usa_presidential.svg',
	'./app/res/usa_1972_presidential.svg',
	'./app/res/usa_congressional_2018.svg',
	'./app/res/usa_dem_primary.svg',
	'./app/res/usa_rep_primary.svg',
	'./app/res/usa_gubernatorial.svg',
	'./app/res/usa_no_districts.svg',
	'./app/res/usa_senate.svg',
	'./app/res/usa_county.svg',

	'./app/res/canada_states.svg',
	'./app/res/canada_constituencies.svg',
	'./app/res/germany.svg',
	'./app/res/germany_constituencies.svg',
	'./app/res/france_constituencies.svg',
	'./app/res/unitedkingdom.svg',
	'./app/res/italy.svg',
	'./app/res/australia_constituencies.svg',
	'./app/res/australia.svg',
	'./app/res/spain_constituencies.svg',
	'./app/res/portugal_constituencies.svg',
	'./app/res/brazil_states.svg',
	'./app/res/russia_federal_subjects.svg',
	'./app/res/russia_constituencies.svg',
	'./app/res/netherlands_gemeenten.svg',
	'./app/res/netherlands_provinces.svg',
	'./app/res/ireland_constituencies.svg',
	'./app/res/turkey_provinces.svg',
	
	'./app/res/lte.jpg',
	'./app/res/redeagletv.png',
	'./app/res/pg.png',

	'./app/res/images/halloween.jpg',

	'./app/res/presets/USA_current_house',
	'./app/res/presets/USA_2020_house_cook',
	'./app/res/presets/USA_current_senate',
	'./app/res/presets/USA_2016_presidential_county',

	'./app/res/presets/USA_2024_projection',

	'./app/res/presets/USA_2020_cook',
	'./app/res/presets/USA_2020_inside',
	'./app/res/presets/USA_2020_sabatos',
	'./app/res/presets/UnitedKingdom_current_parliament',

	'./app/res/flags/aus.svg',
	'./app/res/flags/bra.svg',
	'./app/res/flags/can.svg',
	'./app/res/flags/esp.svg',
	'./app/res/flags/tur.svg',
	'./app/res/flags/prt.svg',
	'./app/res/flags/eu.svg',
	'./app/res/flags/fra.svg',
	'./app/res/flags/ger.svg',
	'./app/res/flags/ire.svg',
	'./app/res/flags/ita.svg',
	'./app/res/flags/ned.svg',
	'./app/res/flags/rus.svg',
	'./app/res/flags/ukd.svg',
	'./app/res/flags/un.svg',
	'./app/res/flags/usa.svg',
	'./app/res/flags/ind.svg',

	'./app/data/gubernatorial_2018',
	'./app/data/gubernatorial_2020',
	'./app/data/gubernatorial_current',
	'./app/data/gubernatorial_open',
	'./app/data/senatorial_2020',
	'./app/data/senatorial_current',
	'./app/data/senatorial_open',

	'./app/res/fonts/roboto/roboto-v20-latin-regular.svg',
	'./app/res/fonts/roboto/roboto-v20-latin-regular.woff',
	'./app/res/fonts/roboto/roboto-v20-latin-regular.woff2',

	'./app/res/fontawesome/js/all.min.js',

/*
	'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js',
	'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.5.0',
	'https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.5.0/dist/svg-pan-zoom.min.js',
	'https://code.jquery.com/jquery-3.4.1.min.js',
	'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js',
*/

	'./app/manifest.json',
	'./manifest.json'
];

function swLog(cache, message) {
	console.log('SW ' + cache + ': ' + message + ' ( ' + staticCache + ' / ' + indexCache + ' )');
}

self.addEventListener('message', function(event) {
	var clientID = event.source.id;
	swLog('Message', event.data);
	if(event.data === 'loaded') {
		self.skipWaiting();
	}
});

self.addEventListener('install', function(event) {
	event.waitUntil(caches.has(staticCache).then(function(exists) {
		if(exists === false) {
			return caches.open(staticCache).then(function(cache) {
				swLog(staticCache, 'installing');
				return cache.addAll(_staticCache).then(function() {
					for(var i = 1864; i < 2016; i += 4) {
						cache.add('./app/res/presets/USA_' + i + '_presidential');
					}
					return cache;
				});
			})
		}
	}).then(caches.has(indexCache).then(function(exists) {
		if(exists ===  false) {
			return caches.open(indexCache).then(function(cache) {
				swLog(indexCache, 'installing');
				return cache.addAll(_indexCache).then(function() {
					for(var i = 1864; i < 2016; i += 4) {
						cache.add('./app/?t=USA_' + i + '_presidential');
					}
					return cache;
				});
			})
		}
	})).then(function() {
		return caches.open(staticCache).then(function(cache) {
			swLog('flycatch', 'installing');
			return cache.addAll([]);
		});
	}));
});

// first see if request is in cache, then check web
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				if(response) {
					swLog('Cache' , 'fetch ' + event.request.url);
					return response;
				} else if(event.request.url.includes('yapms.com/app/') === true &&
					event.request.url.includes('yapms.com/app/req_articles.php') === false &&
					event.request.url.includes('yapms.com/app/?m=') === false &&
					event.request.url.includes('yapms.com/app/savemap.php') === false &&
					event.request.url.includes('yapms.com/app/savemap_new.php') === false &&
					event.request.url.includes('yapms.com/app/savemap_simple.php') === false) {
					swLog('Web', 'fetch+cache ' + event.request.url);
					return fetch(event.request)
					.then(function(response) {
						swLog('Web', 'caching ' + event.request.url);
						return caches.open('flycache').then((cache) => {
							cache.put(event.request, response.clone());
							return response;
						});
					}).catch(function(err){ 
						swLog('Offline', 'error - ' + err);
						return caches.match('./offline.php');
					});
				} else {
					swLog('Web', 'fetch ' + event.request.url);
					return fetch(event.request);
				}
			})
			.catch(function(err) {
				swLog('Error ', err + ' ' + event.request.url);
			})
		);
	}
);

// clear old versions of the cache
self.addEventListener('activate', function(event) {
	return event.waitUntil(
		caches.keys().then(function(cacheNames) {
			cacheNames.forEach(function(cacheName) {
				if(cacheName === staticCache ||
				cacheName === indexCache) {
					swLog(cacheName, 'keep');
				} else {
					swLog(cacheName, 'delete');
					return caches.delete(cacheName);
				}
			});
		}).then(function() {
			return self.clients.claim();
		})
	);
});
