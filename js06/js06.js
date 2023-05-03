console.log("Sesion JS06");

// función definida
function findElementByIdFnc01 ( /*parametros*/ ){
    /* instrucciones */
    return 3*4;
}

// función expresada
const findElementByIdFnc02 = function ( /*parámetros*/) {
    return 3*4;
};

const findElementByIdFnc03 = (/*parámetros*/ ) => {
    return 3*4;
};

const findElementByIdFnc04 = () =>  3*4;

const findElementByIdFnc05 = variableParametro =>  3*4;

const findElementById = ( nameOfDeveloper ) => {
    const tituloRef = document.getElementById("titulo");

    //tituloRef.innerHTML = tituloRef.innerHTML + nameOfDeveloper;
    tituloRef.innerHTML += nameOfDeveloper;

}
findElementById(", Sergio");

const changeSubtitleById = ( newTxt ) => {
    const subtitleRef = document.getElementById("subtitulo");
    
    subtitleRef.innerHTML = ` ${subtitleRef.innerText}, <em>${newTxt}</em>`;

}
changeSubtitleById("viernes de cholos");

//------------ Encontrar elementos por su tag ----------------------------------
// getElementsByTagName()

const changeEmphasis = ( newTxt, url ) => {
    const emphasisRef = document.getElementsByTagName("em");
    //console.log(emphasisRef);
    for (element of emphasisRef){
        console.log(element);
        element.innerHTML = `${newTxt}`;
    }

};

changeEmphasis("viernes friki", "http://...");
