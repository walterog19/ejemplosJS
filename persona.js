var persona = {
    nombre: "Camila",
    apellido: "Osorio",
    edad: 0,
    estatura: 10,
    peso: 2,
    calcularTalla: function() {
        console.log(this.estatura);
      },
    saluda: function(){
      return "hola";
    }
}

delete persona.nombre;

  console.log(persona);

  for (var llave in persona) {
    if (persona.hasOwnProperty(llave)) {
      console.log(persona[llave])
    }
  }

  var llaves = Object.keys(persona);
for (var i=0; i < llaves.length; i++) {
  var llave = llaves[i];
  console.log(persona[llave]);
}

persona.calcularTalla();

console.log(persona.saluda());


