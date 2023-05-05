import { Car, ElectricCar } from './js-08-clase-auto.js';

console.log("importar y exportar clases");

const elantra = new Car("Elantra", "Hyundai", 410_000);

console.log( elantra.getDescription() );
console.log( elantra.name );
console.log( elantra.brand ); // undefined

const electricElantra = new ElectricCar("Elantra Electric", "Hyundai", 810_000, 5);
console.log( electricElantra.getDescription() );