import Car from "./Car";

class ElectricCar extends Car {
    constructor(make: string, model: string, public batteryCapacity: number){
        super(make, model);
    }
}

export default ElectricCar;