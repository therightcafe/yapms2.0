<?php
	require '../../external/google_auth.php';
	session_start();
	require_once "GoogleAPI/vendor/autoload.php";
	$gClient = new Google_Client();
	$gClient->setClientId($gclientid);
	$gClient->setClientSecret($gsecret);
	$gClient->setApplicationName('YAPms');
	$gClient->setRedirectUri('http://localhost:8000/login/g-callback.php');
	$gClient->addScope('https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.login');
?>
