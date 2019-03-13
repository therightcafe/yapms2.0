<div id="application">
<div id="application-left">
	<?php
		require 'dblogin.php';
		$sql = 'select * from articles where featured = true order by upload desc limit 1 offset 0';
		if($q = $dbh->query($sql)) {
			foreach($q as $row) {
				echo '<div id="featured-1" class="featured">'.
					'<div class="article-title">'.
					'<a href="article.php?a=' .
						$row['id'] .
					'">' .
						$row['title'].
					'</a>'.
					'</div>'.
					'<div class="article-author">'.
						$row['author'] .
					'</div>'.
					'<div class="article-date">'.
						$row['upload'] .
					'</div>' .
					'<div class="article-snippet">'.
						$row['snippet'].
					'</div>'.
					'</div>';
			}
		} else {
			echo '<div class="error">Error</div>';
		}
	?>
	<div id="recent-1" class="recent">
		<?php
			$sql = 'select * from articles where featured = false order by upload desc limit 6 offset 0';
			if($q = $dbh->query($sql)) {
				foreach($q as $row) {
					echo '<div class="article">'.
						'<div class="article-title">'.
						'<a href="article.php?a=' .
							$row['id'] .
						'">' .
							$row['title'].
						'</a>'.
						'</div>'.
						'<div class="article-author">'.
							$row['author'] .
						'</div>'.
						'<div class="article-date">'.
							$row['upload'] .
						'</div>' .
						'<div class="article-snippet">'.
							$row['snippet'].
						'</div>'.
						'</div>';
				}
			} else {
				echo '<div class="error">Error</div>';
			}
		?>
	</div>
	<?php
		$sql = 'select * from articles where featured = true order by upload desc limit 1 offset 1';
		if($q = $dbh->query($sql)) {
			foreach($q as $row) {
				echo '<div id="featured-2" class="featured">'.
					'<div class="article-title">'.
					'<a href="article.php?a=' .
						$row['id'] .
					'">' .
						$row['title'].
					'</a>'.
					'</div>'.
					'<div class="article-author">'.
						$row['author'] .
					'</div>'.
					'<div class="article-date">'.
						$row['upload'] .
					'</div>' .
					'<div class="article-snippet">'.
						$row['snippet'].
					'</div>'.
					'</div>';
			}
		} else {
			echo '<div class="error">Error</div>';
		}
	?>
	<div id="recent-2" class="recent">
		<?php
			$sql = 'select * from articles where featured = false order by upload desc limit 3 offset 6';
			if($q = $dbh->query($sql)) {
				foreach($q as $row) {
					echo '<div class="article">'.
						'<div class="article-title">'.
						'<a href="article.php?a=' .
							$row['id'] .
						'">' .
							$row['title'].
						'</a>'.
						'</div>'.
						'<div class="article-author">'.
							$row['author'] .
						'</div>'.
						'<div class="article-date">'.
							$row['upload'] .
						'</div>' .
						'<div class="article-snippet">'.
							$row['snippet'].
						'</div>'.
						'</div>';
				}
			} else {
				echo '<div class="error">Error</div>';
			}
		?>
	</div>
</div>
</div>	
