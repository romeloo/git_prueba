function calcularArea(base,altura){
    return base * altura;
}

console.log(calcularArea(4,10));
console.log(calcularArea(5,12));
console.log(calcularArea(6,11));


function obtenerArea(){
    const ladoA = document.getElementById("base");
    // ladoA.style.color="red";
    const valorDeLaBase =Number(ladoA.value);

    const ladoB = document.getElementById("altura");
    const valorDeLaAltura =Number(ladoB.value);

    const area = calcularArea (valorDeLaBase,valorDeLaAltura);

    const areaElement = document.getElementById("area");
    areaElement.value = area;


}