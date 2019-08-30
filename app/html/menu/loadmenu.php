<div class="selectmenu-header">
<div class="selectmenu-controls">
       <object type="image/svg+xml" data="./html/closebutton.svg">Error</object>
</div>
<h2 class="selectmenu-display-header">
	<div class="selectmenu-display-header-text">Load From File</div>
</h2>
</div>
<div class="selectmenu-content">
<div class="selectmenu-section">Select a .yapms file to load</div>
<div class="selectmenu-section">
<form action="load.php" method="post" enctype="multipart/form-data">
	<input type="file" name="file" id="loadfile">
	<input type="button" value="<?php echo _("Load") ?>" onclick='loadFileMap()'>
</form>
</div>
</div>
