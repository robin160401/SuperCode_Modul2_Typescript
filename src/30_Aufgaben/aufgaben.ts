enum WeatherType {
    none = 0,
    sunny = 1,
    cloudy = 2,
    rainy = 3,
    snowy = 4,
    stormy = 5,
    windy = 6
}

const getWeatherForecast = new Promise<WeatherType>((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    if (number >= 0 && number <= 6) {
        resolve(number as WeatherType);
    } else {
        reject("Weather forecast could not be determined");
    }
});

getWeatherForecast
    .then((weather) => {
        console.log(`Today it is ${WeatherType[weather]}`);
    })
    .catch((error) => {
        console.error(error);
    });

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

let counter = 0;

const updateParagraph = (text: string) => {
    if (pTag && counter == 0) {
        pTag.textContent = text;
        counter++;
    } else if (pTag) {
        pTag.textContent += (" " + text)
    }
};

promise1.then((result) => {
    updateParagraph(result);
});

promise2.then((result) => {
    updateParagraph(result);
});

promise3.then((result) => {
    updateParagraph(result);
});

// Aufgabe 3

const promise4 = new Promise<number[]>((resolve, reject) => {
    const number1 = Math.floor(Math.random() * 130);
    const number2 = Math.floor(Math.random() * 130);
    const number3 = Math.floor(Math.random() * 130);

    if (number1 > 100 || number2 > 100 || number3 > 100){
        reject (`${promise4} Hat nicht geklappt`);
    } else {
        const numbers = [number1, number2, number3]
        resolve (numbers);
    }
})

promise4.then(numbers => {
    console.log(numbers)
    const result = numbers.map(num => num +7);
    console.log(result);
    return result;
}).then(numbers => {
    const result = numbers.map(num => num * 2);
    console.log(result);
    return result;
}).then(numbers => {
    const result = numbers.map(num => num - 1);
    console.log(result);
    return result;
}).then(numbers => {
    const result = numbers.map(num => num % 2);
    console.log(result);
    return result;
}).then(numbers => {
    console.log(numbers);
}).finally(() => {
    console.log("finished")
})

// Bonusaufgabe 

function generateLoremIpsum(numberOfWords: number): Promise<string[]> {
    return new Promise((resolve, reject) => {
        if (numberOfWords > 50) {
            reject("Too much words");
        } else {
            const loremIpsumText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
            const wordsArray = loremIpsumText.split(" ");
            const selectedWords = wordsArray.slice(0, numberOfWords + 1);
            resolve(selectedWords);
        }
    });
}

generateLoremIpsum(9)
    .then(words => {
        return words.map(word => word.toUpperCase());
    }).then(upperWords => {
        return upperWords.map(word => word.replace("L", "").replace("T", "").replace("U", ""));
    }).then(lessLettersWords => {
        return lessLettersWords.filter(word => word.length <= 8);
    }).then(filteredWords => {
        const finalString = filteredWords.join(" ");
        console.log(finalString);
    }).catch(error => {
        console.error(error);
    });

