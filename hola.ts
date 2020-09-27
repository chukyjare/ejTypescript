console.log("Hola Mundo");
//Ejercicio 1
// for (let index = 0; index < 10; index++) {
//              index++;
//              console.log(index)
// }
//Ejercicio 2
// let x: number=100;
// for (let index = 0; index < 100; index++) {
//     if (x%index==0) {
//         console.log(index);
//     }
// }
//Ejercicio 3
// let min: number=-100;
// let max: number=100;
// var array:number[]= new Array(100);
// for (let index = 0; index < 100; index++) {
//     array[index]=Math.round(Math.random()*(max-min))+min;
//     if (array[index]>=0) {
//         console.log(array[index]);
//     }
// }
// Ejercicio 7
// let valores=[3,4,5,6,4,3,18,3,4,5,5,6,6,7];
// var arrayNuevo:number[]= new Array();
// for (let index = 0; index < valores.length; index++) {
//     if (valores[index]!=18) {
//         arrayNuevo.push(valores[index]);
//     }
// }
// for (let j = 0; j < arrayNuevo.length; j++) {
//     console.log(arrayNuevo[j]);
// }
// Ejercicio 7 Juanma
// let valores=[3,4,5,6,4,3,18,3,4,5,5,6,6,7];
// valores.splice(6,1);
// console.log(valores);
//Ejercicio 8
// let min: number=3;
// let max: number=1000;
// var array:number[]= new Array(20);
// for (let index = 0; index < 20; index++) {
//     array[index]=Math.round(Math.random()*(max-min))+min;
// }
// array.sort();
// console.log("Menor: "+array[0]);
// console.log("Mayor: "+array[19]);
// Ejercicio 9
// let valores=[2,3,7,15,24,56];
// let elemento=69;
// let posicion=3;
// var arrayNuevo:number[]= new Array();
// for (let index = 0; index < valores.length; index++) {
//     if (index==posicion) {
//         arrayNuevo.push(elemento);
//     }
//     arrayNuevo.push(valores[index]);
// }
// for (let index = 0; index < arrayNuevo.length; index++) {
//     console.log(arrayNuevo[index]);
// }
// Ejercicio 10
// let valores=[2,3,7,15,24,56];
// let copiaValores = valores.slice();
// for (let index = 0; index < copiaValores.length; index++) {
//     console.log(copiaValores[index]);
// }
// Ejercicio 11
let valoresUno=[2,3,7,15,24,56];
let valoresDos=[3,4,5,6,4,3,18,3,4,5,5,6,6,7];
let vectorFusionado= valoresUno.concat(valoresDos);
for (let index = 0; index < vectorFusionado.length; index++) {
    console.log(vectorFusionado[index]);
}
let respuesta: string=""
prompt("hola", respuesta)

// Ejercicio 12
