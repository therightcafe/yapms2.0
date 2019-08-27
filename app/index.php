<!DOCTYPE html>
<?php
	include './html/localization.php';
?>
<html class="noSelect" lang="<?php echo _("GETLANGUAGE") ?>">
<head>
	<meta charset="UTF-8">
<?php
	include './html/description.php';

	echo 
	'<script>
	var language = {' .
		'"Mode": "' . _("Mode") . '",' .	
		'"Mode-Option1": "' . _("Mode-Option1") . '",' .
		'"Mode-Option2": "' . _("Mode-Option2") . '",' .
		'"Mode-Option3": "' . _("Mode-Option3") . '",' .
		'"Mode-Option4": "' . _("Mode-Option4") . '",' .
		'"Mode-Option5": "' . _("Mode-Option5") . '",' .
		'"Mode-Option6": "' . _("Mode-Option6") . '"' .
	'};
	</script>';
?>
	<meta name="keywords" content="Map,Election,Political,Interactive,Simulator,Electoral,270,2020,USA,Presidential">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<meta property="og:image:type" content="image/png">
	<meta property="og:site_name" content="yapms.com">
	<meta property="og:type" content="article">

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

		echo "<!-- {$_SERVER['HTTP_USER_AGENT']} -->";

		if(strpos($_SERVER['HTTP_USER_AGENT'], 'Mobi')) {
			$mobile = true;	
			echo '<script>var mobile = true;</script>';
		} else {
			$mobile = false;	
			echo '<script>var mobile = false;</script>';
		};

		if(isset($_GET["m"]) && !empty($_GET["m"])) {
			echo '<script>' .
				'var php_load_map = true;' .
				'var php_load_type_map = false;' .
				'var php_load_map_id = "' .$_GET["m"] . '";' .
				'</script>';	
			echo '<meta property="og:image:width" content="1200">
			<meta property="og:image:height" content="1200">
			<meta property="og:image:secure_url" content="https://yapms.org/maps/' . $_GET["m"] . '.png">
			<meta property="og:image" content="https://yapms.org/maps/' . $_GET["m"] . '.png">
			<meta name="twitter:image" content="https://yapms.org/maps/' . $_GET["m"] . '.png">
			<meta property="og:url" content="https://www.yapms.com/app/?m=' . $_GET["m"] . '">';
		} else if(isset($_GET["t"]) && !empty($_GET["t"])) {
			echo '<script>' .
				'var php_load_map = false;' .
				'var php_load_type_map = true;' .
				'var php_load_map_id = "' . $_GET["t"] . '";' .
			     '</script>';
			echo '<meta property="og:url" content="https://www.yapms.com/app/?t=' . $_GET["t"] . '">
			<meta property="og:image" content="http://www.yapms.com/app/res/yapms-96.png">
			<meta property="og:image:secure_url" content="https://www.yapms.com/app/res/yapms-96.png">
			<meta name="twitter:image" content="https://www.yapms.com/app/res/yamps-96.png">';
		} else {
			echo '<script>' .
				'var php_load_map = false;' .
				'var php_load_type_map = false;' .
				'var php_load_map_id = "0";' .
			     '</script>';
			echo '<meta property="og:url" content="https://www.yapms.com/app/">
			<meta property="og:image" content="http://www.yapms.com/app/res/yapms-96.png">
			<meta property="og:image:secure_url" content="https://www.yapms.com/app/res/yapms-96.png">
			<meta name="twitter:image" content="https://www.yapms.com/app/res/yamps-96.png">';
		}
	?>
	
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
		(adsbygoogle = window.adsbygoogle || []).push({
		google_ad_client: "ca-pub-1660456925957249",
		enable_page_level_ads: true});
	</script>
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
	?>
	</style>

	<link rel="stylesheet" type="text/css" href="./style/menu.css">
	<link rel="stylesheet" type="text/css" href="./style/selectmenu.css">
	<link rel="stylesheet" type="text/css" href="./style/popup.css">
	<link rel="stylesheet" type="text/css" href="./style/legend.css">
	<link rel="stylesheet" type="text/css" href="./style/style.css">
	<link rel="stylesheet" type="text/css" href="./style/battlechart.css">
	<link rel="stylesheet" type="text/css" href="./style/yapnews.css">
	<link rel="stylesheet" type="text/css" href="./style/sidebar.css">
	<?php
	if($mobile) {
		echo '<link rel="stylesheet" type="text/css" href="./style/mobile.css">';
	}
	?>

	<!--<script src="https://kit.fontawesome.com/c623f9993e.js"></script>-->
	<script src="./res/fontawesome/js/all.min.js"></script>
</head>

<body id="body" onresize="onResize()">

<div id="yapms">
<div id="menu-div">
	<div class="click-button" onclick="clearMap()" style="white-space: nowrap;">
	<i class="fas fa-window-close"></i> <?php echo _("Clear") ?>
	</div>

	<div class="click-button" onclick="displayMapMenu()" style="white-space: nowrap;">
	<i class="fas fa-map"></i> <?php echo _("Map") ?>
	</div>

	<div id="modebutton-paint" class="click-button mode-button" onclick='setMode("paint")' style='opacity: 0.5'>
		<i class="fas fa-paint-brush"></i>
		<div class="tooltip-menu">
			Paint
		</div>
	</div>
	<div id="modebutton-delete" class="click-button mode-button" onclick='setMode("delete")'>
		<i class="fas fa-eraser"></i>
		<div class="tooltip-menu">
			Disable	
		</div>
	</div>
	<div id="modebutton-ec" class="click-button mode-button" onclick='setMode("ec")'>
		<i class="fas fa-edit"></i>
		<div class="tooltip-menu">
			EC Edit
		</div>
	</div>

<?php
	if($mobile === false) {
	echo '<div id="lockbutton" class="click-button lock-button" onclick="toggleLockMap()">
		<i class="fas fa-lock"></i>
		<div class="tooltip-menu">
			Lock Map
		</div>
		</div>';
	}
?>

	<div class="click-button" onclick="displayChartMenu()" style="white-space: nowrap;">
	<i class="fas fa-chart-pie"></i> <?php echo _("Chart") ?> 
	</div>

	<div class="click-button" onclick="displayThemeMenu()" style="white-space: nowrap;">
	<i class="fas fa-palette"></i> <?php echo _("Theme") ?> 
	</div>

	<div class="click-button" id="share-button" onclick="share()" style="white-space: nowrap;">
		<i class="fas fa-share-alt"></i> <?php echo _("Share") ?>
	</div>

<?php
if($mobile === false) {
	echo '<div class="click-button" onclick="displayLoadMenu()" style="white-space: nowrap;">
		<i class="fas fa-upload"></i> ' .  _("Load") .
		'</div>';
}
?>

	<div class="click-button" onclick="displayMiscMenu()" style="white-space: nowrap;">
	<i class="fas fa-clipboard"></i> <?php echo _("Misc") ?>
	</div>

	<div id="languagebutton" class="click-button" onclick="displayLanguageMenu()" style="white-space: nowrap;">
	<i class="fas fa-globe"></i> <?php echo _("Language") ?>
	</div>

	<div class="click-button" style="white-space: nowrap;">
	<a class="click-button" href="https://www.yapms.com/privacypolicy.html" target="_blank" rel="noreferrer">
	<i class="fas fa-user-secret"></i> <?php echo _("Privacy Policy") ?>
	</a>
	</div>

<?php
/* margin-left: auto; moves the button all the way to the right */
if($mobile === false) {
	echo '
<div class="click-button" onclick="toggleYAPNews()" style="white-space: nowrap; margin-left: auto;">
<i class="fas fa-bars"></i> ' . _("Sidebar") .
'</div>';
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
	<div id="legend-div"></div>
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
	<div id="map-div"></div>
</div>
<?php
if($mobile === false) {
	echo '<div id="sidebar">' ,
		'<div id="sidebar-header">
			YAPms  
		</div>' ,
		'<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle adslot_sidebar"
     style="display:inline-block;width:336px;height:280px"
     data-ad-client="ca-pub-1660456925957249"
     data-ad-slot="8033943742"></ins>
<script>
	(adsbygoogle = window.adsbygoogle || []).push({});
</script>',
		'<div id="sidebar-social">
		<a id="sidebar-discord-link" class="social-link" href="https://discord.gg/WQh5fHU" target="_blank"><div id="sidebar-discord" class="sidebar-button">
			Discord
		</div></a>
		<a id="sidebar-android-link" class="social-link" href="https://play.google.com/store/apps/details?id=com.fishstudio.yapms&hl=en_US" target="_blank"><div id="sidebar-android" class="sidebar-button">
			Android
		</div></a>
		<a id="sidebar-reddit-link" class="social-link" href="https://www.reddit.com/r/YAPms/" target="_blank"><div id="sidebar-reddit" class="sidebar-button">
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
			<div class="sidebar-hover-popup"><input type="checkbox" id="popularvote-automargins" onclick="autoMarginsOnClick();" checked>' . _("Settings-Option1") .
				'<div class="tooltip-text">
					Setting the popular vote will also set the color of a state
				</div>
			</div>
			<div class="sidebar-hover-popup"><input type="checkbox" id="popularvote-clicksetpv" checked>' . _("Settings-Option2") .
				'<div class="tooltip-text">
					Clicking on a district will set the popular vote to max
				</div>
			</div>
			<div class="sidebar-hover-popup"><input type="checkbox" id="popularvote-avoidalmargins" checked>' . _("Settings-Option3") .
				'<div class="tooltip-text">
					Clicking on a district in Nebraska or Maine will not calculate the margin for the AL vote.	
				</div>
			</div>
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
<?php
if($mobile) {
	echo '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- mobile-ad -->
<ins class="adsbygoogle adslot_mobile"
	style="display:inline-block;"
	data-full-width-responsive="true"
	data-ad-client="ca-pub-1660456925957249"
	data-ad-slot="8771249229"
</ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>';
}
?>
</div>

<div id="demdel" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 id="demdel-message"></h2>
	</div>
	<div id="demdel-ranges" class="selectmenu-content">
	</div>
	<input id="demdel-state-name" type="hidden">
	<button class="setbutton" onclick="setDelegates(this)">set</button>
</div>

<div id="ecedit" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 id="ecedit-message"></h2>
	</div>
	<div class="selectmenu-content">
	<div class="selectmenu-section"><input id="state-ec" type="number" name="value" min="1" max="10000" step="1"></div>
	<div class="selectmenu-button" onclick="setEC()">
		<div class="selectmenu-button-text"><?php echo _("Apply") ?></div>
	</div>
	<input id="state-id" type="hidden">
	</div>
</div>

<div id="candidateedit" class="popup selectmenu">
	<input id="candidate-originalName" type="hidden">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 id="candidateedit-message"></h2>
	</div>
	<div class="selectmenu-content">
	<div class="selectmenu-button">Name <input id="candidate-name" type="text" name="name"></div>
	<div class="selectmenu-section">Solid <input id="candidate-solid" type="color"></div>
	<div class="selectmenu-section">Likely <input id="candidate-likely" type="color"></div>
	<div class="selectmenu-section">Lean <input id="candidate-lean" type="color"></div>
	<div class="selectmenu-section">Tilt <input id="candidate-tilt" type="color"></div>
	<div class="selectmenu-button" onclick="setCandidate()">
		<div class="selectmenu-button-text"><?php echo _("Apply") ?></div>
	</div>
	<div class="selectmenu-button" onclick='deleteCandidate()'>
		<div class="selectmenu-button-text"><?php echo _("Delete") ?></div>
	</div>
	</div>
</div>

<div id="miscmenu" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Misc") ?></h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-button" onclick="displayVersionInfo()">
		<i class="fas fa-info"></i>
		<div class="selectmenu-button-text"><?php echo _("Version Info") ?></div>
	</a>
	<a class="selectmenu-button" onclick="enableFullscreen()">
		<i class="fas fa-expand-arrows-alt"></i>
		<div class="selectmenu-button-text"><?php echo _("Fullscreen") ?></div>
	</a>
	<a class="selectmenu-button" onclick="centerMap()">
		<i class="fas fa-compress-arrows-alt"></i>
		<div class="selectmenu-button-text"><?php echo _("Center Map") ?></div>
	</a>
	<a class="selectmenu-button" onclick="toggleLTELogo()">
		<i class="fas fa-desktop"></i>
		<div class="selectmenu-button-text">LTE Logo</div>
	</a>
	<a class="selectmenu-button" onclick="toggleRedEagleLogo()">
		<i class="fas fa-desktop"></i>
		<div class="selectmenu-button-text">RedEagle Logo</div>
	</a>
	</div>
</div>

<div id="customcolormenu" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Custom Color Edit") ?></h2>
	</div>
	<div class="selectmenu-content">
	<input id="custom-color-name" type="hidden">
	<div class="selectmenu-section"><?php echo _("Solid") ?> <input id="solidcustom" type="color"></div>
	<div class="selectmenu-section"><?php echo _("Likely") ?> <input id="likelycustom" type="color"></div>
	<div class="selectmenu-section"><?php echo _("Leaning") ?> <input id="leaningcustom" type="color"></div>
	<div class="selectmenu-section"><?php echo _("Tilting") ?> <input id="tiltingcustom" type="color"></div>
	<div class="selectmenu-section" onclick="saveCustomColors(); displayAddCandidateMenu()"><?php echo _("Set") ?></div>
	</div>
</div>

<div id="addcandidatemenu" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Add Candidate") ?></h2>
	</div>
	<div class="selectmenu-content">
	<div class="selectmenu-section"><?php echo _("Name") ?><input id="name" type="text"></div>
	<a class="selectmenu-button selectmenu-red" onclick='setColors("red")'>
		<div class="selectmenu-button-text"><?php echo _("Red Colors") ?></div>
	</a>
	<a class="selectmenu-button selectmenu-blue" onclick='setColors("blue")'>
		<div class="selectmenu-button-text"><?php echo _("Blue Colors") ?></div>
	</a>
	<a class="selectmenu-button selectmenu-green" onclick='setColors("green")'>
		<div class="selectmenu-button-text"><?php echo _("Green Colors") ?></div>
	</a>
	<a class="selectmenu-button selectmenu-yellow" onclick='setColors("yellow")'>
		<div class="selectmenu-button-text"><?php echo _("Yellow Colors") ?></div>
	</a>
	<div class="selectmenu-button-double">
		<a id="custom1button" class="selectmenu-button-left selectmenu-button selectmenu-button-bold" onclick='setColors("custom1")'>
			<div class="selectmenu-button-text"><?php echo _("Custom") ?> 1</div>
		</a>	
		<a class="selectmenu-button-right selectmenu-button fas fa-cog"
			onclick='displayCustomColorMenu("custom1")'></a>
	</div>
	<div class="selectmenu-button-double">
		<a id="custom2button" class="selectmenu-button-left selectmenu-button selectmenu-button-bold" onclick='setColors("custom2")'>
			<div class="selectmenu-button-text"><?php echo _("Custom") ?> 2</div>
		</a>	
		<a class="selectmenu-button-right selectmenu-button fas fa-cog"
			onclick='displayCustomColorMenu("custom2")'></a>
	</div>
	<div class="selectmenu-button-double">
		<a id="custom3button" class="selectmenu-button-left selectmenu-button selectmenu-button-bold" onclick='setColors("custom3")'>
			<div class="selectmenu-button-text"><?php echo _("Custom") ?> 3</div>
		</a>	
		<a class="selectmenu-button-right selectmenu-button fas fa-cog"
			onclick='displayCustomColorMenu("custom3")'></a>
	</div>
	<div class="selectmenu-button-double">
		<a id="custom4button" class="selectmenu-button-left selectmenu-button selectmenu-button-bold" onclick='setColors("custom4")'>
			<div class="selectmenu-button-text"><?php echo _("Custom") ?> 4</div>
		</a>	
		<a class="selectmenu-button-right selectmenu-button fas fa-cog"
			onclick='displayCustomColorMenu("custom4")'></a>
	</div>
	<div class="selectmenu-section"><?php echo _("Solid") ?> <input id="solid" type="color"></div>
	<div class="selectmenu-section"><?php echo _("Likely") ?> <input id="likely" type="color"></div>
	<div class="selectmenu-section"><?php echo _("Leaning") ?> <input id="leaning" type="color"></div>
	<div class="selectmenu-section"><?php echo _("Tilt") ?> <input id="tilting" type="color"></div>
	<div class="selectmenu-button" onclick="addCandidate(); closeAllPopups();">
		<div class="selectmenu-button-text"><?php echo _("Add") ?></div>
	</div>
	</div>
</div>

<div id="deletecandidateconfirm" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Delete Candidate?") ?></h2>
	</div>
	<div class="selectmenu-content">
	<input id="delete-candidate-name" type="hidden">
	<a class="selectmenu-button" onclick='deleteCandidateByName(document.getElementById("delete-candidate-name").value); closeAllPopups();'><?php echo _("Yes") ?></a>
	<a class="selectmenu-button" onclick="closeAllPopups();"><?php echo _("No") ?></a>
	</div>
</div>

<div id="thememenu" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Theme") ?></h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-button" onclick='darkPalette()'>
		<div class="selectmenu-button-text"><?php echo _("Dark") ?></div>
	</a>
	<a class="selectmenu-button" onclick='greyscalePalette()'>
		<div class="selectmenu-button-text"><?php echo _("Greyscale") ?></div>
	</a>
	<a class="selectmenu-button" onclick='terminalPalette()'>
		<div class="selectmenu-button-text"><?php echo _("Terminal") ?></div>
	</a>
	<a class="selectmenu-button" onclick='lightPalette()'>
		<div class="selectmenu-button-text"><?php echo _("Light") ?></div>
	</a>
	<a class="selectmenu-button" onclick='contrastPalette()'>
		<div class="selectmenu-button-text"><?php echo _("Contrast") ?></div>
	</a>
	<a class="selectmenu-button" onclick='metallicPalette()'>
		<div class="selectmenu-button-text"><?php echo _("Metallic") ?></div>
	</a>
	<a class="selectmenu-button" onclick='toWinPalette()'>
		<div class="selectmenu-button-text"><?php echo _("Default") ?></div>
	</a>
	</div>
</div>

<div id="chartmenu" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Select Chart") ?></h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-split">
		<div class="selectmenu-split-text"><?php echo _("Chart") ?></div>
	</a>
	<a class="selectmenu-button" onclick='setChart("horizontalbattle")'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Option1") ?></div>
	</a>
	<a class="selectmenu-button" onclick='setChart("verticalbattle")'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Option2") ?></div>
	</a>
	<a class="selectmenu-button" onclick='setChart("pie")'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Option3") ?></div>
	</a>
	<a class="selectmenu-button" onclick='setChart("pie","bottom")'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Option4") ?></div>
	</a>
	<a class="selectmenu-button" onclick='setChart("doughnut")'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Option5") ?></div>
	</a>
	<a class="selectmenu-button" onclick='setChart("doughnut", "bottom")'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Option6") ?></div>
	</a>
	<a class="selectmenu-button" onclick='setChart("horizontalBar")'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Option7") ?></div>
	</a>
	<a class="selectmenu-button" onclick='setChart("none")'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Option8") ?></div>
	</a>
	<a class="selectmenu-split">
		<div class="selectmenu-split-text"><?php echo _("Chart Settings") ?></div>
	</a>
	<a class="selectmenu-button" onclick='toggleLegendCounter()'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Setting1") ?></div>
	</a>
	<a class="selectmenu-button" onclick='toggleChartLabels()'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Setting2") ?></div>
	</a>
	<a class="selectmenu-button" onclick='toggleChartLeans()'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Setting3") ?></div>
	</a>
	<a class="selectmenu-button" onclick='toggleLegendLeans()'>
		<div class="selectmenu-button-text"><?php echo _("Chart-Setting4") ?></div>
	</a>
	</div>
</div>

<!-- Canada Maps -->
<div id="mapmenu-canada" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 class="selectmenu-display-header">
		<img src="res/flags/can.svg">
		<div class="selectmenu-display-header-text"><?php echo _("Canada") ?></div>
	</h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-button" href="./?t=Canada_provinces">
		<i class="fas fa-square"></i>
		<div class="selectmenu-display-header-text"><?php echo _("Provinces") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=Canada_house_of_commons">
		<i class="fas fa-chevron-down"></i>
		<div class="selectmenu-display-header-text"><?php echo _("House of Commons") ?></div>
	</a>
	</div>
</div>

<!-- German Maps -->
<div id="mapmenu-germany" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 class="selectmenu-display-header">
		<img src="res/flags/ger.svg">
		<div class="selectmenu-display-header-text"><?php echo _("Germany") ?></div>
	</h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-button" href="./?t=Germany_states">
		<i class="fas fa-square"></i>
		<div class="selectmenu-button-text"><?php echo _("States") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=Germany_bundestag">
		<i class="fas fa-chevron-down"></i>
		<div class="selectmenu-button-text"><?php echo _("Bundestag") ?></div>
	</a>
	</div>
</div>

<!-- Australia Maps -->
<div id="mapmenu-australia" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 class="selectmenu-display-header">
		<img src="res/flags/aus.svg">
		<div class="selectmenu-display-header-text"><?php echo _("Australia") ?></div>
	</h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-button" href="./?t=Australia_states">
		<i class="fas fa-square"></i>
		<div class="selectmenu-button-text"><?php echo _("States") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=Australia_house_of_representatives">
		<i class="fas fa-chevron-down"></i>
		<div class="selectmenu-button-text"><?php echo _("House of Representatives") ?></div>
	</a>
	</div>
</div>

<!-- Netherlands Maps -->
<div id="mapmenu-netherlands" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 class="selectmenu-display-header">
		<img src="res/flags/ned.svg">
		<div class="selectmenu-display-header-text"><?php echo _("Netherlands") ?></div>
	</h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-button" href="./?t=Netherlands_provinces">
		<i class="fas fa-chevron-circle-down"></i>
		<div class="selectmenu-button-text"><?php echo _("Provinces") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=Netherlands_gemeenten">
		<i class="fas fa-chevron-down"></i>
		<div class="selectmenu-button-text"><?php echo _("Gemeeten") ?></div>
	</a>
	</div>
</div>

<!-- Russia Maps -->
<div id="mapmenu-russia" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 class="selectmenu-display-header">
		<img src="res/flags/rus.svg">
		<div class="selectmenu-display-header-text"><?php echo _("Russia") ?></div>
	</h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-button" href="./?t=Russia_federal_council">
		<i class="fas fa-chevron-up"></i>
		<div class="selectmenu-button-text"><?php echo _("Federation Council") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=Russia_duma">
		<i class="fas fa-chevron-down"></i>
		<div class="selectmenu-button-text"><?php echo _("Duma") ?></div>
	</a>
	</div>
</div>

<!-- USA Maps -->
<div id="mapmenu-usa" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 class="selectmenu-display-header">
		<img src="res/flags/usa.svg">
		<div class="selectmenu-display-header-text"><?php echo _("USA") ?></div>
	</h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-split"><?php echo _("2020 Elections") ?></a>
	<a class="selectmenu-button" href="./?t=USA_2020_presidential">
		<i class="fas fa-user"></i>
		<div class="selectmenu-button-text"><?php echo _("Presidential") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2020_senate">
		<i class="fas fa-chevron-up"></i>
		<div class="selectmenu-button-text"><?php echo _("Senate") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2020_house">
		<i class="fas fa-chevron-down"></i>
		<div class="selectmenu-button-text"><?php echo _("House") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2020_governors">
		<i class="fas fa-square"></i>
		<div class="selectmenu-button-text"><?php echo _("Governors") ?></div>
	</a>
	<a class="selectmenu-split"><?php echo _("2020 Forecasts") ?></a>
	<a class="selectmenu-button" href="./?t=USA_2020_cook">
		<div class="selectmenu-button-text">Cook Political Report</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2020_inside">
		<div class="selectmenu-button-text">Inside Elections</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2020_sabatos">
		<div class="selectmenu-button-text">Sabatos Crystal Ball</div>
	</a>
	<a class="selectmenu-split"><?php echo _("2020 Primaries") ?></a>
	<a class="selectmenu-button" href="./?t=USA_2020_democratic_primary">
		<i class="fas fa-democrat"></i>
		<div class="selectmenu-button-text"><?php echo _("Democratic") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2020_republican_primary">
		<i class="fas fa-republican"></i>
		<div class="selectmenu-button-text"><?php echo _("Republican") ?></div>
	</a>
	<a class="selectmenu-split"><?php echo _("Current") ?></a>
	<a class="selectmenu-button" href="./?t=USA_current_senate">
		<i class="fas fa-chevron-up"></i>
		<div class="selectmenu-button-text"><?php echo _("Senate") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_current_house">
		<i class="fas fa-chevron-down"></i>
		<div class="selectmenu-button-text"><?php echo _("House") ?></div>
	</a>
	<a class="selectmenu-split"><?php echo _("Blank maps") ?></a>
	<a class="selectmenu-button" href="./?t=USA_senate">
		<i class="fas fa-chevron-up"></i>
		<div class="selectmenu-button-text"><?php echo _("Senate") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_governors">
		<i class="fas fa-square"></i>
		<div class="selectmenu-button-text"><?php echo _("Governors") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_county">
		<i class="fas fa-border-all"></i>
		<div class="selectmenu-button-text"><?php echo _("County") ?></div>
	</a>
	<a class="selectmenu-split"><?php echo _("Other Presidential") ?></a>
	<a class="selectmenu-button" href="./?t=USA_2024_projection">
		<i class="far fa-user"></i>
		<div class="selectmenu-button-text"><?php echo _("2024 Estimates") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_proportional">
		<i class="far fa-user-circle"></i>
		<div class="selectmenu-button-text"><?php echo _("Proportional") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_takeall">
		<i class="fas fa-user"></i>
		<div class="selectmenu-button-text"><?php echo _("Take All") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_split_maine">
		<i class="fas fa-user"></i>
		<div class="selectmenu-button-text"><?php echo _("Split Maine") ?></div>
	</a>
	</div>
</div>

<!-- USA Historical Maps -->
<div id="mapmenu-usa-historical" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 class="selectmenu-display-header">
		<img src="res/flags/usa.svg">
		<div class="selectmenu-display-header-text">USA <?php echo _("Historical") ?></div>
	</h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-split">
		<i class="fas fa-chevron-down"></i>
		<div class="selectmenu-split-text"><?php echo _("Congressional") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_congressional">
		<div class="selectmenu-button-text">2018-2020</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_congressional_2008">
		<div class="selectmenu-button-text">2006-2010</div>
	</a>
	<a class="selectmenu-split">
		<i class="fas fa-border-all"></i>
		<div class="selectmenu-split-text"><?php echo _("Presidential County Results") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2016_presidential_county">
		<div class="selectmenu-button-text">2016</div>
	</a>
	<a class="selectmenu-split">
		<i class="fas fa-user"></i>
		<div class="selectmenu-split-text"><?php echo _("Presidential Results") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2016_presidential">
		<div class="selectmenu-button-text">2016</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2012_presidential">
		<div class="selectmenu-button-text">2012</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2008_presidential">
		<div class="selectmenu-button-text">2008</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2004_presidential">
		<div class="selectmenu-button-text">2004</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_2000_presidential">
		<div class="selectmenu-button-text">2000</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1996_presidential">
		<div class="selectmenu-button-text">1996</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1992_presidential">
		<div class="selectmenu-button-text">1992</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1988_presidential">
		<div class="selectmenu-button-text">1988</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1984_presidential">
		<div class="selectmenu-button-text">1984</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1980_presidential">
		<div class="selectmenu-button-text">1980</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1976_presidential">
		<div class="selectmenu-button-text">1976</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1972_presidential">
		<div class="selectmenu-button-text">1972</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1968_presidential">
		<div class="selectmenu-button-text">1968</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1964_presidential">
		<div class="selectmenu-button-text">1964</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1960_presidential">
		<div class="selectmenu-button-text">1960</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1956_presidential">
		<div class="selectmenu-button-text">1956</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1952_presidential">
		<div class="selectmenu-button-text">1952</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1948_presidential">
		<div class="selectmenu-button-text">1948</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1944_presidential">
		<div class="selectmenu-button-text">1944</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1940_presidential">
		<div class="selectmenu-button-text">1940</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1936_presidential">
		<div class="selectmenu-button-text">1936</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1932_presidential">
		<div class="selectmenu-button-text">1932</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1928_presidential">
		<div class="selectmenu-button-text">1928</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1924_presidential">
		<div class="selectmenu-button-text">1924</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1920_presidential">
		<div class="selectmenu-button-text">1920</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1916_presidential">
		<div class="selectmenu-button-text">1916</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1912_presidential">
		<div class="selectmenu-button-text">1912</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1908_presidential">
		<div class="selectmenu-button-text">1908</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1904_presidential">
		<div class="selectmenu-button-text">1904</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1900_presidential">
		<div class="selectmenu-button-text">1900</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1896_presidential">
		<div class="selectmenu-button-text">1896</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1892_presidential">
		<div class="selectmenu-button-text">1892</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1888_presidential">
		<div class="selectmenu-button-text">1888</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1884_presidential">
		<div class="selectmenu-button-text">1884</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1880_presidential">
		<div class="selectmenu-button-text">1880</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1876_presidential">
		<div class="selectmenu-button-text">1876</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1872_presidential">
		<div class="selectmenu-button-text">1872</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1868_presidential">
		<div class="selectmenu-button-text">1868</div>
	</a>
	<a class="selectmenu-button" href="./?t=USA_1864_presidential">
		<div class="selectmenu-button-text">1864</div>
	</a>
	</div>
</div>

<!-- Mock Maps -->
<div id="mapmenu-lte" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>LTE</h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-button" href="./?t=LTE_presidential"><i class="fas fa-user"></i> <?php echo _("Presidential") ?></a>
	<a class="selectmenu-button" href="./?t=LTE_senatorial"><i class="fas fa-chevron-up"></i> <?php echo _("Senatorial") ?></a>
	<a class="selectmenu-button" href="./?t=LTE_congressional"><i class="fas fa-chevron-down"></i> <?php echo _("Congressional") ?></a>
	</div>
</div>

<!-- Maps menu -->
<div id="mapmenu" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Select Map") ?></h2>
	</div>
	<div class="selectmenu-content">
	<div class="selectmenu-split">
		<div class="selectmenu-split-text"><?php echo _("United States") ?></div>
	</div>
	<div class="selectmenu-button" onclick='displayCountryMenu("usa")'>
		<img src="res/flags/usa.svg">
		<div class="selectmenu-button-text"><?php echo _("USA") ?></div>
	</div>
	<a class="selectmenu-button" onclick='displayCountryMenu("usa-historical")'>
		<img src="res/flags/usa.svg">
		<div class="selectmenu-button-text"><?php echo _("USA Historical") ?></div>
	</a>
	<a class="selectmenu-split">
		<div class="selectmenu-split-text"><?php echo _("Other Countries") ?></div>
	</a>
	<a class="selectmenu-button" onclick='displayCountryMenu("australia")'>
		<img src="res/flags/aus.svg">
		<div class="selectmenu-button-text"><?php echo _("Australia") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=Brazil_chamber_of_deputies">
		<img src="res/flags/bra.svg">
		<div class="selectmenu-button-text"><?php echo _("Brazil") ?></div>
	</a>
	<a class="selectmenu-button" onclick='displayCountryMenu("canada")'>
		<img src="res/flags/can.svg">
		<div class="selectmenu-button-text"><?php echo _("Canada") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=France_national_assembly">
		<img src="res/flags/fra.svg">
		<div class="selectmenu-button-text"><?php echo _("France") ?></div>
	</a>
	<a class="selectmenu-button" onclick='displayCountryMenu("germany")'>
		<img src="res/flags/ger.svg">
		<div class="selectmenu-button-text"><?php echo _("Germany") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=Italy_states">
		<img src="res/flags/ita.svg">
		<div class="selectmenu-button-text"><?php echo _("Italy") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=Ireland_dail_eireann">
		<img src="res/flags/ire.svg">
		<div class="selectmenu-button-text"><?php echo _("Ireland") ?></div>
	</a>
	<a class="selectmenu-button" onclick='displayCountryMenu("netherlands")'>
		<img src="res/flags/ned.svg">
		<div class="selectmenu-button-text"><?php echo _("Netherlands") ?></div>
	</a>
	<a class="selectmenu-button" onclick='displayCountryMenu("russia")'>
		<img src="res/flags/rus.svg">
		<div class="selectmenu-button-text"><?php echo _("Russia") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=Spain_congress_of_deputies">
		<img src="res/flags/esp.svg">
		<div class="selectmenu-button-text"><?php echo _("Spain") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=UnitedKingdom_house_of_commons">
		<img src="res/flags/ukd.svg">
		<div class="selectmenu-button-text"><?php echo _("United Kingdom") ?></div>
	</a>
	<a class="selectmenu-split">
		<div class="selectmenu-split-text"><?php echo _("Trans-National") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=EuropeanUnion">
		<img src="res/flags/eu.svg">
		<div class="selectmenu-button-text"><?php echo _("EU") ?></div>
	</a>
	<a class="selectmenu-button" href="./?t=World">
		<img src="res/flags/un.svg">
		<div class="selectmenu-button-text"><?php echo _("World") ?></div>
	</a>
	<a class="selectmenu-button" href='./?t=USA_Canada'>
		<img src="res/flags/usa.svg">
		<div class="selectmenu-button-text"><?php echo _("USA") . " " . _("Canada") ?></div>
		<img src="res/flags/can.svg">
	</a>
	<a class="selectmenu-split">
		<div class="selectmenu-split-text"><?php echo _("Mock Elections") ?></div>
	</a>
	<a class="selectmenu-button" onclick='displayCountryMenu("lte")'>
		<div class="selectmenu-button-text">LTE</div>
	</a>
	</div>
</div> 

<div id="languagemenu" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Select Language") ?> (Beta)</h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-button" onclick='setLanguage("en")'>
		<div class="selectmenu-button-text">English</div>
	</a>
	<a class="selectmenu-button" onclick='setLanguage("de")'>
		<div class="selectmenu-button-text">Deutsche</div>
	</a>
	</div>
</div>

<div id="notification" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2 id="notification-title"></h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-section" id="notification-message"></a>
	</div>
</div>

<div id="notification-update-serviceworker" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2>New Version Installed</h2>
	</div>
	<div class="selectmenu-content">
	<div class="selectmenu-section">Click reload to start using the update</div>
	<div class="selectmenu-button" onclick='closeAllPopups(); location.reload();'>Reload</div>
	<div class="selectmenu-button" onclick="closeAllPopups();">Skip</div>
	</div>
</div>

<div id="share" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Share Link") ?></h2>
	</div>
	<div class="selectmenu-content">
	<object id="loading-animation" type="image/svg+xml" data="./html/loading.svg">Error</object>
	<div class="selectmenu-section" id="shareurl"></div>
	
	<div class="selectmenu-button-mult">
<?php 
if($mobile === false) {
	echo '<a class="selectmenu-button-part selectmenu-button" id="downloadbutton"><i class="fas fa-download"></i>  ' . _("Download") . '</a>';
}
?>
		<a id="twitter-share" class="selectmenu-button-part selectmenu-button"
			target="_blank">
			<i class="fab fa-twitter"></i>
		</a>
		<a id="reddit-share" class="selectmenu-button-part selectmenu-button"
			target="_blank">
			<i class="fab fa-reddit-alien"></i>
		</a>
		<a id="facebook-share" class="selectmenu-button-part selectmenu-button"
			target="_blank">
			<i class="fab fa-facebook-f"></i>
		</a>
	</div>

	<img class="selectmenu-section" id="screenshotimg"/>
	<div class="selectmenu-section" id="captcha-notice">This site is protected by reCAPTCHA and the Google
	<a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and
	<a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply. </div>
	</div>
</div>

<div id="loadmenu" class="popup selectmenu">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Load From File") ?></h2>
	</div>
	<div class="selectmenu-content">
	<div class="selectmenu-section"><?php echo _("Load-Menu-Message") ?></div>
	<div class="selectmenu-section">
	<form action="load.php" method="post" enctype="multipart/form-data">
		<input type="file" name="file" id="loadfile">
		<input type="button" value="<?php echo _("Load") ?>" onclick='loadFileMap()'>
	</form>
	</div>
	</div>
</div>

<div id="versioninfo" class="popup">
	<div class="selectmenu-header">
	<object type="image/svg+xml" data="./html/closebutton.svg" >Error</object>
	<h2><?php echo _("Version Info") ?></h2>
	</div>
	<div class="selectmenu-content">
	<a class="selectmenu-section" id="versioninfo-text"></a>
	</div>
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

		navigator.serviceWorker.addEventListener('message', function(event) {
			console.log('Message from SW: ' + event.data);
			if(event.data === 'reload') {
				location.reload();
			}
		});

		navigator.serviceWorker
		.register('../sw.js')
		.then(reg => {
			reg.addEventListener('updatefound', () => {
				newWorker = reg.installing;
				newWorker.addEventListener('statechange', () => {
					switch(newWorker.state) {
					case 'installed':
						console.log('updated');
						//displayUpdateServiceWorker();
						if(windowLoaded) {
							console.log('SW: Direct Activate');
							newWorker.postMessage('loaded'); 
						} else {
							console.log('SW: Defer Activate');
							window.onload = function() {
								newWorker.postMessage('loaded'); 
							};
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
