<?php
if (isset($_GET["t"]) && !empty($_GET["t"])) {
	if($_GET["t"] === '2020_presidential') {
		echo '<meta name="description" content="United States 2020 presidential election map">';
		echo '<title>YAPms - 2020 Presidential</title>';
	} else if($_GET["t"] === '2020_senatorial') {
		echo '<meta name="description" content="United States 2020 senatorial election map">';
		echo '<title>YAPms - 2020 Senatorial</title>';
	} else if($_GET["t"] === '2020_gubernatorial') {
		echo '<meta name="description" content="United States 2020 gubernatorial election map">';
		echo '<title>YAPms - 2020 Gubernatorial</title>';
	} else if($_GET["t"] === '2020_cook') {
		echo '<meta name="description" content="United States 2020 Cook Political Report forecast">';
		echo '<title>YAPms - Cook Political Report</title>';
	} else if($_GET["t"] === '2020_inside') {
		echo '<meta name="description" content="United States 2020 Inside Elections forecast">';
		echo '<title>YAPms - Inside Elections</title>';
	} else if($_GET["t"] === '2020_sabatos') {
		echo '<meta name="description" content="United States 2020 Sabatos Crystal Ball forecast">';
		echo '<title>YAPms - Sabatos Crystal Ball</title>';
	} else if($_GET["t"] === '2020_democratic_primary') {
		echo '<meta name="description" content="United States 2020 democratic primary map">';
		echo '<title>YAPms - Democratic primary</title>';
	} else if($_GET["t"] === '2020_republican_primary') {
		echo '<meta name="description" content="United States 2020 republican primary map">';
		echo '<title>YAPms - Republican primary</title>';
	} else if($_GET["t"] === 'USA_county') {
		echo '<meta name="description" content="United States county map">';
		echo '<title>YAPms - USA County</title>';
	} else if($_GET["t"] === 'USA_congressional') {
		echo '<meta name="description" content="United States congressional map">';
		echo '<title>YAPms - USA Congressional</title>';
	} else if($_GET["t"] === '2018_congress') {
		echo '<meta name="description" content="United States 2018 congressional map">';
		echo '<title>YAPms - USA 2018 Congressional</title>';
	} else {
		echo '<meta name="description" content="Presidential, Senatorial, Congressional, Guberntorial, and Democratic Primary, political map simulator.">';
		echo '<title>YAPms - Interactive Maps</title>';
	}
}
?>
