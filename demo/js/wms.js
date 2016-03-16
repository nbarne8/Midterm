//Map and view for the map, the setView value is placed on viewing the continuous United States
	var map = L.map('map').setView([30, -90], 4);

//Base map 1 that shows a basic street map
	var streets = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

//Base map 2 shows the same as Base map 1 but includes German names of locations
var earth = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
	type: 'sat',
	ext: 'jpg',
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
	subdomains: '1234'
});

//This is a WMS tile layer from nowcoast showing real-time wind speed data
	var Wind = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_windspeed_offsets/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA"
	}).addTo(map);

//This is a WMS tile layer from nowcoast showing real-time hazard data
	var Hazard = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_longduration_hazards_time/MapServer/WMSServer", {
		layers: '1',
		format: 'image/png',
		transparent: true,
		attribution: "NOAA",
	}).addTo(map);

//Coding that creates selectable layers within the map
	var baseLayers = {
	    "Streets": streets,
			"Earth": earth
	};

//Coding that creates selectable real-time data in the map
	var overlays = {
	    "Wind Speed": Wind,
	    "Hazard": Hazard,
	};

//Allows for the base layers to be added to the html
	L.control.layers(baseLayers, overlays).addTo(map);
