"use strict";
//Corrijo un pequeño error en comprobarLetraEnPalabra() cambiando el parámetro de entrada "palabra" por "letra"
//Respeto el resto del código y no lo toco
var palabra = seleccionarPalabraSecreta();
var parcial = new Array(palabra.length);
crearParcial();
var numeroFallos = 0;
var incrementarFallos = function () { return ++numeroFallos; };
var completada = false;
var maximo = 5;
do {
    var letra = preguntaLetraPropuesta();
    var fallo = comprobarLetraEnPalabra(letra, parcial);
    if (fallo) {
        numeroFallos = incrementarFallos();
    }
    else {
        completada = comprobarPalabraCompletada(parcial);
    }
    mostrarParcialYFallos(parcial, numeroFallos);
} while (!completada && numeroFallos < maximo);
mostrarMensaje(completada);
function mostrarMensaje(completada) {
    if (completada) {
        alert("enhorabuena");
    }
    else {
        alert("la proxima vez sera");
    }
}
//Añado las funciones que faltan
function seleccionarPalabraSecreta() {
    var respuesta;
    respuesta = prompt("Escriba la secuencia que desea buscar:", "Introduce la palabra Secreta");
    return respuesta;
}
function preguntaLetraPropuesta() {
    var respuesta;
    var letra = "";
    do {
        respuesta = prompt("Escriba la secuencia que desea buscar:", "Introduce una Letra");
        letra = respuesta;
        //revisar si es 1 o 0
    } while (letra.length != 1);
    return letra;
}
function comprobarLetraEnPalabra(letra, parcial) {
    var fallo = true;
    for (var i = 0; i < parcial.length; i++) {
        if (palabra[i] == letra) {
            parcial[i] = letra;
            fallo = false;
        }
    }
    return fallo;
}
function comprobarPalabraCompletada(parcial) {
    for (var i = 0; i < parcial.length; i++) {
        if (parcial[i] == "_") {
            return false;
        }
    }
    return true;
}
function mostrarParcialYFallos(parcial, numeroFallos) {
    alert("Llevas " + numeroFallos + " Palabra: " + parcial);
}
function crearParcial() {
    for (var i = 0; i < parcial.length; i++) {
        parcial[i] = "_";
    }
}
//# sourceMappingURL=ahorcado.js.map