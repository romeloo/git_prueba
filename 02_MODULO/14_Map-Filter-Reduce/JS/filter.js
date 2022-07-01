const arrayNumeros = [1,2,3,100,200,300,1000];
const arrayObjetos = [

    {
    id:0,
    usuario: "Enrique",
    password:"sldlf",
    eda:18,
    },
    {
    id:1,
    usuario: "Rodrigo",
    pasword: "QWERTY",
    edad: 20,
    },
    {
    id:2,
    usuario: "Sofia",
    pasword: "gjdkfk",
    edad: 15,
    }
    ]

const filtrarPorCantidad = function(numero){
    return numero >= 100;
}

const resultado = arrayNumeros.filter(filtrarPorCantidad)
console.log(resultado)

function filtrarMayoresDeEdad(item){
return item.edad >=18
}

const usuariosMayores = arrayObjetos.filter(filtrarMayoresDeEdad)
console log(usuariosMayores);

