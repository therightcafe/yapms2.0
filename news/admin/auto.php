<?php
include 'dblogin.php';
$sql = 'select title from articles';
$titles = $dbh->query($sql);

function autoSubmit($preTitle, $url) {
	$content = file_get_contents($url);
	$xml = new SimpleXMLElement($content);

	echo '<ul>';
	foreach($xml->channel->item as $entry) {
		echo '<li><a href=' . $entry->link . ' title=' . $entry->title . '>'. $entry->title . '</a></li>' . $entry->description;

		$title = $preTitle . $entry->title;
		echo $title . '<br>';
		$author = 'Congress';
		$snippet = $entry->description;
		$text = $entry->description;
		$published = strtotime($xml->channel->pubDate);
		$published = date('Y-m-d', $published);
		$source = $entry->link;
		$featured = false;

		$skipUpload = false;
		foreach($titles as $row) {
			if($title === $row['title']) {
				$skipUpload = true;
				break;	
			}
		}

		if($skipUpload === false) {
			$sql = 'insert into articles (title, author, published, upload, snippet, text, source, Featured) values (?,?,?,?,?,?,?,?)';
			echo '<br>';
			$stm = $dbh->prepare($sql);

			if($stm->execute([$title, $author, $published, date("Y-m-d H:i:s"), $snippet, $text, $source, $featured])) {
				echo 'sql query success...<br>';
			} else {
				echo 'sql query failed...<br>';
			}

			echo $sql;
		} else {
			echo 'skipping upload<br>';
		}
	}
	echo '</ul><br>';
}

autoSubmit('Presidential Signature: ', 'https://www.congress.gov/rss/presented-to-president.xml');
autoSubmit('House Floor: ', 'https://www.congress.gov/rss/house-floor-today.xml');
autoSubmit('Senate Floor: ', 'https://www.congress.gov/rss/senate-floor-today.xml');
autoSubmit('Popular Bill: ', 'https://www.congress.gov/rss/most-viewed-bills.xml');
?>
