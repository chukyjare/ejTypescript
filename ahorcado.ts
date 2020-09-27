//Corrijo un pequeño error en comprobarLetraEnPalabra() cambiando el parámetro de entrada "palabra" por "letra"
//Respeto el resto del código y no lo toco

let palabra: string = seleccionarPalabraSecreta();
let parcial: string[] = new Array(palabra.length);
crearParcial();
let numeroFallos: number = 0;
const incrementarFallos = function () { return ++numeroFallos };
let completada: boolean = false;
let maximo: number = 5;

do {
    let letra: string = preguntaLetraPropuesta();
    let fallo: boolean = comprobarLetraEnPalabra(letra, parcial);
    if (fallo) {
        numeroFallos = incrementarFallos();
    } else {
        completada = comprobarPalabraCompletada(parcial);
    }
    mostrarParcialYFallos(parcial, numeroFallos);
} while (!completada && numeroFallos < maximo);
mostrarMensaje(completada)

function mostrarMensaje(completada: boolean): void {
    if (completada) {
        alert("enhorabuena")
    } else {
        alert("la proxima vez sera")
    }
}

//Añado las funciones que faltan

function seleccionarPalabraSecreta(): string {
    let respuesta: any;
    respuesta = prompt("Escriba la secuencia que desea buscar:", "Introduce la palabra Secreta");
    return respuesta;
}

function preguntaLetraPropuesta(): string {
    let respuesta: any;
    let letra: string = "";
    do {
        respuesta = prompt("Escriba la secuencia que desea buscar:", "Introduce una Letra");
        letra = respuesta;
        //revisar si es 1 o 0
    } while (letra.length != 1);
    return letra;
}

function comprobarLetraEnPalabra(letra: string, parcial: string[]): boolean {
    let fallo: boolean = true;
    for (let i = 0; i < parcial.length; i++) {
        if (palabra[i] == letra) {
            parcial[i] = letra;
            fallo = false;
        }
    }
    return fallo;
}

function comprobarPalabraCompletada(parcial: string[]): boolean {
    for (let i = 0; i < parcial.length; i++) {
        if (parcial[i] == "_") {
            return false;
        }
    }
    return true;
}

function mostrarParcialYFallos(parcial: string[], numeroFallos: number): void {
    alert("Llevas " + numeroFallos + " Palabra: " + parcial);
}

function crearParcial(): void {
    for (let i = 0; i < parcial.length; i++) {
        parcial[i] = "_";
    }
}
