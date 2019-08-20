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
		case 'Germany_constituencies':
		echo '<meta name="description" content="German constituencies interactive map"><title>German Constituencies</title>';
		break;
		case 'Germany_states':
		echo '<meta name="description" content="German states interactive map"><title>German States</title>';
		break;
		case 'Canada_provinces':
		echo '<meta name="description" content="Canadian provinces interactive map"><title>Canadian Provinces</title>';
		break;
		case 'Canada_constituencies':
		echo '<meta name="description" content="Canadian constituencies interactive map"><title>Canadian Constituencies</title>';
		break;
		case 'Australia_states':
		echo '<meta name="description" content="Australian states interactive map"><title>Australian States</title>';
		break;
		case 'Australia_constituencies':
		echo '<meta name="description" content="Australian constituencies interactive map"><title>Australian Constituencies</title>';
		break;
		case 'Netherlands_provinces':
		echo '<meta name="description" content="Dutch provinces interactive map"><title>Dutch Provinces</title>';
		break;
		case 'Netherlands_gemeenten':
		echo '<meta name="description" content="Dutch gemeenten interactive map"><title>Dutch Gemeenten</title>';
		break;
		case 'Brazil_deputies':
		echo '<meta name="description" content="Brazilian deputies interactive map"><title>Brazilian Deputies</title>';
		break;
		case 'Spain_constituencies':
		echo '<meta name="description" content="Spanish constituencies interactive map"><title>Spanish Constituencies</title>';
		break;
		case 'Italy_states':
		echo '<meta name="description" content="Italian states interactive map"><title>Italian States</title>';
		break;
		case 'UnitedKingdom_constituencies':
		echo '<meta name="description" content="United Kingdom constituencies interactive map"><title>United Kingdom Constituencies</title>';
		break;
		case 'Ireland_constituencies':
		echo '<meta name="description" content="Irish constituencies interactive map"><title>Irish Constituencies</title>';
		break;
		case 'France_constituencies':
		echo '<meta name="description" content="French constituencies interactive map"><title>French Constituencies</title>';
		break;
		case 'USA_Canada':
		echo '<meta name="description" content="United USA and Canada interactive map"><title>USA/Canada Map</title>';
		break;
		case 'EuropeanUnion':
		echo '<meta name="description" content="European Union interactive map"><title>European Union</title>';
		break;
		case 'World':
		echo '<meta name="description" content="World interactive map"><title>World Map</title>';
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
