<?php
	require_once "config.php";
	if(isset($_SESSION['access_token'])) {
		header('Location: welcome.php');
		exit();
	}
	$loginURL = $gClient->createAuthUrl();
?>

<html>
<head>
</head>

<body>
	<h1>
		Hello World
	</h1>
	<form>
		<input type="button" onclick="window.location = '<?php echo $loginURL ?>';" value="Google Login">
	</form>
</body>
</html>
