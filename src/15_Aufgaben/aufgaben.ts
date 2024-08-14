// Aufgabe 01

const button = document.getElementById("show") as HTMLButtonElement;
const pTag = document.getElementById("URL") as HTMLParagraphElement;

function showURL(event: Event): void {
    event.preventDefault();
    const url = window.location.href;
    pTag.innerText = url;
}

button.addEventListener("click", showURL);

// Aufgabe 02
const buttons = document.getElementsByTagName("button");

function switchColor(){
    buttons[1].style.backgroundColor = "red";
    buttons[2].style.backgroundColor = "blue";
    buttons[3].style.backgroundColor = "yellow";
};

buttons[4].addEventListener("click", switchColor);
