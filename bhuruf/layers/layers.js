var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_b_huruf_1 = new ol.format.GeoJSON();
var features_b_huruf_1 = format_b_huruf_1.readFeatures(json_b_huruf_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_b_huruf_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_b_huruf_1.addFeatures(features_b_huruf_1);
var lyr_b_huruf_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_b_huruf_1, 
                style: style_b_huruf_1,
                interactive: true,
    title: 'b_huruf<br />\
    <img src="styles/legend/b_huruf_1_0.png" /> 1,1 - 2,2<br />\
    <img src="styles/legend/b_huruf_1_1.png" /> 2,2 - 5,5<br />\
    <img src="styles/legend/b_huruf_1_2.png" /> 5,5 - 8,7<br />\
    <img src="styles/legend/b_huruf_1_3.png" /> 8,7 - 11,6<br />\
    <img src="styles/legend/b_huruf_1_4.png" /> 11,6 - 22<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_b_huruf_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_b_huruf_1];
lyr_b_huruf_1.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'r_skolah': 'r_skolah', 'b_huruf': 'b_huruf', 'pnduduk': 'pnduduk', 'p_bhuruf': 'p_bhuruf', 'pkbm': 'pkbm', });
lyr_b_huruf_1.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'r_skolah': 'TextEdit', 'b_huruf': 'TextEdit', 'pnduduk': 'TextEdit', 'p_bhuruf': 'TextEdit', 'pkbm': '', });
lyr_b_huruf_1.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'inline label', 'KABKOT': 'inline label', 'r_skolah': 'no label', 'b_huruf': 'no label', 'pnduduk': 'no label', 'p_bhuruf': 'inline label', 'pkbm': 'inline label', });
lyr_b_huruf_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});