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
