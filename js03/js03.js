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
 let edadSergio = 39, edadLuis = 25; 
 // let edadSergio = 39;
 // let edadLuis = 25;
 let numCohorteSergio = numCohorteLuis = 26;

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
    console.log(`Luis ${edadLuis} años`) // 25
    console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
    console.log(`Luis cohorte ${numCohorteLuis} `) // 26

}
console.log(`Me llamo ${nombre} ${apellido}`);
console.log(`Sergio: ${edadSergio} años`); // 39
console.log(`Luis ${edadLuis} años`) // 25
console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
console.log(`Luis cohorte ${numCohorteLuis} `) // 26
}
//console.log(`Me llamo ${nombre} ${apellido}`); Las variables no estaán definidas
//console.log(`Sergio: ${edadSergio} años`); // Las variables no estaán definidas
//console.log(`Luis ${edadLuis} años`) // Las variables no estaán definidas
console.log(`Luis cohorte ${numCohorteLuis} `) // 
console.log(`Sergio cohorte: ${numCohorteSergio} `); // 