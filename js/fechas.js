var fecha = new Date();
alert ("La fecha de hoy es :" +fecha);

var fecha2 = new Date(1991,10,23);
alert ("La fecha de hoy es : " + fecha2);

var fecha3 = new Date("2023,05,15");
alert ("La fecha de hoy es : " + fecha3);

var dia = fecha.getDate();
var mes = fecha.getMonth();
var anio = fecha.getFullYear();

alert ("La fecha de hoy es Dia " + dia + "   Mes " + (mes +1) + "   Año "+ anio);
