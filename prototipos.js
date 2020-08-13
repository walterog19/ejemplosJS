
var User = function(name, lastName,age) {
    this.name = name;
    this.lastName = lastName;
    this.age= age;

  };    

var Persona = function(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  };
  
  Persona.prototype.saluda = function() {
    return "Hola " + this.nombre;
  };


  p = new Persona("Camila","Osorio");

 console.log( p.saluda());

 Array.prototype.sum = function() {
    var total = 0;
  
    for (var i=0; i < this.length; i++) {
      total += this[i];
    }
  
    return total;
  }


console.log([1, 2, 3].sum());

User.prototype.introduction = function(){
    return "Me llamo "+this.name+" "+this.lastName+" y tengo "+this.age;
}



u = new User("Camila","Osorio",0);
