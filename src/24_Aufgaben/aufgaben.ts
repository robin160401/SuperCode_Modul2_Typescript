// AUFGABE 1 & 2

import Circle from "./classes/Circle";
import Rectangle from "./classes/Rectangle";

const circle1 = new Circle("circle", "farbe", 20, true);
const circle2 = new Circle("circle", "lila", 10, true);
const circle3 = new Circle("circle", "braun", 2000, true);

const rectangle1 = new Rectangle("circle", "farbe", 20, 30, false);
const rectangle2 = new Rectangle("circle", "lila", 10, 5, false);
const rectangle3 = new Rectangle("circle", "braun", 2000, 10, false);

console.log(circle1, circle2, circle3);
console.log(rectangle1, rectangle2, rectangle3)

// AUFGABE 3

import Manager from "./classes/Manager";
import Subordinate from "./classes/Subordinate";

const subor1 = new Subordinate("Robin", 23, "Senior Developer", new Date ("2019-01-15"));
const subor2 = new Subordinate("Helga", 67, "Head of Development", new Date ("2019-01-15"));
const subor3 = new Subordinate("Tim", 17, "Junior Developer", new Date ("2019-01-15"));

const manager = new Manager("Gudrun", 57, "CEO", new Date ("2019-01-15"));

manager.addSubordinate(subor1);
manager.addSubordinate(subor2);
manager.addSubordinate(subor3);

console.log(manager);

// Aufgabe 4

import Trainee from "./classes/Trainee";

const trainee1 = new Trainee("Hildegard", 16, new Date ("2019-01-15"));
const trainee2 = new Trainee("Wolfgang", 19, new Date ("2019-01-15"));

manager.addSubordinate(trainee1);
manager.addSubordinate(trainee2);

console.log(manager);
console.log(trainee1.getYearsOfService());