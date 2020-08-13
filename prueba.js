var array = ["Pedro", "Germán", "Diana"];

array.push("Camila");

console.log(array);

array.splice(2,0,"Camila");
console.log(array);

array.splice(4,1);
console.log(array);

for (i=0;i <array.length;i++){
    console.log(array[i]);
}

array.splice(0);
console.log(array);

var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
var newArray = ["Quinto", "Sexto"];
arr.splice(4,0,newArray[0]);
arr.splice(5,0,newArray[1]);
console.log(arr);

console.log(["Hola","Hola2"].join("*"));

console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
console.log(countingEs("Ahora qué?") === 0); // true
console.log(countingEs("Los elefantes son enormes") === 4) // true

function countingEs(cadena){

var cont=0;
    for (i=0;i< cadena.length;i++){

        if (cadena[i] == "e"){
            cont++;
        }
    }
return cont;


}

function generatePassword(cadena){
   cadena = cadena.trim();
   cadena = cadena.toLowerCase();
   return cadena.replace(/ /g, "").replace("a","4").replace("e","3").replace("i",1).replace("o","0");

}

console.log(generatePassword("hola")); // "h0l4"
console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
console.log(generatePassword("")); // ""


function capitalize(cadena){
 vcadena = cadena.split(" ");
  
 for (i=0;i<vcadena.length;i++){
     cad = vcadena[i];
     console.log(cad);
     cad.replace(cad[0],cad[0].toLocaleUpperCase());
     console.log(cad);
     vcadena[i] = cad;
 }
  return vcadena.join(" ");

}

console.log(capitalize("pedro perez"));


function message(arr) {
    var stringMessage = arr.join(" ");
  
    return stringMessage;
  }