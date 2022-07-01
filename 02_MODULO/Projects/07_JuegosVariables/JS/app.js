// Escribe en una sola línea un comentario
// Esto es un comentario de una sola línea

// Escribe en varias líneas un comentario que diga bienvenido a DevF
/*Bienvenido
a 
DevF
-------*/

// Declara una variable
var miVariable;
let miVariable;

// Declara y asigna una variable de tipo string
let otraVariable = "variable string"

// Declara y asigna una variable por cada tipo de dato primitivo
const miCadenaDeCaracteres = 'string asdf "asdf" ñ';
const miBoolean = true;
const miNumero = 4;
const miValorNulo = null;
const miValorNoDefinido = undefined; //valor por defecto de las variables declaradas

// Declara y asigna una variable de los principales datos de objeto (prototipo)
const miArray = [];
const miObjeto = {};
const fechas = new Date();

//Declara cuatro variables sin asignar valor en una sola línea
let primera, segunda, tercera, cuarta;

//Declara cuatro variables con un valor asignado
let primeraV = 1, segundaV = 2, terceraV = 3, cuartaV = 4;

let camelCase = 1; //Front ends
let snake_Case = 2; // Back ends
let PascalCase = 3;
const AMARILLO = 0
// let kebak-case = 4; No es válido JS

/* Declara las siguientes variables en multiples líneas y asignales un valor correspondiente
nombre,
primerApellido,
segundoApellido,
ciudad,
numeroDeMascotas,
numeroDePlantas*/

const nombre = "Rodrigo";
const primerApellido = "Melo";
const segundoApellido = "Jiménez";
const ciudad = "CDMX";
const numeroDeMascotas = 2;
const numeroDePlantas = 0;


/* Declara las siguientes variables en multiples líneas y asignales un valor correspondiente pero dentro de un objeto literal
nombre,
primerApellido,
segundoApellido,
ciudad,
numeroDeMascotas,
numeroDePlantas*/

const misDatos = {
    nombre2 = "Rodrigo";
    primerApellido2 = "Melo";
    segundoApellido2 = "Jiménez";
    ciudad2 = "CDMX";
    numeroDeMascotas2 = 2;    
    numeroDePlantas2 = 0;
}


// const {
//     nombre = "Rodrigo";
//     primerApellido = "Melo";
//     segundoApellido = "Jiménez";
//     ciudad = "CDMX";
//     numeroDeMascotas = 2;    
//     numeroDePlantas = 0;
// } = misDatos;


// Truco para mover arriba o abajo Ctrl + Alt + Arriba/Abajo
// Truco para multilineas Alt + Shift + L