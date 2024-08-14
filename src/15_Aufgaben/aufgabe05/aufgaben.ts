const input = document.getElementById("item") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
const list = document.getElementById("list") as HTMLDivElement;

type ToDoThings = {
    item: string;
    finished: boolean;
    id: number;
};

const todos: ToDoThings[] = [];

function main(event: Event): void {
    event.preventDefault();
    const inputValue = input.value.trim();
    input.value = "";
    if (inputValue !== "") {
        const ToDoItem: ToDoThings = {
            item: inputValue,
            finished: false,
            id: todos.length,
        };
        todos.push(ToDoItem);
        printToDos();
    }
}

function printToDos(): void {
    list.innerHTML = "";
    todos.forEach((thing: ToDoThings, index: number) => {
        const container = document.createElement("div") as HTMLDivElement;
        const check = document.createElement("input") as HTMLInputElement;
        const pTag = document.createElement("p") as HTMLParagraphElement;
        const remove = document.createElement("button") as HTMLButtonElement;

        pTag.textContent = thing.item;
        remove.textContent = "❌";
        check.type = "checkbox";
        check.checked = thing.finished;

        check.addEventListener("change", () => {
            thing.finished = check.checked;
            printToDos(); // Update the display when checkbox state changes
        });

        if (thing.finished) {
            pTag.style.textDecoration = "line-through";
        }

        remove.addEventListener("click", () => {
            if (thing.finished) {
                todos.splice(index, 1);
                printToDos();
            } else {
                window.alert("Du hast diese Aufgabe noch nicht erledigt");
            }
        });

        container.appendChild(check);
        container.appendChild(pTag);
        container.appendChild(remove);
        list.appendChild(container);
    });
}

button.addEventListener("click", main);


