console.log("Js07 - promesas");

/*
 Una promesa (promise) es un objeto que representa la terminación o fracaso
 de una operación asíncrona.

 Para crear una promesa se usa el constructor new Promise();

*/

//const pinkiPromise = new Promise(   /*función de callback*/  );
const pinkiPromise = new Promise(   (fncCallBackResolve, fncCallBackReject )=>{
    const menorEdad = false;

    if(menorEdad)
        fncCallBackResolve("Hay que estar simpre juntos");
    else
        fncCallBackReject("No te conozco");

}  );

// Consumir las promesas
// usando los métods then, catch y finally.

console.log( "Antes de consumir la promesa" );
// pinkiPromise.then( fncCallBack  ).catch( fncCallBack );
pinkiPromise
    .then(  (response)=> console.log("Promesa Resuelta " + response)  )
    .catch( ( error )=> console.error("Tu promesa fue rechazada " + error)  );

console.log( "Después de consumir la promesa" );
