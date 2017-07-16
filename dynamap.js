function init() {
  var myOptions = {
    zoom: 10,
    center: new google.maps.LatLng(-6.1753924, 106.8249641),//35.23, -80.84),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true //my favorite feature in V3!
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  var url = 'http://gis.pgn.co.id/arcgis/rest/services/NetworkPGN_Operasi2017/MapServer';
 // var url = 'http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer';
  var cpc = new gmaps.ags.CopyrightControl(map);
  var dynamap = new gmaps.ags.MapOverlay(url, { opacity: 2 });
  dynamap.setMap(map);
}

window.onload = init;