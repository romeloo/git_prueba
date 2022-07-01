//variables
let miArray=[]

//mostrar cantidad de elementos del array
console.log(miArray.length);


//agregamos valores al array
miArray.push(prompt('Ingresa el nombre de una fruta'));
console.log(miArray);

miArray.push(prompt('Ingresa el nombre de otra fruta'));
console.log(miArray);


//agregar elemento al inicio del arrau
miArray.unshift('Mandarina')
console.log(miArray);


//eliminar el último elemento del array
miArray.pop();
console.log(miArray);


//eliminar el primer elemento del array
miArray.shift();
console.log(miArray);


//extraer palabras de un string y convertirlas en un array
let nombreCompleto = 'Rodrigo Melo Jiménez Ro';
let arregloNombre = nombreCompleto.split(' ');
console.log(arregloNombre);


//eliminar elementos de un array a partir de su indice
let arregloApellidos = arregloNombre.slice(2);
console.log(arregloNombre);
console.log(arregloApellidos);

let arregloPrimerApellido = arregloNombre.slice(2,1);
console.log(arregloPrimerApellido);


//agregar elementos al array en una posición específica y reemplazar si queremos
arregloApellidos.splice(1,0,arregloNombre);
console.log(arregloApellidos);


//ordenar los elementos de un array alfabéticamente
let arrayOrdenado = arregloNombre.sort();
console.log(arrayOrdenado);


//modificar el orden de los elementos de un array a la inversa
arrayOrdenado.reverse();
console.log(arrayOrdenado);
console.log(arregloNombre); //Sí se modifica el orden del array

let arregloConcatenado = arregloNombre.concat(arrayOrdenado,arregloApellidos)
console.log(arregloConcatenado);




alert(String('Done!'))