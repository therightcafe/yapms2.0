<?php
require '../../external/db_mapnumber.php';

$dbh = null;

try {
	$dbh = new PDO("mysql:host=$hostname; dbname=$database;", $username, $password);
} catch(PDOException $e) {
	echo $hostname . " " . $database . " " . $username . " " . $password;
	echo "Error: " . $e->getMessage();
	die();
}

$sql = 'select value from number; 
select @v = value from number;
update number set value = @v + 1;';
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

$file = fopen("./maps/" . $filename, 'w');
if($file) {
	$writeData = $_POST["filename"] . " "
		. $_POST["fontsize"] . " " 
		. $_POST["strokewidth"] . " "
		. $_POST["dataid"] . " "
		. $_POST["type"] . " " 
		. $_POST["year"] . " ";

	$candidate_data = json_decode($_POST["candidates"], true);

	$writeData .= count($candidate_data["candidate_data"]) . " " . $_POST["updateText"] . PHP_EOL;

	foreach($candidate_data["candidate_data"] as $v) {
		$v["name"] = str_replace(' ', '%', $v["name"]);
		if($v["name"] !== "Tossup") {
			$writeData .= $v["name"] . " "
				. $v["solid"] . " "
				. $v["likely"] . " "
				. $v["lean"] . " "
				. $v["tilt"] . PHP_EOL;
		}
	}

	$state_data = json_decode($_POST["states"], true);

	foreach($state_data["state_data"] as $v) {
		$v["candidate"] = str_replace(' ', '%', $v["candidate"]);
		$writeData .= $v["name"] . " "
			. $v["candidate"] . " "
			. $v["colorValue"] . " ";

		if(isset($v["delegates"])) {
			foreach($v["delegates"] as $d) {
				$writeData .= $d . " ";
			}
		}
		
		$writeData .= $v["voteCount"] . " "
				. $v["disabled"] . PHP_EOL;
	}

	fwrite($file, $writeData);
	fclose($file);
	echo 'https://www.yapms.com/app/?m=' . $filename . ' ';
	echo $filename;
}
?>
