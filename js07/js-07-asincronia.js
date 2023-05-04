
// ---------------Desarollo sincrónico(secuencial)-----------

const primerPaso = () => {
    console.log("01- Inicio de mi programa JS07");
}

const segundoPaso = () => {
    console.log("02- Desarrollo de mi programa");
}

const tercerPaso = () => {
    console.log("03- Fin de mi programa");
}

primerPaso();
segundoPaso();
tercerPaso();

// -------------Programación Asíncrona ----------------
// setTimeout()
// Establece un temporizadoer que ejecuta una función 
// una vez que expire el temporiozador.

const desarrolloAsincrono = ( saludo  ) => {
    console.log("Hola " + saludo);
}

console.log("--------------------------")
primerPaso();
setTimeout( desarrolloAsincrono, 3000, "ch26" );
tercerPaso();
