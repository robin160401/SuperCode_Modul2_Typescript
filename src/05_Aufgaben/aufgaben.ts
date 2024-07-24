const bucketList: string[] = ["Tokio", "Peking", "Bangkok"];
const luckyNumbers: number[] = [11, 21, 42];
const favoritePeople: string[] = ["Zoe", "Maxim", "Johanna"];

console.log(bucketList);
console.log(luckyNumbers);
console.log(favoritePeople);

// Aufgabe 2

console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);
console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

// Aufgabe 3

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

// Aufgabe 4

console.log(bucketList);
console.log(bucketList.length);
bucketList.push("Rom", "Kopenhagen");
console.log(bucketList);
console.log(bucketList.length);

// Aufgabe 5

console.log(bucketList.pop());
console.log(luckyNumbers.pop());
console.log(favoritePeople.pop());

// Aufgabe 6

console.log(bucketList.shift());
console.log(luckyNumbers.shift());
console.log(favoritePeople.shift());

// Aufgabe 7

console.log(bucketList);
console.log(bucketList.length);
bucketList.unshift("Stockholm", "Prag");
console.log(bucketList);
console.log(bucketList.length);

// Aufgabe 8

const lieblingsreiseziele: string[] = ["Prag", "Venedig", "Jena", "Zwickau", "Bangkok", "Tokio"]

console.log(lieblingsreiseziele.slice(2, 4));

// Aufgabe 9

const array: number[] = [23, 54, 75];
console.log(array);

array.push(42, 21, 76, 90, 2);
console.log(array);

array.unshift(1, 3, 4, 5, 6);
console.log(array);

array.pop();
array.pop();
console.log(array);

array.shift();
array.shift();
console.log(array);

// Bonusaufgabe 

const toDoItems: string[] = [];

function addItem(toDoElement: string, atTheBack: boolean) {
    if (atTheBack) {
        toDoItems.push(toDoElement);
    }
    else {
        toDoItems.unshift(toDoElement);
    }
}

function removeItem(atTheBack: boolean) {
    if (atTheBack) {
        toDoItems.pop();
    }
    else {
        toDoItems. shift();
    }
}

function addItemAt(toDoItem: string, index: number) {
   toDoItems.splice(index, 0, toDoItem);
}

function removeItemAt(index: number) {
    toDoItems.splice(index, 1);
}

function printList() {
    console.log(toDoItems);
}

addItem("Fitness", false);
printList();
addItem("Einkaufen", false);
printList();
addItem("Spazieren", true);
printList();
removeItem(true);
printList();
removeItem(false);
printList();
addItem("Kochen", true);
printList();
addItem("Toilette", false);
printList();
addItemAt("Po abwischen", 2);
printList();
removeItemAt(1);
printList();

function printPretty() {
   let list = toDoItems.join(" ** ");
    console.log(list);
}
printPretty();

function askForUserInput() {
    let items: string | null = window.prompt("Gib mir 5 ToDo Dinge, seperiert durch ein Komma: ")
    const arrayofitem = items?.split(",");
    for (let i = 0; i < 5; i++) {
        if(arrayofitem)
        toDoItems.push(arrayofitem[i]);
    }
}
askForUserInput();
printPretty();