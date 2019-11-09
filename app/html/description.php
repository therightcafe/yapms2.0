<?php
if (isset($_GET["t"]) && !empty($_GET["t"])) {
	if(strpos($_GET['t'], '_presidential') && !strpos($_GET['t'], '_county')) {
		$year = substr($_GET['t'], 4, 4);
		echo "<meta name=\"description\" content=\"United States {$year} presidential interactive election map\"><title>USA - {$year} Presidential Election</title>";
		echo 
		"<meta property=\"og:title\" content=\"YAPms - USA {$year} Presidential\">
		<meta property=\"og:description\" content=\"Interactive USA {$year} Presidential Map\">";
	} else if(strpos($_GET['t'], '_democratic_primary')) {
		$year = substr($_GET['t'], 4, 4);
		echo "<meta name=\"description\" content=\"United States {$year} democratic primary interactive election map\"><title>USA - {$year} Democratic Primary</title>";
		echo 
		"<meta property=\"og:title\" content=\"YAPms - USA {$year} Democratic Primary\">
		<meta property=\"og:description\" content=\"Interactive USA {$year} Democratic Primary Map\">";
	} else if(strpos($_GET['t'], '_republican_primary')) {
		$year = substr($_GET['t'], 4, 4);
		echo "<meta name=\"description\" content=\"United States {$year} republican primary interactive election map\"><title>USA - {$year} Republican Primary</title>";
		echo 
		"<meta property=\"og:title\" content=\"YAPms - USA {$year} Republican Primary\">
		<meta property=\"og:description\" content=\"Interactive USA {$year} Republican Primary Map\">";
	} else {
	switch($_GET['t']) {
		case 'USA_2020_senatorial':
		case 'USA_2020_senate':
		echo '<meta name="description" content="United States 2020 interactive senate election map"><title>USA - 2020 Senate Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2020 Senate">
		<meta property="og:description" content="Interactive USA 2020 Senate Map">';
		break;
		case 'USA_2020_gubernatorial':
		case 'USA_2020_governors':
		echo '<meta name="description" content="United States 2020 governors interactive election map"><title>USA - 2020 Governors Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2020 Governors">
		<meta property="og:description" content="Interactive USA 2020 Governors Map">';
		break;
		case 'USA_trump_impeachment_support':
		echo '<meta name="description" content="Trump Impeachment Support Map"><title>USA - Trump Impeachment Support Map</title>';
		echo 
		'<meta property="og:title" content="YAPms - Trump Impeachment Support Map">
		<meta property="og:description" content="Interactive Trump Impeachment Support Map">';
		break;
		case 'USA_2020_cook':
		echo '<meta name="description" content="United States 2020 Cook Political Report forecast"><title>USA - 2020 Cook Political Report Election Forecast</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2020 Cook Political Report Forecast">
		<meta property="og:description" content="Interactive USA 2020 Cook Political Report Map">';
		break;
		case 'USA_2020_inside':
		echo '<meta name="description" content="United States 2020 Inside Elections forecast"><title>USA - 2020 Inside Elections Election Forecast</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2020 Inside Elections Forecast">
		<meta property="og:description" content="Interactive USA 2020 Cook Political Report Map">';
		break;
		case 'USA_2020_sabatos':
		echo '<meta name="description" content="United States 2020 Sabatos Crystal Ball forecast"><title>USA - 2020 Sabatos Crystal Ball Election Forecast</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2020 Sabatos Crystal Ball Forecast">
		<meta property="og:description" content="Interactive USA 2020 Sabatos Crystal Ball Map">';
		break;
		case 'USA_county':
		echo '<meta name="description" content="United States interactive county election map"><title>USA - County Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA County">
		<meta property="og:description" content="Interactive USA County Map">';
		break;
		case 'USA_2016_presidential_county':
		echo '<meta name="description" content="United States interactive 2016 county election map"><title>USA - 2016 County Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2016 County Election Results">
		<meta property="og:description" content="Interactive USA 2016 County Election Results Map">';
		break;
		case 'USA_governors':
		echo '<meta name="description" content="United States interactive governors election map"><title>USA - Governors Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA Governors">
		<meta property="og:description" content="Interactive USA Governors Map">';
		break;
		case 'USA_senate':
		echo '<meta name="description" content="United States interactive senate election map"><title>USA - Senate Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA Senate">
		<meta property="og:description" content="Interactive USA Senate Map">';
		break;
		case 'USA_current_senate':
		echo '<meta name="description" content="United States interactive current senate map"><title>USA - Current Senate Map</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA Current Senate Map">
		<meta property="og:description" content="Interactive USA Current Senate Map">';
		break;
		case 'USA_congressional':
		case 'USA_2020_house':
		echo '<meta name="description" content="United States 2020 interactive house election map"><title>USA - 2020 House Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2020 House">
		<meta property="og:description" content="Interactive USA 2020 House Map">';
		break;
		case 'USA_current_house':
		echo '<meta name="description" content="United States 2020 interactive house map"><title>USA - Current House Map</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA Current House Map">
		<meta property="og:description" content="Interactive USA Current House Map">';
		break;
		case 'USA_2020_house_cook':
		echo '<meta name="description" content="United States 2020 House Cook Political Report forecast"><title>USA - 2020 Cook Political Report House Forecast</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2020 House Cook Political Report Forecast">
		<meta property="og:description" content="Interactive USA 2020 House Cook Political Report Map">';
		break;
		case 'USA_2018_congress':
		case 'USA_2018_house':
		echo '<meta name="description" content="United States 2018 interactive house election map"><title>USA - 2018 House Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2018 House Results">
		<meta property="og:description" content="Interactive USA 2018 House Results Map">';
		break;
		case 'USA_2008_house':
		echo '<meta name="description" content="United States 2008 interactive house election map"><title>USA - 2008 House Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2008 House">
		<meta property="og:description" content="Interactive USA 2008 House Map">';
		break;
		case 'USA_2024_projection':
		echo '<meta name="description" content="United States 2024 interactive electoral college projection map"><title>USA - 2024 Electoral College Projection</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA 2024 Electoral College Projection">
		<meta property="og:description" content="Interactive USA 2024 Electoral College Projection Map">';
		break;
		case 'Germany_constituencies':
		case 'Germany_bundestag':
		echo '<meta name="description" content="Germany - Bundestag election map"><title>Germany - Bundestag Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Germany Bundestag">
		<meta property="og:description" content="Interactive German Budestag Map">';
		break;
		case 'Germany_states':
		echo '<meta name="description" content="Germany - State election map"><title>Germany - State Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Germany States">
		<meta property="og:description" content="Interactive German States Map">';
		break;
		case 'Canada_provinces':
		echo '<meta name="description" content="Canada - Province election map"><title>Canada - Province Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Canada Provinces">
		<meta property="og:description" content="Interactive Canadian Provinces Map">';
		break;
		case 'Canada_constituencies':
		case 'Canada_house_of_commons':
		echo '<meta name="description" content="Canada - House of Commons election map"><title>Canada - House of Commons Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Canada House of Commons">
		<meta property="og:description" content="Interactive Canadian House of Commons Map">';
		break;
		case 'Canada_2019_house_of_commons':
		echo '<meta name="description" content="Canada - 2019 House of Commons election map"><title>Canada - 2019 House of Commons Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - 2019 Canada House of Commons">
		<meta property="og:description" content="Interactive 2019 Canadian House of Commons Map">';
		break;
		case 'Australia_states':
		echo '<meta name="description" content="Australia - states election map"><title>Australia - State Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Australia States">
		<meta property="og:description" content="Interactive Australian State Map">';
		break;
		case 'Australia_constituencies':
		case 'Australia_house_of_representatives':
		echo '<meta name="description" content="Australia - House of Representatives election map"><title>Australia - House of Representatives Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Australia House of Representatives">
		<meta property="og:description" content="Interactive Australian House of Representatives Map">';
		break;
		case 'Netherlands_provinces':
		echo '<meta name="description" content="Netherland - provinces election map"><title>Netherlands - Province Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Netherland Provinces">
		<meta property="og:description" content="Interactive Dutch Provinces Map">';
		break;
		case 'Netherlands_gemeenten':
		echo '<meta name="description" content="Netherlands - Gemeenten election map"><title>Netherlands - Gemeenten Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Netherland Gemeenten">
		<meta property="og:description" content="Interactive Dutch Gemeenten Map">';
		break;
		case 'Brazil_deputies':
		case 'Brazil_chamber_of_deputies':
		echo '<meta name="description" content="Brazil - Chamber of Deputies election map"><title>Brazil - Chamber of Deputies Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Brazil Chamber of Deputies">
		<meta property="og:description" content="Interactive Brazilian Chamber of Deputies Map">';
		break;
		case 'Brazil_federal_senate':
		echo '<meta name="description" content="Brazil - Federal Senate election map"><title>Brazil - Federal Senate Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Brazil Federal Senate">
		<meta property="og:description" content="Interactive Brazilian Federal Senate Map">';
		break;
		case 'Spain_constituencies':
		case 'Spain_congress_of_deputies':
		echo '<meta name="description" content="Spain - Congress of Deputies election map"><title>Spain - Congress of Deputies Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Spain Congress of Deputies">
		<meta property="og:description" content="Interactive Spanish Congress of Deputies Map">';
		break;
		case 'Turkey_national_assembly':
		echo '<meta name="description" content="Turkey - National Assembly election map"><title>Turkey - National Assembly Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Turkey National Assembly">
		<meta property="og:description" content="Interactive Turkey National Assembly Map">';
		break;
		case 'Trinidad_Tobago_house_of_representatives':
		echo '<meta name="description" content="Trinidad & Tobago - House of Representatives election map"><title>Trinidad & Tobago - House of Representatives Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Trinidad Tobago House of Representatives">
		<meta property="og:description" content="Interactive Trinidad Tobago House of Representatives Map">';
		break;
		case 'Portugal_assembly_of_the_republic':
		echo '<meta name="description" content="Portugal - Assembly of the Republic election map"><title>Portugal - Assembly of the Republic Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Portugal Assembly of the Republic">
		<meta property="og:description" content="Interactive Portuguese Assembly of the Republic Map">';
		break;
		case 'India_lok_sabha':
		echo '<meta name="description" content="India - Lok Sabha election map"><title>India - Lok Sabha Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - India Lok Sabha">
		<meta property="og:description" content="Interactive Indian Lok Sabha Map">';
		break;
		case 'Italy_states':
		echo '<meta name="description" content="Italy - State election map"><title>Italy - State Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Italy States">
		<meta property="og:description" content="Interactive Italian States Map">';
		break;
		case 'UnitedKingdom_constituencies':
		case 'UnitedKingdom_house_of_commons':
		echo '<meta name="description" content="United Kingdom - House of Commons election map"><title>United Kingdom - House of Commons Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - United Kingdom House of Commons">
		<meta property="og:description" content="Interactive United Kingdom House of Commons Map">';
		break;
		case 'Ireland_constituencies':
		case 'Ireland_dail_eireann':
		echo '<meta name="description" content="Ireland - Dáil Éireann election map"><title>Ireland - Dáil Éireann Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Ireland Dáil Éireann">
		<meta property="og:description" content="Interactive Irish Dáil Éireann Map">';
		break;
		case 'France_constituencies':
		case 'France_national_assembly':
		echo '<meta name="description" content="France - National Assembly election map"><title>France - National Assembly Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - France National Assembly">
		<meta property="og:description" content="Interactive French National Assembly Map">';
		break;
		case 'Russia_federal_council':
		echo '<meta name="description" content="Russia - Federal Council election map"><title>Russia - Federal Council Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Russia Federal Council">
		<meta property="og:description" content="Interactive Russian Federal Council Map">';
		break;
		case 'Russia_duma':
		echo '<meta name="description" content="Russia - Duma election map"><title>Russia - Duma Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Russia Duma">
		<meta property="og:description" content="Interactive Russian Duma Map">';
		break;
		case 'Switzerland_council_of_states':
		echo '<meta name="description" content="Switzerland - Council of States map"><title>Switzerland - Council of States Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Switzerland Council of States">
		<meta property="og:description" content="Interactive Switzerland Council of States Map">';
		break;
		case 'Switzerland_national_council':
		echo '<meta name="description" content="Switzerland - National Council map"><title>Switzerland - National Council Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - Switzerland National Council">
		<meta property="og:description" content="Interactive Switzerland National Council Map">';
		break;
		case 'USA_Canada':
		echo '<meta name="description" content="United USA and Canada election map"><title>USA/Canada Map Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - USA / Canada">
		<meta property="og:description" content="Interactive USA / Canada Map">';
		break;
		case 'EuropeanUnion':
		echo '<meta name="description" content="European Union election map"><title>European Union Election</title>';
		echo 
		'<meta property="og:title" content="YAPms - European Union">
		<meta property="og:description" content="Interactive European Union Map">';
		break;
		case 'World':
		echo '<meta name="description" content="World election map"><title>World Map</title>';
		echo 
		'<meta property="og:title" content="YAPms - World">
		<meta property="og:description" content="Interactive World Map">';
		break;
		default:
		echo '<meta name="description" content="United States Presidential, Senatorial, Congressional, Guberntorial and Primary interactive election maps. United Kingdom, Canada, Germany election maps."><title>YAPms - Interactive Political Election Maps</title>';
		echo 
		'<meta property="og:title" content="YAPms - Yet Another Political Map Simulator">
		<meta property="og:description" content="Interactive Political Maps">';
		break;
	}
	}
} else if (isset($_GET["m"]) && !empty($_GET["m"])) {
	echo '<meta name="description" content="United States Presidential, Senatorial, Congressional, Guberntorial and Primary interactive election maps. United Kingdom, Canada, Germany election maps."><title>YAPms - Interactive Political Election Maps</title>';
	echo 
	'<meta property="og:title" content="YAPms - Yet Another Political Map Simulator">
	<meta property="og:description" content="Interactive User Created Map">';

} else {
	echo '<meta name="description" content="United States 2020 presidential interactive election map"><title>USA - 2020 Presidential Election</title><link rel="canonical" href="https://www.yapms.com/app/?t=USA_2020_presidential"/>';
	echo 
	'<meta property="og:title" content="YAPms - Yet Another Political Map Simulator">
	<meta property="og:description" content="Interactive Political Maps">';
	echo '<meta property="og:image" content="http://www.yapms.com/app/res/yapms-96.png">
	<meta property="og:image:secure_url" content="https://www.yapms.com/app/res/yapms-96.png">';
}
?>
