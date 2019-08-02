var dynamicCache = 'd0.40.4';
var staticCache = 's0.11.3';

function swLog(cache, message) {
	console.log('SW ' + cache + ': ' + message + ' ( ' + dynamicCache + ' / ' + staticCache + ' )');
}

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

				'https://fonts.googleapis.com/css?family=Roboto',
				'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js',
				'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.5.0',
				'https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.5.0/dist/svg-pan-zoom.min.js',
				'https://code.jquery.com/jquery-3.4.1.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js',
				'https://use.fontawesome.com/releases/v5.7.2/css/all.css',

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
				'./app/index.php',

				'./app/?t=Current_house',
				'./app/?t=Current_senate',

				'./app/?t=2016_presidential_county',
				'./app/?t=2020_presidential',
				'./app/?t=2020_senatorial',
				'./app/?t=2020_gubernatorial',
				'./app/?t=2020_democratic_primary',
				'./app/?t=2020_republican_primary',
				'./app/?t=USA_county',
				'./app/?t=USA_congressional',
				'./app/?t=USA_gubernatorial',
				'./app/?t=USA_senatorial',
				'./app/?t=USA_takeall',
				'./app/?t=USA_proportional',
				'./app/?t=Germany_states',
				'./app/?t=Germany_constituencies',
				'./app/?t=Spain_constituencies',
				'./app/?t=Italy_states',
				'./app/?t=UnitedKingdom_constituencies',
				'./app/?t=Canada_provinces',
				'./app/?t=Canada_constituencies',
				'./app/?t=Australia_constituencies',
				'./app/?t=Australia_states',

				'./app/html/battlechart.html',
				'./app/html/closebutton.svg',
				'./app/html/description.php',

				'./app/style/battlechart.css',
				'./app/style/legend.css',
				'./app/style/selectmenu.css',
				'./app/style/mobile.css',
				'./app/style/popup.css',
				'./app/style/style.css',
				'./app/style/sidebar.css',
				'./app/style/menu.css',

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
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				if(response) {
					swLog('Cache' , 'fetch ' + event.request.url);
					return response;
				} else if(event.request.url.includes('yapms.com/app/') === true &&
						event.request.url.includes('yapms.com/app/req_articles.php') === false) {
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
