//6. Realizar una función que calcule el factorial de un número ingresado por el usuario (el
//número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
//consola.

let numero= prompt("Introduzca un numero");

function factorial(numero){
  if(numero<=10){
    let total=1;
    for(let i=0; i<=numero;i++){
      total*=numero;
    }
    return total;
  }
  else{
    alert('El numero no puede ser mayor a 10');
  }
}
/*8. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
Javascript.*/

let unaCadena= prompt("Ingrese lo que desea transformar: ");
function cambiarScript(unaCadena){
    console.log("En minuscula: " + unaCadena.toLowerCase());    
    console.log("En mayuscula: " + unaCadena.toUpperCase());
}


/*9. Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
calificación resultante según la nota ingresada:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente*/

let nota= prompt("Ingrese la calificacion del alumno: ");
function evaluarAlumno(nota){
    if(nota>=0 && nota<=3){
        console.log("Muy deficiente");
    }
    else{
        if(nota>3 && nota<5){
            console.log("Insuficiente");
        }
        else{
            if(nota==5 || nota==6){
                console.log("Suficiente");
            }
            else{
                if(nota>6 && nota <9){
                    console.log("Notable);
                }
                else{
                    console.log("Sobresaliente");
                }
            }
        }
    }
}

/*10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
devuelve si ese mes tiene 30 o 31 días.*/

let mes= prompt("Ingrese el numero del mes que desea saber la cantidad de días");
funcion cuantoDias(mes){

    if(mes==4 || mes==6 || mes==9 || mes==11){
        console.log("El mes "+mes+" tiene 30 dias");
    }
    else if(mes==1 || mes== 3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
        console.log("El mes "+mes+" tiene 31 dias");
    }
    else{
        console.log("Febrero tiene 28 dias");
    }
}
/*11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
1
12
123
1234
12345
123456
*/

let numero= prompt("Ingrese un numero para su piramide");
function piramite(numero){

    if(numero>10){
        console.log("El numero no puede ser mayor a diez");
    }
    else{
        for(let i=0; i<=numero; i++){
            console.log(i\n);
            console.log(i+1);
        }
    }

}

