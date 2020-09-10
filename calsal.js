
const SMLV=873700;

const parametros= process.argv;
console.log(parametros);
const precio = parametros[2];
const cantidad =parametros[3];
const totalVenta = precio *cantidad;

let descuento;
let valorFinalVenta;


if (totalVenta > SMLV ){
    descuento = totalVenta * 0.2;
    valorFinalVenta = totalVenta-descuento;
}else{
    descuento = 0;
    valorFinalVenta = totalVenta-descuento;
}

console.log(valorFinalVenta);