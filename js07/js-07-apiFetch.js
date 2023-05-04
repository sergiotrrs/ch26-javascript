console.log("js 07 Api Fetch");

/*
 La Api Fetch nos ayuda a acceder y manipular peticiones HTTP. Proporciona
 una forma lógica y fácil de obtener recursos de la red de manera ASÍNCRONA.

Sintaxis:
 Solicitud get

 fetch(  url )
  .then( )
  .catch( );

*/

const url = "https://fakestoreapi.com/products";

const getProducts = ( httpUrl ) =>{    

    fetch( httpUrl )
        .then( result => {
            console.log("Respuesta: " + result.status );
            return result.json(); // Conversión de JSON a objeto
        })
        .then ( (productsObj)=> {
            console.log(productsObj)
            // Quiero imprimir solo el título de cada producto.
            for (let product of productsObj ){
                console.log(product.title);
            }

        })
        .catch( error=> console.log(error)  );

}

//getProducts( url );

// --------------- Consumir Fetch usando async-await

const getProductsWithAwait = async ( httpUrl) => {
    const productsJson = await fetch( httpUrl) ;
    const products = await productsJson.json(); // Conversión de JSON a objeto
    console.log( products );
    
    for(let product of products)
        console.log( product.title );

}

getProductsWithAwait( url );