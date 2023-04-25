console.log("Sesion JS02");

// -------- Función declarada ------
// function declaration, function statement
// Una características es que las funciones declaradas tiene hoisting
//console.log("El resultado de 5*10= " + multiplica(5,10)); // invocando la función
multiplica(5, 10); // invocando la función sin retorno
multiplica(8, 8);
multiplica(-4, 2);

/* Sintaxis
 function nombreFuncionCamelCase ( parametros ){
   instrucciones;
 }
*/
function multiplica(operandoA, operandoB) {
  const resultado = operandoA * operandoB;
  console.log(resultado);
}

function divide(dividendo, divisor) {
  return dividendo / divisor;
}

console.log(divide(5, 2)); // 2.5
console.log(divide(5, "2")); // 2.5
console.log(divide("5", "2")); // 2.5
console.log(divide("5 0", "2")); // NaN

/* 
{ // este es un bloque de código
 const operandoA = 5
 const operandoB = 10
 const resultado = operandoA * operandoB;
 console.log(resultado);
} */

//--------------Funciones expresadas-----------------
// Function expressions
// Son declaradas dentro de la asignación de una variable
// Estas funciones pueden ser anónimas (no tienen nombre)
// Las funciones expresadas no tiene hoisting, por que no se
// carga en memoria hasta que se utilice.

/*Sintaxis

const nombreVariable = function nombreFuncion( parámetros) {
    instrucciones;
}

*/

const sum = function sumatoria(a, b) {
  return a + b;
};

const resta = function (a, b) {
  return a - b;
};

const potencia = function (a, b) {
  return a ** b;
};

console.log(sum(9, 9)); // 18
console.log(resta(90, 20)); // 70

//---------- Funciones autoinvocadas ----------------
// self-invoking functions
// se autoinvocan, se pueden definir con funciones anónimas

(function () {
  console.log("Me autoinvoco en la función");
})();

// ---------- Funciones Flecha -----------------------
// Arrow Functions
// Son funciones similares a las funciones expresada, pero:
// No requieren la palabra function
// Si tiene una sola instrucción no requiere las {}
// Si la instrucción es el mismo retorno, no requiere la palabra return

/*
const areaRectangulo = function(base, altura){
    return base * altura;
  }*/

const areaRectangulo = (base, altura) => base * altura;

console.log("Área de rectangulo 5x3: " + areaRectangulo(5, 3));

// ------------- Parámetros default ----------------------------

/**
 * Este comentario es la documentación de la función
 * @param {number} base esto es la descripción de base
 * @param {number} altura esto es la descripción de altura
 * @returns área del rectángulo
 */
const areaTriangulo = (base = 1, altura = 1) => (base * altura) / 2;

console.log("Área de triángulo b:5 a:10 = " + areaTriangulo(5, 10));
console.log("Área de triángulo b:8 = " + areaTriangulo(8));

// --------------- Parámetros rest ------------------------------
// Rest Parameters   Sintaxis:  ...nombreParametro
// Nos permite representar una serie de valores indefinidos en los argumentos
// Estos se presentan como un array.
// Debe estar al final de la lista de parámetros

function sumatoriaVariosNumeros(a, b, ...restoDatos) {
  let suma;
  suma = a + b;

  for (let index = 0; index < restoDatos.length; index++) {
    suma += restoDatos[index]; // suma = suma + restoDatos[index]
  }

  return suma;
}

console.log("Sumatoria de varios números: " + sumatoriaVariosNumeros(5, 6));
console.log(
  "Sumatoria de varios números: " + sumatoriaVariosNumeros(5, 6, 9, 10)
);
console.log("Sumatoria: " + sumatoriaVariosNumeros(5, 6, 9, 10, 20, 50)); //100

// --------------- Funciones de Callback --------------------
// Función que se pasa a otra función como argumento, para luego invocarse
// para completar algún tipo de rutina o acción.

// 3 funciones, una que imprima en consola, alert, DOM h1.
// 1 parámetro de entrada.
// no tiene return.

// Función que imprime un mensaje en la consola
function printToConsole(mensaje) {
  console.log(mensaje);
}

// Función que muestra una alerta en la pantalla
function showAlert(mensaje) {
  alert(mensaje);
}

// Función que agrega un encabezado h1 al DOM
function addH1ToDOM(mensaje) {
  const h1 = document.createElement("h1");
  h1.innerText = mensaje;
  document.body.appendChild(h1);
}

const addH1 = (mensaje) =>{
    document.querySelector("#div").innerHTML = `<h1>${mensaje}</h1>`
};

function getNamePrintToConsole(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    printToConsole(text);
}
function getNamePrintToDOM(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    addH1(text);
}
function getNameAndPrint( funcionImprimir   ){ // Esta es la buena
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    funcionImprimir(text);
}
//getNameAndPrint( printToConsole   );  
//getNameAndPrint( showAlert );
//getNameAndPrint( addH1 );
/*getNameAndPrint( function imp(txt){ 
    console.log(txt) 
}  );
*/

// -------------------------------------------------------------------
/*
    Ejercicio 2
    Escribe una función que tome un arreglo de números,
    duplique el valor de cada número del arreglo,
    e imprima el nuevo arreglo actualizado.
    [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/

function double(arr) {
    const doubleNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      const duplicate = arr[i] * 2;
      doubleNumbers.push(duplicate);
    }
   return doubleNumbers;
}

// Función que nos sirve de callback
// const duplicate = (number) => number * 2;
/*
function doubleWithMap( array ){
    const duplicateNumber = array.map( function(number){
        return number * 2;
    }  );
    return duplicateNumber;
}*/

function doubleWithMap( array ){
   return array.map( number=> number * 2 );    
}


const numbers = [5, 10, 15, 20, 25]; 
//console.log(double(numbers));
console.log(doubleWithMap(numbers));
console.log( numbers.map(number => number * 2)); // numbers.map()
console.log( numbers );


/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

  salida: "Cursos en común: Programming, Music"
*/



function cursosEnComun (student1Courses,student2Courses) {
    const courses = [];
    for (let i=0; i < student1Courses.length; i++) {
     for (let j=0; j < student2Courses.length; j++) {
      if (student1Courses[i] == student2Courses[j]){
        courses.push( student1Courses[i] );
      }
     }
    }
    return `Cursos en común: ${courses}`;     
  }

// --------------------- Usando método filter e includes

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Music"];

function getCommonCoursesWithFilter(student1Courses,student2Courses) {
    return student1Courses.filter(course => student2Courses.includes(course));
}

const commonCourses = getCommonCoursesWithFilter(student1Courses, student2Courses);
const commonCoursesWithStudent3 = getCommonCoursesWithFilter( commonCourses, student3Courses)
console.log("Common courses:", commonCoursesWithStudent3.join(", "));

// ------------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function

phrase = 'Pepe Pecas Pica Papas Con Un Pico y Una Pala'

const countChar = (p, phrase) => phrase.toLowerCase().split("").filter(c => c == p).length;

console.log("Cantidad de letras 'p':", countChar('p', phrase))

// -------------------- Funciones Recursivas ------------------------------
// Es una técnica de programación en donde la función se llama así misma.
// Se debe tener precausión de no entrar a un bucle infinito.

/*
  function funcionRecursiva( valor ){
    if ( condiciónDeParo ){

    }
    else {
        // Llamada recursiva.
    }
  }

*/

const factorialConCicloFor = ( numero ) => {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i; // factorial = factorial * i;
        
    }
    return factorial;
}

function factorialRecursivo ( numero ) {
    if( numero === 1)
        return 1;
    return numero * factorialRecursivo( numero - 1);
}

const factorial = number => (number === 2) ? 
                    number :
                    number * factorial(number - 1);


console.log("Factorial de 5: " + factorialConCicloFor(5));
console.log("Factorial de 5: " + factorialRecursivo(5));

