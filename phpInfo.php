<?php 
session_start();
//phpInfo(); 
if(!function_exists("gettext")) {
	echo "not installed <br>";
} else {
	echo "installed <br>";
}

putenv("LANG=de");
setlocale(LC_ALL, "de_DE.UTF-8");

$domain = "de";
bindtextdomain($domain, "./locales");
bind_textdomain_codeset($domain, 'UTF-8');
textdomain($domain);

echo _("aaa");

echo '<br>';
echo LC_ALL . '<br>';
phpInfo();
?>
