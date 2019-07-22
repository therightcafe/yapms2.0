var dynamicCache = 'd0.34.3';
var staticCache = 's0.6.3';

function swLog(cache, message) {
	console.log('SW ' + cache + ': ' + message + ' ( ' + dynamicCache + ' / ' + staticCache + ' )');
}

self.addEventListener('install', function(event) {
	self.skipWaiting();
	event.waitUntil(
		caches.open(staticCache).then(function(cache) {
			swLog(staticCache, 'installing');
			return cache.addAll([
				'./app/res/usa_presidential.svg',
				'./app/res/usa_1972_presidential.svg',
				'./app/res/usa_congressional_2008.svg',
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
				'./app/res/eu.svg',
				'./app/res/world.svg',
				'./app/res/lte_president.svg',
				'./app/res/lte_senate.svg',
				'./app/res/lte_house.svg',

				'./app/req_congress.php',
				
				'./app/res/lte.jpg',
				'./app/res/redeagletv.png',

				'./app/res/presets/current_congress',
				'./app/res/presets/2016_presidential_county',
				'./app/res/presets/2016_presidential',
				'./app/res/presets/2012_presidential',
				'./app/res/presets/2008_presidential',
				'./app/res/presets/2004_presidential',
				'./app/res/presets/2000_presidential',
				'./app/res/presets/1996_presidential',
				'./app/res/presets/1992_presidential',
				'./app/res/presets/1988_presidential',
				'./app/res/presets/1984_presidential',
				'./app/res/presets/1980_presidential',
				'./app/res/presets/1976_presidential',
				'./app/res/presets/1972_presidential',
				'./app/res/presets/1968_presidential',
				'./app/res/presets/1964_presidential',
				'./app/res/presets/1960_presidential',
				'./app/res/presets/1956_presidential',
				'./app/res/presets/1952_presidential',
				'./app/res/presets/1948_presidential',
				'./app/res/presets/1944_presidential',
				'./app/res/presets/1940_presidential',
				'./app/res/presets/1936_presidential',
				'./app/res/presets/1932_presidential',
				'./app/res/presets/1928_presidential',
				'./app/res/presets/1924_presidential',
				'./app/res/presets/1920_presidential',
				'./app/res/presets/1916_presidential',
				'./app/res/presets/1912_presidential',
				'./app/res/presets/1908_presidential',
				'./app/res/presets/1904_presidential',
				'./app/res/presets/1900_presidential',
				'./app/res/presets/1896_presidential',
				'./app/res/presets/1892_presidential',
				'./app/res/presets/1888_presidential',
				'./app/res/presets/1884_presidential',
				'./app/res/presets/1880_presidential',
				'./app/res/presets/1876_presidential',
				'./app/res/presets/1872_presidential',
				'./app/res/presets/1868_presidential',
				'./app/res/presets/1864_presidential',

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
			]);
		}));
	event.waitUntil(
		caches.open(dynamicCache).then(function(cache) {
			swLog(dynamicCache, 'installing');
			return cache.addAll([
				'./',
				'./index.php',
				'./style.css',

				'./app/',
				'./app/index.php',

				'./app/?t=2018_congress',
				'./app/?t=2020_presidential',
				'./app/?t=2020_senatorial',
				'./app/?t=2020_gubernatorial',
				'./app/?t=2020_democratic_primary',
				'./app/?t=2020_republican_primary',
				'./app/?t=USA_county',
				'./app/?t=USA_congressional',
				'./app/?t=USA_congressional_2008',
				'./app/?t=USA_gubernatorial',
				'./app/?t=USA_senatorial',
				'./app/?t=USA_takeall',
				'./app/?t=USA_proportional',
				'./app/?t=Germany_states',
				'./app/?t=Germany_constituencies',
				'./app/?t=Italy_states',
				'./app/?t=UnitedKingdom_constituencies',
				'./app/?t=Canada_provinces',
				'./app/?t=Canada_constituencies',
				'./app/?t=Australia_constituencies',
				'./app/?t=Australia_states',
				'./app/?t=EuropeanUnion',
				'./app/?t=World',

				'./app/html/battlechart.html',
				'./app/html/closebutton.svg',
				'./app/html/description.php',

				'./app/style/battlechart.css',
				'./app/style/legend.css',
				'./app/style/selectmenu.css',
				'./app/style/mobile.css',
				'./app/style/popup.css',
				'./app/style/style.css',

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
				'./app/src/deferedImages.js',
			]);
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
