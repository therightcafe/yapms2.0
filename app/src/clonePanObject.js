var panObject = svgPanZoom("#svgdata", {
	fit: true,
	center: true,
	contain: false,
	panEnabled: true,
	zoomEnabled: true,
	dblClickZoomEnabled: false,
	maxZoom: 100,
	zoomScaleSensitivity: 0.1
});
panObject.resize();
panObject.fit();
panObject.center();
panObject.zoomBy(0.85);
adfiadfoj
