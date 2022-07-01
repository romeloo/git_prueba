const arrayStrings = ["a", "b", "c"];
const arrayNumeros = [1,2,3];
const arrayObjetos = [

{
id:0,
usuario: "Enrique",
password:"sldlf",
edad: 18,
},
{
id:1,
usuario: "Rodrigo",
pasword: "QWERTY",
edad: 20,
}
]


function imprimirElementosDelArray (element){
    console.log(element)
}

// const resultado = arrayStrings.forEach(imprimirElementosDelArray)
// console.log(resultado);

// function imprimirElementosDelArray(element);
// console.log(element);

arrayStrings.forEach(imprimirElementosDelArray)

function.arrayNombres(element){
    return element.usuario.toUpperCase()
}

const resultado = arrayObjetos.map(obtenerNombres)
console.log(resultado)