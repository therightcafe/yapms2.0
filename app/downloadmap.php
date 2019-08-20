<?php
	$filename = basename($_GET['f']);
	header('Content-type: application/octet-stream');
	header('Content-disposition: attachment; filename=' . $filename . '.txt.gz');
	header('Expired: 0');
	header('Cache-Control: must-revalidate');
	header('Pragma: public');
	header('Content-Length: ' . filesize('https://yapms.com/maps/' . $filename . '.txt'));
	readfile('https://yapms.org/maps/' . $filename . '.txt');
?>
