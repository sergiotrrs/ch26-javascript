/*

*/

class Car{
   
    #brand;
    #price;

     constructor(nameCar, brand, price ){
         this.name = nameCar;
         this.#brand = brand;
         this.#price = price;
     }
     igniteEngine = ( state ) => state? "Engine is on": "Engine is off";

     getDescription(){
         return `${this.name} de ${this.#brand} cuesta ${this.#price}`;
     }

     set brand( newBrand){
        this.#brand = newBrand;
     }

     get brand(){
        return this.#brand;
     }

     get price(){
        return this.#price;
     }
 }


class ElectricCar extends Car {
    #numberOfBatteries

    constructor(nameCar, brand, price, numberOfBatteries){
        super(nameCar, brand, price  );
        this.#numberOfBatteries = numberOfBatteries;
    }

    getDescription(){
        return `${super.getDescription()}, tiene ${this.#numberOfBatteries} baterías`;
    }

}

 export { Car, ElectricCar };