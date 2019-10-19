<?php
$url = 'https://yapms.org/auth/login.php';

$options = array(
	'http' => array(
		'header' => 'Content-type: application/x-www-form-urlencoded',
		'method' => 'POST',
		'content' => http_build_query($_POST)
	)
);

$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
if($result === false) {
	echo 'error';
}
var_dump($result);
?>
