$(document).ready(function() {
    //Obtenemos la fecha actual
    let fechaActual = new Date();
    let mes = fechaActual.getMonth() + 1;

    //Definimos los meses en que hay verano y en los que hay invierno
    let verano = [1, 2, 3, 4, 12];
    let invierno = [5, 6, 7, 8, 9, 10, 11];

    //Asignamos una variable para determinar la temporada en una cadena
    let temporada = "";

    //Este If Else envalua el contenido de los arreglos y le asigna a 
    //Temporada el string, además, con Jquery le removemos la clase 'hidden'
    //a nuestro elemento si estamos en verano, por el contrario, la añade en
    //Invierno
    if (verano.indexOf(mes) !== -1) {
        temporada = "Verano";
        $('#actividad').removeClass('hidden')
        
    } else {
        temporada = "Invierno";
        $('#actividad').addClass('hidden')
    };

    //Este mensaje se actualiza según la temporada del año
    let mensaje = `¡Le damos la bienvenida al ${temporada}, disfrute de esta temporada!`;
    $('#mensaje-temporada').text(mensaje);
});
