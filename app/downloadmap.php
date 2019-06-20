<?php
	$filename = basename($_GET['f']);
	header('Content-type: application/octet-stream');
	header('Content-disposition: attachment; filename=' . $filename . '.yapms');
	header('Expired: 0');
	header('Cache-Control: must-revalidate');
	header('Pragma: public');
	header('Content-Length: ' . filesize('./maps/' . $filename));
	readfile('./maps/' . $filename);
?>
