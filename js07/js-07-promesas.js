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
            //setTimeout(() => reject( "¡División por cero!"), 5000) ;
        else
            resolve(a/b);
    } );

    return myPromise;
}


divisionConParametros(3,4)
    .then( (response)=> {
        console.log(response); // 0.75
        return response + 10; 
    }) 
    .then( (mas10Unidades)=> console.log( mas10Unidades) ) // 10.75
    .catch( (error)=> console.log(error) )
    .finally( ()=> console.log("Se terminó la división")  );


divisionConParametros(3,0)
    .then( (response)=> console.log(response) )
    .catch( (error)=> console.log(error) ); // No se puede realizar una división por cero
    
// ---------- Consumir las promesas con async y await


const realizarDivisionSincrona = async () => {
    console.log("----Resolviendo divisiones---->");    
    const resultado = await divisionConParametros(20,4) ; // 5
    console.log( resultado );
    console.log( resultado + 100 ); // 105
   // const resultadoErroneo = await divisionConParametros(20,0) ; // No se puede realizar una división por cero
    //console.log( resultadoErroneo)
    console.log("<----Terminando divisiones-----");
}

realizarDivisionSincrona();

// ---------------- Manejo de exepciones con try y catch
/*
 Sintaxis
  try{

  } catch( error ){
    
  }
*/

const manejoDeExepciones = async () =>{
    console.log("----Resolviendo divisiones usando try y catch---->");   
    
    try {
        const resultadoErroneo = await divisionConParametros(20,0) ;
        console.log( resultadoErroneo)
        
    } catch (error) {
        console.error("Asyn-Await" + error );
    }
    
    console.log("<----Terminando divisiones usando try y catch-----");
};

manejoDeExepciones();

// ---------------------------------------------
// Promise.resolve();

const promesaRapida = Promise.resolve(123);
const promesaNewPromise = new Promise(  (resolve, reject)=>{
    resolve(123);
});

// ------ Resolver (consumir) con .then
const consumirConThen = () => {
    promesaRapida.then( value => console.log("Consumir con Then "+value )  );
    console.log(456);
}

// ------ Resolver con Async-Await
const consumirConAwait = async () => {
    console.log("Consumir con await "+  await promesaRapida  );
    console.log(789);
};

consumirConThen();
consumirConAwait(); 

// 456 ---
// then 123 ----
// await 123 ----
// 789 ------

