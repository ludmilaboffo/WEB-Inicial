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


//Ejercicio 5
let array = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

let arrayNombres = array.filter(nombre => nombre.length <= 6);

let encontrar = array.filter(function(nombres){
    return nombres[0] == "M";

});

let inicial = array.filter(nombre => nombre.length).map((nombre) => nombre[0]);

let mayuscula = array.filter(nombre => nombre.length).map((nombre) => nombre.toUpperCase());

let saber = array.find(function(ver){
    return ver[0] == "J";
});



//Nombres que empiezan con la letra "M"
console.log(encontrar);
//Nombres que tienes al menos 6 letras 
console.log(arrayNombres);
//Ordenar alfabeticamente los nombres
console.log(array.sort());
//Generar un array que contenga solo las iniciales
console.log(inicial);
//Generar un array que contenga todos los nombres en mayúscula.
console.log(mayuscula);

if(saber){
    console.log("Si se encuentra un nombre con inicial J");
}else{
    console.log("No se encuentra un nombre con inicial J");
}
//Ejercicio 6
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

let colorIntro = prompt("Ingrese un color por favor");

if(colores.includes(colorIntro)){
    console.log("Si se encuentra el color introducido");
}else{
    console.log("No se encuentra el color introducido");

}

//Ejercicio 7

let numeros = [1,2,3,4,5,6,7,8,9,10];

    let pares = numeros.filter(function(num){
        return num % 2 == 0;
    });

console.log(pares);
