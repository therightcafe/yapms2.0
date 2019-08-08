<?php 
//phpInfo(); 
if(!function_exists("gettext")) {
	echo "not installed <br>";
} else {
	echo "installed <br>";
}

$language = "de";
putenv("LANG=" . $language);
setlocale(LC_ALL, $language);

$domain = "messages";
bindtextdomain($domain, "locale");
textdomain($domain);

echo gettext("Privacy Policy");
?>
