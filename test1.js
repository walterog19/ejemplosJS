"use strict";

function sumacuadrados(numero1,numero2){
   function cuadrado(numero){
       return numero * numero;
    }
  return cuadrado(numero1) + cuadrado(numero2);


}
let resultado =sumacuadrados;

console.log(resultado(1,2));

const mascota  = function(nombre){
    const  obtenerNombre=function(){
        return nombre;
    }
    return obtenerNombre;
}

const miMascota = mascota("Lucas");
console.log(miMascota());

const array  =[];

console.log(array.length);
array.push("11");
console.log(array.length);
console.log(array);

