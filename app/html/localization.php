<?php
session_start();
$language = "en";

if(isset($_COOKIE['testcookie'])) {
	echo '<script>
		alert("WE WIN");
		</script>';
} else {
	echo '<script>
		alert("badddd");
		</script>';
}

if(isset($_COOKIE["language"])) {
	$language = $_COOKIE["language"];
} else if(isset($_GET["l"])) {
	$language = $_GET["l"];	
}

putenv("LANG=$language");
if($language === "de") {
	setlocale(LC_ALL, "de_DE.UTF-8");
} else if($language === "en") {
	setlocale(LC_ALL, "en_US.UTF-8");
}

bindtextdomain($language, "../locales");
bind_textdomain_codeset($language, 'UTF-8');
textdomain($language);


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
