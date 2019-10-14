<?php
	require_once 'config.php';

	if(isset($_SESSION['access_token'])) {
		$gClient->setAccessToken($_SESSION['access_token']);
	} else if(isset($_GET['code'])) {
		$token = $gClient->fetchAccessTokenWithAuthCode($_GET['code']);
		$_SESSION['access_token'] = $token;
	} else {
		header('Location: welcome.php');	
	}

	$oAuth = new Google_Service_Oauth2($gClient);
	$userData = $oAuth->userinfo_v2_me->get();

	echo "<pre>";
	var_dump($userData);

	$_SESSION['id'] = $userData['id'];
	$_SESSION['email'] = $userData['email'];
	$_SESSION['givenName'] = $userData['givenName'];
		
	header('Location: welcome.php');	
	exit();
?>
