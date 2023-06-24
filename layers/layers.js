var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Southwest_Shewa_admin_1 = new ol.format.GeoJSON();
var features_Southwest_Shewa_admin_1 = format_Southwest_Shewa_admin_1.readFeatures(json_Southwest_Shewa_admin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Southwest_Shewa_admin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Southwest_Shewa_admin_1.addFeatures(features_Southwest_Shewa_admin_1);
var lyr_Southwest_Shewa_admin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Southwest_Shewa_admin_1, 
                style: style_Southwest_Shewa_admin_1,
                interactive: true,
                title: '<img src="styles/legend/Southwest_Shewa_admin_1.png" /> Southwest_Shewa_admin'
            });
var format_WP_Sapefile_2 = new ol.format.GeoJSON();
var features_WP_Sapefile_2 = format_WP_Sapefile_2.readFeatures(json_WP_Sapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WP_Sapefile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WP_Sapefile_2.addFeatures(features_WP_Sapefile_2);
var lyr_WP_Sapefile_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WP_Sapefile_2, 
                style: style_WP_Sapefile_2,
                interactive: false,
    title: 'WP_Sapefile<br />\
    <img src="styles/legend/WP_Sapefile_2_0.png" /> Deep borehole<br />\
    <img src="styles/legend/WP_Sapefile_2_1.png" /> Hand dug well<br />\
    <img src="styles/legend/WP_Sapefile_2_2.png" /> Protected spring<br />\
    <img src="styles/legend/WP_Sapefile_2_3.png" /> Shallow borehole<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Southwest_Shewa_admin_1.setVisible(true);lyr_WP_Sapefile_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Southwest_Shewa_admin_1,lyr_WP_Sapefile_2];
lyr_Southwest_Shewa_admin_1.set('fieldAliases', {'ZON_NAM': 'ZON_NAM', 'DIS_NAME': 'DIS_NAME', 'AREA__KM2': 'AREA__KM2', });
lyr_WP_Sapefile_2.set('fieldAliases', {'Kebele Nam': 'Kebele Nam', 'Village na': 'Village na', 'Name of wa': 'Name of wa', 'Year of co': 'Year of co', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Elevation': 'Elevation', 'Type of wa': 'Type of wa', 'Power sour': 'Power sour', 'Number of': 'Number of', 'Accessibil': 'Accessibil', 'Type of pu': 'Type of pu', 'Functional': 'Functional', 'Number o_1': 'Number o_1', 'Reason for': 'Reason for', 'Total numb': 'Total numb', 'Estimated': 'Estimated', 'Is the wat': 'Is the wat', 'In which m': 'In which m', 'Is there a': 'Is there a', 'Who is the': 'Who is the', 'Name of fu': 'Name of fu', 'Is WASHCo.': 'Is WASHCo.', 'Is the WAS': 'Is the WAS', 'When was t': 'When was t', 'In total h': 'In total h', 'How many w': 'How many w', 'Has the wa': 'Has the wa', 'When was_1': 'When was_1', 'Who rehabi': 'Who rehabi', 'Within how': 'Within how', 'Who is res': 'Who is res', 'Is there f': 'Is there f', 'Who is col': 'Who is col', 'How is the': 'How is the', 'How many B': 'How many B', 'Is there t': 'Is there t', 'Does the w': 'Does the w', 'Does the_1': 'Does the_1', });
lyr_Southwest_Shewa_admin_1.set('fieldImages', {'ZON_NAM': 'TextEdit', 'DIS_NAME': 'TextEdit', 'AREA__KM2': 'TextEdit', });
lyr_WP_Sapefile_2.set('fieldImages', {'Kebele Nam': 'TextEdit', 'Village na': 'TextEdit', 'Name of wa': 'TextEdit', 'Year of co': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Elevation': 'TextEdit', 'Type of wa': 'TextEdit', 'Power sour': 'TextEdit', 'Number of': 'TextEdit', 'Accessibil': 'TextEdit', 'Type of pu': 'TextEdit', 'Functional': 'TextEdit', 'Number o_1': 'TextEdit', 'Reason for': 'TextEdit', 'Total numb': 'TextEdit', 'Estimated': 'TextEdit', 'Is the wat': 'TextEdit', 'In which m': 'TextEdit', 'Is there a': 'TextEdit', 'Who is the': 'TextEdit', 'Name of fu': 'TextEdit', 'Is WASHCo.': 'TextEdit', 'Is the WAS': 'TextEdit', 'When was t': 'TextEdit', 'In total h': 'TextEdit', 'How many w': 'TextEdit', 'Has the wa': 'TextEdit', 'When was_1': 'TextEdit', 'Who rehabi': 'TextEdit', 'Within how': 'TextEdit', 'Who is res': 'TextEdit', 'Is there f': 'TextEdit', 'Who is col': 'Range', 'How is the': 'Range', 'How many B': 'Range', 'Is there t': 'TextEdit', 'Does the w': 'TextEdit', 'Does the_1': 'TextEdit', });
lyr_Southwest_Shewa_admin_1.set('fieldLabels', {'ZON_NAM': 'header label', 'DIS_NAME': 'header label', 'AREA__KM2': 'header label', });
lyr_WP_Sapefile_2.set('fieldLabels', {'Kebele Nam': 'header label', 'Village na': 'header label', 'Name of wa': 'header label', 'Year of co': 'header label', 'Latitude': 'header label', 'Longitude': 'header label', 'Elevation': 'header label', 'Type of wa': 'header label', 'Power sour': 'header label', 'Number of': 'header label', 'Accessibil': 'header label', 'Type of pu': 'header label', 'Functional': 'header label', 'Number o_1': 'header label', 'Reason for': 'header label', 'Total numb': 'header label', 'Estimated': 'header label', 'Is the wat': 'header label', 'In which m': 'header label', 'Is there a': 'header label', 'Who is the': 'header label', 'Name of fu': 'header label', 'Is WASHCo.': 'header label', 'Is the WAS': 'header label', 'When was t': 'header label', 'In total h': 'header label', 'How many w': 'header label', 'Has the wa': 'header label', 'When was_1': 'header label', 'Who rehabi': 'header label', 'Within how': 'header label', 'Who is res': 'header label', 'Is there f': 'header label', 'Who is col': 'header label', 'How is the': 'header label', 'How many B': 'header label', 'Is there t': 'header label', 'Does the w': 'header label', 'Does the_1': 'header label', });
lyr_WP_Sapefile_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});