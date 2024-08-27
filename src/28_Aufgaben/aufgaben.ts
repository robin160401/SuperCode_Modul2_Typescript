// Aufgabe 1

function countdown(seconds: number) {
    let counter = seconds;
    
    let interval = setInterval(function() {
        if (counter > 0) {
            if (counter == 3) {
                console.log("Fast Fertig!")
            }
            console.log(counter);
            counter--;
        }
        else {
            console.log("Fertig!");
            clearInterval(interval);
        }
    }, 1000);
}

countdown(10);

// Aufgabe 2
const startButton = document.getElementById('btn');
const counterElement = document.querySelector('.zeit');

function startCountdown() {
    if (counterElement && startButton) {
        let percentage = 100;
        counterElement.textContent = `${percentage}%`;

        const interval = setInterval(() => {
            percentage -= 1;
            counterElement.textContent = `${percentage}%`;
            if (percentage <= 0) {
                clearInterval(interval);
            }
        }, 100);
    }
}

startButton?.addEventListener('click', startCountdown);

// Aufgabe 3

const outputElement = document.querySelector(".style") as HTMLDivElement;

function displayBrowserInfo(): void {
    const browserName = window.navigator.appName;
    const browserVersion: string = window.navigator.appVersion;
    const windowResolution: string = `${window.innerWidth} x ${window.innerHeight}`;
    const windowInnerHeight: number = window.innerHeight;
    const windowInnerWidth: number = window.innerWidth;
    const colorDepth: number = window.screen.colorDepth;
    const pixelDepth: number = window.screen.pixelDepth;

    if (outputElement) {
        outputElement.innerHTML += `
            <p>${browserName}</p>
            <p>${browserVersion}</p>
            <p>${windowResolution}</p>
            <p>${windowInnerHeight}px</p>
            <p>${windowInnerWidth}px</p>
            <p>${colorDepth} Bit</p>
            <p>${pixelDepth} Bit</p>
        `;
    }
}

window.onload = displayBrowserInfo;

// Aufgabe 4

const countDown = document.getElementById("count") as HTMLDivElement;
const message = document.querySelector(".message") as HTMLDivElement;

function countdownAlertAway() {
    let counter = 10;
    
    let interval = setInterval(function() {
        if (counter > 0) {
            countDown.innerHTML = counter.toString();
            counter--;
        }
        else {
            message.style.display = "none";
            clearInterval(interval);
        }
    }, 1000);
}

countdownAlertAway();