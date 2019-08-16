<?php
if (isset($_GET["t"]) && !empty($_GET["t"])) {
	switch($_GET['t']) {
		case '2020_presidential':
		echo '<meta name="description" content="United States 2020 presidential election map"><title>YAPms - 2020 Presidential</title>';
		break;
		case '2020_senatorial':
		echo '<meta name="description" content="United States 2020 senatorial election map"><title>YAPms - 2020 Senatorial</title>';
		break;
		case '2020_gubernatorial':
		echo '<meta name="description" content="United States 2020 gubernatorial election map"><title>YAPms - 2020 Gubernatorial</title>';
		break;
		case '2020_cook':
		echo '<meta name="description" content="United States 2020 Cook Political Report forecast"><title>YAPms - Cook Political Report</title>';
		break;
		case '2020_inside':
		echo '<meta name="description" content="United States 2020 Inside Elections forecast"><title>YAPms - Inside Elections</title>';
		break;
		case '2020_sabatos':
		echo '<meta name="description" content="United States 2020 Sabatos Crystal Ball forecast"><title>YAPms - Sabatos Crystal Ball</title>';
		break;
		case '2020_democratic_primary':
		echo '<meta name="description" content="United States 2020 democratic primary map"><title>YAPms - Democratic primary</title>';
		break;
		case '2020_republican_primary':
		echo '<meta name="description" content="United States 2020 republican primary map"><title>YAPms - Republican primary</title>';
		break;
		case 'USA_county':
		echo '<meta name="description" content="United States county map"><title>YAPms - USA County</title>';
		break;
		case 'USA_congressional':
		echo '<meta name="description" content="United States congressional map"><title>YAPms - USA Congressional</title>';
		break;
		case '2018_congress':
		echo '<meta name="description" content="United States 2018 congressional map"><title>YAPms - USA 2018 Congressional</title>';
		break;
		case '2024_projection':
		echo '<meta name="description" content="United States 2024 electoral college projection"><title>YAPms - USA 2024 Electoral College Projection</title>';
		break;
		default:
		echo '<meta name="description" content="Presidential, Senatorial, Congressional, Guberntorial, and Democratic Primary, political map simulator."><title>YAPms - Interactive Maps</title>';
		break;
	}
} else {
	echo '<meta name="description" content="Presidential, Senatorial, Congressional, Guberntorial, and Democratic Primary, political map simulator.">';
	echo '<title>YAPms - Interactive Maps</title>';

}
?>
