
$(document).ready(function(){ //Esta linea se asegura de que el documento ya este cargado para luego ejecutar los scripts de JQuery

    let pares = $(".p-1");
    let medio = $("#p-2");
    //JQuery es un manipulador directo del DOM desde JS, con el podemos modificar los elementos y sus diferentes propiedades desde JS

    $("#hide").on('click', function(){
        pares.fadeOut();
    });

    $(".p-1").mouseenter(function(){

        medio.fadeOut()

    });

    $(".p-1").mouseleave(function(){

        medio.fadeIn()

    });

});