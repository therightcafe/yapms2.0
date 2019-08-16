<?php
require '../../external/secret_key.php';
$response = $_POST["captcha"];
$verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
$isVerified = json_decode($verify);

if($isVerified->success === false) {
	echo 'reCaptcha_Failed(restart_web_browser)';
	die();
}

if($isVerified->score < 0.5) {
	echo 'reCaptcha_Bot_Detected';
	die();
}

require '../../external/db_mapnumber.php';
$dbh = null;
try {
	$dbh = new PDO("mysql:host=$hostname; dbname=$database;", $username, $password);
} catch(PDOException $e) {
	echo $hostname . " " . $database . " " . $username . " " . $password;
	echo "Error: " . $e->getMessage();
	die();
}

$sql = 'select value from number; update number set value = case when (value < 125000) then (value + 1) else 0 end;';

$q = $dbh->query($sql);
$mapnumber = 0;
foreach($q as $row) {
	$mapnumber = $row[0];
}

//$filename = "" . rand(0, 100000);
$filename = $mapnumber;

$imgData = $_POST["img"];
$imgData = str_replace(' ', '+', $imgData);
$imgData = substr($imgData, strpos($imgData, ",")+1);
$imgData = base64_decode($imgData);

$file = fopen("./maps/" . $filename . ".png", 'w');
if($file) {
	fwrite($file, $imgData);
	fclose($file);
}

$file = fopen("./maps/" . $filename . '.txt', 'w');
//$file = gzopen("./maps/". $filename . '.gz', 'wb9');
if($file) {
	$data;
	$data['filename'] = $_POST['filename'];
	$data['fontsize'] = $_POST['fontsize'];
	$data['strokewidth'] = $_POST['strokewidth'];
	$data['dataid'] = $_POST['dataid'];
	$data['type'] = $_POST['type'];
	$data['year'] = $_POST['year'];
	$data['updatetext'] = $_POST['updateText'] === 'true';


	$writeData = $_POST["filename"] . " "
		. $_POST["fontsize"] . " " 
		. $_POST["strokewidth"] . " "
		. $_POST["dataid"] . " "
		. $_POST["type"] . " " 
		. $_POST["year"] . " ";

	$candidate_data = json_decode($_POST["candidates"], true);

	$writeData .= count($candidate_data["candidate_data"]) . " " . $_POST["updateText"] . PHP_EOL;

	foreach($candidate_data["candidate_data"] as $candidate) {
		if($v["name"] !== "Tossup") {
			$data['candidates'][$candidate['name']]['solid'] = $candidate['solid'];
			$data['candidates'][$candidate['name']]['likely'] = $candidate['likely'];
			$data['candidates'][$candidate['name']]['lean'] = $candidate['lean'];
			$data['candidates'][$candidate['name']]['tilt'] = $candidate['tilt'];
		}
	}

	$state_data = json_decode($_POST["states"], true);

	foreach($state_data["state_data"] as $state) {
		$v["candidate"] = str_replace(' ', '%', $v["candidate"]);
		$data['states'][$state['name']]['candidate'] = $state['candidate'];
		$data['states'][$state['name']]['colorvalue'] = $state['colorValue'];
		$data['states'][$state['name']]['delegates'] = $state['delegates'];
		$data['states'][$state['name']]['votecount'] = $state['voteCount'];
		$data['states'][$state['name']]['disabled'] = $state['disabled'];
	}
	

//	gzwrite($file, json_encode($data));
//	gzclose($file);
	fwrite($file, json_encode($data));
	fclose($file);
	echo 'https://www.yapms.com/app/?m=' . $filename . ' ';
	echo $filename;
}
?>
