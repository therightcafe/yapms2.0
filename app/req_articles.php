<?php
include '../../external/db.php';

$dbh = null;

try {
	$dbh = new PDO("mysql:host=$hostname; dbname=$database;", $username, $password);
} 
catch(PDOException $e) {
	echo "req_article Error: " . $e->getMessage();
	die();
}

$sql = 'select * from articles order by upload desc limit 10 offset 0';

$q = $dbh->query($sql);

$data = array();

foreach($q as $row) {
	unset($row[0]);
	unset($row[1]);
	unset($row[2]);
	unset($row[3]);
	unset($row[4]);
	unset($row[5]);
	unset($row[6]);
	unset($row[7]);
	unset($row[8]);
	array_push($data, $row);	
}

echo json_encode($data);
?>
