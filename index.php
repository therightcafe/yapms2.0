<!DOCTYPE html>
<?php echo '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' ?>
<html class="noSelect" lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Presidential, Senatorial, Congressional, Guberntorial and Primary political map simulator.">
	<meta name="keywords" content="Map,Election,Political,Interactive,Simulator,Electoral,270,2020">
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

	<title>YAPms - Yet Another Political Map Simulator</title>
	
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132710089-1"></script>
	<script>
		var host = window.location.hostname;
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-132710089-1');
	</script>
	
	<link rel="icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	<link rel="shortcut icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<div id="info">
		<div id="topbar">
			<h1> YAPms - Yet Another Political Map Simulator </h1>
		</div>

		<div id="welcome" class="infobox">

			<p>
				YAPms is a tool for creating and sharing political maps
			</p>

			<p>
				<b>Supported Browsers:</b>
				Chrome, Firefox and Opera
			</p>
			
			<p> 
				<b>Contact Email:</b>
				<a style="color:blue;" href="mailto:bugreport@yapms.com">bugreport@yapms.com</a> 
			</p>
		</div>
		
		<br>

		<a href="https://play.google.com/store/apps/details?id=com.fishstudio.yapms&hl=en_GB">
			<div class="infobox link">
				Download Android App
			</div>
		</a>

		<a href="https://discord.gg/WQh5fHU">
			<div class="infobox link">
				Join Our Discord
			</div>
		</a>
	</div>

	<br>

	<div class="map-type-box">	
	<div class="map-type-header">
		USA - 2020 Maps	
	</div>

	<div>	
		<a href="./app/?t=2020_presidential">
			<div class="map-button">
				Presidential
			</div>
		</a>

		<a href="./app/?t=2020_gubernatorial">
			<div class="map-button">
				Gubernatorial
			</div>
		</a>
		
		<a href="./app/?t=2020_senatorial">
			<div class="map-button">
				Senatorial
			</div>
		</a>

		<br>	

		<a href="./app/?t=2020_democratic_primary">
			<div class="map-button">
				Democratic Primary
			</div>
		</a>

		<a href="./app/?t=2020_republican_primary">
			<div class="map-button">
				Republican Primary
			</div>
		</a>
	</div>
	</div>
	
	<div class="map-type-box">	
	<div class="map-type-header">
		USA - 2020 Forecasts
	</div>
	<div>
		<a href="./app/?t=2020_cook">
			<div class="map-button">
				Cook Political Report
			</div>
		</a>

		<a href="./app/?t=2020_inside">
			<div class="map-button">
				Inside Elections
			</div>
		</a>

		<br>

		<a href="./app/?t=2020_sabatos">
			<div class="map-button">
				Sabatos Crystal Ball
			</div>
		</a>
	</div>
	</div>

	<br>
	
	<div class="map-type-box">	
	<div class="map-type-header">
		USA - Current
	</div>
		
	<div>
		<a href="./app/?t=Current_house">
			<div class="map-button">
				House
			</div>
		</a>
		
		<a href="./app/?t=Current_senate">
			<div class="map-button">
				Senate
			</div>
		</a>
	</div>
	</div>

	<div class="map-type-box">	
	<div class="map-type-header">
		USA - Open Maps
	</div>

	<div>
		<a href="./app/?t=USA_senatorial">
			<div class="map-button">
				Senatorial
			</div>
		</a>
		
		<a href="./app/?t=USA_gubernatorial">
			<div class="map-button">
				Gubernatorial
			</div>
		</a>

		<br>
		
		<a href="./app/?t=USA_congressional">
			<div class="map-button">
				Congressional
			</div>
		</a>
		
		<a href="./app/?t=USA_county">
			<div class="map-button">
				Counties
			</div>
		</a>
	</div>
	</div>
	
	<div class="map-type-box">	
	<div class="map-type-header">
		USA - Other Maps	
	</div>
		
	<div>
		<a href="./app/?t=USA_takeall">
			<div class="map-button">
				Take All
			</div>
		</a>
		
		<a href="./app/?t=USA_proportional">
			<div class="map-button">
				Proportional
			</div>
		</a>

		<br>

		<a href="./app/?t=USA_split_maine">
			<div class="map-button">
				Split Maine
			</div>
		</a>

		<a href="./app/?t=USA_congressional_2008">
			<div class="map-button">
				Congressional 2008
			</div>
		</a>
	</div>
	</div>

	<br>

	<div class="map-type-box">
	<div class="map-type-header">
		USA - Historical - Post WW2
	</div>
	<div>	
		<a href="./app/?t=2016_presidential">
			<div class="map-button">
				2016 Presidential
			</div>
		</a>
		<a href="./app/?t=2012_presidential">
			<div class="map-button">
				2012 Presidential
			</div>
		</a>
		<a href="./app/?t=2008_presidential">
			<div class="map-button">
				2008 Presidential
			</div>
		</a>
		<br>
		<a href="./app/?t=2004_presidential">
			<div class="map-button">
				2004 Presidential
			</div>
		</a>
		<a href="./app/?t=2000_presidential">
			<div class="map-button">
				2000 Presidential
			</div>
		</a>
		<a href="./app/?t=1996_presidential">
			<div class="map-button">
				1996 Presidential
			</div>
		</a>
		<br>
		<a href="./app/?t=1992_presidential">
			<div class="map-button">
				1992 Presidential
			</div>
		</a>
		<a href="./app/?t=1988_presidential">
			<div class="map-button">
				1988 Presidential
			</div>
		</a>
		<a href="./app/?t=1984_presidential">
			<div class="map-button">
				1984 Presidential
			</div>
		</a><br>

		<a href="./app/?t=1980_presidential">
			<div class="map-button">
				1980 Presidential
			</div>
		</a>
		<a href="./app/?t=1976_presidential">
			<div class="map-button">
				1976 Presidential
			</div>
		</a>
		<a href="./app/?t=1972_presidential">
			<div class="map-button">
				1972 Presidential
			</div>
		</a><br>

		<a href="./app/?t=1968_presidential">
			<div class="map-button">
				1968 Presidential
			</div>
		</a>
		<a href="./app/?t=1964_presidential">
			<div class="map-button">
				1964 Presidential
			</div>
		</a>
		<a href="./app/?t=1960_presidential">
			<div class="map-button">
				1960 Presidential
			</div>
		</a><br>

		<a href="./app/?t=1956_presidential">
			<div class="map-button">
				1956 Presidential
			</div>
		</a>
		<a href="./app/?t=1952_presidential">
			<div class="map-button">
				1952 Presidential
			</div>
		</a>
		<a href="./app/?t=1948_presidential">
			<div class="map-button">
				1948 Presidential
			</div>
		</a><br>
		</div>
		</div>

		<div class="map-type-box">
		<div class="map-type-header">
			USA - Historical - Pre WW2
		</div>
		<a href="./app/?t=1944_presidential">
			<div class="map-button">
				1944 Presidential
			</div>
		</a>
		<a href="./app/?t=1940_presidential">
			<div class="map-button">
				1940 Presidential
			</div>
		</a>
		<a href="./app/?t=1936_presidential">
			<div class="map-button">
				1936 Presidential
			</div>
		</a><br>

		<a href="./app/?t=1932_presidential">
			<div class="map-button">
				1932 Presidential
			</div>
		</a>
		<a href="./app/?t=1928_presidential">
			<div class="map-button">
				1928 Presidential
			</div>
		</a>
		<a href="./app/?t=1924_presidential">
			<div class="map-button">
				1924 Presidential
			</div>
		</a><br>

		<a href="./app/?t=1920_presidential">
			<div class="map-button">
				1920 Presidential
			</div>
		</a>
		<a href="./app/?t=1916_presidential">
			<div class="map-button">
				1916 Presidential
			</div>
		</a>
		<a href="./app/?t=1912_presidential">
			<div class="map-button">
				1912 Presidential
			</div>
		</a><br>
		
		<a href="./app/?t=1908_presidential">
			<div class="map-button">
				1908 Presidential
			</div>
		</a>
		
		<a href="./app/?t=1904_presidential">
			<div class="map-button">
				1904 Presidential
			</div>
		</a>
		
		<a href="./app/?t=1900_presidential">
			<div class="map-button">
				1900 Presidential
			</div>
		</a><br>

		<a href="./app/?t=1896_presidential">
			<div class="map-button">
				1896 Presidential
			</div>
		</a>
		<a href="./app/?t=1892_presidential">
			<div class="map-button">
				1892 Presidential
			</div>
		</a>
		<a href="./app/?t=1888_presidential">
			<div class="map-button">
				1888 Presidential
			</div>
		</a><br>

		<a href="./app/?t=1884_presidential">
			<div class="map-button">
				1884 Presidential
			</div>
		</a>
		<a href="./app/?t=1880_presidential">
			<div class="map-button">
				1880 Presidential
			</div>
		</a>
		<a href="./app/?t=1876_presidential">
			<div class="map-button">
				1876 Presidential
			</div>
		</a><br>

		<a href="./app/?t=1872_presidential">
			<div class="map-button">
				1872 Presidential
			</div>
		</a>
		<a href="./app/?t=1868_presidential">
			<div class="map-button">
				1868 Presidential
			</div>
		</a>
		<a href="./app/?t=1864_presidential">
			<div class="map-button">
				1864 Presidential
			</div>
		</a><br>
	</div>
	</div>

	<br>

	<div class="map-type-box">
	<div class="map-type-header">
		Canada
	</div>
	<div>
		<a href="./app/?t=Canada_provinces">
			<div class="map-button">
				Provinces
			</div>
		</a>
		<a href="./app/?t=Canada_constituencies">
			<div class="map-button">
				Constituencies
			</div>
		</a>
	</div>
	</div>

	<div class="map-type-box">
	<div class="map-type-header">
		Germany
	</div>
	<div>
		<a href="./app/?t=Germany_states">
			<div class="map-button">
				States
			</div>
		</a>
		<a href="./app/?t=Germany_constituencies">
			<div class="map-button">
				Constituencies
			</div>
		</a>
		
	</div>
	</div>
	
	<div class="map-type-box">
	<div class="map-type-header">
		United Kingdom
	</div>
	<div>
		<a href="./app/?t=UnitedKingdom_constituencies">
			<div class="map-button">
				Constituencies
			</div>
		</a>
	</div>
	</div>
	
	<div class="map-type-box">
	<div class="map-type-header">
		Spain
	</div>
	<div>
		<a href="./app/?t=Spain_constituencies">
			<div class="map-button">
				Constituencies
			</div>
		</a>
	</div>
	</div>
	
	<div class="map-type-box">
	<div class="map-type-header">
		France
	</div>
	<div>
		<a href="./app/?t=France_constituencies">
			<div class="map-button">
				Constituencies
			</div>
		</a>
	</div>
	</div>
	
	<div class="map-type-box">
	<div class="map-type-header">
		Italy
	</div>
	<div>
		<a href="./app/?t=Italy_states">
			<div class="map-button">
				States
			</div>
		</a>
	</div>
	</div>
	
	<div class="map-type-box">
	<div class="map-type-header">
		Australia
	</div>
	<div>
		<a href="./app/?t=Australia_states">
			<div class="map-button">
				States
			</div>
		</a>
		
		<a href="./app/?t=Australia_constituencies">
			<div class="map-button">
				Constituencies
			</div>
		</a>
	</div>
	</div>
	
	<div class="map-type-box">
	<div class="map-type-header">
		Netherlands	
	</div>
	<div>
		<a href="./app/?t=Netherlands_provinces">
			<div class="map-button">
				Provinces
			</div>
		</a>
		
		<a href="./app/?t=Netherlands_gemeenten">
			<div class="map-button">
				Gemeeten
			</div>
		</a>
	</div>
	</div>
	
	<div class="map-type-box">
	<div class="map-type-header">
		Brazil	
	</div>
	<div>
		<a href="./app/?t=Brazil_deputies">
			<div class="map-button">
				Deputies
			</div>
		</a>
	</div>
	</div>

	<script>
		if('serviceWorker' in navigator) {
			navigator.serviceWorker
			.register('./sw.js')
			.then(function(a) {
				console.log('SW: registered');
			}, function(err) {
				console.log('SW: register error... ', err);
			});
		}
	</script>
</body>
</html>
