// Aufgabe 1

const button = document.getElementById("button") as HTMLButtonElement;
const selectList = document.getElementById("farbeAuswahlen") as HTMLSelectElement;
const listElements = document.getElementsByTagName("option") as HTMLCollectionOf<HTMLOptionElement>;

function removeListElement(event: Event): void {
    event.preventDefault();
    const index = selectList.selectedIndex;
    listElements[index].remove();
}

button.addEventListener("click", removeListElement);


