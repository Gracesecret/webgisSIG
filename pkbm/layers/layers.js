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
var format_pkbm_1 = new ol.format.GeoJSON();
var features_pkbm_1 = format_pkbm_1.readFeatures(json_pkbm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pkbm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pkbm_1.addFeatures(features_pkbm_1);
var lyr_pkbm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pkbm_1, 
                style: style_pkbm_1,
                interactive: true,
    title: 'pkbm<br />\
    <img src="styles/legend/pkbm_1_0.png" /> 1 - 13<br />\
    <img src="styles/legend/pkbm_1_1.png" /> 13 - 22<br />\
    <img src="styles/legend/pkbm_1_2.png" /> 22 - 30,6<br />\
    <img src="styles/legend/pkbm_1_3.png" /> 30,6 - 36,8<br />\
    <img src="styles/legend/pkbm_1_4.png" /> 36,8 - 64<br />'
        });
var format_pkbm_2 = new ol.format.GeoJSON();
var features_pkbm_2 = format_pkbm_2.readFeatures(json_pkbm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pkbm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pkbm_2.addFeatures(features_pkbm_2);
var lyr_pkbm_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pkbm_2, 
                style: style_pkbm_2,
                interactive: true,
                title: '<img src="styles/legend/pkbm_2.png" /> pkbm'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_pkbm_1.setVisible(true);lyr_pkbm_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_pkbm_1,lyr_pkbm_2];
lyr_pkbm_1.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'r_skolah': 'r_skolah', 'b_huruf': 'b_huruf', 'pnduduk': 'pnduduk', 'p_bhuruf': 'p_bhuruf', 'pkbm': 'pkbm', });
lyr_pkbm_2.set('fieldAliases', {'y': 'y', 'x': 'x', 'nama': 'nama', });
lyr_pkbm_1.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'r_skolah': 'TextEdit', 'b_huruf': 'TextEdit', 'pnduduk': 'TextEdit', 'p_bhuruf': 'TextEdit', 'pkbm': 'TextEdit', });
lyr_pkbm_2.set('fieldImages', {'y': 'TextEdit', 'x': 'TextEdit', 'nama': 'TextEdit', });
lyr_pkbm_1.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'inline label', 'KABKOT': 'inline label', 'r_skolah': 'no label', 'b_huruf': 'no label', 'pnduduk': 'no label', 'p_bhuruf': 'inline label', 'pkbm': 'inline label', });
lyr_pkbm_2.set('fieldLabels', {'y': 'no label', 'x': 'no label', 'nama': 'no label', });
lyr_pkbm_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});