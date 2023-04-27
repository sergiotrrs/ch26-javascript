console.log("Sesión Js04 Arreglos y ciclos");

// Declarar un array
 const nombresCh26 = ["Sofi", "Alejandro", "Ixchel", "Said"];
 // Usando el constructor de arreglos
 const apellidosCh26 = new Array("Montellano", "Torres", "Vazquez");
 const numCajonesEstacionamiento = new Array(4); // [ , , , ]
 const numCohortesActivas = new Array(26,27,28,29); // [26 , 27 , 28 , 29 ]


 console.log("Apellido de Sergio " + apellidosCh26[1] );

 // Agregar un nuevo apellido al final del arreglo apellidos
 apellidosCh26.push("Ruiz");
 console.log(apellidosCh26);

 // Matrices (arreglos de 2 dimensiones)
 // Arrays anidados
 // [ [] , [] , []  ]

const personasEnCohorte = [ 
/*ch26*/    ["Arath"  , "José"   , "Karen"     , "Sofi"          ], 
/*ch27*/    ["Manuel" , "María"  , "Francisco" , "Pablo", "Pepe" ], 
/*ch28*/    ["Doris"  , "Brendan", "Lucas"                       ] 
]; 

console.log("Personas ch27: " + personasEnCohorte[1].join(", ") );

//Accediento a Francisco
// ["Manuel" , "María"  , "Francisco" , "Pablo", "Pepe" ]
//const temporalCh27 = ["Manuel" , "María"  , "Francisco" , "Pablo", "Pepe" ];
const temporalCh27 = personasEnCohorte[1];
const paco = temporalCh27[2];
console.log("Extraer en pasos " + paco ); // Francisco
console.log("Paco en Ch27 " + personasEnCohorte[1][2] ); // Francisco
console.log("Lucas de Ch28 " + personasEnCohorte[2][2] ); // Lucas
console.log("Karen de Ch26 " + personasEnCohorte[0][2] ); // Karen

personasEnCohorte[1][3] = "Juán";
console.log("Personas ch27: " + personasEnCohorte[1].join(", ") );

// myArray3D = [ [ [],[],[]  ], [ [],[],[] ] ];  myArray3D[][][];

// Iterar todos los elementos en un arreglo de 2 dimensiones.
/*
for (let fila = 0; fila < personasEnCohorte.length; fila++) {
    console.log(`Indice ${fila}: ${personasEnCohorte[fila]}`)
    for (let columna = 0; columna <  personasEnCohorte[fila].length; columna++) {
        console.log(`Nombre: ${personasEnCohorte[fila][columna] }`)
        
    }
}
*/
// Usando forEach
personasEnCohorte.forEach( fila => fila.forEach( columna =>  console.log(columna) ));
