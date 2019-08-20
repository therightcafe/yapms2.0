<?php
if (isset($_GET["t"]) && !empty($_GET["t"])) {
	if(strpos($_GET['t'], '_presidential')) {
		$year = substr($_GET['t'], 0, 4);
		echo "<meta name=\"description\" content=\"United States {$year} presidential interactive election map\"><title>USA {$year} Presidential Election</title>";
	} else {
	switch($_GET['t']) {
		case '2020_senatorial':
		case '2020_senate':
		echo '<meta name="description" content="United States 2020 interactive senate election map"><title>2020 Senate Election</title>';
		break;
		case '2020_gubernatorial':
		case '2020_governors':
		echo '<meta name="description" content="United States 2020 governors interactive election map"><title>2020 Governors Election</title>';
		break;
		case '2020_cook':
		echo '<meta name="description" content="United States 2020 Cook Political Report forecast"><title>Cook Political Report - Election Forecast</title>';
		break;
		case '2020_inside':
		echo '<meta name="description" content="United States 2020 Inside Elections forecast"><title>Inside Elections - Election Forecast</title>';
		break;
		case '2020_sabatos':
		echo '<meta name="description" content="United States 2020 Sabatos Crystal Ball forecast"><title>Sabatos Crystal Ball - Election Forecast</title>';
		break;
		case '2020_democratic_primary':
		echo '<meta name="description" content="United States 2020 interactive democratic primary map"><title>Democratic Primary Election</title>';
		break;
		case '2020_republican_primary':
		echo '<meta name="description" content="United States 2020 interactive republican primary map"><title>Republican Primary Election</title>';
		break;
		case 'USA_county':
		echo '<meta name="description" content="United States interactive county election map"><title>USA County Election</title>';
		break;
		case 'USA_congressional':
		case 'USA_house':
		echo '<meta name="description" content="United States interactive house election map"><title>USA House Election</title>';
		break;
		case '2018_congress':
		case '2018_house':
		echo '<meta name="description" content="United States 2018 interactive house election map"><title>USA 2018 House Election</title>';
		break;
		case '2024_projection':
		echo '<meta name="description" content="United States 2024 interactive electoral college projection map"><title>USA 2024 Electoral College Projection</title>';
		break;
		case 'Germany_constituencies':
		echo '<meta name="description" content="German constituencies election map"><title>German Constituencies Election</title>';
		break;
		case 'Germany_states':
		echo '<meta name="description" content="German states election map"><title>German States Election</title>';
		break;
		case 'Canada_provinces':
		echo '<meta name="description" content="Canadian provinces election map"><title>Canadian Provinces Election</title>';
		break;
		case 'Canada_constituencies':
		echo '<meta name="description" content="Canadian constituencies election map"><title>Canadian Constituencies Election</title>';
		break;
		case 'Australia_states':
		echo '<meta name="description" content="Australian states election map"><title>Australian States Election</title>';
		break;
		case 'Australia_constituencies':
		echo '<meta name="description" content="Australian constituencies election map"><title>Australian Constituencies Election</title>';
		break;
		case 'Netherlands_provinces':
		echo '<meta name="description" content="Dutch provinces election map"><title>Dutch Provinces Election</title>';
		break;
		case 'Netherlands_gemeenten':
		echo '<meta name="description" content="Dutch gemeenten election map"><title>Dutch Gemeenten Election</title>';
		break;
		case 'Brazil_deputies':
		echo '<meta name="description" content="Brazilian deputies election map"><title>Brazilian Deputies Election</title>';
		break;
		case 'Spain_constituencies':
		echo '<meta name="description" content="Spanish constituencies election map"><title>Spanish Constituencies Election</title>';
		break;
		case 'Italy_states':
		echo '<meta name="description" content="Italian states election map"><title>Italian States Election</title>';
		break;
		case 'UnitedKingdom_constituencies':
		echo '<meta name="description" content="United Kingdom constituencies election map"><title>United Kingdom Constituencies Election</title>';
		break;
		case 'Ireland_constituencies':
		echo '<meta name="description" content="Irish constituencies election map"><title>Irish Constituencies Election</title>';
		break;
		case 'France_constituencies':
		echo '<meta name="description" content="French constituencies election map"><title>French Constituencies Election</title>';
		break;
		case 'USA_Canada':
		echo '<meta name="description" content="United USA and Canada election map"><title>USA/Canada Map Election</title>';
		break;
		case 'EuropeanUnion':
		echo '<meta name="description" content="European Union election map"><title>European Union Election</title>';
		break;
		case 'World':
		echo '<meta name="description" content="World election map"><title>World Map</title>';
		break;
		default:
		echo '<meta name="description" content="United States Presidential, Senatorial, Congressional, Guberntorial and Primary interactive election maps. United Kingdom, Canada, Germany election maps."><title>Interactive Political Election Maps</title>';
		break;
	}
	}
} else {
	echo '<meta name="description" content="United States Presidential, Senatorial, Congressional, Guberntorial and Primary interactive election maps. United Kingdom, Canada, Germany election maps."><title>Interactive Political Election Maps</title>';
}
?>
