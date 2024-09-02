function sayHello(name: string, callback: (message: string) => void): void {
    const message = `Hello, ${name}!`;
    callback(message);
}

function greetingCallback(message: string): void {
    console.log(message);
}

sayHello("Alice", greetingCallback);
sayHello("Bob", greetingCallback);
sayHello("Charlie", greetingCallback);

// Aufgabe 2

const pTag = document.getElementById("pTag");

const promise1 = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Exercise 1 done.");
    }, 20000);
});

const promise2 = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Exercise 2 done.");
    }, 30000);
});

const promise3 = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Exercise 3 done.");
    }, 40000);
});

function displayMessages(messages: string[]): void {
    if (pTag){
        pTag.textContent = messages.join(' ') + " Homework done";
    document.body.appendChild(pTag);
    }
}

Promise.all([promise1, promise2, promise3])
    .then((messages) => {
        displayMessages(messages);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });

// Aufgabe 3

function processData(
    numbers: number[],
    sortDown: (numbersArray1: number[]) => number[],
    sumDouble: (numbersArray2: number[]) => number[]
  ): Map<number, string> {
    const downSortedArray = sortDown(numbers);
    const doubledArray = sumDouble(downSortedArray);
    const result = new Map<number, string>();
    for (const num of doubledArray) {
      result.set(num, num.toString(16));
    }
    return result;
  }
  
  function downSorting(numbersArray1: number[]): number[] {
    return [...numbersArray1].sort((a, b) => b - a);
  }
  
  function doubleSum(numbersArray2: number[]): number[] {
    return numbersArray2.map((num) => num * 2);
  }
  
  const array1 = [9, 12, 87, 612, 37, 42, 30];
  const result1 = processData(array1, downSorting, doubleSum);
  console.log(result1);
  
  const array2 = [140, 95, 2345, 2, 8];
  const result2 = processData(array2, downSorting, doubleSum);
  console.log(result2);
  