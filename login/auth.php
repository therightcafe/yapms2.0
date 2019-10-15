<?
	if(isset($_GET['token'])) {
		$gClient->getAccessToken($_GET['token']);
		$oAuth = new Google_Service_Oauth2($gClient);
		$userData = $oAuth->userinfo_v2_me->get();
		var_dump($userData);
	} else {
		echo 'errorrrr';
	}
?>
