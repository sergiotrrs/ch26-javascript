console.log("Sesion Js03");

// ----- Declaración de bloque --------------------

{
  /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.

    */
  let nombre = "Sergio";
  const apellido = "Torres";
  let edadSergio = 39,
    edadLuis = 25;
  // let edadSergio = 39;
  // let edadLuis = 25;
  let numCohorteSergio = (numCohorteLuis = 26);
  // var numCohorteLuis = 26
  // let numCohorteSergio = numCohorteLuis;

  {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una varible global o de bloque superior, la varible
     local oculta las otras variables, para que la variable
     local sea usada.
     */
    let nombre = "Luis";
    const apellido = "SP";
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Sergio: ${edadSergio} años`); // 39
    console.log(`Luis ${edadLuis} años`); // 25
    console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
    console.log(`Luis cohorte ${numCohorteLuis} `); // 26
  }
  console.log(`Me llamo ${nombre} ${apellido}`);
  console.log(`Sergio: ${edadSergio} años`); // 39
  console.log(`Luis ${edadLuis} años`); // 25
  console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
  console.log(`Luis cohorte ${numCohorteLuis} `); // 26
}
//console.log(`Me llamo ${nombre} ${apellido}`); Las variables no estaán definidas
//console.log(`Sergio: ${edadSergio} años`); // Las variables no estaán definidas
//console.log(`Luis ${edadLuis} años`) // Las variables no estaán definidas
console.log(`Luis cohorte ${numCohorteLuis} `); // 26
//console.log(`Sergio cohorte: ${numCohorteSergio} `); //  Las variables no estaán definidas

//---------------- Condicional if-else ----------------------------
/*
La condicional if ejecuta una sentencia si una condición especificada es evaluada
como verdadera.

sintaxis:
    if(condición) sentencia;

    if(condición) {
      sentencias;
    }

    if(condicion) sentencia;
    else sentencia;

    if(condición) {
      sentencia;
    } else {
      sentencia;
    }

    if(condición) {
      sentencia;
    } else if(condición 2) {
      sentencia;
    } else if(condición 3) {
      sentencia;
    } else if(condición n) {
      sentencia;
    } else {
      sentencia
    }

*/

const temperatura = 100;
let mensaje;
//if (temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
//else mensaje = `${temperatura} grados no es ideal`;
if (temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
else if (temperatura > 21 && temperatura < 40)
  mensaje = `Temperatura de ${temperatura} grados es caliente`;
else if (temperatura > 40)
  mensaje = `Temperatura de ${temperatura} grados es super caliente, bendiciones`;
else if (temperatura < 21)
  mensaje = `Temperatura de ${temperatura} grados es fría`;
else mensaje = `Temperatura de ${temperatura} grados no existe`;

console.log(mensaje);

// --------------------- Ejercicio -----------------------------------------
/*
 Preguntar por el númer de mes, del 1 al 12 (prompt o DOM)
 de acuerdo al mes desplegar en un Alert (o en el DOM) la estación del año.

 mes 12, 1, 2 = invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño

 Usar if-else
*/

const getEstacion = () => {
  const refMes = document.getElementById("mes");
  console.log(refMes.value);
};

// --------------- Switch -----------------------
/*
 La instrucción Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta que se encuentre la sentencia 'break'.

Sintaxis:
    switch (expresión){
      case valor1:
        sentencias;
        break;
      case valor 2:
        sentencias;
        break;
      case valor n:
        sentencias;
        break;
      default:
        sentencias;
        break;
    }

*/

const setVelocidadVentilador = (velocidad) => {
  let msj;
  switch (velocidad) {
    case 0:
      msj = "Apagado";
      break;
    case 1:
      msj = "Velocidad baja";
      break;
    case 2:
      msj = "Velocidad media";
      break;
    case 3:
      msj = "Velocidad alta";
      break;
    case 4:
    case 5:
      msj = "Velocidad super alta";
      break;
    default:
      msj = "el nivel no existe";
      break;
  }
  return msj;
};

console.log(`El ventilador esta en ${setVelocidadVentilador(2)}`);

// ------------------ Práctica ------------------------------------------
// Refactorizar el ejercicio anterior y usar un switch.


// -------------------Operador condicional ternario ---------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos. Generalmente se usa
 como opción a la sentencia if-else.

 Sintaxis:

  condición ? expresionSiCondiciónEsVerdadera  :   expresionSiCondicionEsFalsa;

*/
const subtotal = 1_000;
const pagoTarjetaCredito = true;
/* let msj;
if(pagoTarjetaCredito) msj= subtotal*1.025;
else msj = subtotal* 1; */

console.log(`La cuenta es de ${pagoTarjetaCredito ? subtotal*1.025 : subtotal*1} pesos` );


const edad = 17;
// Se permite el acceso al antro de mala muerte?
console.log(`Acesso ${ edad>= 18? "Permitido" : "Denegado" }`);
// a los de 17 solo con permiso
console.log(`Acesso ${ edad>= 18? "Permitido" :  edad===17? "Solo con Permiso": "Denegado"}`);

// ---------------- Práctica --------------------------
// Refactorizar el ejercicio de saludo con un operador ternario.
const printGreetings = number => {
  let result = (number > 1) ? printGreetings(number-1) : number;
  console.log("Greeting", result);
  return number+1;
};
printGreetings(10);

/* const saludar = (numero) => {
  numero === 1 ? console.log("Saludo " + numero) : (saludar(numero - 1), console.log("Saludo " + numero));
};

saludar(10); */

