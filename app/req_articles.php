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

$sql = 'select title, author, snippet, id from articles order by upload desc limit 10 offset 0';

$q = $dbh->query($sql);

$data = array();

foreach($q as $row) {
	unset($row[0]);
	unset($row[1]);
	unset($row[2]);
	unset($row[3]);
	array_push($data, $row);	
}

echo json_encode($data);
?>
