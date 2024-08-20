const inputElement = document.getElementById("input-add-flavor") as HTMLInputElement;
const addButton = document.getElementById("add-falvor") as HTMLButtonElement;
const removeButton = document.getElementById("delete-flavor") as HTMLButtonElement;
const checkButton = document.getElementById("check-flavor") as HTMLButtonElement;
const showButton = document.getElementById("show-price") as HTMLButtonElement;

import IceCreamPolar from "./Classes/IceCreamPolar";

const IceCreamFunction = new IceCreamPolar();

function addFlavor(event: Event){
    event.preventDefault();
    IceCreamFunction.addNewFlavor(inputElement.value);
    showFlavors();
}

function showFlavors(){
    clearPTags();
    const flavors = IceCreamFunction.listFlavors();
    flavors.forEach((flavor: string) =>{
        const pTag = document.createElement("p");
        pTag.textContent = flavor;
        document.body.appendChild(pTag);
    })
}

function removeFlavor(event: Event){
    event.preventDefault();
    const removeFlavor = IceCreamFunction.removeFlavor(inputElement.value);
    showFlavors();
}

function clearPTags() {
    const pTags = document.querySelectorAll("p");
    pTags.forEach(pTag => pTag.remove());
}

function checkIfFlavourIsAvailable(event: Event){
    clearPTags();
    const check = IceCreamFunction.isFlavorAvailable(inputElement.value);
    const pTag = document.createElement("p");
        pTag.textContent = inputElement.value;
    if (check){
        pTag.textContent += " is available"
    } else {
        pTag.textContent += " is not available"
    }
    document.body.appendChild(pTag);
}

function showPrice(event: Event){
    event.preventDefault();
    clearPTags();
    const showPrice = IceCreamFunction.getFlavorPrice(inputElement.value);
    const pTag = document.createElement("p");
    pTag.textContent = inputElement.value;
    pTag.textContent += "    " + showPrice.toString() + "€"
    document.body.appendChild(pTag);
}

addButton?.addEventListener("click", addFlavor);
removeButton?.addEventListener("click", removeFlavor);
checkButton?.addEventListener("click", checkIfFlavourIsAvailable);
showButton?.addEventListener("click", showPrice);

