
function addNumbers(a: number, b: number, callback: (sum: number) => void): void {
    const sum = a + b;
    callback(sum);
}

addNumbers(25, 9876, (sum) => {
    console.log(sum);
});

// Aufgabe 2

function showAlert(sum: number){
    window.alert(sum)
}

addNumbers(3, 2, showAlert);

// Aufgabe 3

function showMaximum(numbers: number[], callback: (max: number) => number): void {
    const max = Math.max(...numbers);
    console.log("Max: " + max);
    const callbackResult = callback(max);
    console.log("Result: " + callbackResult);
    console.log("done");
}

function powerOfTen(number: number): number {
    return Math.pow(number, 10);
}

showMaximum([3, 5, 9, 1, 4], powerOfTen);


// Aufgabe 4

function calculateSumAndMore(a: number, b: number, callback1: (result1: number) => number, callback2: (result2: number) => number
): number {
    const sum = a + b;
    const result1 = callback1(sum);
    const result2 = callback2(result1);
    return result2;
}
const double = (result: number): number => {
    return result * 2;
};
const toBinary = (result: number): number => {
    return parseInt(result.toString(2), 10);
};

const result1 = calculateSumAndMore(5, 10, double, toBinary);
console.log("Result1: " + result1);

const result2 = calculateSumAndMore(7, 3, double, toBinary);
console.log("Result2: " + result2);

const result3 = calculateSumAndMore(8, 2, double, toBinary);
console.log("Result3: " + result3);

// Aufgabe 5

function randomNumber(): string {
    const number = Math.floor(Math.random() * 100).toString();
    return number;
}

function randomText(): string {
    const texts = ["Hallo Welt!", "I like turtles", "Zufallstext", "Züge mag ich auch", "Schach"];
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

function randomBoolean(): string {
    const bool = Math.random() >= 0.5 ? "true" : "false";
    return bool;
}

function randomEmoji(): string {
    const emojis = ["😀", "🎉", "🚀", "🐱", "🍀"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

function updateHeadline(callback: () => string): void {
    const headlineElement = document.getElementById("headline");
    if (headlineElement) {
        headlineElement.textContent = callback();
    }
}

const randomButton = document.getElementById("randomButton");
if (randomButton) {
    randomButton.addEventListener("click", () => {
        const functions = [randomNumber, randomText, randomBoolean, randomEmoji];
        const randomIndex = Math.floor(Math.random() * functions.length);
        const selectedFunction = functions[randomIndex];
        updateHeadline(selectedFunction);
    });
}


