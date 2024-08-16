import Owner from "./classes/Owner";
import Dog from "./classes/Dog";

const Joe = new Owner("Joe", "Musterstraße", "10111");

console.log(Joe);

const dog1 = new Dog("wuffy", 1, Joe);

console.log(dog1);
console.log(dog1.age);

dog1.age = 100;
console.log(dog1.age);
dog1.sleep();