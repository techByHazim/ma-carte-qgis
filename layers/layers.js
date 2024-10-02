var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_points_layer_culture_1 = new ol.format.GeoJSON();
var features_points_layer_culture_1 = format_points_layer_culture_1.readFeatures(json_points_layer_culture_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_layer_culture_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_layer_culture_1.addFeatures(features_points_layer_culture_1);
var lyr_points_layer_culture_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_layer_culture_1, 
                style: style_points_layer_culture_1,
                popuplayertitle: "points_layer_culture",
                interactive: true,
                title: '<img src="styles/legend/points_layer_culture_1.png" /> points_layer_culture'
            });
var format_projected_points_culture_2 = new ol.format.GeoJSON();
var features_projected_points_culture_2 = format_projected_points_culture_2.readFeatures(json_projected_points_culture_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_projected_points_culture_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projected_points_culture_2.addFeatures(features_projected_points_culture_2);
var lyr_projected_points_culture_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_projected_points_culture_2, 
                style: style_projected_points_culture_2,
                popuplayertitle: "projected_points_culture",
                interactive: true,
                title: '<img src="styles/legend/projected_points_culture_2.png" /> projected_points_culture'
            });
var format_points_layer_health_3 = new ol.format.GeoJSON();
var features_points_layer_health_3 = format_points_layer_health_3.readFeatures(json_points_layer_health_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_layer_health_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_layer_health_3.addFeatures(features_points_layer_health_3);
var lyr_points_layer_health_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_layer_health_3, 
                style: style_points_layer_health_3,
                popuplayertitle: "points_layer_health",
                interactive: true,
                title: '<img src="styles/legend/points_layer_health_3.png" /> points_layer_health'
            });
var format_points_layer_supply_4 = new ol.format.GeoJSON();
var features_points_layer_supply_4 = format_points_layer_supply_4.readFeatures(json_points_layer_supply_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_layer_supply_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_layer_supply_4.addFeatures(features_points_layer_supply_4);
var lyr_points_layer_supply_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_layer_supply_4, 
                style: style_points_layer_supply_4,
                popuplayertitle: "points_layer_supply",
                interactive: true,
                title: '<img src="styles/legend/points_layer_supply_4.png" /> points_layer_supply'
            });
var format_supply_b250m_allroute_5 = new ol.format.GeoJSON();
var features_supply_b250m_allroute_5 = format_supply_b250m_allroute_5.readFeatures(json_supply_b250m_allroute_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_supply_b250m_allroute_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_supply_b250m_allroute_5.addFeatures(features_supply_b250m_allroute_5);
var lyr_supply_b250m_allroute_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_supply_b250m_allroute_5, 
                style: style_supply_b250m_allroute_5,
                popuplayertitle: "supply_b250m_allroute",
                interactive: true,
    title: 'supply_b250m_allroute<br />\
    <img src="styles/legend/supply_b250m_allroute_5_0.png" /> 0 - 0,5<br />\
    <img src="styles/legend/supply_b250m_allroute_5_1.png" /> 0,5 - 2,5<br />\
    <img src="styles/legend/supply_b250m_allroute_5_2.png" /> 2,5 - 5,7<br />\
    <img src="styles/legend/supply_b250m_allroute_5_3.png" /> 5,7 - 45<br />\
    <img src="styles/legend/supply_b250m_allroute_5_4.png" /> 45 - 450<br />'
        });
var format_health_b250m_allroute_6 = new ol.format.GeoJSON();
var features_health_b250m_allroute_6 = format_health_b250m_allroute_6.readFeatures(json_health_b250m_allroute_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_health_b250m_allroute_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_health_b250m_allroute_6.addFeatures(features_health_b250m_allroute_6);
var lyr_health_b250m_allroute_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_health_b250m_allroute_6, 
                style: style_health_b250m_allroute_6,
                popuplayertitle: "health_b250m_allroute",
                interactive: true,
    title: 'health_b250m_allroute<br />\
    <img src="styles/legend/health_b250m_allroute_6_0.png" /> 0 - 0,5<br />\
    <img src="styles/legend/health_b250m_allroute_6_1.png" /> 0,5 - 2,5<br />\
    <img src="styles/legend/health_b250m_allroute_6_2.png" /> 2,5 - 5,7<br />\
    <img src="styles/legend/health_b250m_allroute_6_3.png" /> 5,7 - 74<br />\
    <img src="styles/legend/health_b250m_allroute_6_4.png" /> 74 - 75<br />'
        });
var format_culture_b250m_allroute_7 = new ol.format.GeoJSON();
var features_culture_b250m_allroute_7 = format_culture_b250m_allroute_7.readFeatures(json_culture_b250m_allroute_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_culture_b250m_allroute_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_culture_b250m_allroute_7.addFeatures(features_culture_b250m_allroute_7);
var lyr_culture_b250m_allroute_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_culture_b250m_allroute_7, 
                style: style_culture_b250m_allroute_7,
                popuplayertitle: "culture_b250m_allroute",
                interactive: true,
    title: 'culture_b250m_allroute<br />\
    <img src="styles/legend/culture_b250m_allroute_7_0.png" /> 0 - 0,2<br />\
    <img src="styles/legend/culture_b250m_allroute_7_1.png" /> 0,2 - 0,8<br />\
    <img src="styles/legend/culture_b250m_allroute_7_2.png" /> 0,8 - 1,2<br />\
    <img src="styles/legend/culture_b250m_allroute_7_3.png" /> 1,2 - 4<br />\
    <img src="styles/legend/culture_b250m_allroute_7_4.png" /> 4 - 5<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_points_layer_culture_1.setVisible(true);lyr_projected_points_culture_2.setVisible(true);lyr_points_layer_health_3.setVisible(true);lyr_points_layer_supply_4.setVisible(true);lyr_supply_b250m_allroute_5.setVisible(true);lyr_health_b250m_allroute_6.setVisible(true);lyr_culture_b250m_allroute_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_points_layer_culture_1,lyr_projected_points_culture_2,lyr_points_layer_health_3,lyr_points_layer_supply_4,lyr_supply_b250m_allroute_5,lyr_health_b250m_allroute_6,lyr_culture_b250m_allroute_7];
lyr_points_layer_culture_1.set('fieldAliases', {'fid': 'fid', });
lyr_projected_points_culture_2.set('fieldAliases', {'fid': 'fid', });
lyr_points_layer_health_3.set('fieldAliases', {'fid': 'fid', });
lyr_points_layer_supply_4.set('fieldAliases', {'fid': 'fid', });
lyr_supply_b250m_allroute_5.set('fieldAliases', {'fid': 'fid', 'value': 'value', });
lyr_health_b250m_allroute_6.set('fieldAliases', {'fid': 'fid', 'value': 'value', });
lyr_culture_b250m_allroute_7.set('fieldAliases', {'fid': 'fid', 'value': 'value', });
lyr_points_layer_culture_1.set('fieldImages', {'fid': '', });
lyr_projected_points_culture_2.set('fieldImages', {'fid': '', });
lyr_points_layer_health_3.set('fieldImages', {'fid': '', });
lyr_points_layer_supply_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_supply_b250m_allroute_5.set('fieldImages', {'fid': 'TextEdit', 'value': 'TextEdit', });
lyr_health_b250m_allroute_6.set('fieldImages', {'fid': 'TextEdit', 'value': 'TextEdit', });
lyr_culture_b250m_allroute_7.set('fieldImages', {'fid': 'TextEdit', 'value': 'TextEdit', });
lyr_points_layer_culture_1.set('fieldLabels', {'fid': 'no label', });
lyr_projected_points_culture_2.set('fieldLabels', {'fid': 'no label', });
lyr_points_layer_health_3.set('fieldLabels', {'fid': 'no label', });
lyr_points_layer_supply_4.set('fieldLabels', {'fid': 'no label', });
lyr_supply_b250m_allroute_5.set('fieldLabels', {'fid': 'no label', 'value': 'no label', });
lyr_health_b250m_allroute_6.set('fieldLabels', {'fid': 'no label', 'value': 'no label', });
lyr_culture_b250m_allroute_7.set('fieldLabels', {'fid': 'no label', 'value': 'inline label - always visible', });
lyr_culture_b250m_allroute_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});