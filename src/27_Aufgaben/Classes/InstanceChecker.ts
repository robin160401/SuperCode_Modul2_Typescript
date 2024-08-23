import Unicorn from "./Unicorn";
import Car from "./Car";
import ElectricCar from "./ElectricCar";

class InstanceChecker {
    static isUnicorn(objectToCheck: any): boolean {
        if (objectToCheck instanceof Unicorn){
            return true
        } else {
            return false;
        }
    }

    static isCar(objectToCheck: any): boolean {
        if (objectToCheck instanceof Car){
            return true
        } else {
            return false;
        }
    }

    static isElectricCar(objectToCheck: any): boolean {
        if (objectToCheck instanceof ElectricCar){
            return true
        } else {
            return false;
        }
    }
}

export default InstanceChecker;