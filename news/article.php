<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Press releases Straight from the source.">
		<meta name="keywords" content="Press,Release,News,Politics,Source">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta property="og:image:type" content="image/jpeg">
		<meta property="og:site_name" content="yapms.com/news">
		<meta property="og:image" content="http://www.yapms.com/app/res/yapms-96.png">
		<meta property="og:image:secure_url" content="https://www.yapms.com/app/res/yapms-96.png">

		<meta name="twitter:card" content="summary_large_image">
		<meta property="twitter:image" content="https://www.yapms.com/app/res/yapms-96.png">

		<meta name="theme-color" content="#ffffff"/>

		<title> 
		<?php
			require 'dblogin.php';	
			$sql = 'select * from articles where id = ' . $_GET['a']; 
			$q = $dbh->query($sql);
			$title = "";
			$author = "";
			$text = "";
			$source = "";
			$snippet = "";
			$published = "";

			foreach($q as $row) {
				$title = $row['title'];
				$author = $row['author'];
				$text = $row['text'];
				$source = $row['source'];
				$snippet = $row['snippet'];
				$published = $row['published'];
			}
			
			echo 'YAPNews - ' . $title;
		?>
		</title>

		<?php
			echo '<meta name="twitter:title" content="' ,
				$title ,
				'">';
			echo '<meta name="twitter:description" content="' ,
				$snippet ,
				'">';
			echo '<meta name="og:title" content="' ,
				$title ,
				'">';
			echo '<meta name="og:description" content="' ,
				$snippet ,
				'">';
		?>

		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132710089-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-132710089-1');
		</script>

		<?php
			if(strpos($_SERVER['HTTP_USER_AGENT'], 'Mobi')) {
				echo '<link rel="stylesheet" type="text/css" href="style/article-mobile.css">';
				echo '<link rel="stylesheet" type="text/css" href="style/common-mobile.css">';
			} else {
				echo '<link rel="stylesheet" type="text/css" href="style/article.css">';
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

		<div id="article">
		<?php
			echo '<div id="article-title">';
			echo $title;
			echo '</div>';
			echo '<div id="article-author">';
			echo 'By ' . $author . ' on ' . $published;
			echo '</div>';
			echo '<div id="article-text">';
			echo $text;
			echo '</div>';
			echo '<div id="article-source">';
			echo '<a href="' . $source . '" target="_blank" style="color:blue">Original Source</a>';
			echo '</div>';
		?>
		</div>
		
		<?php 
			include 'footer.php';
		?>
	</body>
</html>
