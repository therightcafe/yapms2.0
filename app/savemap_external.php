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

$filename = base_convert(''.$mapnumber, 10, 36);

$imgData = $_POST["img"];
$imgData = str_replace(' ', '+', $imgData);
$imgData = substr($imgData, strpos($imgData, ",")+1);
$imgData = base64_decode($imgData);

require '../../external/mapstore_pass.php';

//$file = fopen("./maps/" . $filename . ".png", 'w');
$file = fopen("ftp://yapms:{$mapstore_pass}@70.35.195.194/maps/{$filename}.png", 'w');
if($file) {
	fwrite($file, $imgData);
	fclose($file);
}

$file = gzopen("./maps/{$filename}.txt.gz", "w");
if($file) {
	gzwrite($file, $_POST["data"]);
	gzclose($file);
}

$filepath = "./maps/{$filename}.txt.gz";
$connection = ftp_connect("ftp://70.35.195.194/");

if(ftp_login($connection, "yapms", $mapstore_pass)) {
	if(ftp_put($connection, $filepath, $filepath, FTP_BINARY)) {
		echo 'https://www.yapms.com/app/?m=' . $filename . ' ';
		echo $filename;
	} else {
		echo 'Save_Failed';
	}
}

ftp_close($connection);

//$file = fopen("./maps/" . $filename . '.txt', 'w');
/*
$file = fopen("ftp://yapms:{$mapstore_pass}@70.35.195.194/maps/{$filename}.txt.gz", 'w');
if($file) {
	fwrite($file, file_get_contents("./maps/{$filename}.txt.gz"));
	//gzwrite($file, $_POST["data"]);
	fclose($file);
	//gzclose($file);
	
	unlink("./maps/{$filename}.txt.gz");

	echo 'https://www.yapms.com/app/?m=' . $filename . ' ';
	echo $filename;
}
 */
?>
