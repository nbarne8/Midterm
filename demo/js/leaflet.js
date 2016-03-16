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

//This is a WMS tile layer from nowcoast showing real-time lightning data
	var Lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA"
	}).addTo(map);

//This is a WMS tile layer from nowcoast showing real-time humidity data
	var Humidity = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_relhumidity_offsets/MapServer/WMSServer", {
		layers: '1',
		format: 'image/png',
		transparent: true,
		attribution: "NOAA",
		opacity: 0.25
	}).addTo(map);

//This is a WMS tile layer from nowcoast showing real-time precipitation data
	var Precipitation = L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/radar_base_reflectivity/MapServer/WMSServer", {
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
	    "Lightning": Lightning,
	    "Humidity": Humidity,
			"Precipitation": Precipitation
	};

//Allows for the base layers to be added to the html
	L.control.layers(baseLayers, overlays).addTo(map);
