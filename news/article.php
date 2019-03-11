<!DOCTYPE html>
<html>
	<head>
		<title> 
		<?php
			require 'dblogin.php';	
			$sql = 'select * from articles where id = ' . $_GET['a']; 
			$q = $dbh->query($sql);
			$title = "";
			$author = "";
			$text = "";
			$source = "";

			foreach($q as $row) {
				$title = $row['title'];
				$author = $row['author'];
				$text = $row['text'];
				$source = $row['source'];
			}
			
			echo 'YAPNews - ' . $title;
		?>
		</title>

		<link rel="stylesheet" type="text/css" href="style/common.css">
		<link rel="stylesheet" type="text/css" href="style/article.css">

		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132710089-1"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'UA-132710089-1');
		</script>
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
			echo 'By ' . $author;
			echo '</div>';
			echo '<div id="article-text">';
			echo $text;
			echo '</div>';
			echo '<div id="article-source">';
			echo '<a href="' . $source . '">Original Source</a>';
			echo '</div>';
		?>
		</div>
		
		<?php 
			include 'footer.php';
		?>
	</body>
</html>
