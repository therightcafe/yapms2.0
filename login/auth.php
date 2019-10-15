<?
	require_once "GoogleAPI/vendor/autoload.php";

	if(isset($_GET['token'])) {
		$token = $_GET['token'];
		$client = new Google_Client(['client_id' => '406738305883-b9cbn6ge3i5a5fnn6perdbuvq1eu5go2.apps.googleusercontent.com']);
		$payload = $client->verifyIdToken($token);
		if($payload) {
			var_dump($payload);
		} else {
			echo 'verify error';
		}
	} else {
		echo 'token not set';
	}
?>
