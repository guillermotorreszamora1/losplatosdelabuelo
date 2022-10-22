<?php  
$a = $_SERVER['HTTP_USER_AGENT' ];//cogemos el user-agent y lo ponemos en una variable de nombre mas corto para agilizar el desarrollo
$tipo =0;//variable usada como boleano. Si vale 0 el usuario acede desde un ordenador , Si vale 1 accede desde un movil.
if( strstr( $a, 'Android' ) ) {  /*empezamos la detecion de moviles , usamos este sistema en vez de if-else anidados , para que no haya 
gran cantidad de llaves juntas.
*/
$tipo =1;
}
if( strstr( $a, 'Iphone' ) ){
$tipo =1;
}
if( strstr( $a, 'Ipod' ) ){
$tipo = 1;
}
if( strstr( $a,'J2ME') ){
$tipo = 1;
}
if( strstr( $a, 'Blackberry') ){
$tipo = 1;
}
if( strstr( $a, 'iPhone') ){
$tipo = 1;
}
if(strstr($a, 'iPad')  ){
$tipo = 1;
}
if(strstr($a, 'iPod')  ){
$tipo = 1;
}
if(strstr($a, 'Opera Mini') ){
$tipo = 1;
}
if(strstr($a, 'IEMobile') ){
$tipo = 1;
}
if(strstr($a, 'Mobile') ){
$tipo = 1;
}
if(strstr($a, 'Windows Phone') ){
$tipo = 1;
}
if(strstr($a, 'windows mobile') ){
$tipo = 1;
}
if(strstr($a, 'windows ce') ){
$tipo = 1;
}
if(strstr($a, 'webOS') ){
$tipo = 1;
}
if(strstr($a, 'palm') ){
$tipo = 1;
}
if(strstr($a, 'nokia') ){
$tipo = 1;
}
if(strstr($a, 'symbian') ){
$tipo = 1;
}
if(strstr($a, 'HTC') ){
$tipo = 1;
}
if($tipo==0){
echo '<link rel="stylesheet" href="/ordenador.css"/>';
}
if($tipo==1){
echo '<link rel="stylesheet" href="/movil.css"/>';
	}
?>
