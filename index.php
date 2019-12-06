<!DOCTYPE html>
<html class="noSelect" lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Create and share interactive political maps for countries all across the world. Including the USA, UK, Canada, Germany and more!">
	<meta name="keywords" content="Map,Election,Political,Interactive,Simulator,Electoral,270,2020,Forecast,Historical,Voting,Vote">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<meta property="og:title" content="YAPms - Yet Another Political Map Simulator">
	<meta property="og:description" content="Interactive Political Maps">
	<meta property="og:image:type" content="image/jpeg">
	<meta property="og:site_name" content="yapms.com">

	<meta property="og:image" content="http://www.yapms.com/app/res/yapms-96.png">
	<meta property="og:image:secure_url" content="https://www.yapms.com/app/res/yapms-96.png">

	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="yapms.com">
	<meta name="twitter:description" content="Interactive Political Maps">

	<meta property="twitter:image" content="https://www.yapms.com/app/res/yapms-96.png">
	
	<meta name="theme-color" content="#ffffff"/>
	<link rel="icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	<link rel="apple-touch-icon" href="./res/yapms-192.png"/>
	<link rel="shortcut icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	<link rel="manifest" href="./manifest.json">

	<title>YAPms - Yet Another Political Map Simulator</title>

	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132710089-1"></script>
	<script>
		var host = window.location.hostname;
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-132710089-1');
	</script>

	<script data-ad-client="ca-pub-1660456925957249" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

	<link rel="icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	<link rel="shortcut icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
	<script async src="./app/res/fontawesome/js/all.min.js"></script>

	<link rel="prerender" href="https://www.yapms.com/app/?t=USA_2020_presidential">
	
	<?php
		$redesign = isset($_GET['redesign']) && $_GET['redesign'] === 'true';

		if($redesign) {
			echo '<link rel="stylesheet" type="text/css" href="style/homepage-v2-desktop.css">';
		} else {
			echo '<link rel="stylesheet" type="text/css" href="style.css">';
		}
	?>
</head>

<body>

<?php
	if($redesign) {
		require './html/v2/desktop.php';
	} else {
		require './html/homepage-v1.php';
	}
?>

	<script>
	if('serviceWorker' in navigator) {
		navigator.serviceWorker
		.register('./sw.js')
		.then(function(a) {
			console.log('SW: registered');
			if(a.waiting && a.active) {
				console.log('SW: update found');
			}
		}, function(err) {
			console.log('SW: register error ', err);
		});
	} else {
		console.log('No service worker detected');
	}

	var deferredPrompt = null;
	window.addEventListener('beforeinstallprompt', (e) => {
		deferredPrompt = e;
		var install = document.getElementById('installbutton');
		if(install) {
			console.log('Display Install Button');
			install.style.display = 'inline';
			install.onclick = function() {
				install.style.display = 'none';
				deferredPrompt.prompt();
				deferredPrompt.userChoice.then((result) => {
					deferredPrompt = null;
				});
			}
		}	
	});

	window.addEventListener('appinstalled', (evt) => {
		if(gtag) {
			gtag('event', 'install', {
				'event_category': 'install',
				'event_label': 'User installed to homescreen',
				'non_interaction': false
			});
		}
	});

	var ref = document.referrer;
	if(ref.includes('android-app')) {
		var warning = document.getElementById('warning');
		if(warning) {
			warning.style.display = 'inline-block';
			if(gtag) {
				gtag('event', 'warning', {
					'event_category': 'warning',
					'event_label': 'Warning displayed',
					'non_interaction': true
				});
			}
		}
	}
	</script>
</body>
</html>
