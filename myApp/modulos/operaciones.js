
const suma = (num1,num2)=> num1+num2;
const resta = (num1,num2)=> num1-num2;
const multiplicacion = (num1,num2)=> num1*num2;
const division = (num1,num2)=> {
if (num2===0 ){
    return 0;
}else{
   return num1/num2;
}
};
const operaciones ={suma,resta,multiplicacion,division};
module.exports= operaciones;

