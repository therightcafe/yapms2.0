<?php 
//phpInfo(); 
if(!function_exists("gettext")) {
	echo "not installed";
} else {
	echo "installed";
}

$language = "de";
putenv("LANG=" . $language);
setlocale(LC_ALL, $language);

$domain = "messages";
bindtextdomain($domain, "Locale");
textdomain($domain);

echo gettext("Privacy Policy");
?>
