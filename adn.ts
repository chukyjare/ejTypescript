var posicion: number = 0;
const max: number = 3;
const min: number = 0;
const numNucleotidos: number=4;

let cadenaADN: string[] = generarCadena();
// alert("ESTA ES SU CADENA: \n \n"+cadenaADN);
let secuencia: string = solicitarSecuencia();
let encontrado: boolean = buscarSecuencia(cadenaADN, secuencia);
mostrarAlerta(encontrado);

//Respeto el código que me facilita y no lo toco
function generarCadena(): string[] {
    let cadena: string[] = new Array(1000);
    for (let i = 0; i < cadena.length; i++) {
        let elemento: string = generarNucleotido();
        cadena[i] = elemento;
    }
    return cadena;
}

function generarNucleotido(): string {
    let muestra = dameCaracteresValidos();
    let elemento: number = Math.round(Math.random() * (max - min)) + min;
    return muestra[elemento];
}

function dameCaracteresValidos(): string[] {
    let validos: string[] = ['A', 'C', 'G', 'T']
    return validos;
}

//Añado los métodos solcitarSecuencia() y buscarSecuencia()

function solicitarSecuencia(): string {
    let respuesta: any;
    respuesta=prompt("Escriba la secuencia que desea buscar:", "ACCA");
    return respuesta;
}

function buscarSecuencia(cadena: string[], secuencia: string): boolean {
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == secuencia[0]) {
            if (secuencia == sacarSecuencia(i,cadena)) {
                posicion = i;
                return true;
            }
        }
    }
    return false;
}

function sacarSecuencia(i: number, cadena: string[]): string{
    let posibleSecuencia: string = "";
    for (let j = 0; j < numNucleotidos; j++) {
        posibleSecuencia += cadena[i + j]
    }
    return posibleSecuencia;
}

function mostrarAlerta(encontrado: boolean): void{
    if (encontrado) {
        alert("Se ha encontrado la secuencia en la posicion: " + posicion)
    } else {
        alert("No se ha encontrado la secuencia")
    }
}
