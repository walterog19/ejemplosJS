function factorial(numero){
    if (numero=== 0){
        return 1;
    }else{
        return numero * factorial(numero-1);
    }
}


function fibonacci(numero){

    if (numero === 0 ){
        return 0;
    }else if (numero === 1){
        return 1;
    }else {
        var fib=fibonacci(numero-1) + fibonacci(numero -2);
        return fib;
    }

}
/*let f = fibonacci(10);
console.log(f);
console.log(factorial(5));*/


function fibonacciarr(arrnumero){
   var fib =0;
    for (i = 0 ; i<arrnumero.length; i++){
       fib = fib + fibonacci(arrnumero[i]);
    }
    return fib;
}

var array = [3, 4, 10];
console.log(fibonacciarr(array));
