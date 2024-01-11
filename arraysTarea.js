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

console.log("///////////////////////////////////////")

//Number divided into halves
console.log("Number divided into halves");

function numDiv(numeroDiv) {
    const mitad = numeroDiv / 2;
    return ["sus mitades son: " + mitad +", " + mitad];
}

const numMedios = numDiv(4);
console.log("Del 4 " + numMedios);

const numMedios2 = numDiv(10);
console.log("Del 10 " + numMedios2);

console.log("///////////////////////////////////////");

//Secret Society
console.log("Secret Society");

console.log("////////////////////////////////////////");

//Online Status
console.log("Display online status for a list of users.");

const users = ['mocking99', 'J0eyPunch', 'glassedFer', 'anon123'];

function getLength(arr){
    return arr.length;
}

function calcRemaining(total) {
    return total - 2;
}

function getUsers(arr){
    const users = arr[0] + arr[1];
    return users;
}

function onlineStatus(arr){
    const total = getLength(arr);
    const rest = calcRemaining(total);
    const firstUsers = getUsers(arr);

    console.log("Users: " + firstUsers + ", and " + rest + "are online");
}
onlineStatus(users);

console.log("////////////////////////////////////////////////");

//Write a function to determine if an array is positively dominant


const numArr = [-1000, -1, 50, 1, 2, 5];
const negativeArr = [-1000, -1, -50, -1, 5, 2];

function positiveArr(arr){
    let positiveCount = 0;

    arr.forEach((num) => {
        if (num > 0 ) {
            positiveCount++;
        }
    })
    
    const mid = arr.lengt / 2;
    return positiveCount > mid;
}

const res = positiveArr(negativeArr);
console.log(res);