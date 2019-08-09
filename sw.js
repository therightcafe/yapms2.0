var dynamicCache = 'd0.44.100';
var staticCache = 's0.15.100';

var cookies = {

};

function swLog(cache, message) {
	console.log('SW ' + cache + ': ' + message + ' ( ' + dynamicCache + ' / ' + staticCache + ' )');
}

function messageClient(msg) {
	clients.matchAll().then(clients => {
		clients.forEach(client => {
			client.postMessage('SW: ' + msg);
		});
	});
}

self.addEventListener('message', function(event) {
	var split = event.data.split(' ');
	if(split[0] = 'c') {
		cookies[split[1]] = split[2];
	}
	console.log(event.data);
});

self.addEventListener('install', function(event) {
	self.skipWaiting();
	event.waitUntil(
		caches.open(staticCache).then(function(cache) {
			swLog('flycatch', 'installing');
			return cache.addAll([
			]);
		}));
	event.waitUntil(
		caches.open(staticCache).then(function(cache) {
			swLog(staticCache, 'installing');
			return cache.addAll([
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
				'./app/res/brazil_states.svg',

				'./app/req_congress.php',
				
				'./app/res/lte.jpg',
				'./app/res/redeagletv.png',

				'./app/res/presets/Current_house',
				'./app/res/presets/Current_senate',
				'./app/res/presets/2016_presidential_county',

				'./app/res/presets/2020_cook',
				'./app/res/presets/2020_inside',
				'./app/res/presets/2020_sabatos',
				
				'./app/data/gubernatorial_2018',
				'./app/data/gubernatorial_2020',
				'./app/data/gubernatorial_current',
				'./app/data/gubernatorial_open',
				'./app/data/senatorial_2020',
				'./app/data/senatorial_current',
				'./app/data/senatorial_open',

				'./app/res/fonts/roboto/roboto-v20-latin-regular.eot',
				'./app/res/fonts/roboto/roboto-v20-latin-regular.svg',
				'./app/res/fonts/roboto/roboto-v20-latin-regular.ttf',
				'./app/res/fonts/roboto/roboto-v20-latin-regular.woff',
				'./app/res/fonts/roboto/roboto-v20-latin-regular.woff2',

				'./app/res/fontawesome/css/all.min.css',
				'./app/res/fontawesome/webfonts/fa-regular-400.woff',
				'./app/res/fontawesome/webfonts/fa-regular-400.woff2',
				'./app/res/fontawesome/webfonts/fa-solid-900.woff',
				'./app/res/fontawesome/webfonts/fa-solid-900.woff2',

				'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js',
				'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.5.0',
				'https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.5.0/dist/svg-pan-zoom.min.js',
				'https://code.jquery.com/jquery-3.4.1.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js',

				'./app/manifest.json'
			]).then(function() {
				for(var i = 1864; i < 2016; i += 4) {
					cache.add('./app/res/presets/' + i + '_presidential');
				}

				return cache;
			});
		}));
	event.waitUntil(
		caches.open(dynamicCache).then(function(cache) {
			swLog(dynamicCache, 'installing');
			return cache.addAll([
				'./',
				'./index.php',
				'./offline.php',
				'./style.css',

				'./app/',

				'./app/html/battlechart.html',
				'./app/html/closebutton.svg',
				'./app/html/loading.svg',

				'./app/src/main.js',
				'./app/src/mobile.js',
				'./app/src/presets.js',
				'./app/src/loadmap.js',
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
				'./app/src/deferedImages.js',
				
				'./app/?l=en',
				'./app/index.php?l=en&l=en',
				'./app/?t=Current_house&l=en&l=en',
				'./app/?t=Current_senate&l=en',
				'./app/?t=2016_presidential_county&l=en',
				'./app/?t=2020_presidential&l=en',
				'./app/?t=2020_senatorial&l=en',
				'./app/?t=2020_gubernatorial&l=en',
				'./app/?t=2020_democratic_primary&l=en',
				'./app/?t=2020_republican_primary&l=en',
				'./app/?t=USA_county&l=en',
				'./app/?t=USA_congressional&l=en',
				'./app/?t=USA_gubernatorial&l=en',
				'./app/?t=USA_senatorial&l=en',
				'./app/?t=USA_takeall&l=en',
				'./app/?t=USA_proportional&l=en',
				'./app/?t=Germany_states&l=en',
				'./app/?t=Germany_constituencies&l=en',
				'./app/?t=Spain_constituencies&l=en',
				'./app/?t=Italy_states&l=en',
				'./app/?t=UnitedKingdom_constituencies&l=en',
				'./app/?t=Canada_provinces&l=en',
				'./app/?t=Canada_constituencies&l=en',
				'./app/?t=Australia_constituencies&l=en',
				'./app/?t=Australia_states&l=en',
				'./app/?t=Brazil_deputies&l=en',
				
				'./app/?l=de',
				'./app/index.php?l=de',
				'./app/?t=Current_house&l=de',
				'./app/?t=Current_senate&l=de',
				'./app/?t=2016_presidential_county&l=de',
				'./app/?t=2020_presidential&l=de',
				'./app/?t=2020_senatorial&l=de',
				'./app/?t=2020_gubernatorial&l=de',
				'./app/?t=2020_democratic_primary&l=de',
				'./app/?t=2020_republican_primary&l=de',
				'./app/?t=USA_county&l=de',
				'./app/?t=USA_congressional&l=de',
				'./app/?t=USA_gubernatorial&l=de',
				'./app/?t=USA_senatorial&l=de',
				'./app/?t=USA_takeall&l=de',
				'./app/?t=USA_proportional&l=de',
				'./app/?t=Germany_states&l=de',
				'./app/?t=Germany_constituencies&l=de',
				'./app/?t=Spain_constituencies&l=de',
				'./app/?t=Italy_states&l=de',
				'./app/?t=UnitedKingdom_constituencies&l=de',
				'./app/?t=Canada_provinces&l=de',
				'./app/?t=Canada_constituencies&l=de',
				'./app/?t=Australia_constituencies&l=de',
				'./app/?t=Australia_states&l=de',
				'./app/?t=Brazil_deputies&l=de'
			]).then(function() {
				for(var i = 1864; i < 2016; i += 4) {
					cache.add('./app/?t=' + i + '_presidential');
				}
				return cache;
			});
		})
	);
});

// first see if request is in cache, then check web
self.addEventListener('fetch', function(event) {
	var url = new URL(event.request.url);
	var params = new URLSearchParams(url);

	var t = params.get('t');
	var m = params.get('m');
	var l = 'de';

	var realURL = "./app/?";
	if(t) {
		realURL += 't=' + t;
	} else if(m) {
		realURL += 'm=' + m;
	}

	realURL += '&l=' + l;

	var req = new Request(url);

	event.respondWith(
		caches.match(req)
			.then(function(response) {
				if(response) {
					swLog('Cache' , 'fetch ' + event.request.url);
					return response;
				} else if(event.request.url.includes('yapms.com/app/') === true &&
						event.request.url.includes('yapms.com/app/req_articles.php') === false &&
						event.request.url.includes('yapms.com/app/?m=') === false &&
						event.request.url.includes('yapms.com/app/savemap.php') === false) {
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
				swLog('error ' + err + ' ' + event.request.url);
			})
		);
	}
);

// clear old versions of the cache
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			cacheNames.forEach(function(cacheName) {
				if(cacheName === dynamicCache ||
					cacheName === staticCache) {
					swLog(cacheName, 'keep');
				} else {
					swLog(cacheName, 'delete');
					return caches.delete(cacheName);
				}
			});
		})
	);
});
