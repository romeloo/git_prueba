// Declarar un array vacío
const miArray = [];

// Declarar un array con 5 elementos del mismo tipo
const otroArray = ["Rodrigo","Enrique","Gloria","Sofia","Max"];

//Obtener la longitud de mi array anterior e imprimir en consola
console.log(otroArray.length);

//Obtener mi primer elemento del array de consola
console.log(otroArray[0]);
// console.log(otroArray.shift());


// Obtener el elemento de en medio del array
console.log(otroArray[Math.round((otroArray.length-1)/2)]);

// Declara una variable con un arreglo que se llame tecnologías web
const tecnologiasWeb = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue",
    "NodeJS",
    "Ruby on Rails",
];

// Agregar al final
tecnologiasWeb.push("Redux");

// Quitar al final
tecnologiasWeb.pop();

console.log(tecnologiasWeb);