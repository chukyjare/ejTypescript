"use strict";
var posicion = 0;
var max = 3;
var min = 0;
var numNucleotidos = 4;
var cadenaADN = generarCadena();
// alert("ESTA ES SU CADENA: \n \n"+cadenaADN);
var secuencia = solicitarSecuencia();
var encontrado = buscarSecuencia(cadenaADN, secuencia);
mostrarAlerta(encontrado);
//Respeto el código que me facilita y no lo toco
function generarCadena() {
    var cadena = new Array(1000);
    for (var i = 0; i < cadena.length; i++) {
        var elemento = generarNucleotido();
        cadena[i] = elemento;
    }
    return cadena;
}
function generarNucleotido() {
    var muestra = dameCaracteresValidos();
    var elemento = Math.round(Math.random() * (max - min)) + min;
    return muestra[elemento];
}
function dameCaracteresValidos() {
    var validos = ['A', 'C', 'G', 'T'];
    return validos;
}
//Añado los métodos solcitarSecuencia() y buscarSecuencia()
function solicitarSecuencia() {
    var respuesta;
    respuesta = prompt("Escriba la secuencia que desea buscar:", "ACCA");
    return respuesta;
}
function buscarSecuencia(cadena, secuencia) {
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i] == secuencia[0]) {
            if (secuencia == sacarSecuencia(i, cadena)) {
                posicion = i;
                return true;
            }
        }
    }
    return false;
}
function sacarSecuencia(i, cadena) {
    var posibleSecuencia = "";
    for (var j = 0; j < numNucleotidos; j++) {
        posibleSecuencia += cadena[i + j];
    }
    return posibleSecuencia;
}
function mostrarAlerta(encontrado) {
    if (encontrado) {
        alert("Se ha encontrado la secuencia en la posicion: " + posicion);
    }
    else {
        alert("No se ha encontrado la secuencia");
    }
}
//# sourceMappingURL=adn.js.map