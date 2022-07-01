// variables
let arrayReto1=[]
let arrayReto2=[]
let arrayReto3=[]
let arrayReto4=[]
let arrayReto5=[]

arrayReto1 = prompt('Ingresa integrante 1');
arrayReto2 = prompt('Ingresa integrante 2');
arrayReto3 = prompt('Ingresa integrante 3');
arrayReto4 = prompt('Ingresa integrante 4');
arrayReto5 = prompt('Ingresa integrante 5');

let arrayReto1Split = arrayReto1.split('  ');
let arrayReto2Split = arrayReto2.split('  ');
let arrayReto3Split = arrayReto3.split('  ');
let arrayReto4Split = arrayReto4.split('  ');
let arrayReto5Split = arrayReto5.split('  ');

let arregloNombresSeparados = 
    arrayReto1Split.concat(
    arrayReto2Split,
    arrayReto3Split,
    arrayReto4Split,
    arrayReto5Split);

    console.log(arregloNombresSeparados);

let arregloNombresPila = (
    arrayReto1[arrayReto1.length-1]+', '+
    arrayReto2[0]+', '+
    arrayReto3[0]+', '+
    arrayReto4[0]+', '+
    arrayReto5[0])
    .split(',');

    console.log(arregloNombresPila);

let todosJuntos = arregloNombresSeparados.concat(arregloNombresPila);
    
    console.log(todosJuntos);

    todosJuntos.reverse()

    console.log(todosJuntos);



/*
Maria Fernanda Robles Cabrera
Alejandra Ambriz Ríos
Karen Arteaga
Laura Carrillo
Rodrigo Melo
*/


/*1. Nombres completos separados ","
2. Nombres de pila separados ","
3. Combinar ambos arrays y a la inversa*/