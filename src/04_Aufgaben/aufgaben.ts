// Functions Aufgabe 1

function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
    const nameOutput: string = "Mein Lieblinsgheld ist: " + heroName;
    const powerOutput: string = "Er hat die Fähigkeit: " + heroPower;
    const enemyOutput: string = "Sein größter Gegner ist: " + heroEnemy;

    console.log(nameOutput + powerOutput + enemyOutput);
}

const power: string = "Bösewichte durch seine Existenz in angst und schrecken zu versetzen ";
const enemy: string = "der Joker ";


showHero("Batman ", power, enemy);

// Aufgabe 2

function returnOne(): number {
    return 1;
}

const x: number = 1;

if (x === returnOne()) {
    console.log("Wird das gedruckt?");
}

// Aufgabe 3

 function multiply(zahl: number) {
    return zahl * 2;
 }

console.log(multiply(5));

// Aufgabe 4

function calculateBirthday(birthYear: number) {
    return 2024 - birthYear;
}

console.log(calculateBirthday(2001));

const robinBy: number = 2001;
const steveBy: number = 1995;

const robinAge: number = calculateBirthday(robinBy);
const steveAge: number = calculateBirthday(steveBy);

function ageDifference(age1: number, age2: number): number {
    let difference:number = age1 - age2;
    if (difference < 0) {
        difference *= -1;
    }
    return difference;
}

const steveAndRobAgeDiff: Number = ageDifference(robinAge, steveAge);

console.log(steveAndRobAgeDiff);

// Aufgabe 5

function aboutMe(vorname: string, nachname: string, geburtsort: string, alter: number, wohnort: string) {
    console.log("Mein Name ist " + vorname + " " + nachname + " Ich bin in " + geburtsort + " geboren. Ich lerne bei Supercode. Ich bin " + alter + " Jahre alt. Ich wohne in " + wohnort + ".");
}

aboutMe("Robin", "Stumpf", "Kirchheimbolanden", 23, "Mannheim");

// BonusAufgabe 

let counter1 = 0;
let counter2 = 0;
const counter1Element = document.getElementById("counter1");
const counter2Element = document.getElementById("counter2");

const button1Element = document.getElementById("buttoncount-1");
const button2Element = document.getElementById("buttoncount-2");
const button3Element = document.getElementById("buttoncount-3");
const button4Element = document.getElementById("buttoncount-4");
const button5Element = document.getElementById("buttoncount-5");
const button6Element = document.getElementById("buttoncount-6");

function countPlusOne(event: MouseEvent) {
    event.preventDefault();
    counter1++;
    if (counter1Element) {
        counter1Element.textContent = counter1.toString();
    }
}

function countPlusTwo(event: MouseEvent) {
    event.preventDefault();
    counter1 += 2;
    if (counter1Element) {
        counter1Element.textContent = counter1.toString();
    }
}

function countPlusThree(event: MouseEvent) {
    event.preventDefault();
    counter1 += 3;
    if (counter1Element) {
        counter1Element.textContent = counter1.toString();
    }
}

function countPlusOne2(event: MouseEvent) {
    event.preventDefault();
    counter2++;
    if (counter2Element) {
        counter2Element.textContent = counter2.toString();
    }
}

function countPlusTwo2(event: MouseEvent) {
    event.preventDefault();
    counter2 += 2;
    if (counter2Element) {
        counter2Element.textContent = counter2.toString();
    }
}

function countPlusThree2(event: MouseEvent) {
    event.preventDefault();
    counter2 += 3;
    if (counter2Element) {
        counter2Element.textContent = counter2.toString();
    }
}

if (button1Element) {
    button1Element.addEventListener("click", countPlusOne);
}

if (button2Element) {
    button2Element.addEventListener("click", countPlusTwo);
}

if (button3Element) {
    button3Element.addEventListener("click", countPlusThree);
}

if (button4Element) {
    button4Element.addEventListener("click", countPlusOne2);
}

if (button5Element) {
    button5Element.addEventListener("click", countPlusTwo2);
}

if (button6Element) {
    button6Element.addEventListener("click", countPlusThree2);
}

const button7Element = document.getElementById("reset");

function reset(event: MouseEvent){
    event.preventDefault();
    counter1 = 0;
    counter2 = 0;
    if (counter2Element && counter1Element) {
        counter2Element.textContent = counter2.toString();
        counter1Element.textContent = counter1.toString();
    }
}

if (button7Element){
    button7Element.addEventListener("click", reset)
}

const team1Element = document.getElementById("team1");

const team2Element = document.getElementById("team2");

const team1Name: string | null = window.prompt("Team1 Name: ");

const team2Name: string | null = window.prompt("Team2 Name: ");

if (team1Element)
team1Element.textContent = team1Name;

if (team2Element)
    team2Element.textContent = team2Name;

