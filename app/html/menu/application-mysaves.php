<div id="mysaves-header">
	<img id="mysaves-header-close" src="./html/deletebutton.svg" onclick="Account.closeMyMaps();">
	</img>
	<h2 id="mysaves-header-text">
		My Maps
	</h2>
</div>
<div id="mysaves-scroll">
	<div id="mysaves-current-map">
		<div id="mysaves-current-header">
			Current Map
		</div>
		<div id="mysaves-current-mappreview-container">
			<img id="mysaves-current-mappreview"></img>
		</div>
		<div id="mysaves-current-footer">
			<div id="mysaves-current-error">
			</div>
			<input id="mysaves-name-input" type="text" name="title" maxlength="30">
			</input>
			<div id="mysaves-save" onclick="Account.save();">
				Save
			</div>
		</div>
	</div>
	<div id="mysaves-maps">
	</div>
</div>
