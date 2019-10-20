<?php
session_start();
session_unset();
session_destroy();
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
	echo 'Login Error';
} else {
	// --- TURN LOGIN RESULT INTO ARRAY --- //
	$data = explode(' ', $result);
	if($data[0] === 'good') {
		// --- IF LOGIN GOOD SET SESSION --- //
		$_SESSION['user'] = $data[1];
		$_SESSION['email'] = $data[2];
		$_SESSION['id'] = $data[3];
	} else if($data[0] === 'bad') {
		// --- IF LOGIN BAD END SESSION --- //
		session_unset();
		session_destroy();
	}
	echo $result;
}
?>
