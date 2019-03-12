<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Press releases Straight from the source.">
		<meta name="keywords" content="Press,Release,News,Politics,Source">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta property="og:title" content="YAPNews - Yet Another Political News Source">
		<meta property="og:description" content="Press Releases Straight from the Source!">
		<meta property="og:image:type" content="image/jpeg">
		<meta property="og:site_name" content="yapms.com">
		<meta property="og:image" content="http://www.yapms.com/app/res/yapms-96.png">
		<meta property="og:image:secure_url" content="https://www.yapms.com/app/res/yapms-96.png">

		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:title" content="yapms.com/news">
		<meta name="twitter:description" content="Press Releases Stright from the Source!">
		<meta property="twitter:image" content="https://www.yapms.com/app/res/yapms-96.png">

		<meta name="theme-color" content="#ffffff"/>
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
