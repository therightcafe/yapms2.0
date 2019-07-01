<?php
include 'dblogin.php';
$sql = 'select title from articles';
$titles = $dbh->query($sql);

require('simple_html_dom.php');
$content = file_get_html('https://www.whitehouse.gov/briefings-statements/');

foreach($content->find('article') as $article) {
	$title = '';
	$author = 'Donald Trump';
	$snippet = '';
	$text = '';
	$source = '';
	$published = '';
	$featured = false;

	// get link and article title
	foreach($article->find('h2') as $header) {
		foreach($header->find('a') as $link) {
			$source = $link->href;
			$title = $link->innertext;
		}
	}

	echo $title . '<br>';

	// if article already exists skip it
	$skipUpload = false;
	foreach($titles as $row) {
		if($title === $row['title']) {
			$skipUpload = true;
			break;	
		}
	}
	if($skipUpload) {
		echo 'skipping upload<br>';
		continue;
	}

	// get publish date
	foreach($article->find('div') as $meta) {
		foreach($meta->find('p') as $data) {
			foreach($data->find('time') as $time) {
				$published = strtotime($time->innertext);
				$published = date('Y-m-d', $published);
			}
		}
	}

	// get article text
	$article_content = file_get_html($source);

	foreach($article_content->find('main') as $main) {
		$page_content = $main->last_child();
		$page_content_wrap = $page_content->children(0);
		$page_content_content = $page_content_wrap->children(0);
		$actual_content = $page_content_content->children();
		foreach($actual_content as $content_element) {
			if($content_element->tag !== 'aside') {
				$text = $text . $content_element;
			}
		}
	}

	$sql = 'insert into articles (title, author, published, upload, snippet, text, source, Featured) values (?,?,?,?,?,?,?,?)';
	$stm = $dbh->prepare($sql);

	if($stm->execute([$title, $author, $published, date("Y-m-d H:i:s"), $snippet, $text, $source, $featured])) {
		echo 'sql query success...<br>';
	} else {
		echo 'sql query failed...<br>';
	}
}

?>
