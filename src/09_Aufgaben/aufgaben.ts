// Aufgabe 1

function getHighestNumber(array: number[]): number{
    let highestNumber = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] > highestNumber){
            highestNumber = array[i];
        }
    }
    return highestNumber;
}

const array1: number[] = [12, 3, 40, 2, 60];
const array2: number[] = [90, 145, 1, 75, 60];
const array3: number[] = [67, 123, 6890, 2, 80];

console.log(getHighestNumber(array1));
console.log(getHighestNumber(array2));
console.log(getHighestNumber(array3));

// Aufgabe 2

function calcuclateSum(maxNumber: number):number{
    let counter:number = 0
    for (let i = 1; i <= maxNumber; i++){
       counter++;
    }
    return maxNumber + counter;
}

console.log(calcuclateSum(20));

// Aufgabe 3

function getNumberofVowels(useString: string):string[]{
    let useStringUp: string = useString.toUpperCase();
    const arrayOfVocales: string[] = []
    for (let i = 0; i < useString.length; i++){
        if (useStringUp[i] === "A" || useStringUp[i] === "E" || useStringUp[i] === "O" || useStringUp[i] === "U"){
            arrayOfVocales.push(useStringUp[i])
        }
    }
    return arrayOfVocales;
}

console.log(getNumberofVowels("check that out"));

// Aufgabe 4

function addToFifty(){
    let num = Math.ceil(Math.random() * 10);
    let numResults = 0;
    console.log(num);

    for (let i = 0; i < 50; i++){
        if (numResults > 50){
            break;
        }
        numResults += num;
    }
    console.log("" + numResults + " > 50. Stopping right here.");
}

addToFifty();

// Aufgabe 5

function calculateTheAverage(array: number[]):string {
    let sumOfPoints: number = 0;
    let sumOfStudents: number = array.length;
    let answer: string = "";

    for (let i = 0; i < sumOfStudents; i++){
        sumOfPoints += array[i];
    }

    const averagePoints: number = Math.round(sumOfPoints / sumOfStudents)
    console.log(averagePoints)

    switch (true) {
        case (averagePoints >= 90):
            answer = "Sehr gut";
            break;
        case (averagePoints >= 80):
            answer = "Gut";
            break;
        case (averagePoints >= 70):
            answer = "Befriedigend";
            break;
        case (averagePoints >= 60):
            answer = "Ausreichend";
            break;
        case (averagePoints >= 50):
            answer = "Mangelhaft";
            break;
        default:
            answer = "Ungenügend";
            break;
    }
    return answer;
}

console.log(calculateTheAverage([90, 90, 90, 87, 90, 88, 94, 34, 90, 20]));

// Bonusaufgabe 

function rot13(text: string):string {
    let textUpper: string = text.toUpperCase();
    let asciiRot13: number[] = [];
    let textArrayRot13: string[] = [];

    for (let i = 0; i < text.length; i++){
        if (textUpper[i] >= "N" && textUpper[i] <= "Z"){
            asciiRot13.push(textUpper[i].charCodeAt(0) - 13);
        }
        else if (textUpper[i] >= "A" && textUpper[i] <= "M"){
            asciiRot13.push(textUpper[i].charCodeAt(0) + 13);
        }
        else {
            asciiRot13.push(textUpper[i].charCodeAt(0));
        }
    }
    for (let i = 0; i < asciiRot13.length; i++){
        textArrayRot13.push(String.fromCharCode(asciiRot13[i]));
    }

    const textRot13: string = textArrayRot13.join("");
    return textRot13;
}

console.log(rot13("Check that shit out"));