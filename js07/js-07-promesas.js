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


// ----------------- Una promesa que reciba dos números a y b y los divida
// en caso de que b sea cero, me envíe un rechazo diciéndome por que no se
// puede realizar la división.

const division = new Promise ( (fncCallBackResolve, fncCallBackReject )=> {
    const a = 10;
    const b = 5;

    if(b === 0){
        fncCallBackReject( "No se puede dividir por cero" )
    }else{
        fncCallBackResolve( a/b )
    }
});

division
    .then( (response)=> console.log("promesa resuelta, la division es: " + response))
    .catch( (error) =>console.error("Tu promesa fue rechazada: " + error ));


// -------------- Haciendo la divisón con parámetros --------------------------------

const divisionConParametros = (a, b) =>{
    const myPromise = new Promise(  (resolve, reject ) =>{
        if( b === 0 )
            reject("No se puede realizar una división por cero");
        else
            resolve(a/b);
    } );

    return myPromise;
}

divisionConParametros(3,4)
    .then( (response)=> console.log(response) ) // 0.75
    .catch( (error)=> console.log(error) );

divisionConParametros(3,0)
    .then( (response)=> console.log(response) )
    .catch( (error)=> console.log(error) ); // No se puede realizar una división por cero


/* 

const divisionAsincrona = (a,b) => {
    const myPromise =  new Promise( (resolve, reject) =>{
        if (b!== 0)
            resolve(a/b);
        else
            reject("No se puede realizar una divisón por cero");
    }  )
return myPromise;
}

const divide = (a, b) => {
  divisionAsincrona(a,b)
    .then( resolve => console.log(resolve)   )
    .catch(error => console.error(error) )
};

divide(3,4);
divide(3,0);

 */