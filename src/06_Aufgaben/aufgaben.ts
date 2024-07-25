//Aufgabe 1 Copy

const oldHollywoodActors: string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"]

const actorsReference:string[] = oldHollywoodActors;

oldHollywoodActors.push("Marilyn Monroe");

console.log(oldHollywoodActors);
console.log(actorsReference);

const oldHollywoodActorsCopy: string[] = oldHollywoodActors.concat();
const oldHollywoodActorsCopy2: string[] = oldHollywoodActors.slice();
const oldHollywoodActorsCopy3: string[] = [...oldHollywoodActors];

oldHollywoodActorsCopy[1] = "Brad Pitt";
oldHollywoodActorsCopy2[1] = "Angelina Jolie";
oldHollywoodActorsCopy3[1] = "Robert DeNiro";

console.log(oldHollywoodActors);
console.log(oldHollywoodActorsCopy);
console.log(oldHollywoodActorsCopy2);
console.log(oldHollywoodActorsCopy3);

// Aufgabe 2 Sort

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort((a: number, b: number)=> a - b));
console.log(numArray1.sort((a: number, b: number)=> b - a));

// Aufgabe 3 Sort

const oldPainters: string[] = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya", "Édouard Manet"];

const newerPainters: string[] = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe",];

const femalePainters: string[] = [...oldPainters.slice(1, 3), ...newerPainters.slice(2,4)];

const malePainters: string[] = [...oldPainters.slice(0, 1), ...oldPainters.slice(4, 6), ...newerPainters.slice(0,2)];

console.log(femalePainters);
console.log(malePainters);

//Aufgabe 4 find

const artworks: string[] = ["Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Die Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"];

const artworkDates: string[] = ["Die Sternennacht - 1889",
"Guernica - 1937",
"Die Geburt der Venus - 1486",
"Die Nachtwache - 1642",
"Die Mona Lisa - 1503",
"Die Kartoffelesser - 1885",
"Die Schrei - 1893",
"Das letzte Abendmahl - 1495",
"Die freudige Botschaft - 1885",
"Der Garten der Lüste - 1505"];

function combineArt(artworkName: string) {
    const artwork = artworks.find((name) => name.startsWith(artworkName));
    const date = artworkDates.find((name) => name.startsWith(artworkName));
    let artist: string = "";
    let onlyDate: string = "";
    let dateArray: string[] = [];
    let nameOfArtArray: string[] = [];


    if (artwork){
        nameOfArtArray = artwork.split(" - ");
        artist = nameOfArtArray[1];
        
    } else {
        console.log("Artwork ", artworkName, " not found");
        return
    }

    if (date){
        dateArray = date.split(" - ");
        onlyDate = dateArray[1];
    } else {
        console.log("Artwork ", artworkName, " not found");
        return
    }

    console.log(nameOfArtArray[0] + " wurde von " + artist + " im Jahre " + onlyDate + " gemalt")
}

combineArt("Die Geburt der Venus");

// Bonusaufgabe

function reverseNames(name: string) {
    const arrayOfLetters: string[] = name.split("");
    const reversedLetters: string[] = arrayOfLetters.reverse();
    const reversedName: string = reversedLetters.join("");
    console.log(reversedName);
}

reverseNames("Robin");
reverseNames("Ella mag alle Bohnen");

function reverseWords(sentence: string) {
    const arrayOfLetters2: string[] = sentence.split("");
    const reversedLetters2: string[] = arrayOfLetters2.reverse();
    const reversedName2: string = reversedLetters2.join("");

    const arrayWords: string[] = reversedName2.split(" ");

    const reverseArrayWords: string[] = arrayWords.reverse();

    const combinedArrayWords:string = reverseArrayWords.join(" ");
    console.log(combinedArrayWords);
}

reverseWords("Ella mag alle Bohnen");