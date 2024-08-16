// Aufgabe 1
// function helloFunction(): void{
//     console.log("Hello Function");
// }

// const helloArrowFunction = () => {
//     console.log("Hello Arrow Function")
// }

// helloFunction();
// helloArrowFunction();

// // Aufgabe 2

// function hello(): void{
//     document.body.innerHTML += "Hallo";
// }

// hello();

// function sum(a: number, b: number): void{
//     console.log(a + b);
// }

// sum(9, 10);

// const sum2 = (a: number, b: number) =>
//     (document.body.innerHTML += zahl1 + zahl2);

// function multi(a: number, b: number): void{
//     window.alert(a * b);
// }

// multi(9, 10);

// const multi2 = (a: number, b: number) =>
//     window.alert(a * b;

//  function objectKeys(object: Object) {
//    console.log(Object.keys(object));
// }

// const arrowObjectKeys = (object: Object) => console.log(Object.keys(object));

// Aufgabe 3

// let person = {
//     vorname: 'Anton',
//     nachname: 'Fish',
//     alter: 34,
//     familienstand: 'ledig',
//     groesse: 1.78,
//     showProfile: function () {
//          console.log(this.vorname, this.nachname, this.alter, this.familienstand, this.groesse);
//     }

//  };

//  person.showProfile();

// let person2 = {
//     vorname: 'Robin',
//     nachname: 'Stumpf',
//     alter: 23,
//     familienstand: 'ledig',
//     groesse: 1.73,
//     showProfile: () => {
//          console.log(person2.vorname, person2.nachname, person2.alter, person2.familienstand, person2.groesse);
//     }

//  };

//  person2.showProfile();

// // Aufgabe 4

// type Monster = {
//     name: string,
//     type: string,
//     health: number,
//     strength: number,
//     speed: number;
// }

// function createMonster( name: string, type: string, health: number = 100, strength: number = 50, speed: number = 25
// ): Monster {
//     return { name, type, health, strength, speed,
//     };
// }
// const monster1 = createMonster("Alien", "radioactive")
// console.log(monster1);

// const monster2 = createMonster("Predator", "Beast", 550)
// console.log(monster2);

// const monster3 = createMonster("Pikachu", "Pokemon", 10, 1 )
// console.log(monster3);

// const monster4 = createMonster("Slime", "Beast", 100, 501, 32)
// console.log(monster4);
  
