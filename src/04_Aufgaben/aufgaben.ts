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

