"use strict";





function  encrypt(palabras){
  const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w',
 'x','y','z'];
 let arrayCadena=[]; 


 for (let j=0; j< palabras.length;j++ )
 {  
   let cadena  = palabras[j].toLowerCase();  
  
  for (let i = 0; i<cadena.length;i++){
    console.log(cadena[i]);
    console.log(abc.indexOf(cadena[i]));
    let car = abc[abc.indexOf(cadena[i])] =='a'?'z':abc[abc.indexOf(cadena[i])-1];
    if (car != undefined)
        arrayCadena.push (car);
  }
    
}
 return arrayCadena;
}


const parametros = process.argv;
const parametroArray = parametros.splice(2,2);

console.log(encrypt(parametroArray));




 
