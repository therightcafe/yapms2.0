<?php 
//phpInfo(); 
if(!function_exists("gettext")) {
	echo "not installed <br>";
} else {
	echo "installed <br>";
}

$language = "de_DE";
putenv("LANG=" . $language);
setlocale(LC_ALL, $language);

$domain = "messages";
bindtextdomain($domain, "locale");
textdomain($domain);

echo gettext("This is english");
?>
