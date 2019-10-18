<?php
function uploadMap($userID, $mapName) {
	require '../../external/mapstore_pass';
	$file = gzopen("../app/maps/{$filename}.txt.gz", "w");
	if($file) {
		gzwrite($file, $_POST["data"]);
		gzclose($file);
	}

	$file = fopen("ftp://yapms:{$mapstore_pass}@74.208.19.50/users/{$userID}/{$mapName}.txt.gz", 'w');
	if($file) {
		fwrite($file, file_get_contents("../app/maps/{$filename}.txt.gz"));
		fclose($file);

		unlink("../app/maps/{$filename}.txt.gz");
	}
}

require_once "GoogleAPI/vendor/autoload.php";

if(isset($_POST['token'])) {
	$token = $_POST['token'];
	$client = new Google_Client(['client_id' => '406738305883-b9cbn6ge3i5a5fnn6perdbuvq1eu5go2.apps.googleusercontent.com']);

	$payload = $client->verifyIdToken($token);
	if($payload) {
		$userID = $_POST['userID'];
		$mapName = $_POST['mapName'];
		uploadMap($userID, $mapName);
	} else {

	}
}
?>
