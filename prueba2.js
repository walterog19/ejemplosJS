function capitalize(cadena){
    vcadena = cadena.split(" ");
     
    for (i=0;i<vcadena.length;i++){
        var cad = vcadena[i];
        var cad0 =  cad[0].toUpperCase();
         //cad[0] = cad0;
         //vcadena[i] = cad;
         vcadena[i] = vcadena[i].replaceAt(0,cad0);
    }
     return vcadena;
   
}
   
  String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
 }

 console.log(capitalize("pedro perez"));
 console.log(capitalize("make it real")); // "Make It Real"