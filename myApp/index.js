const fs = require('fs');

const bmi = require("./modulos/bmi");
require("./modulos/bmi");
const personas2 = require("./files/personas.js");
const datos   =require("./files/personas.json");
const operaciones = require("./modulos/operaciones.js");
const { suma } = require("./modulos/operaciones.js");


console.log(datos);

datos.map(persona=>console.log(`El bmi de ${persona.name} es: ${bmi(persona.weigth,persona.heigth)}`))

personas2.map(persona=>console.log(`El bmi de ${persona.name} es: ${bmi(persona.weigth,persona.heigth)}`))

console.log(`suma : ${operaciones.suma(1,3)}`);

const archivo = fs.createWriteStream("./files/bmi.txt",{'flags':'a'});
archivo.once("open",(f)=>{
    datos.map(persona=>archivo.write(`\n El bmi de ${persona.name} es: ${bmi(persona.weigth,persona.heigth)} `));

});

fs.readFile("./files/oscar_age_female.csv","utf8",(err,data)=>{
    if (err)
       return console.log(err.message)
    //console.log(data);
    const lineas =data.split("\n");
    lineas.map(linea =>{
        const columnas = linea.split(",");
        console.log(columnas[3]);
    });

    
});

