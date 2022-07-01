//Primer Paso: Definir las variables
let nombreCompleto;
let anioActual, anioNacimiento;
let edad;
let resultado;

//Segundo Paso: Solicitar los datos
nombreCompleto = prompt('Digita tu nombre completo');
anioActual = Number(prompt('Digita el año actual'));
anioNacimiento = Number(prompt('Digita tu año de nacimiento'));

//Tercer Paso: Desarrollo de la lógica
// if(typeof(anioActual) === 'number' && typeof(anioNacimiento) === 'number')
// {
//     edad = anioActual - anioNacimiento;

//     resultado = `Hola ${nombreCompleto}, tu edad aproximada es de: ${edad} años`;
// }
// else
// {
//     resultado = `Por favor ingresa años válidos`;
// }




if(isNaN(anioActual) || isNaN(anioNacimiento))
{
    resultado = `Por favor ingresa años válidos`;
}
else
{
    edad = anioActual - anioNacimiento;

    alert (resultado = `Hola ${nombreCompleto}, tu edad aproximada es de: ${edad} años`);
}