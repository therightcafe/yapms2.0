<?php
if (isset($_GET["t"]) && !empty($_GET["t"])) {
	if(strpos($_GET['t'], '_presidential')) {
		$year = substr($_GET['t'], 4, 4);
		echo "<meta name=\"description\" content=\"United States {$year} presidential interactive election map\"><title>USA - {$year} Presidential Election</title>";
	} else {
	switch($_GET['t']) {
		case 'USA_2020_senatorial':
		case 'USA_2020_senate':
		echo '<meta name="description" content="United States 2020 interactive senate election map"><title>USA - 2020 Senate Election</title>';
		break;
		case 'USA_2020_gubernatorial':
		case 'USA_2020_governors':
		echo '<meta name="description" content="United States 2020 governors interactive election map"><title>USA - 2020 Governors Election</title>';
		break;
		case 'USA_2020_cook':
		echo '<meta name="description" content="United States 2020 Cook Political Report forecast"><title>USA - Cook Political Report Election Forecast</title>';
		break;
		case 'USA_2020_inside':
		echo '<meta name="description" content="United States 2020 Inside Elections forecast"><title>USA - Inside Elections Election Forecast</title>';
		break;
		case 'USA_2020_sabatos':
		echo '<meta name="description" content="United States 2020 Sabatos Crystal Ball forecast"><title>USA - Sabatos Crystal Ball Election Forecast</title>';
		break;
		case 'USA_2020_democratic_primary':
		echo '<meta name="description" content="United States 2020 interactive democratic primary map"><title>USA - Democratic Primary Election</title>';
		break;
		case 'USA_2020_republican_primary':
		echo '<meta name="description" content="United States 2020 interactive republican primary map"><title>USA - Republican Primary Election</title>';
		break;
		case 'USA_county':
		echo '<meta name="description" content="United States interactive county election map"><title>USA - County Election</title>';
		break;
		case 'USA_congressional':
		case 'USA_house':
		echo '<meta name="description" content="United States interactive house election map"><title>USA - House Election</title>';
		break;
		case 'USA_2018_congress':
		case 'USA_2018_house':
		echo '<meta name="description" content="United States 2018 interactive house election map"><title>USA - 2018 House Election</title>';
		break;
		case 'USA_2024_projection':
		echo '<meta name="description" content="United States 2024 interactive electoral college projection map"><title>USA - 2024 Electoral College Projection</title>';
		break;
		case 'Germany_constituencies':
		case 'Germany_bundestag':
		echo '<meta name="description" content="Germany - Bundestag election map"><title>Germany - Bundestag Election</title>';
		break;
		case 'Germany_states':
		echo '<meta name="description" content="Germany - State election map"><title>Germany - State Election</title>';
		break;
		case 'Canada_provinces':
		echo '<meta name="description" content="Canada - Province election map"><title>Canada - Province Election</title>';
		break;
		case 'Canada_constituencies':
		case 'Canada_house_of_commons':
		echo '<meta name="description" content="Canada - House of Commons election map"><title>Canada - House of Commons Election</title>';
		break;
		case 'Australia_states':
		echo '<meta name="description" content="Australia - states election map"><title>Australia - State Election</title>';
		break;
		case 'Australia_constituencies':
		case 'Australia_house_of_representatives':
		echo '<meta name="description" content="Australia - House of Representatives election map"><title>Australia - House of Representatives Election</title>';
		break;
		case 'Netherlands_provinces':
		echo '<meta name="description" content="Netherland - provinces election map"><title>Netherlands - Province Election</title>';
		break;
		case 'Netherlands_gemeenten':
		echo '<meta name="description" content="Netherlands - Gemeenten election map"><title>Netherlands - Gemeenten Election</title>';
		break;
		case 'Brazil_deputies':
		case 'Brazil_chamber_of_deputies':
		echo '<meta name="description" content="Brazil - Chamber of Deputies election map"><title>Brazil - Chamber of Deputies Election</title>';
		break;
		case 'Spain_constituencies':
		case 'Spain_congress_of_deputies':
		echo '<meta name="description" content="Spain - Congress of Deputies election map"><title>Spain - Congress of Deputies Election</title>';
		break;
		case 'Italy_states':
		echo '<meta name="description" content="Italy - State election map"><title>Italy - State Election</title>';
		break;
		case 'UnitedKingdom_constituencies':
		case 'UnitedKingdom_house_of_commons':
		echo '<meta name="description" content="United Kingdom - House of Commons election map"><title>United Kingdom - House of Commons Election</title>';
		break;
		case 'Ireland_constituencies':
		case 'Ireland_dail_eireann':
		echo '<meta name="description" content="Ireland - Dáil Éireann election map"><title>Ireland - Dáil Éireann Election</title>';
		break;
		case 'France_constituencies':
		case 'France_national_assembly':
		echo '<meta name="description" content="France - National Assembly election map"><title>France - National Assembly Election</title>';
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
