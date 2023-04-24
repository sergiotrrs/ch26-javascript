console.log("Sesion JS02");

// -------- Función declarada ------
// function declaration, function statement
// Una características es que las funciones declaradas tiene hoisting
//console.log("El resultado de 5*10= " + multiplica(5,10)); // invocando la función
multiplica(5,10); // invocando la función sin retorno
multiplica(8,8);
multiplica(-4,2);

/* Sintaxis
 function nombreFuncionCamelCase ( parametros ){
   instrucciones;
 }
*/
function multiplica(operandoA, operandoB){
    const resultado = operandoA * operandoB;
    console.log(resultado);
}

function divide(dividendo, divisor){
    return dividendo/divisor;
}

console.log( divide(5,2) ); // 2.5
console.log( divide(5 ,"2") ); // 2.5
console.log( divide("5","2") ); // 2.5
console.log( divide("5 0","2") ); // NaN


/* 
{ // este es un bloque de código
 const operandoA = 5
 const operandoB = 10
 const resultado = operandoA * operandoB;
 console.log(resultado);
} */

