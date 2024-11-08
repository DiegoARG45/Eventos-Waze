var wms_layers = [];


        var lyr_GooglecnNormal_0 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CLVaislados_1 = new ol.format.GeoJSON();
var features_CLVaislados_1 = format_CLVaislados_1.readFeatures(json_CLVaislados_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLVaislados_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLVaislados_1.addFeatures(features_CLVaislados_1);
var lyr_CLVaislados_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLVaislados_1, 
                style: style_CLVaislados_1,
                popuplayertitle: "CLV aislados",
                interactive: true,
    title: 'CLV aislados<br />\
    <img src="styles/legend/CLVaislados_1_0.png" /> 01. Área CLV Alberti (norte)<br />\
    <img src="styles/legend/CLVaislados_1_1.png" /> 02. Área CLV  Av. Alicia Moreau de Justo (Norte)<br />\
    <img src="styles/legend/CLVaislados_1_2.png" /> 03. Área CLV Av. Asamblea<br />\
    <img src="styles/legend/CLVaislados_1_3.png" /> 04. Área CLV Av. Biero<br />\
    <img src="styles/legend/CLVaislados_1_4.png" /> 05. Área CLV Av. Brasil<br />\
    <img src="styles/legend/CLVaislados_1_5.png" /> 06. Área CLV Av. Constituyentes<br />\
    <img src="styles/legend/CLVaislados_1_6.png" /> 07. Área CLV Coronel Roca<br />\
    <img src="styles/legend/CLVaislados_1_7.png" /> 08. Área CLV Av.  Directorio<br />\
    <img src="styles/legend/CLVaislados_1_8.png" /> 09. Área CLV Av. Dorrego (suroeste)<br />\
    <img src="styles/legend/CLVaislados_1_9.png" /> 10. Área CLV Av. Eduardo Madero (sur)<br />\
    <img src="styles/legend/CLVaislados_1_10.png" /> 11. Área CLV Av. Diaz Vélez (este)<br />\
    <img src="styles/legend/CLVaislados_1_11.png" /> 12. Área CLV Av. Emilio Castro (noreste)<br />\
    <img src="styles/legend/CLVaislados_1_12.png" /> 13. Área CLV Av. Eva Peron (noreste)<br />\
    <img src="styles/legend/CLVaislados_1_13.png" /> 14. Área CLV Av. Jujuy (sur)<br />\
    <img src="styles/legend/CLVaislados_1_14.png" /> 15. Área CLV Av. Leandro N. Alem (sur)<br />\
    <img src="styles/legend/CLVaislados_1_15.png" /> 16. Área CLV Av. Parque Goyeneche (sureste)<br />\
    <img src="styles/legend/CLVaislados_1_16.png" /> 17. Área CLV Av. Paseo Colón (sur)<br />\
    <img src="styles/legend/CLVaislados_1_17.png" /> 18. Área CLV Av. Ricardo Balbín (sureste)<br />\
    <img src="styles/legend/CLVaislados_1_18.png" /> 19. Área CLV Av. Rivadavia (suroeste)<br />\
    <img src="styles/legend/CLVaislados_1_19.png" /> 20. Área CLV Av. Sáenz (norte)<br />\
    <img src="styles/legend/CLVaislados_1_20.png" /> 21. Área CLV Av. de Mayo (oeste)<br />\
    <img src="styles/legend/CLVaislados_1_21.png" /> 22. Área CLV Av. Triunvirato (sureste)<br />\
    <img src="styles/legend/CLVaislados_1_22.png" /> 23. Área CLV Constitución (este)<br />\
    <img src="styles/legend/CLVaislados_1_23.png" /> 24. Área CLV Cerrito (sur)<br />'
        });
var format_CLVaislados_2 = new ol.format.GeoJSON();
var features_CLVaislados_2 = format_CLVaislados_2.readFeatures(json_CLVaislados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLVaislados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLVaislados_2.addFeatures(features_CLVaislados_2);
var lyr_CLVaislados_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLVaislados_2, 
                style: style_CLVaislados_2,
                popuplayertitle: "CLV aislados",
                interactive: true,
                title: '<img src="styles/legend/CLVaislados_2.png" /> CLV aislados'
            });
var format_Corredor9deJulio_3 = new ol.format.GeoJSON();
var features_Corredor9deJulio_3 = format_Corredor9deJulio_3.readFeatures(json_Corredor9deJulio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corredor9deJulio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corredor9deJulio_3.addFeatures(features_Corredor9deJulio_3);
var lyr_Corredor9deJulio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corredor9deJulio_3, 
                style: style_Corredor9deJulio_3,
                popuplayertitle: "Corredor 9 de Julio",
                interactive: true,
    title: 'Corredor 9 de Julio<br />\
    <img src="styles/legend/Corredor9deJulio_3_0.png" /> 1. Área CLV Av. 9 de Julio - C. Calvo<br />\
    <img src="styles/legend/Corredor9deJulio_3_1.png" /> 1. Área CLV Av. 9 de Julo 842<br />\
    <img src="styles/legend/Corredor9deJulio_3_2.png" /> 2. Área CLV Av. 9 de Julio - Av. Corrientes<br />\
    <img src="styles/legend/Corredor9deJulio_3_3.png" /> 2. Área CLV Av. 9 de Julio - Mitre<br />\
    <img src="styles/legend/Corredor9deJulio_3_4.png" /> 3. Área CLV Av. 9 de Julio - Juncal<br />'
        });
var format_Corredor9deJulio_4 = new ol.format.GeoJSON();
var features_Corredor9deJulio_4 = format_Corredor9deJulio_4.readFeatures(json_Corredor9deJulio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corredor9deJulio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corredor9deJulio_4.addFeatures(features_Corredor9deJulio_4);
var lyr_Corredor9deJulio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corredor9deJulio_4, 
                style: style_Corredor9deJulio_4,
                popuplayertitle: "Corredor 9 de Julio",
                interactive: true,
                title: '<img src="styles/legend/Corredor9deJulio_4.png" /> Corredor 9 de Julio'
            });
var format_CorredorAvFernndezdelaCruznoreste_5 = new ol.format.GeoJSON();
var features_CorredorAvFernndezdelaCruznoreste_5 = format_CorredorAvFernndezdelaCruznoreste_5.readFeatures(json_CorredorAvFernndezdelaCruznoreste_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorAvFernndezdelaCruznoreste_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorAvFernndezdelaCruznoreste_5.addFeatures(features_CorredorAvFernndezdelaCruznoreste_5);
var lyr_CorredorAvFernndezdelaCruznoreste_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorAvFernndezdelaCruznoreste_5, 
                style: style_CorredorAvFernndezdelaCruznoreste_5,
                popuplayertitle: "Corredor Av. Fernández de la Cruz (noreste)",
                interactive: true,
    title: 'Corredor Av. Fernández de la Cruz (noreste)<br />\
    <img src="styles/legend/CorredorAvFernndezdelaCruznoreste_5_0.png" /> 1. Área del CLV Av. Fernández de la Cruz - Saladillo <br />\
    <img src="styles/legend/CorredorAvFernndezdelaCruznoreste_5_1.png" /> 2. Área del CLV Av. Fernández de la Cruz 850<br />'
        });
var format_CorredorAvFernndezdelaCruznoreste_6 = new ol.format.GeoJSON();
var features_CorredorAvFernndezdelaCruznoreste_6 = format_CorredorAvFernndezdelaCruznoreste_6.readFeatures(json_CorredorAvFernndezdelaCruznoreste_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorAvFernndezdelaCruznoreste_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorAvFernndezdelaCruznoreste_6.addFeatures(features_CorredorAvFernndezdelaCruznoreste_6);
var lyr_CorredorAvFernndezdelaCruznoreste_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorAvFernndezdelaCruznoreste_6, 
                style: style_CorredorAvFernndezdelaCruznoreste_6,
                popuplayertitle: "Corredor Av. Fernández de la Cruz (noreste)",
                interactive: true,
                title: '<img src="styles/legend/CorredorAvFernndezdelaCruznoreste_6.png" /> Corredor Av. Fernández de la Cruz (noreste)'
            });
var format_CorredorBelgrano_7 = new ol.format.GeoJSON();
var features_CorredorBelgrano_7 = format_CorredorBelgrano_7.readFeatures(json_CorredorBelgrano_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorBelgrano_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorBelgrano_7.addFeatures(features_CorredorBelgrano_7);
var lyr_CorredorBelgrano_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorBelgrano_7, 
                style: style_CorredorBelgrano_7,
                popuplayertitle: "Corredor Belgrano ",
                interactive: true,
    title: 'Corredor Belgrano <br />\
    <img src="styles/legend/CorredorBelgrano_7_0.png" /> 1. Área CLV Av. Belgrano 3355<br />\
    <img src="styles/legend/CorredorBelgrano_7_1.png" /> 2. Área CLV Av. Belgrano 1851<br />\
    <img src="styles/legend/CorredorBelgrano_7_2.png" /> 3. Área CLV  Av. Belgrano 1189<br />'
        });
var format_CorredorBelgrano_8 = new ol.format.GeoJSON();
var features_CorredorBelgrano_8 = format_CorredorBelgrano_8.readFeatures(json_CorredorBelgrano_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorBelgrano_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorBelgrano_8.addFeatures(features_CorredorBelgrano_8);
var lyr_CorredorBelgrano_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorBelgrano_8, 
                style: style_CorredorBelgrano_8,
                popuplayertitle: "Corredor Belgrano ",
                interactive: true,
                title: '<img src="styles/legend/CorredorBelgrano_8.png" /> Corredor Belgrano '
            });
var format_CorredorCrdoba_9 = new ol.format.GeoJSON();
var features_CorredorCrdoba_9 = format_CorredorCrdoba_9.readFeatures(json_CorredorCrdoba_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCrdoba_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCrdoba_9.addFeatures(features_CorredorCrdoba_9);
var lyr_CorredorCrdoba_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCrdoba_9, 
                style: style_CorredorCrdoba_9,
                popuplayertitle: "Corredor Córdoba",
                interactive: true,
    title: 'Corredor Córdoba<br />\
    <img src="styles/legend/CorredorCrdoba_9_0.png" /> 1. Área del CLV Av. Córdoba 854<br />\
    <img src="styles/legend/CorredorCrdoba_9_1.png" /> 2. Área del CLV Av. Córdoba 2474<br />\
    <img src="styles/legend/CorredorCrdoba_9_2.png" /> 3. Área del CLV Av. Córdoba 4885<br />'
        });
var format_CorredorCrdoba_10 = new ol.format.GeoJSON();
var features_CorredorCrdoba_10 = format_CorredorCrdoba_10.readFeatures(json_CorredorCrdoba_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCrdoba_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCrdoba_10.addFeatures(features_CorredorCrdoba_10);
var lyr_CorredorCrdoba_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCrdoba_10, 
                style: style_CorredorCrdoba_10,
                popuplayertitle: "Corredor Córdoba",
                interactive: true,
                title: '<img src="styles/legend/CorredorCrdoba_10.png" /> Corredor Córdoba'
            });
var format_CorredorCorrientes_11 = new ol.format.GeoJSON();
var features_CorredorCorrientes_11 = format_CorredorCorrientes_11.readFeatures(json_CorredorCorrientes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCorrientes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCorrientes_11.addFeatures(features_CorredorCorrientes_11);
var lyr_CorredorCorrientes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCorrientes_11, 
                style: style_CorredorCorrientes_11,
                popuplayertitle: "Corredor Corrientes",
                interactive: true,
    title: 'Corredor Corrientes<br />\
    <img src="styles/legend/CorredorCorrientes_11_0.png" /> 1. Área del CLV Av. Corrientes 5952<br />\
    <img src="styles/legend/CorredorCorrientes_11_1.png" /> 2. Área del CLV Av. Corrientes 4138<br />\
    <img src="styles/legend/CorredorCorrientes_11_2.png" /> 3. Área del CLV Av. Corrientes 3075<br />\
    <img src="styles/legend/CorredorCorrientes_11_3.png" /> 4. Área del CLV Av. Corrientes 2131<br />\
    <img src="styles/legend/CorredorCorrientes_11_4.png" /> 5. Área del CLV Av. Corrientes 1854<br />\
    <img src="styles/legend/CorredorCorrientes_11_5.png" /> 6. Área del CLV Av. Corrientes 1174<br />'
        });
var format_CorredorCorrientes_12 = new ol.format.GeoJSON();
var features_CorredorCorrientes_12 = format_CorredorCorrientes_12.readFeatures(json_CorredorCorrientes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCorrientes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCorrientes_12.addFeatures(features_CorredorCorrientes_12);
var lyr_CorredorCorrientes_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCorrientes_12, 
                style: style_CorredorCorrientes_12,
                popuplayertitle: "Corredor Corrientes",
                interactive: true,
                title: '<img src="styles/legend/CorredorCorrientes_12.png" /> Corredor Corrientes'
            });
var format_CorredorEntreRos_13 = new ol.format.GeoJSON();
var features_CorredorEntreRos_13 = format_CorredorEntreRos_13.readFeatures(json_CorredorEntreRos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorEntreRos_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorEntreRos_13.addFeatures(features_CorredorEntreRos_13);
var lyr_CorredorEntreRos_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorEntreRos_13, 
                style: style_CorredorEntreRos_13,
                popuplayertitle: "Corredor Entre Ríos ",
                interactive: true,
    title: 'Corredor Entre Ríos <br />\
    <img src="styles/legend/CorredorEntreRos_13_0.png" /> 1. Área del CLV Av. Entre Ríos 859<br />\
    <img src="styles/legend/CorredorEntreRos_13_1.png" /> 2. Área del CLV Av. Entre Ríos 121<br />'
        });
var format_CorredorEntreRos_14 = new ol.format.GeoJSON();
var features_CorredorEntreRos_14 = format_CorredorEntreRos_14.readFeatures(json_CorredorEntreRos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorEntreRos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorEntreRos_14.addFeatures(features_CorredorEntreRos_14);
var lyr_CorredorEntreRos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorEntreRos_14, 
                style: style_CorredorEntreRos_14,
                popuplayertitle: "Corredor Entre Ríos ",
                interactive: true,
                title: '<img src="styles/legend/CorredorEntreRos_14.png" /> Corredor Entre Ríos '
            });
var format_CorredorIndependencia_15 = new ol.format.GeoJSON();
var features_CorredorIndependencia_15 = format_CorredorIndependencia_15.readFeatures(json_CorredorIndependencia_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorIndependencia_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorIndependencia_15.addFeatures(features_CorredorIndependencia_15);
var lyr_CorredorIndependencia_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorIndependencia_15, 
                style: style_CorredorIndependencia_15,
                popuplayertitle: "Corredor Independencia",
                interactive: true,
    title: 'Corredor Independencia<br />\
    <img src="styles/legend/CorredorIndependencia_15_0.png" /> 1. Área del CLV - Independencia 942<br />\
    <img src="styles/legend/CorredorIndependencia_15_1.png" /> 2. Área del CLV 2 - Independencia 3037<br />'
        });
var format_CorredorIndependencia_16 = new ol.format.GeoJSON();
var features_CorredorIndependencia_16 = format_CorredorIndependencia_16.readFeatures(json_CorredorIndependencia_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorIndependencia_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorIndependencia_16.addFeatures(features_CorredorIndependencia_16);
var lyr_CorredorIndependencia_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorIndependencia_16, 
                style: style_CorredorIndependencia_16,
                popuplayertitle: "Corredor Independencia",
                interactive: true,
                title: '<img src="styles/legend/CorredorIndependencia_16.png" /> Corredor Independencia'
            });
var format_CorredorJuanBJusto_17 = new ol.format.GeoJSON();
var features_CorredorJuanBJusto_17 = format_CorredorJuanBJusto_17.readFeatures(json_CorredorJuanBJusto_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorJuanBJusto_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorJuanBJusto_17.addFeatures(features_CorredorJuanBJusto_17);
var lyr_CorredorJuanBJusto_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorJuanBJusto_17, 
                style: style_CorredorJuanBJusto_17,
                popuplayertitle: "Corredor Juan B. Justo",
                interactive: true,
    title: 'Corredor Juan B. Justo<br />\
    <img src="styles/legend/CorredorJuanBJusto_17_0.png" /> Área CLV: Juan B Justo - Gallardo (este)<br />\
    <img src="styles/legend/CorredorJuanBJusto_17_1.png" /> Área CLV: Juan B Justo - Terrada (suroeste)<br />'
        });
var format_CorredorJuanBJusto_18 = new ol.format.GeoJSON();
var features_CorredorJuanBJusto_18 = format_CorredorJuanBJusto_18.readFeatures(json_CorredorJuanBJusto_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorJuanBJusto_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorJuanBJusto_18.addFeatures(features_CorredorJuanBJusto_18);
var lyr_CorredorJuanBJusto_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorJuanBJusto_18, 
                style: style_CorredorJuanBJusto_18,
                popuplayertitle: "Corredor Juan B. Justo",
                interactive: true,
                title: '<img src="styles/legend/CorredorJuanBJusto_18.png" /> Corredor Juan B. Justo'
            });
var format_CorredorLibertador_19 = new ol.format.GeoJSON();
var features_CorredorLibertador_19 = format_CorredorLibertador_19.readFeatures(json_CorredorLibertador_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorLibertador_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorLibertador_19.addFeatures(features_CorredorLibertador_19);
var lyr_CorredorLibertador_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorLibertador_19, 
                style: style_CorredorLibertador_19,
                popuplayertitle: "Corredor Libertador",
                interactive: true,
    title: 'Corredor Libertador<br />\
    <img src="styles/legend/CorredorLibertador_19_0.png" /> 1. Área del CLV- Norte (Av. del Libertador 530)<br />\
    <img src="styles/legend/CorredorLibertador_19_1.png" /> 1. Área para Libertador 8176 - Sureste <br />\
    <img src="styles/legend/CorredorLibertador_19_2.png" /> 2. Área del CLV- Norte (Av. del Libertador 3467 (kennedy))<br />\
    <img src="styles/legend/CorredorLibertador_19_3.png" /> 2. Área para Libertador  5515 - Sureste <br />\
    <img src="styles/legend/CorredorLibertador_19_4.png" /> 3. Área para Libertador 1465 - Sureste <br />\
    <img src="styles/legend/CorredorLibertador_19_5.png" /> 4. Área para Libertador 633 - Sureste <br />'
        });
var format_CorredorLibertador_20 = new ol.format.GeoJSON();
var features_CorredorLibertador_20 = format_CorredorLibertador_20.readFeatures(json_CorredorLibertador_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorLibertador_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorLibertador_20.addFeatures(features_CorredorLibertador_20);
var lyr_CorredorLibertador_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorLibertador_20, 
                style: style_CorredorLibertador_20,
                popuplayertitle: "Corredor Libertador",
                interactive: true,
                title: '<img src="styles/legend/CorredorLibertador_20.png" /> Corredor Libertador'
            });
var format_CorredorCabildosureste_21 = new ol.format.GeoJSON();
var features_CorredorCabildosureste_21 = format_CorredorCabildosureste_21.readFeatures(json_CorredorCabildosureste_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCabildosureste_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCabildosureste_21.addFeatures(features_CorredorCabildosureste_21);
var lyr_CorredorCabildosureste_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCabildosureste_21, 
                style: style_CorredorCabildosureste_21,
                popuplayertitle: "Corredor Cabildo (sureste)",
                interactive: true,
    title: 'Corredor Cabildo (sureste)<br />\
    <img src="styles/legend/CorredorCabildosureste_21_0.png" /> Área CLV Av. Cabildo 2618 (sureste)<br />\
    <img src="styles/legend/CorredorCabildosureste_21_1.png" /> Área CLV Av. Cabildo 4746 (sureste)<br />'
        });
var format_CorredorCabildosureste_22 = new ol.format.GeoJSON();
var features_CorredorCabildosureste_22 = format_CorredorCabildosureste_22.readFeatures(json_CorredorCabildosureste_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorCabildosureste_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorCabildosureste_22.addFeatures(features_CorredorCabildosureste_22);
var lyr_CorredorCabildosureste_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorCabildosureste_22, 
                style: style_CorredorCabildosureste_22,
                popuplayertitle: "Corredor Cabildo (sureste)",
                interactive: true,
                title: '<img src="styles/legend/CorredorCabildosureste_22.png" /> Corredor Cabildo (sureste)'
            });
var format_CorredorFigueroaAlcortanoroeste_23 = new ol.format.GeoJSON();
var features_CorredorFigueroaAlcortanoroeste_23 = format_CorredorFigueroaAlcortanoroeste_23.readFeatures(json_CorredorFigueroaAlcortanoroeste_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorFigueroaAlcortanoroeste_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorFigueroaAlcortanoroeste_23.addFeatures(features_CorredorFigueroaAlcortanoroeste_23);
var lyr_CorredorFigueroaAlcortanoroeste_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorFigueroaAlcortanoroeste_23, 
                style: style_CorredorFigueroaAlcortanoroeste_23,
                popuplayertitle: "Corredor Figueroa Alcorta (noroeste)",
                interactive: true,
    title: 'Corredor Figueroa Alcorta (noroeste)<br />\
    <img src="styles/legend/CorredorFigueroaAlcortanoroeste_23_0.png" /> Área CLV Figueroa Alcorta - Sarmiento<br />\
    <img src="styles/legend/CorredorFigueroaAlcortanoroeste_23_1.png" /> Área CLV Figueroa Alcorta 3271<br />\
    <img src="styles/legend/CorredorFigueroaAlcortanoroeste_23_2.png" /> Área CLV Figueroa Alcorta 6100<br />'
        });
var format_CorredorFigueroaAlcortanoroeste_24 = new ol.format.GeoJSON();
var features_CorredorFigueroaAlcortanoroeste_24 = format_CorredorFigueroaAlcortanoroeste_24.readFeatures(json_CorredorFigueroaAlcortanoroeste_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorFigueroaAlcortanoroeste_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorFigueroaAlcortanoroeste_24.addFeatures(features_CorredorFigueroaAlcortanoroeste_24);
var lyr_CorredorFigueroaAlcortanoroeste_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorFigueroaAlcortanoroeste_24, 
                style: style_CorredorFigueroaAlcortanoroeste_24,
                popuplayertitle: "Corredor Figueroa Alcorta (noroeste)",
                interactive: true,
                title: '<img src="styles/legend/CorredorFigueroaAlcortanoroeste_24.png" /> Corredor Figueroa Alcorta (noroeste)'
            });
var format_CorredorMontesdeOca_25 = new ol.format.GeoJSON();
var features_CorredorMontesdeOca_25 = format_CorredorMontesdeOca_25.readFeatures(json_CorredorMontesdeOca_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorMontesdeOca_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorMontesdeOca_25.addFeatures(features_CorredorMontesdeOca_25);
var lyr_CorredorMontesdeOca_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorMontesdeOca_25, 
                style: style_CorredorMontesdeOca_25,
                popuplayertitle: "Corredor Montes de Oca",
                interactive: true,
    title: 'Corredor Montes de Oca<br />\
    <img src="styles/legend/CorredorMontesdeOca_25_0.png" /> Área CLV Av. Montes de Oca 1822 (norte)<br />\
    <img src="styles/legend/CorredorMontesdeOca_25_1.png" /> Área CLV Av. Montes de Oca 978 (norte)<br />'
        });
var format_CorredorMontesdeOca_26 = new ol.format.GeoJSON();
var features_CorredorMontesdeOca_26 = format_CorredorMontesdeOca_26.readFeatures(json_CorredorMontesdeOca_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorMontesdeOca_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorMontesdeOca_26.addFeatures(features_CorredorMontesdeOca_26);
var lyr_CorredorMontesdeOca_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorMontesdeOca_26, 
                style: style_CorredorMontesdeOca_26,
                popuplayertitle: "Corredor Montes de Oca",
                interactive: true,
                title: '<img src="styles/legend/CorredorMontesdeOca_26.png" /> Corredor Montes de Oca'
            });
var format_CorredorPueyrrednsur_27 = new ol.format.GeoJSON();
var features_CorredorPueyrrednsur_27 = format_CorredorPueyrrednsur_27.readFeatures(json_CorredorPueyrrednsur_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorPueyrrednsur_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorPueyrrednsur_27.addFeatures(features_CorredorPueyrrednsur_27);
var lyr_CorredorPueyrrednsur_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorPueyrrednsur_27, 
                style: style_CorredorPueyrrednsur_27,
                popuplayertitle: "Corredor Pueyrredón (sur)",
                interactive: true,
    title: 'Corredor Pueyrredón (sur)<br />\
    <img src="styles/legend/CorredorPueyrrednsur_27_0.png" /> Área CLV Av. Pueyrredón - Paraguay (sur) <br />\
    <img src="styles/legend/CorredorPueyrrednsur_27_1.png" /> Área CLV Av. Pueyrredón 2266 (sur)<br />'
        });
var format_CorredorPueyrrednsur_28 = new ol.format.GeoJSON();
var features_CorredorPueyrrednsur_28 = format_CorredorPueyrrednsur_28.readFeatures(json_CorredorPueyrrednsur_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorPueyrrednsur_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorPueyrrednsur_28.addFeatures(features_CorredorPueyrrednsur_28);
var lyr_CorredorPueyrrednsur_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorPueyrrednsur_28, 
                style: style_CorredorPueyrrednsur_28,
                popuplayertitle: "Corredor Pueyrredón (sur)",
                interactive: true,
                title: '<img src="styles/legend/CorredorPueyrrednsur_28.png" /> Corredor Pueyrredón (sur)'
            });
var format_CorredorSanJuan_29 = new ol.format.GeoJSON();
var features_CorredorSanJuan_29 = format_CorredorSanJuan_29.readFeatures(json_CorredorSanJuan_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSanJuan_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSanJuan_29.addFeatures(features_CorredorSanJuan_29);
var lyr_CorredorSanJuan_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSanJuan_29, 
                style: style_CorredorSanJuan_29,
                popuplayertitle: "Corredor San Juan",
                interactive: true,
    title: 'Corredor San Juan<br />\
    <img src="styles/legend/CorredorSanJuan_29_0.png" /> Área CLV San Juan - Castro Barros<br />\
    <img src="styles/legend/CorredorSanJuan_29_1.png" /> Área CLV San Juan 1932<br />\
    <img src="styles/legend/CorredorSanJuan_29_2.png" /> Área CLV San Juan 954<br />'
        });
var format_CorredorSanJuan_30 = new ol.format.GeoJSON();
var features_CorredorSanJuan_30 = format_CorredorSanJuan_30.readFeatures(json_CorredorSanJuan_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSanJuan_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSanJuan_30.addFeatures(features_CorredorSanJuan_30);
var lyr_CorredorSanJuan_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSanJuan_30, 
                style: style_CorredorSanJuan_30,
                popuplayertitle: "Corredor San Juan",
                interactive: true,
                title: '<img src="styles/legend/CorredorSanJuan_30.png" /> Corredor San Juan'
            });
var format_CorredorSanMartn_31 = new ol.format.GeoJSON();
var features_CorredorSanMartn_31 = format_CorredorSanMartn_31.readFeatures(json_CorredorSanMartn_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSanMartn_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSanMartn_31.addFeatures(features_CorredorSanMartn_31);
var lyr_CorredorSanMartn_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSanMartn_31, 
                style: style_CorredorSanMartn_31,
                popuplayertitle: "Corredor San Martín ",
                interactive: true,
    title: 'Corredor San Martín <br />\
    <img src="styles/legend/CorredorSanMartn_31_0.png" /> Área CLV San Martín - Dr. H. Pueyrredón<br />\
    <img src="styles/legend/CorredorSanMartn_31_1.png" /> Área CLV San Martín - Tinogasta (sureste)<br />\
    <img src="styles/legend/CorredorSanMartn_31_2.png" /> Área CLV San Martín 6954 (sureste)<br />'
        });
var format_CorredorSanMartn_32 = new ol.format.GeoJSON();
var features_CorredorSanMartn_32 = format_CorredorSanMartn_32.readFeatures(json_CorredorSanMartn_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSanMartn_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSanMartn_32.addFeatures(features_CorredorSanMartn_32);
var lyr_CorredorSanMartn_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSanMartn_32, 
                style: style_CorredorSanMartn_32,
                popuplayertitle: "Corredor San Martín ",
                interactive: true,
                title: '<img src="styles/legend/CorredorSanMartn_32.png" /> Corredor San Martín '
            });
var format_CorredorSantaFeeste_33 = new ol.format.GeoJSON();
var features_CorredorSantaFeeste_33 = format_CorredorSantaFeeste_33.readFeatures(json_CorredorSantaFeeste_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSantaFeeste_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSantaFeeste_33.addFeatures(features_CorredorSantaFeeste_33);
var lyr_CorredorSantaFeeste_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSantaFeeste_33, 
                style: style_CorredorSantaFeeste_33,
                popuplayertitle: "Corredor Santa Fe (este)",
                interactive: true,
    title: 'Corredor Santa Fe (este)<br />\
    <img src="styles/legend/CorredorSantaFeeste_33_0.png" /> Área CLV Av. Santa Fe - Larrea (este)<br />\
    <img src="styles/legend/CorredorSantaFeeste_33_1.png" /> Área CLV Av. Santa Fe 4596 (este)<br />'
        });
var format_CorredorSantaFeeste_34 = new ol.format.GeoJSON();
var features_CorredorSantaFeeste_34 = format_CorredorSantaFeeste_34.readFeatures(json_CorredorSantaFeeste_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSantaFeeste_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSantaFeeste_34.addFeatures(features_CorredorSantaFeeste_34);
var lyr_CorredorSantaFeeste_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSantaFeeste_34, 
                style: style_CorredorSantaFeeste_34,
                popuplayertitle: "Corredor Santa Fe (este)",
                interactive: true,
                title: '<img src="styles/legend/CorredorSantaFeeste_34.png" /> Corredor Santa Fe (este)'
            });
var format_CorredorSarmiento_35 = new ol.format.GeoJSON();
var features_CorredorSarmiento_35 = format_CorredorSarmiento_35.readFeatures(json_CorredorSarmiento_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSarmiento_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSarmiento_35.addFeatures(features_CorredorSarmiento_35);
var lyr_CorredorSarmiento_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorSarmiento_35, 
                style: style_CorredorSarmiento_35,
                popuplayertitle: "Corredor Sarmiento ",
                interactive: true,
    title: 'Corredor Sarmiento <br />\
    <img src="styles/legend/CorredorSarmiento_35_0.png" /> Área para Av. Sarmiento (sureste)<br />\
    <img src="styles/legend/CorredorSarmiento_35_1.png" /> Área para Av. Sarmiento (suroeste)<br />'
        });
var format_CorredorSarmiento_36 = new ol.format.GeoJSON();
var features_CorredorSarmiento_36 = format_CorredorSarmiento_36.readFeatures(json_CorredorSarmiento_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorSarmiento_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorSarmiento_36.addFeatures(features_CorredorSarmiento_36);cluster_CorredorSarmiento_36 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CorredorSarmiento_36
});
var lyr_CorredorSarmiento_36 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CorredorSarmiento_36, 
                style: style_CorredorSarmiento_36,
                popuplayertitle: "Corredor Sarmiento ",
                interactive: true,
                title: '<img src="styles/legend/CorredorSarmiento_36.png" /> Corredor Sarmiento '
            });
var format_CorredorVlezSarsfieldnorte_37 = new ol.format.GeoJSON();
var features_CorredorVlezSarsfieldnorte_37 = format_CorredorVlezSarsfieldnorte_37.readFeatures(json_CorredorVlezSarsfieldnorte_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorVlezSarsfieldnorte_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorVlezSarsfieldnorte_37.addFeatures(features_CorredorVlezSarsfieldnorte_37);
var lyr_CorredorVlezSarsfieldnorte_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CorredorVlezSarsfieldnorte_37, 
                style: style_CorredorVlezSarsfieldnorte_37,
                popuplayertitle: "Corredor Vélez Sarsfield (norte)",
                interactive: true,
    title: 'Corredor Vélez Sarsfield (norte)<br />\
    <img src="styles/legend/CorredorVlezSarsfieldnorte_37_0.png" /> Área CLV Av. Vélez Sarsfield - Caseros (norte)<br />\
    <img src="styles/legend/CorredorVlezSarsfieldnorte_37_1.png" /> Área CLV Av. Vélez Sarsfield 1940 (norte)<br />'
        });
var format_CorredorVlezSarsfieldnorte_38 = new ol.format.GeoJSON();
var features_CorredorVlezSarsfieldnorte_38 = format_CorredorVlezSarsfieldnorte_38.readFeatures(json_CorredorVlezSarsfieldnorte_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CorredorVlezSarsfieldnorte_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CorredorVlezSarsfieldnorte_38.addFeatures(features_CorredorVlezSarsfieldnorte_38);cluster_CorredorVlezSarsfieldnorte_38 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CorredorVlezSarsfieldnorte_38
});
var lyr_CorredorVlezSarsfieldnorte_38 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CorredorVlezSarsfieldnorte_38, 
                style: style_CorredorVlezSarsfieldnorte_38,
                popuplayertitle: "Corredor Vélez Sarsfield (norte)",
                interactive: true,
                title: '<img src="styles/legend/CorredorVlezSarsfieldnorte_38.png" /> Corredor Vélez Sarsfield (norte)'
            });
var format_eventos_geojson_39 = new ol.format.GeoJSON();
var features_eventos_geojson_39 = format_eventos_geojson_39.readFeatures(json_eventos_geojson_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eventos_geojson_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eventos_geojson_39.addFeatures(features_eventos_geojson_39);
var lyr_eventos_geojson_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_eventos_geojson_39, 
                style: style_eventos_geojson_39,
                popuplayertitle: "eventos_geojson",
                interactive: true,
                title: '<img src="styles/legend/eventos_geojson_39.png" /> eventos_geojson'
            });

lyr_GooglecnNormal_0.setVisible(true);lyr_CLVaislados_1.setVisible(true);lyr_CLVaislados_2.setVisible(true);lyr_Corredor9deJulio_3.setVisible(true);lyr_Corredor9deJulio_4.setVisible(true);lyr_CorredorAvFernndezdelaCruznoreste_5.setVisible(true);lyr_CorredorAvFernndezdelaCruznoreste_6.setVisible(true);lyr_CorredorBelgrano_7.setVisible(true);lyr_CorredorBelgrano_8.setVisible(true);lyr_CorredorCrdoba_9.setVisible(true);lyr_CorredorCrdoba_10.setVisible(true);lyr_CorredorCorrientes_11.setVisible(true);lyr_CorredorCorrientes_12.setVisible(true);lyr_CorredorEntreRos_13.setVisible(true);lyr_CorredorEntreRos_14.setVisible(true);lyr_CorredorIndependencia_15.setVisible(true);lyr_CorredorIndependencia_16.setVisible(true);lyr_CorredorJuanBJusto_17.setVisible(true);lyr_CorredorJuanBJusto_18.setVisible(true);lyr_CorredorLibertador_19.setVisible(true);lyr_CorredorLibertador_20.setVisible(true);lyr_CorredorCabildosureste_21.setVisible(true);lyr_CorredorCabildosureste_22.setVisible(true);lyr_CorredorFigueroaAlcortanoroeste_23.setVisible(true);lyr_CorredorFigueroaAlcortanoroeste_24.setVisible(true);lyr_CorredorMontesdeOca_25.setVisible(true);lyr_CorredorMontesdeOca_26.setVisible(true);lyr_CorredorPueyrrednsur_27.setVisible(true);lyr_CorredorPueyrrednsur_28.setVisible(true);lyr_CorredorSanJuan_29.setVisible(true);lyr_CorredorSanJuan_30.setVisible(true);lyr_CorredorSanMartn_31.setVisible(true);lyr_CorredorSanMartn_32.setVisible(true);lyr_CorredorSantaFeeste_33.setVisible(true);lyr_CorredorSantaFeeste_34.setVisible(true);lyr_CorredorSarmiento_35.setVisible(true);lyr_CorredorSarmiento_36.setVisible(true);lyr_CorredorVlezSarsfieldnorte_37.setVisible(true);lyr_CorredorVlezSarsfieldnorte_38.setVisible(true);lyr_eventos_geojson_39.setVisible(true);
var layersList = [lyr_GooglecnNormal_0,lyr_CLVaislados_1,lyr_CLVaislados_2,lyr_Corredor9deJulio_3,lyr_Corredor9deJulio_4,lyr_CorredorAvFernndezdelaCruznoreste_5,lyr_CorredorAvFernndezdelaCruznoreste_6,lyr_CorredorBelgrano_7,lyr_CorredorBelgrano_8,lyr_CorredorCrdoba_9,lyr_CorredorCrdoba_10,lyr_CorredorCorrientes_11,lyr_CorredorCorrientes_12,lyr_CorredorEntreRos_13,lyr_CorredorEntreRos_14,lyr_CorredorIndependencia_15,lyr_CorredorIndependencia_16,lyr_CorredorJuanBJusto_17,lyr_CorredorJuanBJusto_18,lyr_CorredorLibertador_19,lyr_CorredorLibertador_20,lyr_CorredorCabildosureste_21,lyr_CorredorCabildosureste_22,lyr_CorredorFigueroaAlcortanoroeste_23,lyr_CorredorFigueroaAlcortanoroeste_24,lyr_CorredorMontesdeOca_25,lyr_CorredorMontesdeOca_26,lyr_CorredorPueyrrednsur_27,lyr_CorredorPueyrrednsur_28,lyr_CorredorSanJuan_29,lyr_CorredorSanJuan_30,lyr_CorredorSanMartn_31,lyr_CorredorSanMartn_32,lyr_CorredorSantaFeeste_33,lyr_CorredorSantaFeeste_34,lyr_CorredorSarmiento_35,lyr_CorredorSarmiento_36,lyr_CorredorVlezSarsfieldnorte_37,lyr_CorredorVlezSarsfieldnorte_38,lyr_eventos_geojson_39];
lyr_CLVaislados_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CLVaislados_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Corredor9deJulio_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Corredor9deJulio_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorAvFernndezdelaCruznoreste_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorAvFernndezdelaCruznoreste_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorBelgrano_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorBelgrano_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorCrdoba_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorCrdoba_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorCorrientes_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorCorrientes_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorEntreRos_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorEntreRos_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorIndependencia_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorIndependencia_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorJuanBJusto_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorJuanBJusto_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorLibertador_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorLibertador_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorCabildosureste_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorCabildosureste_22.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorFigueroaAlcortanoroeste_23.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorFigueroaAlcortanoroeste_24.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorMontesdeOca_25.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorMontesdeOca_26.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorPueyrrednsur_27.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorPueyrrednsur_28.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorSanJuan_29.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorSanJuan_30.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorSanMartn_31.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorSanMartn_32.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorSantaFeeste_33.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorSantaFeeste_34.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorSarmiento_35.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorSarmiento_36.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorVlezSarsfieldnorte_37.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CorredorVlezSarsfieldnorte_38.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_eventos_geojson_39.set('fieldAliases', {'evento': 'evento', 'street': 'street', 'nearest_intersection': 'nearest_intersection', });
lyr_CLVaislados_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CLVaislados_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Corredor9deJulio_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Corredor9deJulio_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorAvFernndezdelaCruznoreste_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorAvFernndezdelaCruznoreste_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorBelgrano_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorBelgrano_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorCrdoba_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorCrdoba_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorCorrientes_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorCorrientes_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorEntreRos_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorEntreRos_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorIndependencia_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorIndependencia_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorJuanBJusto_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorJuanBJusto_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorLibertador_19.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorLibertador_20.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorCabildosureste_21.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorCabildosureste_22.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorFigueroaAlcortanoroeste_23.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorFigueroaAlcortanoroeste_24.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorMontesdeOca_25.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorMontesdeOca_26.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorPueyrrednsur_27.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorPueyrrednsur_28.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorSanJuan_29.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorSanJuan_30.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorSanMartn_31.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorSanMartn_32.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorSantaFeeste_33.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorSantaFeeste_34.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorSarmiento_35.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorSarmiento_36.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorVlezSarsfieldnorte_37.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_CorredorVlezSarsfieldnorte_38.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_eventos_geojson_39.set('fieldImages', {'evento': 'TextEdit', 'street': 'TextEdit', 'nearest_intersection': 'TextEdit', });
lyr_CLVaislados_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CLVaislados_2.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Corredor9deJulio_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_Corredor9deJulio_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorAvFernndezdelaCruznoreste_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorAvFernndezdelaCruznoreste_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorBelgrano_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorBelgrano_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorCrdoba_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorCrdoba_10.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorCorrientes_11.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorCorrientes_12.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorEntreRos_13.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorEntreRos_14.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorIndependencia_15.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorIndependencia_16.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorJuanBJusto_17.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorJuanBJusto_18.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorLibertador_19.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorLibertador_20.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorCabildosureste_21.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorCabildosureste_22.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorFigueroaAlcortanoroeste_23.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorFigueroaAlcortanoroeste_24.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorMontesdeOca_25.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorMontesdeOca_26.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorPueyrrednsur_27.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorPueyrrednsur_28.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorSanJuan_29.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorSanJuan_30.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorSanMartn_31.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorSanMartn_32.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorSantaFeeste_33.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorSantaFeeste_34.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorSarmiento_35.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorSarmiento_36.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorVlezSarsfieldnorte_37.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_CorredorVlezSarsfieldnorte_38.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_eventos_geojson_39.set('fieldLabels', {'evento': 'no label', 'street': 'no label', 'nearest_intersection': 'no label', });
lyr_eventos_geojson_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});