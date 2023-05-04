// ---------------Desarollo sincrónico(secuencial)-----------

const primerPaso = () => {
  console.log("01- Inicio de mi programa JS07");
};

const segundoPaso = () => {
  console.log("02- Desarrollo de mi programa");
};

const tercerPaso = () => {
  console.log("03- Fin de mi programa");
};

primerPaso();
segundoPaso();
tercerPaso();

// -------------Programación Asíncrona ----------------
// setTimeout()
// Establece un temporizadoer que ejecuta una función
// una vez que expire el temporiozador.

const desarrolloAsincrono = (saludo) => {
  console.log("Hola " + saludo);
};

const segundoPasoAsincrono = (saludo) => {
  // setTimeout( desarrolloAsincrono, 4000, saludo );
  // setTimeout((saludoRef) => console.log("Hola " + saludoRef), 4000, saludo);
  setTimeout(() => console.log("Hola " + saludo), 4000);
};

console.log("--------------------------");
primerPaso();
//setTimeout( desarrolloAsincrono , 3000, "ch26" );
segundoPasoAsincrono("ch26 con 4 s. de retardo");
tercerPaso();

// ------------------- setInterval ------------------------------------
// Ejecuta una función de manera reiterada con un timpo de retardo fijo entre cada llamada.

const segundoPasoConIntervalo = (saludo) => {
    setInterval( ()=>console.log("La banda malandra es " + saludo) , 2000 );
}

console.log("--------setInterval---------------");
primerPaso();
//segundoPasoConIntervalo("ch26 wu, wu");
tercerPaso();

// -------------------- Iniciar y detener setInterval -------------------------

const refStartInterval = document.getElementById("iniciar");
const refStopInterval = document.getElementById("detener");
const refDateH2 = document.getElementById("fecha");
let idInterval;

const stateButtons = ( stopState, startState) =>{
    refStartInterval.disabled = startState;
    refStopInterval.disabled = stopState;
}

const disableStart = () => {
    stateButtons( false , true);
}
const enableStart = () => {
    stateButtons(true, false);
}

enableStart();

refStartInterval.addEventListener( "click" , ()=>{
    //console.log("Se pulsó iniciar");
    idInterval = setInterval(() => {
        refDateH2.innerHTML = new Date().toLocaleString();        
    }, 1000);
    disableStart();
});


refStopInterval.addEventListener( "click" , ()=>{
    //console.log("Se pulsó detener");
    clearInterval( idInterval ); //detener mi intervalo
    enableStart();
});
