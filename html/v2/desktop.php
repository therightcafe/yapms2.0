<div id="topbar">
	<h1>
		YAPms - Yet Another Political Map Simulator
	</h1>
</div>

<div id="layout">
	<div id="navigation">
		<?php
			require './html/v2/usa-national-elections.php';
			require './html/v2/usa-forecasts.php';
			require './html/v2/usa-current-congress.php';
			require './html/v2/usa-state-legislatures.php';
			require './html/v2/usa-presidential-results.php';
			require './html/v2/usa-primary-results.php'; 
			require './html/v2/usa-other.php'; 

			require './html/v2/arg.php'; 
			require './html/v2/aus.php'; 
			require './html/v2/bra.php'; 
			require './html/v2/can.php'; 
			require './html/v2/fra.php'; 
			require './html/v2/ger.php'; 
			require './html/v2/ind.php'; 
			require './html/v2/ita.php'; 
			require './html/v2/ire.php'; 
			require './html/v2/ned.php'; 
			require './html/v2/prt.php'; 
			require './html/v2/rus.php'; 
			require './html/v2/zaf.php'; 
			require './html/v2/esp.php'; 
			require './html/v2/swe.php'; 
			require './html/v2/che.php'; 
			require './html/v2/tur.php'; 
			require './html/v2/tat.php'; 
			require './html/v2/ukd.php'; 
			require './html/v2/global.php'; 
		?>			
	</div>
	
	<div id="featured">
		<div id="infobox">
			<p>
			YAPms is a tool for creating and sharing political maps.
			</p>
			<p>
				<b>Contact Email</b>
				<a style="color:blue;" href="mailto:bugreport@yapms.com">bugreport@yapms.com</a> 
			</p>
		</div>

		<div id="popular-maps" class="featured-section">
			<h2>
				Popular Maps
			</h2>
			<div class="info-box">
				<div class="info-box-header">
					<img src="app/res/flags/usa.svg">
					<h3>
						United States
					</h3>
				</div>
				<a class="map-button" href="./app/?=USA_2020_presidential">
					Presidential
				</a>
				<a class="map-button" href="./app/?t=USA_2020_democratic_primary">
					Democratic Primary
				</a>
			</div>
			<div class="info-box">
				<div class="info-box-header">
					<img src="app/res/flags/ukd.svg">
					<h3>
						United Kingdom
					</h3>
				</div>
				<a class="map-button" href="./app/?t=UnitedKingdom_house_of_commons">
					House of Commons
				</a>
				<a class="map-button" href="./app/?t=UnitedKingdom_current_parliament">
					Current Parliament
				</a>
			</div>
			<div class="info-box">
				<div class="info-box-header">
					<img src="app/res/flags/can.svg">
					<h3>
						Canada
					</h3>
				</div>
				<a class="map-button" href="./app/?t=Canada_house_of_commons">
					House of Commons
				</a>
				<a class="map-button" href="./app/?t=UnitedKingdom_current_parliament">
					2019 Results
				</a>
			</div>
		</div>

		<div id="New Maps" class="featured-section">
			<h2>
				Updates
			</h2>
			<div class="info-box">
				<div class="info-box-header">
					<img src="app/res/flags/usa.svg">
					<h3>
						Forecast
					</h3>
				</div>
				<p>Cook Political Report</p>
				<p><small>
					December 2, 2019
				</small></p>
				<a class="map-button" href="./app/?t=USA_2020_house_cook">
					House
				</a>
			</div>
			<div class="info-box">
				<div class="info-box-header">
					<img src="app/res/flags/usa.svg">
					<h3>
						New Map
					</h3>
				</div>
				<p>New Jersey</p>
				<a class="map-button" href="./app/?t=NewJersey_2020_state_upper">
					Senate
				</a>
			</div>
			<div class="info-box">
				<div class="info-box-header">
					<img src="app/res/flags/swe.svg">
					<h3>
						New Map
					</h3>
				</div>
				<p>Sweden</p>
				<a class="map-button" href="./app/?t=Sweden_riksdag">
					Riksdag
				</a>
			</div>
		</div>

		<?php
			require './html/v2/upcoming-elections.php';
			require './html/v2/primary-timeline.php';
		?>
	</div>
</div>
