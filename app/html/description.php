<?php
if (isset($_GET["t"]) && !empty($_GET["t"])) {
	if(strpos($_GET['t'], '_presidential')) {
		$year = substr($_GET['t'], 0, 4);
		echo "<meta name=\"description\" content=\"United States {$year} presidential election map\"><title>USA {$year} Presidential Election</title>";
	} else {
	switch($_GET['t']) {
		case '2020_senatorial':
		echo '<meta name="description" content="United States 2020 senatorial election map"><title>2020 Senatorial</title>';
		break;
		case '2020_gubernatorial':
		echo '<meta name="description" content="United States 2020 gubernatorial election map"><title>2020 Gubernatorial</title>';
		break;
		case '2020_cook':
		echo '<meta name="description" content="United States 2020 Cook Political Report forecast"><title>Cook Political Report</title>';
		break;
		case '2020_inside':
		echo '<meta name="description" content="United States 2020 Inside Elections forecast"><title>Inside Elections</title>';
		break;
		case '2020_sabatos':
		echo '<meta name="description" content="United States 2020 Sabatos Crystal Ball forecast"><title>Sabatos Crystal Ball</title>';
		break;
		case '2020_democratic_primary':
		echo '<meta name="description" content="United States 2020 democratic primary map"><title>Democratic primary</title>';
		break;
		case '2020_republican_primary':
		echo '<meta name="description" content="United States 2020 republican primary map"><title>Republican primary</title>';
		break;
		case 'USA_county':
		echo '<meta name="description" content="United States county map"><title>USA County</title>';
		break;
		case 'USA_congressional':
		echo '<meta name="description" content="United States congressional map"><title>USA Congressional</title>';
		break;
		case '2018_congress':
		echo '<meta name="description" content="United States 2018 congressional map"><title>USA 2018 Congressional</title>';
		break;
		case '2024_projection':
		echo '<meta name="description" content="United States 2024 electoral college projection"><title>USA 2024 Electoral College Projection</title>';
		break;
		default:
		echo '<meta name="description" content="United States Presidential, Senatorial, Congressional, Guberntorial and Primary interactive maps. United Kingdom, Canada, Germany maps and more."><title>Interactive Political Maps</title>';
		break;
	}
	}
} else {
	echo '<meta name="description" content="United States Presidential, Senatorial, Congressional, Guberntorial and Primary interactive maps. United Kingdom, Canada, Germany maps and more."><title>Interactive Political Maps</title>';
}
?>
