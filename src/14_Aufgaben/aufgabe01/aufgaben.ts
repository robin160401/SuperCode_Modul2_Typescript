const inputField = document.getElementById("inputText") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
const list = document.getElementById("myList") as HTMLUListElement;

function createListElements(event: Event){
    event.preventDefault();
    const item: string = inputField.value.toString().trim();
    if (item === ""){
        return 1;
    } else {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    }
    inputField.value = "";
}

button.addEventListener("click", createListElements);