function f1(){
$('h2').css({"color": "#000000", 
"text-align": "left", 
"font-size": "8mm",
});
$('.principal').css({
"background-color": "#ffffff",
"margin-left": "0mm",
"margin-right": "0mm",
"padding-bottom": "0mm",
"padding-left": "0mm",
"padding-right": "0mm",
"padding-top": "0mm",
});
  var objeto=document.getElementById('contenido');  //obtenemos el objeto a imprimir
  var ventana=window.open('','_blank');  //abrimos una ventana vacía nueva
  ventana.document.write(objeto.innerHTML);  //imprimimos el HTML del objeto en la nueva ventana
  ventana.document.close();  //cerramos el documento
  ventana.print();  //imprimimos la ventana
  ventana.close();  //cerramos la ventana
$('h2').css({"color": "#FF3030", 
"text-align": "center", 
"font-size": "8mm",
});
$('.principal').css({
"background-color": "#30ff30",
"margin-left": "60mm",
"margin-right": "60mm",
"padding-bottom": "5mm",
"padding-left": "5mm",
"padding-right": "5mm",
"padding-top": "5mm",
});
}
function movil() {
$('body').css("background-color", "#3030FF");
$('h2').css({"color": "#FF3030", 
"text-align": "center", 
"font-size": "12mm",
});
$('h3').css("font-size", "20mm");
$('img').css("width", "200px");
$('.contacto').css({
"background-color": "#30ff30",
"position": "absolute",
"right": "5mm",
"top": "5mm",
"padding-bottom": "2mm",
"padding-left": "2mm",
"padding-right": "2mm",
"padding-top": "2mm",
"color": "#000000",
"float": "right",
});
$('.inicio').css({
"background-color": "#30ff30",
"position": "absolute",
"left": "5mm",
"top": "5mm",
"padding-bottom": "2mm",
"padding-left": "2mm",
"padding-right": "2mm",
"padding-top": "2mm",
"color": "#000000",
});
$('.contactar').css({
"background-color": "#30ff30", 
"padding-bottom": "5mm",
"padding-left": "5mm",
"padding-right": "5mm",
"padding-top": "5mm",
});
$('#contenido').css({
"position": "relative",
"top": "15mm",
});
$('.principal').css({
"background-color": "#30ff30",
"padding-bottom": "5mm",
"padding-left": "5mm",
"padding-right": "5mm",
"padding-top": "5mm",
});
$('.principal  a:visited').css("color", "#000000");
$('.principal a:link').css("color", "#000000");
};
function ordenador(){
 $('body').css("background-color", "#3030ff");
$('h2').css({"color": "#FF3030", 
"text-align": "center", 
"font-size": "8mm",
});
$('.contacto').css
({"background-color": "#30ff30",
"position": "absolute",
"right": "5mm",
"top": "5mm",
"padding-bottom": "2mm",
"padding-left": "2mm",
"padding-right": "2mm",
"padding-top": "2mm",
"color": "#000000",
"float": "right",
});
$('img').css( 
"width", "100px"
);
$('.inicio').css({
"background-color": "#30ff30",
"position": "absolute",
"left": "5mm",
"top": "5mm",
"padding-bottom": "2mm",
"padding-left": "2mm",
"padding-right": "2mm",
"padding-top": "2mm",
"color": "#000000",
});
$('.contactar').css({
"background-color": "#30ff30", 
"position": "absolute",
"left": "100mm",
"top": "50mm",
"padding-bottom": "5mm",
"padding-left": "5mm",
"padding-right": "5mm",
"padding-top": "5mm",
});
$('.principal').css({
"background-color": "#30ff30",
"margin-left": "60mm",
"margin-right": "60mm",
"padding-bottom": "5mm",
"padding-left": "5mm",
"padding-right": "5mm",
"padding-top": "5mm",
});
$('.principal  a:visited').css("color", "#000000");
$('.principal a:link').css("color", "#000000");
};
var device = navigator.userAgent
		if (device.match(/Iphone/i)||device.match(/Ipod/i)||device.match(/Ipad/i)||device.match(/Android/i)||device.match(/J2ME/i)||device.match(/HTC/i)){
$(document).ready(function(){
 movil()});}else{
$(document).ready(function(){
 ordenador()
});
}
