<?php
session_start();

if(isset($_POST['user']) && !empty($_POST['user']) &&
	isset($_POST['email']) && !empty($_POST['email'])) {

	if($_SESSION['user'] === $_POST['user'] &&
		$_SESSION['email'] === $_POST['email']) {
		echo 'good';
	} else {
		echo 'bad';
	}
}
?>
