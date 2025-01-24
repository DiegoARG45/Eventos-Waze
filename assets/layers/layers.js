var wms_layers = [];


        var lyr_WazeWorld_0 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_CorredorSanMartn__1 = new ol.format.GeoJSON();
var features_CorredorSanMartn__1 = format_CorredorSanMartn__1.readFeatures(json_CorredorSanMartn__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSanMartn__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSanMartn__1.addFeatures(features_CorredorSanMartn__1);
var lyr_CorredorSanMartn__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSanMartn__1, 
                style: style_CorredorSanMartn__1,
                popuplayertitle: 'Corredor San Martín_ ',
                interactive: true,
    title: 'Corredor San Martín_ <br />\
    <img src="styles/legend/CorredorSanMartn__1_0.png" /> Área CLV San Martín - Dr. H. Pueyrredón<br />\
    <img src="styles/legend/CorredorSanMartn__1_1.png" /> Área CLV San Martín - Tinogasta (sureste)<br />\
    <img src="styles/legend/CorredorSanMartn__1_2.png" /> Área CLV San Martín 6954 (sureste)<br />'
        });
var format_CorredorSanMartncorredor_san_martn__2 = new ol.format.GeoJSON();
var features_CorredorSanMartncorredor_san_martn__2 = format_CorredorSanMartncorredor_san_martn__2.readFeatures(json_CorredorSanMartncorredor_san_martn__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSanMartncorredor_san_martn__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSanMartncorredor_san_martn__2.addFeatures(features_CorredorSanMartncorredor_san_martn__2);
var lyr_CorredorSanMartncorredor_san_martn__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSanMartncorredor_san_martn__2, 
                style: style_CorredorSanMartncorredor_san_martn__2,
                popuplayertitle: 'Corredor San Martín — corredor_san_martn_',
                interactive: true,
                title: '<img src="styles/legend/CorredorSanMartncorredor_san_martn__2.png" /> Corredor San Martín — corredor_san_martn_'
            });
var format_CorredorSantaFeeste_3 = new ol.format.GeoJSON();
var features_CorredorSantaFeeste_3 = format_CorredorSantaFeeste_3.readFeatures(json_CorredorSantaFeeste_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSantaFeeste_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSantaFeeste_3.addFeatures(features_CorredorSantaFeeste_3);
var lyr_CorredorSantaFeeste_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSantaFeeste_3, 
                style: style_CorredorSantaFeeste_3,
                popuplayertitle: 'Corredor Santa Fe (este) ',
                interactive: true,
    title: 'Corredor Santa Fe (este) <br />\
    <img src="styles/legend/CorredorSantaFeeste_3_0.png" /> Área CLV Av. Santa Fe - Larrea (este)<br />\
    <img src="styles/legend/CorredorSantaFeeste_3_1.png" /> Área CLV Av. Santa Fe 4596 (este)<br />'
        });
var format_CorredorSantaFecorredor_santa_fe_este_4 = new ol.format.GeoJSON();
var features_CorredorSantaFecorredor_santa_fe_este_4 = format_CorredorSantaFecorredor_santa_fe_este_4.readFeatures(json_CorredorSantaFecorredor_santa_fe_este_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSantaFecorredor_santa_fe_este_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSantaFecorredor_santa_fe_este_4.addFeatures(features_CorredorSantaFecorredor_santa_fe_este_4);
var lyr_CorredorSantaFecorredor_santa_fe_este_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSantaFecorredor_santa_fe_este_4, 
                style: style_CorredorSantaFecorredor_santa_fe_este_4,
                popuplayertitle: 'Corredor Santa Fe — corredor_santa_fe_este',
                interactive: true,
                title: '<img src="styles/legend/CorredorSantaFecorredor_santa_fe_este_4.png" /> Corredor Santa Fe — corredor_santa_fe_este'
            });
var format_CorredorEntreRios__5 = new ol.format.GeoJSON();
var features_CorredorEntreRios__5 = format_CorredorEntreRios__5.readFeatures(json_CorredorEntreRios__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorEntreRios__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorEntreRios__5.addFeatures(features_CorredorEntreRios__5);
var lyr_CorredorEntreRios__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorEntreRios__5, 
                style: style_CorredorEntreRios__5,
                popuplayertitle: 'Corredor Entre Rios_ ',
                interactive: true,
    title: 'Corredor Entre Rios_ <br />\
    <img src="styles/legend/CorredorEntreRios__5_0.png" /> 1. Área del CLV Av. Entre Ríos 859<br />\
    <img src="styles/legend/CorredorEntreRios__5_1.png" /> 2. Área del CLV Av. Entre Ríos 121<br />'
        });
var format_CorredorEntreRioscorredor_entre_ros__6 = new ol.format.GeoJSON();
var features_CorredorEntreRioscorredor_entre_ros__6 = format_CorredorEntreRioscorredor_entre_ros__6.readFeatures(json_CorredorEntreRioscorredor_entre_ros__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorEntreRioscorredor_entre_ros__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorEntreRioscorredor_entre_ros__6.addFeatures(features_CorredorEntreRioscorredor_entre_ros__6);
var lyr_CorredorEntreRioscorredor_entre_ros__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorEntreRioscorredor_entre_ros__6, 
                style: style_CorredorEntreRioscorredor_entre_ros__6,
                popuplayertitle: 'Corredor Entre Rios — corredor_entre_ros_',
                interactive: true,
                title: '<img src="styles/legend/CorredorEntreRioscorredor_entre_ros__6.png" /> Corredor Entre Rios — corredor_entre_ros_'
            });
var format_CorredorSarmientosurestesuroeste_7 = new ol.format.GeoJSON();
var features_CorredorSarmientosurestesuroeste_7 = format_CorredorSarmientosurestesuroeste_7.readFeatures(json_CorredorSarmientosurestesuroeste_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSarmientosurestesuroeste_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSarmientosurestesuroeste_7.addFeatures(features_CorredorSarmientosurestesuroeste_7);
var lyr_CorredorSarmientosurestesuroeste_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSarmientosurestesuroeste_7, 
                style: style_CorredorSarmientosurestesuroeste_7,
                popuplayertitle: 'Corredor Sarmiento (sureste-suroeste) ',
                interactive: true,
    title: 'Corredor Sarmiento (sureste-suroeste) <br />\
    <img src="styles/legend/CorredorSarmientosurestesuroeste_7_0.png" /> Área para Av. Sarmiento (sureste)<br />\
    <img src="styles/legend/CorredorSarmientosurestesuroeste_7_1.png" /> Área para Av. Sarmiento (suroeste)<br />'
        });
var format_CorredorSarmientocorredor_sarmiento__8 = new ol.format.GeoJSON();
var features_CorredorSarmientocorredor_sarmiento__8 = format_CorredorSarmientocorredor_sarmiento__8.readFeatures(json_CorredorSarmientocorredor_sarmiento__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSarmientocorredor_sarmiento__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSarmientocorredor_sarmiento__8.addFeatures(features_CorredorSarmientocorredor_sarmiento__8);
var lyr_CorredorSarmientocorredor_sarmiento__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSarmientocorredor_sarmiento__8, 
                style: style_CorredorSarmientocorredor_sarmiento__8,
                popuplayertitle: 'Corredor Sarmiento — corredor_sarmiento_',
                interactive: true,
                title: '<img src="styles/legend/CorredorSarmientocorredor_sarmiento__8.png" /> Corredor Sarmiento — corredor_sarmiento_'
            });
var format_CorredorVelezSarsfieldnorte_9 = new ol.format.GeoJSON();
var features_CorredorVelezSarsfieldnorte_9 = format_CorredorVelezSarsfieldnorte_9.readFeatures(json_CorredorVelezSarsfieldnorte_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorVelezSarsfieldnorte_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorVelezSarsfieldnorte_9.addFeatures(features_CorredorVelezSarsfieldnorte_9);
var lyr_CorredorVelezSarsfieldnorte_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorVelezSarsfieldnorte_9, 
                style: style_CorredorVelezSarsfieldnorte_9,
                popuplayertitle: 'Corredor Velez Sarsfield (norte) ',
                interactive: true,
    title: 'Corredor Velez Sarsfield (norte) <br />\
    <img src="styles/legend/CorredorVelezSarsfieldnorte_9_0.png" /> Área CLV Av. Vélez Sarsfield - Caseros (norte)<br />\
    <img src="styles/legend/CorredorVelezSarsfieldnorte_9_1.png" /> Área CLV Av. Vélez Sarsfield 1940 (norte)<br />'
        });
var format_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10 = new ol.format.GeoJSON();
var features_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10 = format_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10.readFeatures(json_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10.addFeatures(features_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10);
var lyr_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10, 
                style: style_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10,
                popuplayertitle: 'Corredor Velez Sarsfield — corredor_vlez_sarsfield_norte',
                interactive: true,
                title: '<img src="styles/legend/CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10.png" /> Corredor Velez Sarsfield — corredor_vlez_sarsfield_norte'
            });
var format_CorredorFernandezdelaCruznoreste_11 = new ol.format.GeoJSON();
var features_CorredorFernandezdelaCruznoreste_11 = format_CorredorFernandezdelaCruznoreste_11.readFeatures(json_CorredorFernandezdelaCruznoreste_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorFernandezdelaCruznoreste_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorFernandezdelaCruznoreste_11.addFeatures(features_CorredorFernandezdelaCruznoreste_11);
var lyr_CorredorFernandezdelaCruznoreste_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorFernandezdelaCruznoreste_11, 
                style: style_CorredorFernandezdelaCruznoreste_11,
                popuplayertitle: 'Corredor Fernandez de la Cruz (noreste) ',
                interactive: true,
    title: 'Corredor Fernandez de la Cruz (noreste) <br />\
    <img src="styles/legend/CorredorFernandezdelaCruznoreste_11_0.png" /> 1. Área del CLV Av. Fernández de la Cruz - Saladillo <br />\
    <img src="styles/legend/CorredorFernandezdelaCruznoreste_11_1.png" /> 2. Área del CLV Av. Fernández de la Cruz 850<br />'
        });
var format_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12 = new ol.format.GeoJSON();
var features_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12 = format_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12.readFeatures(json_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12.addFeatures(features_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12);
var lyr_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12, 
                style: style_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12,
                popuplayertitle: 'Corredor Fernandez de la Cruz — corredor_av_fernndez_de_la_cruz_noreste',
                interactive: true,
                title: '<img src="styles/legend/CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12.png" /> Corredor Fernandez de la Cruz — corredor_av_fernndez_de_la_cruz_noreste'
            });
var format_CorredorFigueroaAlcortanoroeste_13 = new ol.format.GeoJSON();
var features_CorredorFigueroaAlcortanoroeste_13 = format_CorredorFigueroaAlcortanoroeste_13.readFeatures(json_CorredorFigueroaAlcortanoroeste_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorFigueroaAlcortanoroeste_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorFigueroaAlcortanoroeste_13.addFeatures(features_CorredorFigueroaAlcortanoroeste_13);
var lyr_CorredorFigueroaAlcortanoroeste_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorFigueroaAlcortanoroeste_13, 
                style: style_CorredorFigueroaAlcortanoroeste_13,
                popuplayertitle: 'Corredor Figueroa Alcorta (noroeste) ',
                interactive: true,
    title: 'Corredor Figueroa Alcorta (noroeste) <br />\
    <img src="styles/legend/CorredorFigueroaAlcortanoroeste_13_0.png" /> Area_CLV_Figueroa_Alcorta_3271<br />\
    <img src="styles/legend/CorredorFigueroaAlcortanoroeste_13_1.png" /> Area_CLV_Figueroa_Alcorta_6100<br />\
    <img src="styles/legend/CorredorFigueroaAlcortanoroeste_13_2.png" /> Area_CLV_Figueroa_Alcorta_Sarmiento<br />'
        });
var format_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14 = new ol.format.GeoJSON();
var features_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14 = format_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14.readFeatures(json_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14.addFeatures(features_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14);
var lyr_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14, 
                style: style_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14,
                popuplayertitle: 'Corredor Figueroa Alcorta — corredor_figueroa_alcorta_noroeste',
                interactive: true,
                title: '<img src="styles/legend/CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14.png" /> Corredor Figueroa Alcorta — corredor_figueroa_alcorta_noroeste'
            });
var format_CorredorIndependencia__15 = new ol.format.GeoJSON();
var features_CorredorIndependencia__15 = format_CorredorIndependencia__15.readFeatures(json_CorredorIndependencia__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorIndependencia__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorIndependencia__15.addFeatures(features_CorredorIndependencia__15);
var lyr_CorredorIndependencia__15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorIndependencia__15, 
                style: style_CorredorIndependencia__15,
                popuplayertitle: 'Corredor Independencia_',
                interactive: true,
    title: 'Corredor Independencia_<br />\
    <img src="styles/legend/CorredorIndependencia__15_0.png" /> 1. Área del CLV - Independencia 942<br />\
    <img src="styles/legend/CorredorIndependencia__15_1.png" /> 2. Área del CLV 2 - Independencia 3037<br />'
        });
var format_CorredorIndependenciacorredor_independencia_16 = new ol.format.GeoJSON();
var features_CorredorIndependenciacorredor_independencia_16 = format_CorredorIndependenciacorredor_independencia_16.readFeatures(json_CorredorIndependenciacorredor_independencia_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorIndependenciacorredor_independencia_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorIndependenciacorredor_independencia_16.addFeatures(features_CorredorIndependenciacorredor_independencia_16);
var lyr_CorredorIndependenciacorredor_independencia_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorIndependenciacorredor_independencia_16, 
                style: style_CorredorIndependenciacorredor_independencia_16,
                popuplayertitle: 'Corredor Independencia — corredor_independencia',
                interactive: true,
                title: '<img src="styles/legend/CorredorIndependenciacorredor_independencia_16.png" /> Corredor Independencia — corredor_independencia'
            });
var format_CLVAislados__17 = new ol.format.GeoJSON();
var features_CLVAislados__17 = format_CLVAislados__17.readFeatures(json_CLVAislados__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLVAislados__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLVAislados__17.addFeatures(features_CLVAislados__17);
var lyr_CLVAislados__17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLVAislados__17, 
                style: style_CLVAislados__17,
                popuplayertitle: 'CLV Aislados_ ',
                interactive: true,
    title: 'CLV Aislados_ <br />\
    <img src="styles/legend/CLVAislados__17_0.png" /> 01. Área CLV Alberti (norte)<br />\
    <img src="styles/legend/CLVAislados__17_1.png" /> 02. Área CLV  Av. Alicia Moreau de Justo (Norte)<br />\
    <img src="styles/legend/CLVAislados__17_2.png" /> 03. Área CLV Av. Asamblea<br />\
    <img src="styles/legend/CLVAislados__17_3.png" /> 04. Área CLV Av. Biero<br />\
    <img src="styles/legend/CLVAislados__17_4.png" /> 05. Área CLV Av. Brasil<br />\
    <img src="styles/legend/CLVAislados__17_5.png" /> 06. Área CLV Av. Constituyentes<br />\
    <img src="styles/legend/CLVAislados__17_6.png" /> 07. Área CLV Coronel Roca<br />\
    <img src="styles/legend/CLVAislados__17_7.png" /> 08. Área CLV Av.  Directorio<br />\
    <img src="styles/legend/CLVAislados__17_8.png" /> 09. Área CLV Av. Dorrego (suroeste)<br />\
    <img src="styles/legend/CLVAislados__17_9.png" /> 10. Área CLV Av. Eduardo Madero (sur)<br />\
    <img src="styles/legend/CLVAislados__17_10.png" /> 11. Área CLV Av. Diaz Vélez (este)<br />\
    <img src="styles/legend/CLVAislados__17_11.png" /> 12. Área CLV Av. Emilio Castro (noreste)<br />\
    <img src="styles/legend/CLVAislados__17_12.png" /> 13. Área CLV Av. Eva Peron (noreste)<br />\
    <img src="styles/legend/CLVAislados__17_13.png" /> 14. Área CLV Av. Jujuy (sur)<br />\
    <img src="styles/legend/CLVAislados__17_14.png" /> 15. Área CLV Av. Leandro N. Alem (sur)<br />\
    <img src="styles/legend/CLVAislados__17_15.png" /> 16. Área CLV Av. Parque Goyeneche (sureste)<br />\
    <img src="styles/legend/CLVAislados__17_16.png" /> 17. Área CLV Av. Paseo Colón (sur)<br />\
    <img src="styles/legend/CLVAislados__17_17.png" /> 18. Área CLV Av. Ricardo Balbín (sureste)<br />\
    <img src="styles/legend/CLVAislados__17_18.png" /> 19. Área CLV Av. Rivadavia (suroeste)<br />\
    <img src="styles/legend/CLVAislados__17_19.png" /> 20. Área CLV Av. Sáenz (norte)<br />\
    <img src="styles/legend/CLVAislados__17_20.png" /> 21. Área CLV Av. de Mayo (oeste)<br />\
    <img src="styles/legend/CLVAislados__17_21.png" /> 22. Área CLV Av. Triunvirato (sureste)<br />\
    <img src="styles/legend/CLVAislados__17_22.png" /> 23. Área CLV Constitución (este)<br />\
    <img src="styles/legend/CLVAislados__17_23.png" /> 24. Área CLV Cerrito (sur)<br />'
        });
var format_CLVAisladosclv_aislados_18 = new ol.format.GeoJSON();
var features_CLVAisladosclv_aislados_18 = format_CLVAisladosclv_aislados_18.readFeatures(json_CLVAisladosclv_aislados_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLVAisladosclv_aislados_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLVAisladosclv_aislados_18.addFeatures(features_CLVAisladosclv_aislados_18);
var lyr_CLVAisladosclv_aislados_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLVAisladosclv_aislados_18, 
                style: style_CLVAisladosclv_aislados_18,
                popuplayertitle: 'CLV Aislados — clv_aislados',
                interactive: true,
                title: '<img src="styles/legend/CLVAisladosclv_aislados_18.png" /> CLV Aislados — clv_aislados'
            });
var format_CorredorJuanBJusto__19 = new ol.format.GeoJSON();
var features_CorredorJuanBJusto__19 = format_CorredorJuanBJusto__19.readFeatures(json_CorredorJuanBJusto__19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorJuanBJusto__19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorJuanBJusto__19.addFeatures(features_CorredorJuanBJusto__19);
var lyr_CorredorJuanBJusto__19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorJuanBJusto__19, 
                style: style_CorredorJuanBJusto__19,
                popuplayertitle: 'Corredor Juan B Justo_ ',
                interactive: true,
    title: 'Corredor Juan B Justo_ <br />\
    <img src="styles/legend/CorredorJuanBJusto__19_0.png" /> Área CLV: Juan B Justo - Gallardo (este)<br />\
    <img src="styles/legend/CorredorJuanBJusto__19_1.png" /> Área CLV: Juan B Justo - Terrada (suroeste)<br />'
        });
var format_CorredorJuanBJustocorredor_juan_b_justo_20 = new ol.format.GeoJSON();
var features_CorredorJuanBJustocorredor_juan_b_justo_20 = format_CorredorJuanBJustocorredor_juan_b_justo_20.readFeatures(json_CorredorJuanBJustocorredor_juan_b_justo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorJuanBJustocorredor_juan_b_justo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorJuanBJustocorredor_juan_b_justo_20.addFeatures(features_CorredorJuanBJustocorredor_juan_b_justo_20);
var lyr_CorredorJuanBJustocorredor_juan_b_justo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorJuanBJustocorredor_juan_b_justo_20, 
                style: style_CorredorJuanBJustocorredor_juan_b_justo_20,
                popuplayertitle: 'Corredor Juan B Justo — corredor_juan_b_justo',
                interactive: true,
                title: '<img src="styles/legend/CorredorJuanBJustocorredor_juan_b_justo_20.png" /> Corredor Juan B Justo — corredor_juan_b_justo'
            });
var format_Corredor9deJulio__21 = new ol.format.GeoJSON();
var features_Corredor9deJulio__21 = format_Corredor9deJulio__21.readFeatures(json_Corredor9deJulio__21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corredor9deJulio__21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corredor9deJulio__21.addFeatures(features_Corredor9deJulio__21);
var lyr_Corredor9deJulio__21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corredor9deJulio__21, 
                style: style_Corredor9deJulio__21,
                popuplayertitle: 'Corredor 9 de Julio_ ',
                interactive: true,
    title: 'Corredor 9 de Julio_ <br />\
    <img src="styles/legend/Corredor9deJulio__21_0.png" /> 1. Área CLV Av. 9 de Julio - C. Calvo<br />\
    <img src="styles/legend/Corredor9deJulio__21_1.png" /> 1. Área CLV Av. 9 de Julo 842<br />\
    <img src="styles/legend/Corredor9deJulio__21_2.png" /> 2. Área CLV Av. 9 de Julio - Av. Corrientes<br />\
    <img src="styles/legend/Corredor9deJulio__21_3.png" /> 2. Área CLV Av. 9 de Julio - Mitre<br />\
    <img src="styles/legend/Corredor9deJulio__21_4.png" /> 3. Área CLV Av. 9 de Julio - Juncal<br />'
        });
var format_Corredor9deJuliocorredor_9_de_julio_22 = new ol.format.GeoJSON();
var features_Corredor9deJuliocorredor_9_de_julio_22 = format_Corredor9deJuliocorredor_9_de_julio_22.readFeatures(json_Corredor9deJuliocorredor_9_de_julio_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corredor9deJuliocorredor_9_de_julio_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corredor9deJuliocorredor_9_de_julio_22.addFeatures(features_Corredor9deJuliocorredor_9_de_julio_22);
var lyr_Corredor9deJuliocorredor_9_de_julio_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corredor9deJuliocorredor_9_de_julio_22, 
                style: style_Corredor9deJuliocorredor_9_de_julio_22,
                popuplayertitle: 'Corredor 9 de Julio — corredor_9_de_julio',
                interactive: true,
                title: '<img src="styles/legend/Corredor9deJuliocorredor_9_de_julio_22.png" /> Corredor 9 de Julio — corredor_9_de_julio'
            });
var format_CorredorLibertador__23 = new ol.format.GeoJSON();
var features_CorredorLibertador__23 = format_CorredorLibertador__23.readFeatures(json_CorredorLibertador__23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorLibertador__23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorLibertador__23.addFeatures(features_CorredorLibertador__23);
var lyr_CorredorLibertador__23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorLibertador__23, 
                style: style_CorredorLibertador__23,
                popuplayertitle: 'Corredor Libertador_ ',
                interactive: true,
    title: 'Corredor Libertador_ <br />\
    <img src="styles/legend/CorredorLibertador__23_0.png" /> 1. Área del CLV- Norte (Av. del Libertador 530)<br />\
    <img src="styles/legend/CorredorLibertador__23_1.png" /> 1. Área para Libertador 8176 - Sureste <br />\
    <img src="styles/legend/CorredorLibertador__23_2.png" /> 2. Área del CLV- Norte (Av. del Libertador 3467 (kennedy))<br />\
    <img src="styles/legend/CorredorLibertador__23_3.png" /> 2. Área para Libertador  5515 - Sureste <br />\
    <img src="styles/legend/CorredorLibertador__23_4.png" /> 3. Área para Libertador 1465 - Sureste <br />\
    <img src="styles/legend/CorredorLibertador__23_5.png" /> 4. Área para Libertador 633 - Sureste <br />'
        });
var format_CorredorLibertadorcorredor_libertador_24 = new ol.format.GeoJSON();
var features_CorredorLibertadorcorredor_libertador_24 = format_CorredorLibertadorcorredor_libertador_24.readFeatures(json_CorredorLibertadorcorredor_libertador_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorLibertadorcorredor_libertador_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorLibertadorcorredor_libertador_24.addFeatures(features_CorredorLibertadorcorredor_libertador_24);
var lyr_CorredorLibertadorcorredor_libertador_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorLibertadorcorredor_libertador_24, 
                style: style_CorredorLibertadorcorredor_libertador_24,
                popuplayertitle: 'Corredor Libertador — corredor_libertador',
                interactive: true,
                title: '<img src="styles/legend/CorredorLibertadorcorredor_libertador_24.png" /> Corredor Libertador — corredor_libertador'
            });
var format_CorredorBelgrano__25 = new ol.format.GeoJSON();
var features_CorredorBelgrano__25 = format_CorredorBelgrano__25.readFeatures(json_CorredorBelgrano__25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorBelgrano__25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorBelgrano__25.addFeatures(features_CorredorBelgrano__25);
var lyr_CorredorBelgrano__25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorBelgrano__25, 
                style: style_CorredorBelgrano__25,
                popuplayertitle: 'Corredor Belgrano_ ',
                interactive: true,
    title: 'Corredor Belgrano_ <br />\
    <img src="styles/legend/CorredorBelgrano__25_0.png" /> 1. Área CLV Av. Belgrano 3355<br />\
    <img src="styles/legend/CorredorBelgrano__25_1.png" /> 2. Área CLV Av. Belgrano 1851<br />\
    <img src="styles/legend/CorredorBelgrano__25_2.png" /> 3. Área CLV  Av. Belgrano 1189<br />'
        });
var format_CorredorBelgranocorredor_belgrano__26 = new ol.format.GeoJSON();
var features_CorredorBelgranocorredor_belgrano__26 = format_CorredorBelgranocorredor_belgrano__26.readFeatures(json_CorredorBelgranocorredor_belgrano__26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorBelgranocorredor_belgrano__26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorBelgranocorredor_belgrano__26.addFeatures(features_CorredorBelgranocorredor_belgrano__26);
var lyr_CorredorBelgranocorredor_belgrano__26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorBelgranocorredor_belgrano__26, 
                style: style_CorredorBelgranocorredor_belgrano__26,
                popuplayertitle: 'Corredor Belgrano — corredor_belgrano_',
                interactive: true,
                title: '<img src="styles/legend/CorredorBelgranocorredor_belgrano__26.png" /> Corredor Belgrano — corredor_belgrano_'
            });
var format_CorredorMontesdeOca__27 = new ol.format.GeoJSON();
var features_CorredorMontesdeOca__27 = format_CorredorMontesdeOca__27.readFeatures(json_CorredorMontesdeOca__27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorMontesdeOca__27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorMontesdeOca__27.addFeatures(features_CorredorMontesdeOca__27);
var lyr_CorredorMontesdeOca__27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorMontesdeOca__27, 
                style: style_CorredorMontesdeOca__27,
                popuplayertitle: 'Corredor Montes de Oca_ ',
                interactive: true,
    title: 'Corredor Montes de Oca_ <br />\
    <img src="styles/legend/CorredorMontesdeOca__27_0.png" /> Area_CLV_Av_Montes_de_Oca_1822<br />\
    <img src="styles/legend/CorredorMontesdeOca__27_1.png" /> Area_CLV_Av_Montes_de_Oca_978<br />'
        });
var format_CorredorMontesdeOcacorredor_montes_de_oca_28 = new ol.format.GeoJSON();
var features_CorredorMontesdeOcacorredor_montes_de_oca_28 = format_CorredorMontesdeOcacorredor_montes_de_oca_28.readFeatures(json_CorredorMontesdeOcacorredor_montes_de_oca_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorMontesdeOcacorredor_montes_de_oca_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorMontesdeOcacorredor_montes_de_oca_28.addFeatures(features_CorredorMontesdeOcacorredor_montes_de_oca_28);
var lyr_CorredorMontesdeOcacorredor_montes_de_oca_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorMontesdeOcacorredor_montes_de_oca_28, 
                style: style_CorredorMontesdeOcacorredor_montes_de_oca_28,
                popuplayertitle: 'Corredor Montes de Oca — corredor_montes_de_oca',
                interactive: true,
                title: '<img src="styles/legend/CorredorMontesdeOcacorredor_montes_de_oca_28.png" /> Corredor Montes de Oca — corredor_montes_de_oca'
            });
var format_CorredorCabildosureste_29 = new ol.format.GeoJSON();
var features_CorredorCabildosureste_29 = format_CorredorCabildosureste_29.readFeatures(json_CorredorCabildosureste_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCabildosureste_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCabildosureste_29.addFeatures(features_CorredorCabildosureste_29);
var lyr_CorredorCabildosureste_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCabildosureste_29, 
                style: style_CorredorCabildosureste_29,
                popuplayertitle: 'Corredor Cabildo (sureste) ',
                interactive: true,
    title: 'Corredor Cabildo (sureste) <br />\
    <img src="styles/legend/CorredorCabildosureste_29_0.png" /> Area_CLV_Av_Cabildo_2618<br />\
    <img src="styles/legend/CorredorCabildosureste_29_1.png" /> Area_CLV_Av_Cabildo_4746<br />'
        });
var format_CorredorCabildocorredor_cabildo_sureste_30 = new ol.format.GeoJSON();
var features_CorredorCabildocorredor_cabildo_sureste_30 = format_CorredorCabildocorredor_cabildo_sureste_30.readFeatures(json_CorredorCabildocorredor_cabildo_sureste_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCabildocorredor_cabildo_sureste_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCabildocorredor_cabildo_sureste_30.addFeatures(features_CorredorCabildocorredor_cabildo_sureste_30);
var lyr_CorredorCabildocorredor_cabildo_sureste_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCabildocorredor_cabildo_sureste_30, 
                style: style_CorredorCabildocorredor_cabildo_sureste_30,
                popuplayertitle: 'Corredor Cabildo — corredor_cabildo_sureste',
                interactive: true,
                title: '<img src="styles/legend/CorredorCabildocorredor_cabildo_sureste_30.png" /> Corredor Cabildo — corredor_cabildo_sureste'
            });
var format_CorredorCordoba__31 = new ol.format.GeoJSON();
var features_CorredorCordoba__31 = format_CorredorCordoba__31.readFeatures(json_CorredorCordoba__31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCordoba__31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCordoba__31.addFeatures(features_CorredorCordoba__31);
var lyr_CorredorCordoba__31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCordoba__31, 
                style: style_CorredorCordoba__31,
                popuplayertitle: 'Corredor Cordoba_ ',
                interactive: true,
    title: 'Corredor Cordoba_ <br />\
    <img src="styles/legend/CorredorCordoba__31_0.png" /> 1. Área del CLV Av. Córdoba 854<br />\
    <img src="styles/legend/CorredorCordoba__31_1.png" /> 2. Área del CLV Av. Córdoba 2474<br />\
    <img src="styles/legend/CorredorCordoba__31_2.png" /> 3. Área del CLV Av. Córdoba 4885<br />'
        });
var format_CorredorCordobacorredor_crdoba_32 = new ol.format.GeoJSON();
var features_CorredorCordobacorredor_crdoba_32 = format_CorredorCordobacorredor_crdoba_32.readFeatures(json_CorredorCordobacorredor_crdoba_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCordobacorredor_crdoba_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCordobacorredor_crdoba_32.addFeatures(features_CorredorCordobacorredor_crdoba_32);
var lyr_CorredorCordobacorredor_crdoba_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCordobacorredor_crdoba_32, 
                style: style_CorredorCordobacorredor_crdoba_32,
                popuplayertitle: 'Corredor Cordoba — corredor_crdoba',
                interactive: true,
                title: '<img src="styles/legend/CorredorCordobacorredor_crdoba_32.png" /> Corredor Cordoba — corredor_crdoba'
            });
var format_CorredorPueyrredonsur_33 = new ol.format.GeoJSON();
var features_CorredorPueyrredonsur_33 = format_CorredorPueyrredonsur_33.readFeatures(json_CorredorPueyrredonsur_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorPueyrredonsur_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorPueyrredonsur_33.addFeatures(features_CorredorPueyrredonsur_33);
var lyr_CorredorPueyrredonsur_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorPueyrredonsur_33, 
                style: style_CorredorPueyrredonsur_33,
                popuplayertitle: 'Corredor Pueyrredon (sur) ',
                interactive: true,
    title: 'Corredor Pueyrredon (sur) <br />\
    <img src="styles/legend/CorredorPueyrredonsur_33_0.png" /> Área CLV Av. Pueyrredón - Paraguay (sur) <br />\
    <img src="styles/legend/CorredorPueyrredonsur_33_1.png" /> Área CLV Av. Pueyrredón 2266 (sur)<br />'
        });
var format_CorredorPueyrredoncorredor_pueyrredn_sur_34 = new ol.format.GeoJSON();
var features_CorredorPueyrredoncorredor_pueyrredn_sur_34 = format_CorredorPueyrredoncorredor_pueyrredn_sur_34.readFeatures(json_CorredorPueyrredoncorredor_pueyrredn_sur_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorPueyrredoncorredor_pueyrredn_sur_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorPueyrredoncorredor_pueyrredn_sur_34.addFeatures(features_CorredorPueyrredoncorredor_pueyrredn_sur_34);
var lyr_CorredorPueyrredoncorredor_pueyrredn_sur_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorPueyrredoncorredor_pueyrredn_sur_34, 
                style: style_CorredorPueyrredoncorredor_pueyrredn_sur_34,
                popuplayertitle: 'Corredor Pueyrredon — corredor_pueyrredn_sur',
                interactive: true,
                title: '<img src="styles/legend/CorredorPueyrredoncorredor_pueyrredn_sur_34.png" /> Corredor Pueyrredon — corredor_pueyrredn_sur'
            });
var format_CorredorSanJuan__35 = new ol.format.GeoJSON();
var features_CorredorSanJuan__35 = format_CorredorSanJuan__35.readFeatures(json_CorredorSanJuan__35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSanJuan__35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSanJuan__35.addFeatures(features_CorredorSanJuan__35);
var lyr_CorredorSanJuan__35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSanJuan__35, 
                style: style_CorredorSanJuan__35,
                popuplayertitle: 'Corredor San Juan_',
                interactive: true,
    title: 'Corredor San Juan_<br />\
    <img src="styles/legend/CorredorSanJuan__35_0.png" /> Area_CLV_San_Juan_1932<br />\
    <img src="styles/legend/CorredorSanJuan__35_1.png" /> Area_CLV_San_Juan_954<br />\
    <img src="styles/legend/CorredorSanJuan__35_2.png" /> Area_CLV_San_Juan_Castro_Barros<br />'
        });
var format_CorredorSanJuancorredor_san_juan_36 = new ol.format.GeoJSON();
var features_CorredorSanJuancorredor_san_juan_36 = format_CorredorSanJuancorredor_san_juan_36.readFeatures(json_CorredorSanJuancorredor_san_juan_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSanJuancorredor_san_juan_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSanJuancorredor_san_juan_36.addFeatures(features_CorredorSanJuancorredor_san_juan_36);
var lyr_CorredorSanJuancorredor_san_juan_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSanJuancorredor_san_juan_36, 
                style: style_CorredorSanJuancorredor_san_juan_36,
                popuplayertitle: 'Corredor San Juan — corredor_san_juan',
                interactive: true,
                title: '<img src="styles/legend/CorredorSanJuancorredor_san_juan_36.png" /> Corredor San Juan — corredor_san_juan'
            });
var format_CorredorCorrientes_37 = new ol.format.GeoJSON();
var features_CorredorCorrientes_37 = format_CorredorCorrientes_37.readFeatures(json_CorredorCorrientes_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCorrientes_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCorrientes_37.addFeatures(features_CorredorCorrientes_37);
var lyr_CorredorCorrientes_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCorrientes_37, 
                style: style_CorredorCorrientes_37,
                popuplayertitle: 'Corredor Corrientes',
                interactive: true,
    title: 'Corredor Corrientes<br />\
    <img src="styles/legend/CorredorCorrientes_37_0.png" /> 1. Área del CLV Av. Corrientes 5952<br />\
    <img src="styles/legend/CorredorCorrientes_37_1.png" /> 2. Área del CLV Av. Corrientes 4138<br />\
    <img src="styles/legend/CorredorCorrientes_37_2.png" /> 3. Área del CLV Av. Corrientes 3075<br />\
    <img src="styles/legend/CorredorCorrientes_37_3.png" /> 4. Área del CLV Av. Corrientes 2131<br />\
    <img src="styles/legend/CorredorCorrientes_37_4.png" /> 5. Área del CLV Av. Corrientes 1854<br />\
    <img src="styles/legend/CorredorCorrientes_37_5.png" /> 6. Área del CLV Av. Corrientes 1174<br />'
        });
var format_CorredorCorrientescorredor_corrientes_38 = new ol.format.GeoJSON();
var features_CorredorCorrientescorredor_corrientes_38 = format_CorredorCorrientescorredor_corrientes_38.readFeatures(json_CorredorCorrientescorredor_corrientes_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCorrientescorredor_corrientes_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCorrientescorredor_corrientes_38.addFeatures(features_CorredorCorrientescorredor_corrientes_38);
var lyr_CorredorCorrientescorredor_corrientes_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCorrientescorredor_corrientes_38, 
                style: style_CorredorCorrientescorredor_corrientes_38,
                popuplayertitle: 'Corredor Corrientes — corredor_corrientes',
                interactive: true,
                title: '<img src="styles/legend/CorredorCorrientescorredor_corrientes_38.png" /> Corredor Corrientes — corredor_corrientes'
            });
var format_Lugarespedidos_39 = new ol.format.GeoJSON();
var features_Lugarespedidos_39 = format_Lugarespedidos_39.readFeatures(json_Lugarespedidos_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lugarespedidos_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lugarespedidos_39.addFeatures(features_Lugarespedidos_39);
var lyr_Lugarespedidos_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lugarespedidos_39, 
                style: style_Lugarespedidos_39,
                popuplayertitle: 'Lugares pedidos',
                interactive: true,
                title: '<img src="styles/legend/Lugarespedidos_39.png" /> Lugares pedidos'
            });
var format_eventos_geojson_40 = new ol.format.GeoJSON();
var features_eventos_geojson_40 = format_eventos_geojson_40.readFeatures(json_eventos_geojson_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eventos_geojson_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eventos_geojson_40.addFeatures(features_eventos_geojson_40);
var lyr_eventos_geojson_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eventos_geojson_40, 
                style: style_eventos_geojson_40,
                popuplayertitle: 'eventos_geojson',
                interactive: true,
                title: '<img src="styles/legend/eventos_geojson_40.png" /> eventos_geojson'
            });
var group_Corrientes = new ol.layer.Group({
                                layers: [lyr_CorredorCorrientes_37,lyr_CorredorCorrientescorredor_corrientes_38,],
                                fold: "open",
                                title: 'Corrientes'});
var group_SanJuan = new ol.layer.Group({
                                layers: [lyr_CorredorSanJuan__35,lyr_CorredorSanJuancorredor_san_juan_36,],
                                fold: "open",
                                title: 'San Juan'});
var group_Pueyrredon = new ol.layer.Group({
                                layers: [lyr_CorredorPueyrredonsur_33,lyr_CorredorPueyrredoncorredor_pueyrredn_sur_34,],
                                fold: "open",
                                title: 'Pueyrredon'});
var group_Cordoba = new ol.layer.Group({
                                layers: [lyr_CorredorCordoba__31,lyr_CorredorCordobacorredor_crdoba_32,],
                                fold: "open",
                                title: 'Cordoba'});
var group_Cabildo = new ol.layer.Group({
                                layers: [lyr_CorredorCabildosureste_29,lyr_CorredorCabildocorredor_cabildo_sureste_30,],
                                fold: "open",
                                title: 'Cabildo'});
var group_MontesdeOca = new ol.layer.Group({
                                layers: [lyr_CorredorMontesdeOca__27,lyr_CorredorMontesdeOcacorredor_montes_de_oca_28,],
                                fold: "open",
                                title: 'Montes de Oca'});
var group_Belgrano = new ol.layer.Group({
                                layers: [lyr_CorredorBelgrano__25,lyr_CorredorBelgranocorredor_belgrano__26,],
                                fold: "open",
                                title: 'Belgrano'});
var group_Libertador = new ol.layer.Group({
                                layers: [lyr_CorredorLibertador__23,lyr_CorredorLibertadorcorredor_libertador_24,],
                                fold: "open",
                                title: 'Libertador'});
var group_9deJulio = new ol.layer.Group({
                                layers: [lyr_Corredor9deJulio__21,lyr_Corredor9deJuliocorredor_9_de_julio_22,],
                                fold: "open",
                                title: '9 de Julio'});
var group_JuanBJusto = new ol.layer.Group({
                                layers: [lyr_CorredorJuanBJusto__19,lyr_CorredorJuanBJustocorredor_juan_b_justo_20,],
                                fold: "open",
                                title: 'Juan B Justo'});
var group_Aislados = new ol.layer.Group({
                                layers: [lyr_CLVAislados__17,lyr_CLVAisladosclv_aislados_18,],
                                fold: "open",
                                title: 'Aislados'});
var group_Independencia = new ol.layer.Group({
                                layers: [lyr_CorredorIndependencia__15,lyr_CorredorIndependenciacorredor_independencia_16,],
                                fold: "open",
                                title: 'Independencia'});
var group_FigueroaAlcorta = new ol.layer.Group({
                                layers: [lyr_CorredorFigueroaAlcortanoroeste_13,lyr_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14,],
                                fold: "open",
                                title: 'Figueroa Alcorta'});
var group_FernandezdelaCruz = new ol.layer.Group({
                                layers: [lyr_CorredorFernandezdelaCruznoreste_11,lyr_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12,],
                                fold: "open",
                                title: 'Fernandez de la Cruz'});
var group_VelezSarsfield = new ol.layer.Group({
                                layers: [lyr_CorredorVelezSarsfieldnorte_9,lyr_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10,],
                                fold: "open",
                                title: 'Velez Sarsfield'});
var group_Sarmiento = new ol.layer.Group({
                                layers: [lyr_CorredorSarmientosurestesuroeste_7,lyr_CorredorSarmientocorredor_sarmiento__8,],
                                fold: "open",
                                title: 'Sarmiento'});
var group_EntreRios = new ol.layer.Group({
                                layers: [lyr_CorredorEntreRios__5,lyr_CorredorEntreRioscorredor_entre_ros__6,],
                                fold: "open",
                                title: 'Entre Rios'});
var group_SantaFe = new ol.layer.Group({
                                layers: [lyr_CorredorSantaFeeste_3,lyr_CorredorSantaFecorredor_santa_fe_este_4,],
                                fold: "open",
                                title: 'Santa Fe'});
var group_SanMartin = new ol.layer.Group({
                                layers: [lyr_CorredorSanMartn__1,lyr_CorredorSanMartncorredor_san_martn__2,],
                                fold: "open",
                                title: 'San Martin'});

lyr_WazeWorld_0.setVisible(true);lyr_CorredorSanMartn__1.setVisible(true);lyr_CorredorSanMartncorredor_san_martn__2.setVisible(true);lyr_CorredorSantaFeeste_3.setVisible(true);lyr_CorredorSantaFecorredor_santa_fe_este_4.setVisible(true);lyr_CorredorEntreRios__5.setVisible(true);lyr_CorredorEntreRioscorredor_entre_ros__6.setVisible(true);lyr_CorredorSarmientosurestesuroeste_7.setVisible(true);lyr_CorredorSarmientocorredor_sarmiento__8.setVisible(true);lyr_CorredorVelezSarsfieldnorte_9.setVisible(true);lyr_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10.setVisible(true);lyr_CorredorFernandezdelaCruznoreste_11.setVisible(true);lyr_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12.setVisible(true);lyr_CorredorFigueroaAlcortanoroeste_13.setVisible(true);lyr_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14.setVisible(true);lyr_CorredorIndependencia__15.setVisible(true);lyr_CorredorIndependenciacorredor_independencia_16.setVisible(true);lyr_CLVAislados__17.setVisible(true);lyr_CLVAisladosclv_aislados_18.setVisible(true);lyr_CorredorJuanBJusto__19.setVisible(true);lyr_CorredorJuanBJustocorredor_juan_b_justo_20.setVisible(true);lyr_Corredor9deJulio__21.setVisible(true);lyr_Corredor9deJuliocorredor_9_de_julio_22.setVisible(true);lyr_CorredorLibertador__23.setVisible(true);lyr_CorredorLibertadorcorredor_libertador_24.setVisible(true);lyr_CorredorBelgrano__25.setVisible(true);lyr_CorredorBelgranocorredor_belgrano__26.setVisible(true);lyr_CorredorMontesdeOca__27.setVisible(true);lyr_CorredorMontesdeOcacorredor_montes_de_oca_28.setVisible(true);lyr_CorredorCabildosureste_29.setVisible(true);lyr_CorredorCabildocorredor_cabildo_sureste_30.setVisible(true);lyr_CorredorCordoba__31.setVisible(true);lyr_CorredorCordobacorredor_crdoba_32.setVisible(true);lyr_CorredorPueyrredonsur_33.setVisible(true);lyr_CorredorPueyrredoncorredor_pueyrredn_sur_34.setVisible(true);lyr_CorredorSanJuan__35.setVisible(true);lyr_CorredorSanJuancorredor_san_juan_36.setVisible(true);lyr_CorredorCorrientes_37.setVisible(true);lyr_CorredorCorrientescorredor_corrientes_38.setVisible(true);lyr_Lugarespedidos_39.setVisible(true);lyr_eventos_geojson_40.setVisible(true);
var layersList = [lyr_WazeWorld_0,group_SanMartin,group_SantaFe,group_EntreRios,group_Sarmiento,group_VelezSarsfield,group_FernandezdelaCruz,group_FigueroaAlcorta,group_Independencia,group_Aislados,group_JuanBJusto,group_9deJulio,group_Libertador,group_Belgrano,group_MontesdeOca,group_Cabildo,group_Cordoba,group_Pueyrredon,group_SanJuan,group_Corrientes,lyr_Lugarespedidos_39,lyr_eventos_geojson_40];
lyr_CorredorSanMartn__1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorSanMartncorredor_san_martn__2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorSantaFeeste_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorSantaFecorredor_santa_fe_este_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorEntreRios__5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorEntreRioscorredor_entre_ros__6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorSarmientosurestesuroeste_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorSarmientocorredor_sarmiento__8.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorVelezSarsfieldnorte_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorFernandezdelaCruznoreste_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorFigueroaAlcortanoroeste_13.set('fieldAliases', {'fid': 'fid', 'Figueroa Alcorta': 'Figueroa Alcorta', });
lyr_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorIndependencia__15.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorIndependenciacorredor_independencia_16.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CLVAislados__17.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CLVAisladosclv_aislados_18.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorJuanBJusto__19.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorJuanBJustocorredor_juan_b_justo_20.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_Corredor9deJulio__21.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_Corredor9deJuliocorredor_9_de_julio_22.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorLibertador__23.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorLibertadorcorredor_libertador_24.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorBelgrano__25.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorBelgranocorredor_belgrano__26.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorMontesdeOca__27.set('fieldAliases', {'fid': 'fid', 'Corredor_Montes_de_Oca': 'Corredor_Montes_de_Oca', });
lyr_CorredorMontesdeOcacorredor_montes_de_oca_28.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorCabildosureste_29.set('fieldAliases', {'fid': 'fid', 'Corredor_Cabildo': 'Corredor_Cabildo', });
lyr_CorredorCabildocorredor_cabildo_sureste_30.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorCordoba__31.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorCordobacorredor_crdoba_32.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorPueyrredonsur_33.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorPueyrredoncorredor_pueyrredn_sur_34.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorSanJuan__35.set('fieldAliases', {'fid': 'fid', 'Corredor San Juan': 'Corredor San Juan', });
lyr_CorredorSanJuancorredor_san_juan_36.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_CorredorCorrientes_37.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_CorredorCorrientescorredor_corrientes_38.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Lugarespedidos_39.set('fieldAliases', {'fid': 'fid', 'Lugares_pedidos': 'Lugares_pedidos', });
lyr_eventos_geojson_40.set('fieldAliases', {'evento': 'evento', 'street': 'street', 'nearest_intersection': 'nearest_intersection', });
lyr_CorredorSanMartn__1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorSanMartncorredor_san_martn__2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorSantaFeeste_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorSantaFecorredor_santa_fe_este_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorEntreRios__5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorEntreRioscorredor_entre_ros__6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorSarmientosurestesuroeste_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorSarmientocorredor_sarmiento__8.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorVelezSarsfieldnorte_9.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorFernandezdelaCruznoreste_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorFigueroaAlcortanoroeste_13.set('fieldImages', {'fid': 'TextEdit', 'Figueroa Alcorta': 'TextEdit', });
lyr_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorIndependencia__15.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorIndependenciacorredor_independencia_16.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CLVAislados__17.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CLVAisladosclv_aislados_18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorJuanBJusto__19.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorJuanBJustocorredor_juan_b_justo_20.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_Corredor9deJulio__21.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_Corredor9deJuliocorredor_9_de_julio_22.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorLibertador__23.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorLibertadorcorredor_libertador_24.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorBelgrano__25.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorBelgranocorredor_belgrano__26.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorMontesdeOca__27.set('fieldImages', {'fid': 'TextEdit', 'Corredor_Montes_de_Oca': 'TextEdit', });
lyr_CorredorMontesdeOcacorredor_montes_de_oca_28.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorCabildosureste_29.set('fieldImages', {'fid': 'TextEdit', 'Corredor_Cabildo': 'TextEdit', });
lyr_CorredorCabildocorredor_cabildo_sureste_30.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorCordoba__31.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorCordobacorredor_crdoba_32.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorPueyrredonsur_33.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorPueyrredoncorredor_pueyrredn_sur_34.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorSanJuan__35.set('fieldImages', {'fid': 'TextEdit', 'Corredor San Juan': 'TextEdit', });
lyr_CorredorSanJuancorredor_san_juan_36.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_CorredorCorrientes_37.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_CorredorCorrientescorredor_corrientes_38.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Lugarespedidos_39.set('fieldImages', {'fid': 'TextEdit', 'Lugares_pedidos': 'TextEdit', });
lyr_eventos_geojson_40.set('fieldImages', {'evento': 'TextEdit', 'street': 'TextEdit', 'nearest_intersection': 'TextEdit', });
lyr_CorredorSanMartn__1.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorSanMartncorredor_san_martn__2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorSantaFeeste_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorSantaFecorredor_santa_fe_este_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorEntreRios__5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorEntreRioscorredor_entre_ros__6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorSarmientosurestesuroeste_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorSarmientocorredor_sarmiento__8.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorVelezSarsfieldnorte_9.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorVelezSarsfieldcorredor_vlez_sarsfield_norte_10.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorFernandezdelaCruznoreste_11.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorFernandezdelaCruzcorredor_av_fernndez_de_la_cruz_noreste_12.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorFigueroaAlcortanoroeste_13.set('fieldLabels', {'fid': 'no label', 'Figueroa Alcorta': 'no label', });
lyr_CorredorFigueroaAlcortacorredor_figueroa_alcorta_noroeste_14.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorIndependencia__15.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorIndependenciacorredor_independencia_16.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CLVAislados__17.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CLVAisladosclv_aislados_18.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorJuanBJusto__19.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorJuanBJustocorredor_juan_b_justo_20.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_Corredor9deJulio__21.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_Corredor9deJuliocorredor_9_de_julio_22.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorLibertador__23.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorLibertadorcorredor_libertador_24.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorBelgrano__25.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorBelgranocorredor_belgrano__26.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorMontesdeOca__27.set('fieldLabels', {'fid': 'no label', 'Corredor_Montes_de_Oca': 'no label', });
lyr_CorredorMontesdeOcacorredor_montes_de_oca_28.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorCabildosureste_29.set('fieldLabels', {'fid': 'no label', 'Corredor_Cabildo': 'no label', });
lyr_CorredorCabildocorredor_cabildo_sureste_30.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorCordoba__31.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorCordobacorredor_crdoba_32.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorPueyrredonsur_33.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorPueyrredoncorredor_pueyrredn_sur_34.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorSanJuan__35.set('fieldLabels', {'fid': 'no label', 'Corredor San Juan': 'no label', });
lyr_CorredorSanJuancorredor_san_juan_36.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', });
lyr_CorredorCorrientes_37.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_CorredorCorrientescorredor_corrientes_38.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_Lugarespedidos_39.set('fieldLabels', {'fid': 'no label', 'Lugares_pedidos': 'no label', });
lyr_eventos_geojson_40.set('fieldLabels', {'evento': 'no label', 'street': 'no label', 'nearest_intersection': 'no label', });
lyr_eventos_geojson_40.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});