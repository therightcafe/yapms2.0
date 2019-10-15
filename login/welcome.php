<?php
	session_start();
	if(!isset($_SESSION['access_token'])) {
		header('Location: login.php');
		exit();
	}
?>

<html>
<head>
</head>
<body>
	<h1>
		Hello World
	</h1>
	<div>
		Name: <?php echo $_SESSION['givenName']; ?>
		<br>
		Email: <?php echo $_SESSION['email']; ?>
		<br>
		ID: <?php echo $_SESSION['id']; ?>
		<br>
		Token: <?php echo var_dump($_SESSION['access_token']); ?>
	</div>

	<div>
		<?php echo $result; ?>
	</div>
</body>
</html>
