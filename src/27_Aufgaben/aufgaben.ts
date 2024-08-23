import InstanceChecker from "./Classes/InstanceChecker";
import Unicorn from "./Classes/Unicorn";
import Car from "./Classes/Car";
import ElectricCar from "./Classes/ElectricCar";
import Running from "./Classes/Yoga";
import { Beyonce, FreddieMercury, FleetwoodMac, BillWithers } from "./Classes/Singer";

const object = {};

console.log(InstanceChecker.isUnicorn(object));

const unicorn1 = new Unicorn('Chapelle Roan', ['pink', 'blue', 'white']);
console.log(unicorn1);

// Aufgabe 2

const car1 = new Car("BMW", "3er");
const electricCar1 = new ElectricCar("Tesla", "Mdoel X", 125);

console.log(InstanceChecker.isCar(car1));
console.log(InstanceChecker.isCar(electricCar1));

console.log(InstanceChecker.isElectricCar(car1));
console.log(InstanceChecker.isElectricCar(electricCar1));

// Aufgabe 3

const run1 = new Running("Run", 4, 7.5);

console.log(run1)

run1.warmUp();
run1.coolDown();

// Aufgabe 4

const beyonce = new Beyonce("Beyonce");
const freddie = new FreddieMercury("Freddie Mercury");
const fleetwoodMac = new FleetwoodMac("FleetwoodMac");
const elvis = new BillWithers("BillWithers");

console.log(beyonce.sing());
console.log(freddie.sing());
console.log(fleetwoodMac.sing());
console.log(elvis.sing());