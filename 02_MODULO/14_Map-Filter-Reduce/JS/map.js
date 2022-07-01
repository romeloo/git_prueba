const arrayStrings = ['a', 'b', 'c'];
const arrayNumeros = [1, 2, 3];
const arrayObjetos = [
    {
        id: 1,
        usuario: 'Rodrigo',
        password: '1234',
        edad: 29,
    },
    {

        id: 2,
        usuario: 'Enrique',
        password: 'asdf',
        edad: 25,

    }
];

//solo sirve para un array.
//se hace una funcion
function imprimirElementosDelArray(element) {
    console.log(element)
};
//y se ejecuta la funcion dentro del forEach(). NO REGRESA NADA COMO RESULTADO
// const resultado = arrayStrings.forEach(imprimirElementosDelArray);
// console.log(resultado);
// ---------------------------- MAP ---------------------//
//para obtener un resultado se usa MAP

//Se crea funcion y se pide un return con dato especifico.
function obtenerNombres(element) {
    return element.usuario.toUpperCase();
}
// Se crea una variablee con array.map(aqui el nombre de función)
const resultado = arrayObjetos.map(obtenerNombres);
//Se imprime variable con map.
console.log(resultado);

//-----------------------FILTER-----------------------//