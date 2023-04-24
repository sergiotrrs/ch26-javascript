console.log("Sesion JS01");

// Son 7 datos primitivos:
// String: "Hola"
console.log("Tipo de dato String: ", "Hola");

// Number: 12, -45, 367.12, +Infinity, -Infinity, NaN
// Los numéricos usan 64 bits para almacenar, pero solo se usan 53 bits
// para representar el número.
console.log("Tipo de dato Number: ", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("Valor máximo: ", Number.MAX_VALUE);
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER);

// BigInt
// Sirven para representar valor numéricos enteros, de los que el tipo number
// no puedo representar o no es seguro.
console.log("MAX_SAFE_INTEGER + 1 : ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2 : ", Number.MAX_SAFE_INTEGER + 2); //No representa el valor
let myBigInt = 9007199254740991n; // se agrega la letra n al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 1n );
console.log("MAX_SAFE_INTEGER + 1n", myBigInt + 2n );

// Boolean
// Tenemos solo 2 estados: true/false
console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

// Undefined
// Un dato que es declarado, pero no definido en el tipo
let myVar; // solo se declara
console.log("Tipo de dato undefined: ", myVar);

// null
// Intensionalmente se borra el tipo de dato
let myVarNull; // solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // undefined
myVarNull = "Saludos Sr. PP"; // se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // object

// symbol
// crea propiedades privadas en los objetos.

// -----------------------------------------------------------
// Tipos de datos Object
// Object:
const misDatos = {
    // clave: valor
    nombre: "Sergio",
    apellido: "Torres",
    edad: 39,
    isBelicoso: false,
    musicaPreferidaPorGenero: {
        rock: "La celula que explota",
        corridosTumbados: "Ella baila sola"
    }
}

console.log("Datos completos: ", misDatos );
console.log("Nombre: ", misDatos.nombre );
console.log("Música de fin de semana: ", misDatos.musicaPreferidaPorGenero.corridosTumbados);



