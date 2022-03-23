var wms_layers = [];

var lyr_RGEALTI_FXX_0800_6780_MNT_LAMB93_IGN69copier_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGEALTI_FXX_0800_6780_MNT_LAMB93_IGN69 copier",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGEALTI_FXX_0800_6780_MNT_LAMB93_IGN69copier_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [483415.680380, 6118002.774770, 491020.691665, 6125630.652645]
                            })
                        });
var lyr_RGEALTI_FXX_0800_6785_MNT_LAMB93_IGN69copier_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGEALTI_FXX_0800_6785_MNT_LAMB93_IGN69 copier",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGEALTI_FXX_0800_6785_MNT_LAMB93_IGN69copier_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [483542.840266, 6125499.812821, 491154.433100, 6133134.251992]
                            })
                        });
var lyr_RGEALTI_FXX_0805_6780_MNT_LAMB93_IGN69copier_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGEALTI_FXX_0805_6780_MNT_LAMB93_IGN69 copier",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGEALTI_FXX_0805_6780_MNT_LAMB93_IGN69copier_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [490887.177586, 6117865.788964, 498498.315710, 6125499.812821]
                            })
                        });
var lyr_RGEALTI_FXX_0805_6785_MNT_LAMB93_IGN69copier_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "RGEALTI_FXX_0805_6785_MNT_LAMB93_IGN69 copier",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/RGEALTI_FXX_0805_6785_MNT_LAMB93_IGN69copier_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [491020.691665, 6125362.594571, 498638.421570, 6133003.189956]
                            })
                        });

        var lyr_GoogleTerrainHybrid_4 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Googlemaps_5 = new ol.layer.Tile({
            'title': 'Google maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIWorldTopo_6 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ParcoursVTT2022_7 = new ol.format.GeoJSON();
var features_ParcoursVTT2022_7 = format_ParcoursVTT2022_7.readFeatures(json_ParcoursVTT2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcoursVTT2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcoursVTT2022_7.addFeatures(features_ParcoursVTT2022_7);
var lyr_ParcoursVTT2022_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParcoursVTT2022_7, 
                style: style_ParcoursVTT2022_7,
                interactive: false,
                title: '<img src="styles/legend/ParcoursVTT2022_7.png" /> Parcours VTT 2022'
            });
var group_CourbesdeNiveau = new ol.layer.Group({
                                layers: [lyr_RGEALTI_FXX_0800_6780_MNT_LAMB93_IGN69copier_0,lyr_RGEALTI_FXX_0800_6785_MNT_LAMB93_IGN69copier_1,lyr_RGEALTI_FXX_0805_6780_MNT_LAMB93_IGN69copier_2,lyr_RGEALTI_FXX_0805_6785_MNT_LAMB93_IGN69copier_3,],
                                title: "Courbes de Niveau"});

lyr_RGEALTI_FXX_0800_6780_MNT_LAMB93_IGN69copier_0.setVisible(true);lyr_RGEALTI_FXX_0800_6785_MNT_LAMB93_IGN69copier_1.setVisible(true);lyr_RGEALTI_FXX_0805_6780_MNT_LAMB93_IGN69copier_2.setVisible(true);lyr_RGEALTI_FXX_0805_6785_MNT_LAMB93_IGN69copier_3.setVisible(true);lyr_GoogleTerrainHybrid_4.setVisible(true);lyr_Googlemaps_5.setVisible(true);lyr_ESRIWorldTopo_6.setVisible(true);lyr_ParcoursVTT2022_7.setVisible(true);
var layersList = [group_CourbesdeNiveau,lyr_GoogleTerrainHybrid_4,lyr_Googlemaps_5,lyr_ESRIWorldTopo_6,lyr_ParcoursVTT2022_7];
lyr_ParcoursVTT2022_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_ParcoursVTT2022_7.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_ParcoursVTT2022_7.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'inline label', });
lyr_ParcoursVTT2022_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});