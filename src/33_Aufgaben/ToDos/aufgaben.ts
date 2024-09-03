import IToDo from "./interfaces/IToDo";

const liste = document.getElementById("liste") as HTMLUListElement;
const submit = document.getElementById("submit") as HTMLButtonElement;
const input = document.getElementById("input") as HTMLInputElement;

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response: Response) => {
    if (!response.ok){
        console.log("Error");
    }
    return response.json();
})
.then((toDos: IToDo[]) => {
    const sortedToDos = toDos.sort((a, b) => a.title.localeCompare(b.title));
    sortedToDos.forEach((toDo: IToDo) => {
        const title = document.createElement("p");
        title.textContent = toDo.title;
        if (toDo.completed){
            title.style.color = "green";
        } else {
            title.style.color = "red";
        }
        liste.appendChild(title);
    })
})

submit.addEventListener("click", ()=> {
    liste.textContent = "";
    fetch("https://jsonplaceholder.typicode.com/todos")
.then((response: Response) => {
    if (!response.ok){
        console.log("Error");
    }
    return response.json();
})
.then((toDos: IToDo[]) => {
    const sortedToDos = toDos.sort((a, b) => a.title.localeCompare(b.title));
    sortedToDos.forEach((toDo: IToDo) => {
        if (toDo.title.includes(input.value.toString())){
            const title = document.createElement("p");
            title.textContent = toDo.title;
            if (toDo.completed){
                title.style.color = "green";
            } else {
                title.style.color = "red";
            }
            liste.appendChild(title);
        }
    })
})
})

// Aufgabe 2


