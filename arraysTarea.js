//Calculate the sum of all resistors connected in series.

function sumaResistencias(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++){
        suma +=Math.abs(array[i]);
    }
    return suma;
}
console.log("Sum of Resistors in Series");

let resistencias1 = [-1, 5, 6, 3];
let sumaTotal = sumaResistencias(resistencias1);
console.log("Las resistencias del ejercicio 1 suman: " + sumaTotal);

let resistencias2 = [14, 3.5, 6];
let sumaTotal2 = sumaResistencias(resistencias2);
console.log("Las resistencias del ejercicio 2 suman: " + sumaTotal2);

let resistencias3 = [8, 15, 100];
let sumaTotal3 = sumaResistencias(resistencias3);
console.log("Las resistencias del ejercicio 3 suman: " + sumaTotal3);