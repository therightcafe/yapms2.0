<!DOCTYPE html>
<?php echo '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' ?>
<html class="noSelect" lang="en">

<head>
	<meta charset="UTF-8">
<?php
	include './html/localization.php';
	include './html/description.php';
?>
	<meta name="keywords" content="Map,Election,Political,Interactive,Simulator,Electoral,270,2020,USA,Presidential">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta property="og:title" content="YAPms - Yet Another Political Map Simulator">
	<meta property="og:description" content="Interactive Political Maps">
	<meta property="og:image:type" content="image/jpeg">
	<meta property="og:site_name" content="yapms.com">

	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="yapms.com">
	<meta name="twitter:description" content="Interactive Political Maps">

	<meta name="theme-color" content="#ffffff"/>
	
	<link rel="icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	<link rel="apple-touch-icon" href="./res/yapms-192.png"/>
	<link rel="shortcut icon" href="https://www.yapms.com/favicon.ico" type="image/x-icon"/>
	<link rel="manifest" href="./manifest.json">

	<?php
		$mobile = false;
		
		if(strpos($_SERVER['HTTP_USER_AGENT'], 'Mobi')) {
			$mobile = true;	
			echo '<script>var mobile = true</script>';
		} else {
			$mobile = false;	
			echo '<script>var mobile = false</script>';
		};

		if(isset($_GET["m"]) && !empty($_GET["m"]) &&
			is_numeric($_GET["m"])) {
			echo '<script>' .
				'var php_load_map = true;' .
				'var php_load_type_map = false;' .
				'var php_load_map_id = '.$_GET["m"].';' .
				'</script>';	

			echo '<meta property="og:image" content="http://www.yapms.com/app/maps/' . $_GET["m"] . '.png">';
			echo '<meta property="og:image:secure_url" content="https://www.yapms.com/app/maps/' . $_GET["m"] . '.png">';
			echo '<meta name="twitter:image" content="https://www.yapms.com/app/maps/' . $_GET["m"] . '.png">';
		} else if(isset($_GET["t"]) && !empty($_GET["t"])) {
			echo '<script>' .
				'var php_load_map = false;' .
				'var php_load_type_map = true;' .
				'var php_load_map_id = "' . $_GET["t"] . '";' .
			     '</script>';
				
		} else {
			echo '<script>' .
				'var php_load_map = false;' .
				'var php_load_type_map = false;' .
				'var php_load_map_id = 0;' .
			     '</script>';
		}

		if(mobile === false) {
			echo '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
			<script>
			     (adsbygoogle = window.adsbygoogle || []).push({
				  google_ad_client: "ca-pub-1660456925957249",
				  enable_page_level_ads: true
			     });
			</script>';
		}
	?>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132710089-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'UA-132710089-1');
	</script>

	<style>
<?php
		include './style/fonts.css';
		include './style/menu.css';
		include './style/selectmenu.css';
		include './style/popup.css';
		include './style/legend.css';
		include './style/style.css';
		include './style/battlechart.css';
		include './style/yapnews.css';
		include './style/sidebar.css';
		include './style/yapnews.css';
?>
	</style>

</head>

<body id="body" onresize="onResize()">

<div id="yapms">
<div id="menu-div">
	<button class="click-button" onclick="clearMap()" style="white-space: nowrap;">
	<i class="fas fa-window-close"></i> <?php echo _("Clear") ?>
	</button>

	<button class="click-button" onclick="displayMapMenu()" style="white-space: nowrap;">
	<i class="fas fa-map"></i> <?php echo _("Map") ?>
	</button>

	<button id="modesbutton" class="click-button" onclick="displayModeMenu()" style="white-space: nowrap;">
	<i class="fas fa-cog"></i> <?php echo _("Mode") ?> (<i class="fas fa-paint-brush"></i> <?php echo _("Mode-Option1") ?>)
	</button>

	<button class="click-button" onclick="displayChartMenu()" style="white-space: nowrap;">
	<i class="fas fa-chart-pie"></i> <?php echo _("Chart") ?> 
	</button>

	<button class="click-button" onclick="displayThemeMenu()" style="white-space: nowrap;">
	<i class="fas fa-palette"></i> <?php echo _("Theme") ?> 
	</button>

	<button class="click-button" id="share-button" onclick="share()" style="white-space: nowrap;">
		<i class="fas fa-share-alt"></i> <?php echo _("Share") ?>
	</button>

<?php
if($mobile === false) {
	echo '<button class="click-button" onclick="displayLoadMenu()" style="white-space: nowrap;">
		<i class="fas fa-upload"></i> ' .  _("Load") .
		'</button>';
}
?>

	<button class="click-button" onclick="displayMiscMenu()" style="white-space: nowrap;">
	<i class="fas fa-clipboard"></i> <?php echo _("Misc") ?>
	</button>

	<button class="click-button" style="white-space: nowrap;">
	<a class="click-button" href="https://www.yapms.com/privacypolicy.html" target="_blank" rel="noreferrer">
	<i class="fas fa-user-secret"></i> <?php echo _("Privacy Policy") ?>
	</a>
	</button>

<?php
/* margin-left: auto; moves the button all the way to the right */
if($mobile === false) {
	echo '
<!--<button class="click-button" onclick="togglePresentationMode()" style="white-space: nowrap; margin-left: auto;">
<i class="fab fa-youtube"></i> Presentation
</button>-->
<button class="click-button" onclick="toggleYAPNews()" style="white-space: nowrap; margin-left: auto;">
<i class="fas fa-bars"></i> ' . _("Sidebar") .
'</button>';
}
?>

</div>

<div id="application-loading">
	<div id="application-loading-div">
		<object id="application-loading-image" type="image/svg+xml" data="./html/loading.svg"></object>
	</div>
</div>

<div id="application-sidebar-div">
<div id="application">
	<div id="legend-div">
	</div>

	<div id="chart-div">
		<div id="chart">
		<canvas id="chart-canvas" width="100" height="100"></canvas>
		</div>
		<?php
			include 'html/battlechart.html';
		?>
		<div id="logo-redeagle-div">
		</div>
		<div id="logo-div">
		</div>
	</div>

	<div id="map-div">

	</div>
</div>
<?php
if($mobile === false) {
	echo '<div id="sidebar">' ,
		'<div id="sidebar-header">
			YAPms  
		</div>' ,
'<div id="sidebar-ad">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- sidebar-ad5 -->
<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:300px"
     data-ad-client="ca-pub-1660456925957249"
     data-ad-slot="8033943742"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
</div>',
		'<div id="sidebar-social">
		<a id="sidebar-discord-link" href="https://discord.gg/WQh5fHU" target="_blank"><div id="sidebar-discord" class="sidebar-button">
			Discord
		</div></a>
		<a id="sidebar-reddit-link" href="https://www.reddit.com/r/YAPms/" target="_blank"><div id="sidebar-reddit" class="sidebar-button">
			Reddit
		</div></a>
		</div>',
		'<div id="sidebar-popularvote" class="sidebar-box">
			<h3>
				<span>'
				. _("State Popular Vote") .
				'</span>
			</h3>
			<div id="popularvote-message">' 
			. _("Select a State") .
			'</div>
			<div id="popularvote-state-title">
			</div>
			<div id="popularvote-ranges">
			</div>
		</div>',
		'<div id="sidebar-national-popularvote" class="sidebar-box">
			<h3>
				<span>'
				. _("National Popular Vote") .
				'</span>
			</h3>
			<div id="national-popularvote-ranges">
			</div>
		</div>',
		'<div id="sidebar-popularvote-settings" class="sidebar-box">
			<h3>'
			. _("Settings") .
			'</h3>
			<span class="sidebar-hover-popup"><input type="checkbox" id="popularvote-automargins" onclick="autoMarginsOnClick();" checked>' . _("Settings-Option1") .
				'<div class="tooltip-text">
					Setting the popular vote will also set the color of a state
				</div>
			</span>
			<br>
			<span class="sidebar-hover-popup"><input type="checkbox" id="popularvote-clicksetpv" checked>' . _("Settings-Option2") .
				'<div class="tooltip-text">
					Clicking on a district will set the popular vote to max
				</div>
			</span>
			<br>
			<span class="sidebar-hover-popup"><input type="checkbox" id="popularvote-avoidalmargins" checked>' . _("Settings-Option3") .
				'<div class="tooltip-text">
					Clicking on a district in Nebraska or Maine will not calculate the margin for the AL vote.	
				</div>
			</span>
		</div>',
		'<div id="sidebar-congress" class="sidebar-box">
			<h3><span id="sidebar-congress-district">District</span></h3>
			<div id="sidebar-congress-representative">
			</div>
			<div id="sidebar-congress-party">
			</div>
		</div>',
		'<div id="sidebar-shortcuts" class="sidebar-box">
			<h3>' . _("Shortcuts") . '</h3>
			<ul>
				<li>
					F - ' . _("Shortcut-F") . 
				'</li>
				<!--
				<li>
					1 - ' . _("Mode-Option1") .
				'</li>
				<li>
					2 - ' . _("Mode-Option2") .
				'</li>
				<li>
					3 - ' . _("Mode-Option3") .
				'</li>
				<li>
					4 - ' . _("Mode-Option4") .
				'</li>
				<li>
					5 - ' . _("Mode-Option5") .
				'</li>
				<li>
					6 - ' . _("Mode-Option6") .
				'</li>
				-->
			</ul>
		</div>',
		'<div id="yapnews-articles">
		</div>' ,
	'</div>';
}
?>
</div>
</div>

<div id="demdel" class="popup">
	<h2 id="demdel-message"></h2>
	<div id="demdel-ranges">
	</div>
	<input id="demdel-state-name" type="hidden">
	<br>
	<button class="setbutton" onclick="setDelegates(this)">set</button>
</div>

<div id="ecedit" class="popup">
	<h2 id="ecedit-message"></h2>
	<input id="state-ec" type="number" name="value" min="1" max="10000" step="1">
	<input id="state-id" type="hidden">
	<button class="setbutton" onclick="setEC(this);">set</button>
</div>

<div id="candidateedit" class="popup">
	<h2 id="candidateedit-message"></h2>
	Name <input id="candidate-name" type="text" name="name"><br><br>
	Solid <input id="candidate-solid" type="color"><br>
	Likely <input id="candidate-likely" type="color"><br>
	Lean <input id="candidate-lean" type="color"><br>
	Tilt <input id="candidate-tilt" type="color"><br><br>
	<input id="candidate-originalName" type="hidden">
	<button class="setbutton" onclick="setCandidate(this)">set</button>
	<!--<button id="deletecandidate" onclick="deleteCandidate(this)">delete</button>-->
</div>

<div id="miscmenu" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Misc") ?></h2>
	<a class="selectmenu-button" onclick="displayVersionInfo()"><?php echo _("Version Info") ?></a>
	<a class="selectmenu-button" onclick="enableFullscreen()"><?php echo _("Fullscreen") ?></a>
	<a class="selectmenu-button" onclick="centerMap()"><?php echo _("Center Map") ?></a>
	<a class="selectmenu-button" onclick="toggleLTELogo()">LTE Logo</a>
	<a class="selectmenu-button" onclick="toggleRedEagleLogo()">RedEagle Logo</a>
</div>

<div id="customcolormenu" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Custom Color Edit") ?></h2>
	<input id="custom-color-name" type="hidden">
	<a class="selectmenu-button"><?php echo _("Solid") ?> <input id="solidcustom" type="color"></a>
	<a class="selectmenu-button"><?php echo _("Likely") ?> <input id="likelycustom" type="color"></a>
	<a class="selectmenu-button"><?php echo _("Leaning") ?> <input id="leaningcustom" type="color"></a>
	<a class="selectmenu-button"><?php echo _("Tilting") ?> <input id="tiltingcustom" type="color"></a>
	<a class="selectmenu-button" onclick="saveCustomColors(); displayAddCandidateMenu()"><?php echo _("Set") ?></a>
</div>

<div id="addcandidatemenu" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Add Candidate") ?></h2>
	<a class="selectmenu-button"><?php echo _("Name") ?><input id="name" type="text"></a>
	<a class="selectmenu-button selectmenu-red" onclick='setColors("red")'><?php echo _("Red Colors") ?></a>
	<a class="selectmenu-button selectmenu-blue" onclick='setColors("blue")'><?php echo _("Blue Colors") ?></a>
	<a class="selectmenu-button selectmenu-green" onclick='setColors("green")'><?php echo _("Green Colors") ?></a>
	<a class="selectmenu-button selectmenu-yellow" onclick='setColors("yellow")'><?php echo _("Yellow Colors") ?></a>
	<div class="selectmenu-button-double">
		<a id="custom1button" class="selectmenu-button-left selectmenu-button selectmenu-button-bold"
		onclick='setColors("custom1")'><?php echo _("Custom") ?> 1</a>	
		<a class="selectmenu-button-right selectmenu-button fas fa-cog"
			onclick='displayCustomColorMenu("custom1")'></a>
	</div>
	<div class="selectmenu-button-double">
		<a id="custom2button" class="selectmenu-button-left selectmenu-button selectmenu-button-bold"
			onclick='setColors("custom2")'><?php echo _("Custom") ?> 2</a>	
		<a class="selectmenu-button-right selectmenu-button fas fa-cog"
			onclick='displayCustomColorMenu("custom2")'></a>
	</div>
	<div class="selectmenu-button-double">
		<a id="custom3button" class="selectmenu-button-left selectmenu-button selectmenu-button-bold"
			onclick='setColors("custom3")'><?php echo _("Custom") ?> 3</a>	
		<a class="selectmenu-button-right selectmenu-button fas fa-cog"
			onclick='displayCustomColorMenu("custom3")'></a>
	</div>
	<div class="selectmenu-button-double">
		<a id="custom4button" class="selectmenu-button-left selectmenu-button selectmenu-button-bold"
			onclick='setColors("custom4")'><?php echo _("Custom") ?> 4</a>	
		<a class="selectmenu-button-right selectmenu-button fas fa-cog"
			onclick='displayCustomColorMenu("custom4")'></a>
	</div>
	<a class="selectmenu-button"><?php echo _("Solid") ?> <input id="solid" type="color"></a>
	<a class="selectmenu-button"><?php echo _("Likely") ?> <input id="likely" type="color"></a>
	<a class="selectmenu-button"><?php echo _("Leaning") ?> <input id="leaning" type="color"></a>
	<a class="selectmenu-button"><?php echo _("Tilt") ?> <input id="tilting" type="color"></a>
	<a class="selectmenu-button" onclick="addCandidate(); closeNotification(this);"><?php echo _("Add") ?></a>
</div>

<div id="deletecandidateconfirm" class="popup">
	<h2><?php echo _("Delete Candidate?") ?></h2>
	<input id="delete-candidate-name" type="hidden">
	<button class="yes-button" onclick='deleteCandidateByName(document.getElementById("delete-candidate-name").value); closeNotification(this);'><?php echo _("Yes") ?></button>
	<button class="no-button" onclick="closeNotification(this);"><?php echo _("No") ?></button>
</div>

<div id="modemenu" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Select Mode") ?></h2>
	<a class="selectmenu-button" id="paintmovebutton" onclick='closeNotification(this); setMode("paintmove")'><i class="fas fa-paint-brush"></i> <?php echo _("Mode-Option1") ?></a>
	<a class="selectmenu-button" onclick='closeNotification(this); setMode("paint")'><i class="fas fa-paint-brush"></i> <?php echo _("Mode-Option2") ?></a>
	<a class="selectmenu-button" id="movebutton" onclick='closeNotification(this); setMode("move")'><i class="fas fa-arrows-alt"></i> <?php echo _("Mode-Option3") ?></a>
	<a class="selectmenu-button" onclick='closeNotification(this); setMode("delete")'><i class="fas fa-eraser"></i> <?php echo _("Mode-Option4") ?></a>
	<a class="selectmenu-button" onclick='closeNotification(this); setMode("ec")'><i class="far fa-edit"></i> <?php echo _("Mode-Option5") ?></a>
	<a class="selectmenu-button" onclick='closeNotification(this); setMode("candidate")'><i class="fas fa-user-edit"></i> <?php echo _("Mode-Option6") ?></a>
</div>

<div id="thememenu" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Theme") ?></h2>	
	<a class="selectmenu-button" onclick='darkPalette()'><?php echo _("Dark") ?></a>
	<a class="selectmenu-button" onclick='greyscalePalette()'><?php echo _("Greyscale") ?></a>
	<a class="selectmenu-button" onclick='terminalPalette()'><?php echo _("Terminal") ?></a>
	<a class="selectmenu-button" onclick='lightPalette()'><?php echo _("Light") ?></a>
	<a class="selectmenu-button" onclick='contrastPalette()'><?php echo _("Contrast") ?></a>
	<a class="selectmenu-button" onclick='metallicPalette()'><?php echo _("Metallic") ?></a>
	<a class="selectmenu-button" onclick='toWinPalette()'><?php echo _("Default") ?></a>
</div>

<div id="chartmenu" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Select Chart") ?></h2>	
	<a class="selectmenu-split"><?php echo _("Chart") ?></a>
	<a class="selectmenu-button" onclick='setChart("horizontalbattle")'><?php echo _("Chart-Option1") ?></a>
	<a class="selectmenu-button" onclick='setChart("verticalbattle")'><?php echo _("Chart-Option2") ?></a>
	<a class="selectmenu-button" onclick='setChart("pie")'><?php echo _("Chart-Option3") ?></a>
	<a class="selectmenu-button" onclick='setChart("pie","bottom")'><?php echo _("Chart-Option4") ?></a>
	<a class="selectmenu-button" onclick='setChart("doughnut")'><?php echo _("Chart-Option5") ?></a>
	<a class="selectmenu-button" onclick='setChart("doughnut", "bottom")'><?php echo _("Chart-Option6") ?></a>
	<a class="selectmenu-button" onclick='setChart("horizontalBar")'><?php echo _("Chart-Option7") ?></a>
	<a class="selectmenu-button" onclick='setChart("none")'><?php echo _("Chart-Option8") ?></a>
	<a class="selectmenu-split"><?php echo _("Chart Settings") ?></a>
	<a class="selectmenu-button" onclick='toggleLegendCounter()'><?php echo _("Chart-Setting1") ?></a>
	<a class="selectmenu-button" onclick='toggleChartLabels()'><?php echo _("Chart-Setting2") ?></a>
	<a class="selectmenu-button" onclick='toggleChartLeans()'><?php echo _("Chart-Setting3") ?></a>
	<a class="selectmenu-button" onclick='toggleLegendLeans()'><?php echo _("Chart-Setting4") ?></a>
</div>

<div id="presetmenu" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>Add Candidates</h2>	
	<a class="selectmenu-split">Custom</a>
	<a class="selectmenu-button" onclick='customColorBackground(); displayAddCandidateMenu();'>Add Custom</a>
	<a class="selectmenu-split">Preset</a>
	<a class="selectmenu-button" onclick='loadPreset("tossup")'>Clear</a>
	<a class="selectmenu-button" onclick='loadPreset("classic")'>R/D</a>
	<a class="selectmenu-button" onclick='loadPreset("libertarian")'>R/D/L</a>
	<a class="selectmenu-button" onclick='loadPreset("green")'>R/D/G</a>
	<a class="selectmenu-button" onclick='loadPreset("majors")'>R/D/G/L</a>
</div>

<!-- UK Maps -->
<div id="mapmenu-uk" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>United Kingdom</h2>
	<a class="selectmenu-button" onclick='closeNotification(this); loadMap("./res/unitedkingdom.svg", 16, 0.075, "congressional", "congressional", "open");'>United Kingdom</a>
</div>

<!-- Canada Maps -->
<div id="mapmenu-canada" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>Canada</h2>
	<a class="selectmenu-button" href="./?t=Canada_provinces"><?php _("Provinces") ?></a>
	<a class="selectmenu-button" href="./?t=Canada_constituencies"><?php _("Constituencies") ?></a>
</div>

<!-- German Maps -->
<div id="mapmenu-germany" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>Germany</h2>
	<a class="selectmenu-button" href="./?t=Germany_states"><?php _("States") ?></a>
	<a class="selectmenu-button" href="./?t=Germany_constituencies"><?php _("Constituencies") ?></a>
</div>

<!-- Australia Maps -->
<div id="mapmenu-australia" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>Australia</h2>
	<a class="selectmenu-button" href="./?t=Australia_states"><?php _("States") ?></a>
	<a class="selectmenu-button" href="./?t=Australia_constituencies"><?php _("Constituencies") ?></a>
</div>

<!-- Netherlands Maps -->
<div id="mapmenu-netherlands" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>Netherlands</h2>
	<a class="selectmenu-button" href="./?t=Netherlands_provinces"><?php _("Provinces") ?></a>
	<a class="selectmenu-button" href="./?t=Netherlands_gemeenten">Gemeeten</a>
</div>

<!-- Italy Maps -->
<div id="mapmenu-italy" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>Italy</h2>
	<a class="selectmenu-button" href="./?t=Italy_states">States</a>
	<!--<a class="selectmenu-button" href="./?t=Italy_constituencies">Constituencies</a>-->
</div>

<!-- USA Maps -->
<div id="mapmenu-usa" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>USA <?php echo _("Maps") ?></h2>
	<a class="selectmenu-split">2020</a>
	<a class="selectmenu-button" href="./?t=2020_presidential"><?php echo _("Presidential") ?></a>
	<a class="selectmenu-button" href="./?t=2020_senatorial"><?php echo _("Senatorial") ?></a>
	<a class="selectmenu-button" href="./?t=2020_gubernatorial"><?php echo _("Gubernatorial") ?></a>
	<a class="selectmenu-split"><?php echo _("Forecasts") ?></a>
	<a class="selectmenu-button" href="./?t=2020_cook">Cook Political Report</a>
	<a class="selectmenu-button" href="./?t=2020_inside">Inside Elections</a>
	<a class="selectmenu-button" href="./?t=2020_sabatos">Sabatos Crystal Ball</a>
	<a class="selectmenu-split"><?php echo _("Primaries") ?></a>
	<a class="selectmenu-button" href="./?t=2020_democratic_primary"><?php echo _("Democratic") ?></a>
	<a class="selectmenu-button" href="./?t=2020_republican_primary"><?php echo _("Republican") ?></a>
	<a class="selectmenu-split"><?php echo _("Current") ?></a>
	<a class="selectmenu-button" href="./?t=Current_house"><?php echo _("House") ?></a>
	<a class="selectmenu-button" href="./?t=Current_senate"><?php echo _("Senate") ?></a>
	<a class="selectmenu-split"><?php echo _("Blank") ?></a>
	<a class="selectmenu-button" href="./?t=USA_senatorial"><?php echo _("Senatorial") ?></a>
	<a class="selectmenu-button" href="./?t=USA_congressional"><?php echo _("Congressional") ?></a>
	<a class="selectmenu-button" href="./?t=USA_gubernatorial"><?php echo _("Gubernatorial") ?></a>
	<a class="selectmenu-button" href="./?t=USA_county"><?php echo _("County") ?></a>
	<a class="selectmenu-button" href="./?t=USA_proportional"><?php echo _("Presidential Proportional") ?></a>
	<a class="selectmenu-button" href="./?t=USA_takeall"><?php echo _("Presidential Take All") ?></a>
	<a class="selectmenu-button" href="./?t=USA_split_maine"><?php echo _("Presidential Split Maine") ?></a>
	<a class="selectmenu-button" href="./?t=USA_congressional_2008"><?php echo _("Congressional") ?> 2008</a>
</div>

<!-- USA Historical Maps -->
<div id="mapmenu-usa-historical" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>USA Historical Maps</h2>
	<a class="selectmenu-button" href="./?t=2016_presidential_county"><?php echo _("Presidential") . " " . _("County") ?> 2016</a>
	<a class="selectmenu-button" href="./?t=2016_presidential"><?php echo _("Presidential") ?> 2016</a>
	<a class="selectmenu-button" href="./?t=2012_presidential"><?php echo _("Presidential") ?> 2012</a>
	<a class="selectmenu-button" href="./?t=2008_presidential"><?php echo _("Presidential") ?> 2008</a>
	<a class="selectmenu-button" href="./?t=2004_presidential"><?php echo _("Presidential") ?> 2004</a>
	<a class="selectmenu-button" href="./?t=2000_presidential"><?php echo _("Presidential") ?> 2000</a>
	<a class="selectmenu-button" href="./?t=1996_presidential"><?php echo _("Presidential") ?> 1996</a>
	<a class="selectmenu-button" href="./?t=1992_presidential"><?php echo _("Presidential") ?> 1992</a>
	<a class="selectmenu-button" href="./?t=1988_presidential"><?php echo _("Presidential") ?> 1988</a>
	<a class="selectmenu-button" href="./?t=1984_presidential"><?php echo _("Presidential") ?> 1984</a>
	<a class="selectmenu-button" href="./?t=1980_presidential"><?php echo _("Presidential") ?> 1980</a>
	<a class="selectmenu-button" href="./?t=1976_presidential"><?php echo _("Presidential") ?> 1976</a>
	<a class="selectmenu-button" href="./?t=1972_presidential"><?php echo _("Presidential") ?> 1972</a>
	<a class="selectmenu-button" href="./?t=1968_presidential"><?php echo _("Presidential") ?> 1968</a>
	<a class="selectmenu-button" href="./?t=1964_presidential"><?php echo _("Presidential") ?> 1964</a>
	<a class="selectmenu-button" href="./?t=1960_presidential"><?php echo _("Presidential") ?> 1960</a>
	<a class="selectmenu-button" href="./?t=1956_presidential"><?php echo _("Presidential") ?> 1956</a>
	<a class="selectmenu-button" href="./?t=1952_presidential"><?php echo _("Presidential") ?> 1952</a>
	<a class="selectmenu-button" href="./?t=1948_presidential"><?php echo _("Presidential") ?> 1948</a>
	<a class="selectmenu-button" href="./?t=1944_presidential"><?php echo _("Presidential") ?> 1944</a>
	<a class="selectmenu-button" href="./?t=1940_presidential"><?php echo _("Presidential") ?> 1940</a>
	<a class="selectmenu-button" href="./?t=1936_presidential"><?php echo _("Presidential") ?> 1936</a>
	<a class="selectmenu-button" href="./?t=1932_presidential"><?php echo _("Presidential") ?> 1932</a>
	<a class="selectmenu-button" href="./?t=1928_presidential"><?php echo _("Presidential") ?> 1928</a>
	<a class="selectmenu-button" href="./?t=1924_presidential"><?php echo _("Presidential") ?> 1924</a>
	<a class="selectmenu-button" href="./?t=1920_presidential"><?php echo _("Presidential") ?> 1920</a>
	<a class="selectmenu-button" href="./?t=1916_presidential"><?php echo _("Presidential") ?> 1916</a>
	<a class="selectmenu-button" href="./?t=1912_presidential"><?php echo _("Presidential") ?> 1912</a>
	<a class="selectmenu-button" href="./?t=1908_presidential"><?php echo _("Presidential") ?> 1908</a>
	<a class="selectmenu-button" href="./?t=1904_presidential"><?php echo _("Presidential") ?> 1904</a>
	<a class="selectmenu-button" href="./?t=1900_presidential"><?php echo _("Presidential") ?> 1900</a>
	<a class="selectmenu-button" href="./?t=1896_presidential"><?php echo _("Presidential") ?> 1896</a>
	<a class="selectmenu-button" href="./?t=1892_presidential"><?php echo _("Presidential") ?> 1892</a>
	<a class="selectmenu-button" href="./?t=1888_presidential"><?php echo _("Presidential") ?> 1888</a>
	<a class="selectmenu-button" href="./?t=1884_presidential"><?php echo _("Presidential") ?> 1884</a>
	<a class="selectmenu-button" href="./?t=1880_presidential"><?php echo _("Presidential") ?> 1880</a>
	<a class="selectmenu-button" href="./?t=1876_presidential"><?php echo _("Presidential") ?> 1876</a>
	<a class="selectmenu-button" href="./?t=1872_presidential"><?php echo _("Presidential") ?> 1872</a>
	<a class="selectmenu-button" href="./?t=1868_presidential"><?php echo _("Presidential") ?> 1868</a>
	<a class="selectmenu-button" href="./?t=1864_presidential"><?php echo _("Presidential") ?> 1864</a>
</div>

<!-- Mock Maps -->
<div id="mapmenu-lte" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>LTE</h2>
	<a class="selectmenu-button" href="./?t=LTE_presidential">Presidential</a>
	<a class="selectmenu-button" href="./?t=LTE_senatorial">Senatorial</a>
	<a class="selectmenu-button" href="./?t=LTE_congressional">Congressional</a>
</div>

<!-- Maps menu -->
<div id="mapmenu" class="popup selectmenu">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Select Map") ?></h2>
	<a class="selectmenu-split"><?php echo _("Countries") ?></a>
	<a class="selectmenu-button" onclick='closeNotification(this); displayCountryMenu("usa")'; >USA</a>
	<a class="selectmenu-button" onclick='closeNotification(this); displayCountryMenu("usa-historical")'; >USA <?php echo _("Historical") ?></a>
	<a class="selectmenu-button" onclick='closeNotification(this); displayCountryMenu("germany")'; ><?php echo _("Germany") ?></a>
	<a class="selectmenu-button" onclick='closeNotification(this); displayCountryMenu("canada")'><?php echo _("Canada") ?></a>
	<a class="selectmenu-button" onclick='closeNotification(this); displayCountryMenu("australia")'; ><?php echo _("Australia") ?></a>
	<a class="selectmenu-button" onclick='closeNotification(this); displayCountryMenu("netherlands")'; ><?php echo _("Netherlands") ?></a>
	<a class="selectmenu-button" href="./?t=Brazil_deputies"><?php echo _("Brazil") ?></a>
	<a class="selectmenu-button" href="./?t=Spain_constituencies"><?php echo _("Spain") ?></a>
	<a class="selectmenu-button" href="./?t=Italy_states"><?php echo _("Italy") ?></a>
	<a class="selectmenu-button" href="./?t=UnitedKingdom_constituencies"><?php echo _("United Kingdom") ?></a>
	<a class="selectmenu-button" href="./?t=France_constituencies"><?php echo _("France") ?></a>
	<a class="selectmenu-button" href="./?t=EuropeanUnion"><?php echo _("EU") ?></a>
	<a class="selectmenu-button" href="./?t=World"><?php echo _("World") ?></a>
	<a class="selectmenu-split">Mock</a>
	<a class="selectmenu-button" onclick='closeNotification(this); displayCountryMenu("lte")'; >LTE</a>
</div> 

<div id="notification" class="popup">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 id="notification-title"></h2>
	<p id="notification-message"></p>
</div>

<div id="notification-update-serviceworker" class="popup">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>New Version Installed</h2>
	<p>Click reload to start using the update</p>
	<button class="yes-button" onclick='closeNotification(this); location.reload();'>Reload</button>
	<button class="no-button" onclick="closeNotification(this);">Skip</button>
</div>

<div id="share" class="popup">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Share Link") ?></h2>
	<div id="shareurl"></div>
<?php 
if($mobile === false) {
	echo '<div><a id="downloadbutton" class="download-button"><i class="fas fa-download"></i>  ' . _("Download") . '</a></div>';
}
?>
	<object id="loading-animation" type="image/svg+xml" data="./html/loading.svg">Error</object>
	<img id="screenshotimg"/>
	<div id="captcha-notice">This site is protected by reCAPTCHA and the Google
	<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and
	<a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply. </div>
</div>

<div id="loadmenu" class="popup">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Load From File") ?></h2>
	<p><?php echo _("Load-Menu-Message") ?></p>
	<form action="load.php" method="post" enctype="multipart/form-data">
		<input type="file" name"file" id="loadfile">
		<input type="button" value="<?php echo _("Load") ?>" onclick='loadFileMap()'>
	</form>
</div>

<div id="versioninfo" class="popup">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Version Info") ?></h2>
	<a id="versioninfo-text"></a>
</div>

<script src="https://www.google.com/recaptcha/api.js?render=6LeDYbEUAAAAANfuJ4FxWVjoxPgDPsFGsdTLr1Jo"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.5.0"></script> 
<script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.5.0/dist/svg-pan-zoom.min.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
<script src="./src/Candidate.js"></script>
<script src="./src/loadmap.js"></script>
<script src="./src/savemap.js"></script>
<script src="./src/data.js"></script>
<script src="./src/State.js"></script>
<script src="./src/htmlControl.js"></script>
<script src="./src/battlechart.js"></script>
<script src="./src/presets.js"></script>
<script src="./src/click.js"></script>
<script src="./src/popularvote.js"></script>
<script src="./src/congress.js"></script>
<script src="./src/keyboard.js"></script>

<script src="./src/main.js"></script>
<?php 
if($mobile === true) {
	echo '<script src="./src/mobile.js"></script>';
} else {
	echo '<script src="./src/yapnews.js"></script>';
}
?>
<script src="./src/html2canvas.min.js"></script>
<script src="./src/deferedImages.js"></script>
<script>
	if('serviceWorker' in navigator) {
		console.log('Attempting to register service worker');
		navigator.serviceWorker
		.register('../sw.js')
		.then(reg => {
			reg.addEventListener('updatefound', () => {
				newWorker = reg.installing;
				newWorker.addEventListener('statechange', () => {
					switch(newWorker.state) {
						case 'installed':
						if(navigator.serviceWorker.controller) {
							displayUpdateServiceWorker();
						}

						if(typeof gtag !== 'undefined') {
							gtag('event', 'upgrade', {
								'event_category': 'upgrade',
								'event_label': "Upgrade from " + currentCache
							});
						}
						break;
						default:
					}
				});
			});
		});
	}
</script>
</body>
</html>
