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

	// if article already exists skip it
	$skipUpload = false;
	foreach($titles as $row) {
		if($title === $row) {
			$skipUpload = true;
			break;	
		}
	}
	if($skipUpload) {
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

	echo $title . '<br>';
	echo $published . '<br>';
	echo $source . '<br><br>';

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
	
	echo $text;
	echo '<br><br>';
}

?>
