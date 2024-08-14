const textElement = document.getElementById("element") as HTMLDivElement;
const small = document.getElementById("button1") as HTMLButtonElement;
const medium = document.getElementById("button2") as HTMLButtonElement;
const crayz = document.getElementById("button3") as HTMLButtonElement;

function applyStyle1(): void {
    if (textElement) {
        textElement.classList.remove("medium", "crazy");
        textElement.classList.add("small");
    }
}
function applyStyle2(): void {
    if (textElement) {
        textElement.classList.remove("small", "crazy");
        textElement.classList.add("medium");
    }
}
function applyStyle3(): void {
    if (textElement) {
        textElement.classList.remove("medium", "small");
        textElement.classList.add("crazy");
    }
}

small.addEventListener("click", applyStyle1);
medium.addEventListener("click", applyStyle2);
crayz.addEventListener("click", applyStyle3);
