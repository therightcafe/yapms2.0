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
		if(host !== "localhost") {
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-132710089-1');
		}
	</script>

	<script data-ad-client="ca-pub-1660456925957249" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

	<link rel="icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	<link rel="shortcut icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
	<script async src="./app/res/fontawesome/js/all.min.js"></script>

	<link rel="prerender" href="https://www.yapms.com/app/?t=USA_2020_presidential">
	
	<?php
		$mobile = false;
		if(strpos($_SERVER['HTTP_USER_AGENT'], 'Mobi')) {
			$mobile = true;	
		} else {
			$mobile = false;	
		}

		$redesign = false;

		if($_COOKIE['redesign'] === 'true' || isset($_COOKIE['redesign']) === false) {
			$redesign = true;
		}

		if($redesign) {
			echo '<link rel="stylesheet" type="text/css" href="./v2/style/style.css">';
			if($mobile) {
				echo '<link rel="stylesheet" type="text/css" href="./v2/style/mobile-navigation.css">';
			} else {
				echo '<link rel="stylesheet" type="text/css" href="./v2/style/desktop-navigation.css">';
			}
		} else {
			echo '<link rel="stylesheet" type="text/css" href="./v1/style.css">';
		}
	?>
</head>

<body>

<?php
	if($redesign) {
		require './v2/html/body.php';
		echo '<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
			<script src="./v2/script/mobile-navigation.js"></script>
			<script src="./v2/script/bookmark.js"></script>
			<script src="./v2/script/cookies.js"></script>
			<script>
			if(gtag) {
				gtag("event", "Home Page", {
					"event_category": "Home Page Version",
					"event_label": "Home Page New",
					"non_interaction": true
				});
			} else {
				console.log("No google analytics detected");
			}
			</script>';
	} else {
		require './v1/body.php';
		echo 'if(gtag) {
				gtag("event", "Home Page", {
					"event_category": "Home Page Version",
					"event_label": "Home Page Old",
					"non_interaction": true
				});
			} else {
				console.log("No google analytics detected");
			}
			</script>';
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
			install.style.display = 'inline-block';
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
			gtag('event', 'Home Page', {
				'event_category': 'Install',
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
				gtag('event', 'Home Page', {
					'event_category': 'Warning',
					'event_label': 'Warning displayed',
					'non_interaction': true
				});
			}
		}
	}

	function refetchHome() {
		if('serviceWorker' in navigator) {
			navigator.serviceWorker.register('../sw.js')
			.then(function(reg) {
				reg.active.postMessage("refetch-home");
				setTimeout(function() {
					location.reload();
				}, 150);
			});
		} else {
			location.reload();
		}
	}
	</script>
</body>
</html>
