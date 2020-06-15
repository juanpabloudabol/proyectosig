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
var format_edif_educativos2016_1 = new ol.format.GeoJSON();
var features_edif_educativos2016_1 = format_edif_educativos2016_1.readFeatures(json_edif_educativos2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_edif_educativos2016_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_edif_educativos2016_1.addFeatures(features_edif_educativos2016_1);
var lyr_edif_educativos2016_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_edif_educativos2016_1, 
                style: style_edif_educativos2016_1,
                interactive: true,
                title: '<img src="styles/legend/edif_educativos2016_1.png" /> edif_educativos2016'
            });
var format_AreadePlazaElalto_2 = new ol.format.GeoJSON();
var features_AreadePlazaElalto_2 = format_AreadePlazaElalto_2.readFeatures(json_AreadePlazaElalto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreadePlazaElalto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreadePlazaElalto_2.addFeatures(features_AreadePlazaElalto_2);
var lyr_AreadePlazaElalto_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreadePlazaElalto_2, 
                style: style_AreadePlazaElalto_2,
                interactive: true,
                title: '<img src="styles/legend/AreadePlazaElalto_2.png" /> AreadePlazaElalto'
            });
var format_LotePlazaLpz_3 = new ol.format.GeoJSON();
var features_LotePlazaLpz_3 = format_LotePlazaLpz_3.readFeatures(json_LotePlazaLpz_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LotePlazaLpz_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LotePlazaLpz_3.addFeatures(features_LotePlazaLpz_3);
var lyr_LotePlazaLpz_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LotePlazaLpz_3, 
                style: style_LotePlazaLpz_3,
                interactive: true,
                title: '<img src="styles/legend/LotePlazaLpz_3.png" /> LotePlazaLpz'
            });
var format_RutasPzElalto_4 = new ol.format.GeoJSON();
var features_RutasPzElalto_4 = format_RutasPzElalto_4.readFeatures(json_RutasPzElalto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RutasPzElalto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RutasPzElalto_4.addFeatures(features_RutasPzElalto_4);
var lyr_RutasPzElalto_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RutasPzElalto_4, 
                style: style_RutasPzElalto_4,
                interactive: true,
                title: '<img src="styles/legend/RutasPzElalto_4.png" /> RutasPzElalto'
            });
var format_Rutascolegios_pzEst_5 = new ol.format.GeoJSON();
var features_Rutascolegios_pzEst_5 = format_Rutascolegios_pzEst_5.readFeatures(json_Rutascolegios_pzEst_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutascolegios_pzEst_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutascolegios_pzEst_5.addFeatures(features_Rutascolegios_pzEst_5);
var lyr_Rutascolegios_pzEst_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rutascolegios_pzEst_5, 
                style: style_Rutascolegios_pzEst_5,
                interactive: true,
                title: '<img src="styles/legend/Rutascolegios_pzEst_5.png" /> Rutascolegios_pzEst'
            });
var format_Plazaselalto_6 = new ol.format.GeoJSON();
var features_Plazaselalto_6 = format_Plazaselalto_6.readFeatures(json_Plazaselalto_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plazaselalto_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plazaselalto_6.addFeatures(features_Plazaselalto_6);
var lyr_Plazaselalto_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plazaselalto_6, 
                style: style_Plazaselalto_6,
                interactive: true,
                title: '<img src="styles/legend/Plazaselalto_6.png" /> Plazaselalto'
            });
var format_Lugares_7 = new ol.format.GeoJSON();
var features_Lugares_7 = format_Lugares_7.readFeatures(json_Lugares_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lugares_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lugares_7.addFeatures(features_Lugares_7);
var lyr_Lugares_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lugares_7, 
                style: style_Lugares_7,
                interactive: true,
                title: '<img src="styles/legend/Lugares_7.png" /> Lugares'
            });
var format_Alumnos_8 = new ol.format.GeoJSON();
var features_Alumnos_8 = format_Alumnos_8.readFeatures(json_Alumnos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alumnos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alumnos_8.addFeatures(features_Alumnos_8);
var lyr_Alumnos_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Alumnos_8, 
                style: style_Alumnos_8,
                interactive: true,
    title: 'Alumnos<br />\
    <img src="styles/legend/Alumnos_8_0.png" /> AMBIENTAL<br />\
    <img src="styles/legend/Alumnos_8_1.png" /> DOCENTE<br />\
    <img src="styles/legend/Alumnos_8_2.png" /> PETROLERA<br />\
    <img src="styles/legend/Alumnos_8_3.png" /> SISTEMAS<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_edif_educativos2016_1.setVisible(false);lyr_AreadePlazaElalto_2.setVisible(true);lyr_LotePlazaLpz_3.setVisible(true);lyr_RutasPzElalto_4.setVisible(true);lyr_Rutascolegios_pzEst_5.setVisible(true);lyr_Plazaselalto_6.setVisible(true);lyr_Lugares_7.setVisible(true);lyr_Alumnos_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_edif_educativos2016_1,lyr_AreadePlazaElalto_2,lyr_LotePlazaLpz_3,lyr_RutasPzElalto_4,lyr_Rutascolegios_pzEst_5,lyr_Plazaselalto_6,lyr_Lugares_7,lyr_Alumnos_8];
lyr_edif_educativos2016_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'DISTRITO': 'DISTRITO', 'ZONA': 'ZONA', 'DIRECCION': 'DIRECCION', 'latitud': 'latitud', 'longitud': 'longitud', 'CODIGO_UE': 'CODIGO_UE', 'UNIDAD_EDU': 'UNIDAD_EDU', 'COD_EDIF_E': 'COD_EDIF_E', });
lyr_AreadePlazaElalto_2.set('fieldAliases', {'Id': 'Id', 'NOMBRE': 'NOMBRE', 'PERIMETRO': 'PERIMETRO', 'AREAM2': 'AREAM2', });
lyr_LotePlazaLpz_3.set('fieldAliases', {'Id': 'Id', 'Area_m2': 'Area_m2', 'Perimetro_': 'Perimetro_', 'Lote_plaza': 'Lote_plaza', });
lyr_RutasPzElalto_4.set('fieldAliases', {'Id': 'Id', 'Ruta': 'Ruta', 'Long_M': 'Long_M', });
lyr_Rutascolegios_pzEst_5.set('fieldAliases', {'Id': 'Id', 'Ruta': 'Ruta', 'longitud_m': 'longitud_m', });
lyr_Plazaselalto_6.set('fieldAliases', {'Id': 'Id', 'NOMBRE': 'NOMBRE', 'ESTE': 'ESTE', 'NORTE': 'NORTE', });
lyr_Lugares_7.set('fieldAliases', {'Id': 'Id', 'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'ESTE': 'ESTE', 'NORTE': 'NORTE', });
lyr_Alumnos_8.set('fieldAliases', {'ID': 'ID', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'NOMBRE': 'NOMBRE', 'CARRERA': 'CARRERA', 'SEXO': 'SEXO', 'TELEFONICA': 'TELEFONICA', 'OBSERV': 'OBSERV', });
lyr_edif_educativos2016_1.set('fieldImages', {'DEPARTAMEN': 'Hidden', 'DISTRITO': 'TextEdit', 'ZONA': 'TextEdit', 'DIRECCION': 'Hidden', 'latitud': 'Hidden', 'longitud': 'Hidden', 'CODIGO_UE': 'Hidden', 'UNIDAD_EDU': 'TextEdit', 'COD_EDIF_E': 'Hidden', });
lyr_AreadePlazaElalto_2.set('fieldImages', {'Id': 'Hidden', 'NOMBRE': 'TextEdit', 'PERIMETRO': 'TextEdit', 'AREAM2': 'TextEdit', });
lyr_LotePlazaLpz_3.set('fieldImages', {'Id': 'Hidden', 'Area_m2': 'TextEdit', 'Perimetro_': 'TextEdit', 'Lote_plaza': 'TextEdit', });
lyr_RutasPzElalto_4.set('fieldImages', {'Id': 'Hidden', 'Ruta': 'TextEdit', 'Long_M': 'TextEdit', });
lyr_Rutascolegios_pzEst_5.set('fieldImages', {'Id': 'Hidden', 'Ruta': 'TextEdit', 'longitud_m': 'TextEdit', });
lyr_Plazaselalto_6.set('fieldImages', {'Id': 'Hidden', 'NOMBRE': 'TextEdit', 'ESTE': 'Hidden', 'NORTE': 'Hidden', });
lyr_Lugares_7.set('fieldImages', {'Id': 'Hidden', 'CODIGO': 'Hidden', 'NOMBRE': 'TextEdit', 'ESTE': 'Hidden', 'NORTE': 'Hidden', });
lyr_Alumnos_8.set('fieldImages', {'ID': 'Hidden', 'ESTE': 'Hidden', 'NORTE': 'Hidden', 'NOMBRE': 'TextEdit', 'CARRERA': 'TextEdit', 'SEXO': 'TextEdit', 'TELEFONICA': 'TextEdit', 'OBSERV': 'Hidden', });
lyr_edif_educativos2016_1.set('fieldLabels', {'DISTRITO': 'inline label', 'ZONA': 'inline label', 'UNIDAD_EDU': 'inline label', });
lyr_AreadePlazaElalto_2.set('fieldLabels', {'NOMBRE': 'inline label', 'PERIMETRO': 'inline label', 'AREAM2': 'inline label', });
lyr_LotePlazaLpz_3.set('fieldLabels', {'Area_m2': 'inline label', 'Perimetro_': 'inline label', 'Lote_plaza': 'inline label', });
lyr_RutasPzElalto_4.set('fieldLabels', {'Ruta': 'inline label', 'Long_M': 'inline label', });
lyr_Rutascolegios_pzEst_5.set('fieldLabels', {'Ruta': 'inline label', 'longitud_m': 'inline label', });
lyr_Plazaselalto_6.set('fieldLabels', {'NOMBRE': 'inline label', });
lyr_Lugares_7.set('fieldLabels', {'NOMBRE': 'inline label', });
lyr_Alumnos_8.set('fieldLabels', {'NOMBRE': 'inline label', 'CARRERA': 'inline label', 'SEXO': 'inline label', 'TELEFONICA': 'inline label', });
lyr_Alumnos_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});