<!DOCTYPE html>
<html>
	<head>
		<title>
			YAPNews - Yet Another Political New Source
		</title>

		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132710089-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-132710089-1');
		</script>

		<?php
			$mobile = false;
			if(strpos($_SERVER['HTTP_USER_AGENT'], 'Mobi')) {
				$mobile = true;
				echo '<link rel="stylesheet" type="text/css" href="style/style-mobile.css">';
				echo '<link rel="stylesheet" type="text/css" href="style/common-mobile.css">';
			} else {
				echo '<link rel="stylesheet" type="text/css" href="style/style.css">';
				echo '<link rel="stylesheet" type="text/css" href="style/common.css">';
			}
		?>
	</head>

	<body>
		<div id="header">
			<div id="main-header">
				<a href="https://www.yapms.com/news">
					YAPNews
				</a>
			</div>

			<div id="sub-header">
				Yet Another Political News Source
			</div>
		</div>

<?php 
			if($mobile) {
				require './html/mobile.php';
			} else {
				require './html/desktop.php';
			}

			require 'footer.php';
?>
	
	</body>
</html>
