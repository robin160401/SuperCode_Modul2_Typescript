// Conditionals Aufgabe 1

const johnAge: number = 22;
const meikeAge: number = 34;
const johnHeight: number = 170;
const meikeHeight: number = 168;

const johnPoints: number = johnAge * 5 + johnHeight;
const meikePoints: number = meikeAge * 5 + meikeHeight;

console.log("John's score: " + johnPoints.toString());
console.log("Meike's score: " + meikePoints.toString());

if (johnPoints > meikePoints){
    console.log("John has won with " + johnPoints + " Points!");
} else if (johnPoints === meikePoints){
    console.log ("Nobody has won. The Points are even !");
} else {
    console.log("Meike has won with " + meikePoints + " Points!");
}

// Conditionals Aufgabe 2

let num: number = 74;

if (num > 27) {
    console.log((num - 27) * 2)
} else {
    console.log(num - 27);
}

// Conditionals Aufgabe 3

const num1: number = (Math.floor(Math.random()* 77) + 1);
const num2: number = (Math.floor(Math.random()* 77) + 1);

if (num1 === num2) {
    console.log("Was für ein Zufall");
} else if (num1 > num2){
    console.log("Erste Zahl größer");
} else {
    console.log("Zweite Zahl größer")
}

switch(true) {
    case (num1 === num2):
        console.log("Was für ein Zufall");
        break;
    case (num1 > num2):
        console.log("Erste Zahl größer");
        break
    default:
        console.log("Zweite Zahl größer");
         break
}

// Conditionals Aufgabe 4

// let weekdayAsNumber: number = 0;
// let weekdayAsString: string = "";

// const promptNum1: string | null = window.prompt("Please insert a Number from 1 to 7:")

// if (promptNum1 !== null) {
//     weekdayAsNumber = parseInt(promptNum1);
// }

// switch(true) {
//     case (weekdayAsNumber === 1):
//         weekdayAsString = "Montag";
//         break;
//     case (weekdayAsNumber === 2):
//         weekdayAsString = "Dienstag";
//         break;
//     case (weekdayAsNumber === 3):
//         weekdayAsString = "Mittwoch";
//         break;
//     case (weekdayAsNumber === 4):
//         weekdayAsString = "Donnerstag";
//         break;
//     case (weekdayAsNumber === 5):
//         weekdayAsString = "Freitag";
//         break;
//     case (weekdayAsNumber === 6):
//         weekdayAsString = "Samstag";
//         break;
//     case (weekdayAsNumber === 6):
//         weekdayAsString = "Samstag";
//         break;
//     default:
//         weekdayAsString = "Weekday must be between 1 and 7";
//         break;
// }

// console.log(weekdayAsString);

// Conditionals Aufgabe 5

const schoolGrade: number = (Math.floor(Math.random() * 10) + 1);

switch(true) {
    case (schoolGrade === 1):
        console.log("Sehr gut");
        break
    case (schoolGrade === 2):
            console.log("gut");
            break
    case (schoolGrade === 3):
        console.log("befriedigend");
        break
    case (schoolGrade === 4):
        console.log("ausreichend");
        break
    case (schoolGrade === 5):
        console.log("mangelhaft");
        break
    case (schoolGrade === 6):
        console.log("ungenügend");
        break
    default:
        console.log("Das ist keine gültige Schulnote");
}

// Conditionals Aufgabe 6

const salesMonth: number = (Math.floor(Math.random() * 10) + 1);
let quartal: string = "";

switch(true) {
    case (salesMonth <= 3):
        quartal = "1. Quartal";
        break;
    case (salesMonth <= 6):
        quartal = "2. Quartal";;
        break;
    case (salesMonth <= 9):
        quartal = "3. Quartal";
        break;
    default:
        quartal = "4. Quartal";
        break;
}

const totalSales: number = (Math.floor(Math.random() * 10000) + 1);
let sales: string = "";

switch (true) {
    case (totalSales <= 2500):
        sales = "schlecht";
        break;
    case (totalSales <= 5000):
        sales = "mittelmäßig";
        break;
    case (totalSales <= 7500):
        sales = "hoch";
        break;
    default:
        sales ="unglaublich";
        break
}

console.log("Im " + quartal + " War der Umsatz " + sales + "!");

// Aufgabe 7

const isOnline: boolean = Math.random() <= 0.5;
const isPremiumUser: boolean = Math.random() <= 0.5;
const isAdult: boolean = Math.random() <= 0.5;

isOnline ? console.log("online") : console.log("offline")

let monthlyFee: number;

isPremiumUser ? monthlyFee = 19.99 : monthlyFee = 12.99;
console.log(monthlyFee);

isAdult ? window.confirm("Willkomen") : window.alert("Keine Berechtigung");

const randomAge: number = (Math.floor(Math.random() * 120) + 1);
const randomSalery: number = (Math.floor(Math.random() * 15000) + 1);

let isMiddleAged: boolean = false;

(randomAge >=40 && randomAge <=65) ? isMiddleAged = true:

console.log(isMiddleAged);

(randomSalery > 10000) ? console.log("You are rich"):
(randomSalery > 1500) ? console.log("not too bad") : console.log("not that much");

// Math Aufgabe 1

const piZahl: number = Math.PI;
console.log(piZahl);

let pi = piZahl * 100;
pi = Math.round(pi);
pi = pi / 100;
console.log(piZahl);

//Math Aufgabe 2

let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];

for (let i = 0; i < 4; i++) {
    console.log(Math.round(randomNumbers[i]));
}

// Math Aufgabe 3

const randomNum: number = Math.random();
const randomNum1: number = (Math.floor(Math.random() * 10) + 1);
const randomNum2: number = (Math.floor(Math.random() * 100) + 1);

console.log(randomNum);
console.log(randomNum1);
console.log(randomNum2);

// Math Aufgabe 4

const randomNumGame: number = (Math.floor(Math.random() * 10) + 1);

const promptNumGame: string | null = window.prompt("Please insert a Number from 1 to 10:")

let checkNum: number = 0;
if (promptNumGame !== null) {
    checkNum = parseInt(promptNumGame);
}

if (checkNum === randomNumGame) {
    console.log("You won");
} else {
    console.log("You lost");
}

// Date Aufgabe 1

// document.open()
// const test = new Date("September 2, 2019 09:00:00");
// const test2 = new Date(0);
// const test3 = new Date(31556908800);
// const test4 = new Date(86400000);


// document.write(test + "<br>");

