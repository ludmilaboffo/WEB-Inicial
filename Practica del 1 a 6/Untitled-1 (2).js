/// TP NUMERO 10.  

/// 1 . Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada. Tiene que crear la lista uno mismo

const array =[1,6,7,12,99,530,18,76,4,888];

const ordenado= array.sort((a,b) => a-b);
console.log(ordenado);

/* 2 Dado el array = [1,2,3,4,5,6]
a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos
en pantalla.
b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
pantalla.
c. Iterar por todos los elementos dentro de un array utilizando .forEach y
mostrarlos en pantalla.
d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
e. Generar una copia de un array pero con todos los elementos incrementados en 1.
f. Calcular el promedio*/

//a
const arrayDos= [1,2,3,4,5,6];

let i=0;
while(arrayDos[i]<7){
    console.log(arrayDos[i]);
    i++;
}
//b

for(let i=0; i<arrayDos.length; i++){
    console.log(arrayDos[i]);
}

//c
arrayDos.forEach(element => {
    console.log(arrayDos);
});
//d y e
const sumar=arrayDos.map(number => number+1);
console.log(sumar);

// f
let arrayTres=[1,2,3,4,5,6,7];
let sumatotal=arrayTres.reduce((acumulador,numero) => acumulador+numero, 0);

console.log("EL promedio es de "+(sumatotal/i).toFixed(2));

/////////////// EJERCICIO TRES

let arrayCuatro=[2,4,6,8,10];
let cuadrado=arrayCuatro.map(numero => numero * numero);
console.log(cuadrado);



