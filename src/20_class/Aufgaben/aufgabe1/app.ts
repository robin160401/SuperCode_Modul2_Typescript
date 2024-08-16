import IceCreamFlavor from "./classes/IceCreamFlavor";
import SchoolClass from "./classes/SchoolClass";
import Student from "./classes/Student";
import Car from "./classes/Car";
import Driver from "./classes/Driver";

const flavors: IceCreamFlavor[] = [
    new IceCreamFlavor("Strawberry", 2, true, "fruity"),
    new IceCreamFlavor("Raspberry", 2, true, "fruity"),
    new IceCreamFlavor("Choclate", 2, false),
    new IceCreamFlavor("Cookies", 2, true)
];

flavors.forEach((flavor) => {
    if (flavor._isPopular) {
      console.log(flavor._name);
    }
  });

// Aufgabe 2

const class1 = new SchoolClass(1, "Maths");
const class2 = new SchoolClass(2, "German");
const class3 = new SchoolClass(3, "English");

console.log(class1);
console.log(class2);
console.log(class3);

class1._name = "Advanced Maths";
class3._name = "Advanced English";

console.log(class1);
console.log(class2);
console.log(class3);

// Aufgabe 3

const students: Student[] = [
    new Student(5, "Jan", "Wendling", new Date(2001, 1, 31)),
    new Student(2, "Ole", "Schmierstein", new Date(2001, 2, 29)),
    new Student(1, "Anne", "Meier", new Date(2000, 4, 19)),
    new Student(1, "Katrin", "Meier", new Date(2001, 5, 5)),
  ];
  
  students.forEach((student) => {
    class3.addStudent(student);
  });
  
  class3.listStudents();

  // Aufgabe 4

const car1 = new Car("Audi", 2004);
const car2 = new Car("BMW", 1993);
const car3 = new Car("Mercedes", 2023);
const car4 = new Car("Seat", 2022);

const driver1 = new Driver("Robin", "Stumpf", 23, car1);
const driver2 = new Driver("Anne", "Müller", 18, car2);
const driver3 = new Driver("Tim", "Spatz", 32, car3);
const driver4 = new Driver("Paul", "Ramme", 24, car4);

console.log(driver1.getDriverDetails());
console.log(driver2.getDriverDetails());
console.log(driver3.getDriverDetails());
console.log(driver4.getDriverDetails());
