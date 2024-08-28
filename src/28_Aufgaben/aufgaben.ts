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

// Bonusaufgabe

const minutesInput = document.getElementById("minutes") as HTMLInputElement;
const startButton1 = document.getElementById("start-button") as HTMLButtonElement;
const pauseButton = document.getElementById("pause-button") as HTMLButtonElement;
const resetButton = document.getElementById("restart-button") as HTMLButtonElement;
const showTime = document.getElementById("time") as HTMLDivElement;

let countdown1: number = 0;
let interval: number = 0;
let num1 = 0;
let num2 = 0;
let num3 = 5;
let num4 = 9;
let firstCall: boolean = false;

function check(){
    if (firstCall == false){
        runCountdown();
    }
}

function runCountdown(){
    firstCall = true;
    const minutes = Number(minutesInput.value);
    if (minutes < 10){
        num2 = minutes;
    } 
    else {
        num1 = Math.floor(minutes / 10);
        num2 = minutes % 10;
    }

    countdown1 = minutes * 60;
    
    interval = setInterval(function() {
        if (countdown1 > 0) {
            if (countdown1 % 600 == 0){
                num1 --;
                num2 = 9;
                num3 = 5;
                num4 = 9;
            } else if (countdown1 % 60 == 0){
                num2 --;
                num3 = 5;
                num4 = 9;
            } else if (countdown1 % 10 == 0) {
                num3 --;
                num4 = 9;
            } else {
                num4 --;
            }
        }
        else {
            clearInterval(interval);
        }
        showTime.innerText = `${num1}${num2}:${num3}${num4}`
        countdown1--;
    }, 500);
}

function pauseFunction(){
    clearInterval(interval);
}

function restartFunction(){
    interval = setInterval(function() {
        if (countdown1 > 0) {
            if (countdown1 % 600 == 0){
                num1 --;
                num2 = 10;
                num2 --;
                num3 = 5;
                num4 = 9;
            } else if (countdown1 % 60 == 0){
                num2 --;
                num3 = 6;
                num3 --;
                num4 = 9;
            } else if (countdown1 % 10 == 0) {
                num3 --;
                num4 = 9;
            } else {
                num4 --;
            }
        }
        else {
            clearInterval(interval);
        }
        showTime.innerText = `${num1}${num2}:${num3}${num4}`
        countdown1--;
    }, 500);
}

pauseButton?.addEventListener("click",  pauseFunction);
resetButton?.addEventListener("click", restartFunction);
startButton1?.addEventListener("click", check);