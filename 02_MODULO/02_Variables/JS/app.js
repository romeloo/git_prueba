//Primer Paso: Definir las variables
let nombreCompleto;
let anioActual, anioNacimiento;
let edad;

//Segundo Paso: Solicitar los datos
nombreCompleto = prompt('Digita tu nombre completo');
anioActual = prompt('Digita el año actual');
anioNacimiento = prompt('Digita tu año de nacimiento');

//Tercer Paso: Desarrollo de la lógica
edad = Number(anioActual) - Number(anioNacimiento);

//Cuarto Paso: Entregar los resultados
document.write('Hola ' + nombreCompleto + ', tu edad aproximada es de: ' + edad + 'años.')