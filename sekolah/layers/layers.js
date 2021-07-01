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
var format_r_lama_sekolah_1 = new ol.format.GeoJSON();
var features_r_lama_sekolah_1 = format_r_lama_sekolah_1.readFeatures(json_r_lama_sekolah_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_r_lama_sekolah_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_r_lama_sekolah_1.addFeatures(features_r_lama_sekolah_1);
var lyr_r_lama_sekolah_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_r_lama_sekolah_1, 
                style: style_r_lama_sekolah_1,
                interactive: true,
    title: 'r_lama_sekolah<br />\
    <img src="styles/legend/r_lama_sekolah_1_0.png" /> 4 - 6<br />\
    <img src="styles/legend/r_lama_sekolah_1_1.png" /> 6 - 7<br />\
    <img src="styles/legend/r_lama_sekolah_1_2.png" /> 7 - 8<br />\
    <img src="styles/legend/r_lama_sekolah_1_3.png" /> 8 - 9<br />\
    <img src="styles/legend/r_lama_sekolah_1_4.png" /> 9 - 11<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_r_lama_sekolah_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_r_lama_sekolah_1];
lyr_r_lama_sekolah_1.set('fieldAliases', {'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'PROVINSI': 'PROVINSI', 'KABKOT': 'KABKOT', 'r_skolah': 'r_skolah', 'b_huruf': 'b_huruf', 'pnduduk': 'pnduduk', 'p_bhuruf': 'p_bhuruf', 'pkbm': 'pkbm', });
lyr_r_lama_sekolah_1.set('fieldImages', {'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABKOT': 'TextEdit', 'r_skolah': 'TextEdit', 'b_huruf': 'TextEdit', 'pnduduk': 'TextEdit', 'p_bhuruf': 'TextEdit', 'pkbm': 'TextEdit', });
lyr_r_lama_sekolah_1.set('fieldLabels', {'PROVNO': 'no label', 'KABKOTNO': 'no label', 'PROVINSI': 'inline label', 'KABKOT': 'inline label', 'r_skolah': 'inline label', 'b_huruf': 'no label', 'pnduduk': 'no label', 'p_bhuruf': 'no label', 'pkbm': 'no label', });
lyr_r_lama_sekolah_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});