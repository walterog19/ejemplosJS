
const BMI = (w,h)=>{

    return w/(h*h);
};

console.log(BMI(86,1.70));


const usuario  = [
    {name:"Walter" , apellido:"Osorio"},
    {name:"Camila" , apellido:"Osorio"},
    {name:"Adriana" , apellido:"Rivera"},

]

const nombres  = usuario.map(x=> x.name);

const nombresconC = usuario.filter(c => c.name.toLocaleLowerCase().includes('a'));

const mariaCamila  = usuario.find(usuario=> usuario.name==="Camila");

console.log(mariaCamila);

const numeros = [1,2,3,4,5];
const resultado = numeros.reduce((acomulador,elemento)=> acomulador +elemento);
console.log(resultado);


const cuadrado = numero => numero*numero;

console.log("cuadrado"+cuadrado(3));



