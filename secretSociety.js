//Secret Society
console.log("Secret Society");

function secretName(miembros) {
    let iniciales = '';
    for (let i = 0; i < miembros.length; i++) {
      iniciales += miembros[i][0];
    }
    return iniciales;
  }
  // Ejemplos de uso
const resultado1 = secretName(["Esperanza", "Franco", "Nia"]);
console.log(resultado1);  
  
const resultado2 = secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']);
console.log(resultado2);  

const resultado3 = secretName(['Harry', 'Ron', 'Hermione']);
console.log(resultado3);  