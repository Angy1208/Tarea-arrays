// Solicitar datos al usuario
var usuario = prompt("Ingrese su nombre de usuario:");
var edad = prompt("Ingrese su edad:");
var pelisFav = prompt("Ingrese una lista de sus películas favoritas (separadas por comas):");

// Convertir la cadena de películas en un array
var moviesArray = pelisFav.split(',');

// Mostrar la información en la consola
console.log("Perfil del usuario:");
console.log("Nombre de usuario: " + usuario);
console.log("Edad: " + edad + " años");

// Mostrar las películas favoritas con un mensaje
console.log("Películas favoritas:");
pelisArray.forEach(function(peli) {
    console.log("La película " + peli.trim() + " es una de mis favoritas");
});