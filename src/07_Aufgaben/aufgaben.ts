// Aufgabe 1 map

const drinks: string[] = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

console.log(drinks);

const drinksUpper = drinks.map((drink: string) => {
    return (drink.toUpperCase());
});

console.log(drinksUpper);

const drinksILike = drinks.map((drink: string) => {
    return `I like ${drink}`;
});

console.log(drinksILike);

// Aufgabe 2 map

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const celscius = fahrenheit.map((tempreture: number) => {
    return Math.round((tempreture - 32 ) / 1.8);
});

console.log(celscius);

// Aufgabe 3 map

let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

const checkedNumber = checkNumber.map((num: number) => {
    if (num % 3 === 0) {
        return num + 100;
    } else {
        return num;
    }
    
});

console.log(checkedNumber);

// Aufgabe 4 map

let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

const albumNoEnding = album.map((alb: string) => {
    let albLower = alb.toLowerCase();
    if (albLower.includes(".jpg")) {
        return albLower.replace(".jpg", "");
    }   else {
        return "invalid";
    }
})

console.log(albumNoEnding);

// Aufgabe 5 map

let fruits: string[] = ['🍇', '🍌', '🍒', '🍎'];

const fruitJuice = fruits.map((fruit: string) => {
    return fruit.concat("🧃");
})

console.log(fruitJuice);

// Aufgabe 6 filter 

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers() {
    const evenNumbers = zahlen.filter((zahl: number) => {
        if (zahl % 2 === 0) {
            return zahl;
        }
    })
    console.log(evenNumbers);
}

printEvenNumbers();

// Aufgabe 7 filter

const heroArr: (string | null | undefined)[] = ["Superman", "Batman", undefined, undefined, "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", undefined, null];

function showHeroesCleaned(){
    const heroesCleaned: any = heroArr.filter((hero: string | null | undefined) => {
        if (hero != undefined && hero != null){
            return hero;
        }
    })
    console.log(heroesCleaned);
}
console.log(heroArr);
showHeroesCleaned();

// Aufgabe 8 filter

const woerter: string[] = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

function filterArray() {
    const shorterWords = woerter.filter((word: string) => {
        if (word.length <= 6) {
            return word;
        }
    })
    console.log(shorterWords);
}

filterArray();

function filterE(){
    const wordsWithoutE = woerter.filter((word: string) => {
        if (!(word.includes("e") || word.includes("E"))) {
            return word;
        }
    })
    console.log(wordsWithoutE);
}

filterE();

