const input = document.getElementById("textInput") as HTMLInputElement;
const output = document.getElementById("output") as HTMLElement;
const button = document.getElementById("text-button") as HTMLButtonElement;

function add(){
    const text = input.value;
    const date = new Date();
    const time = date.toLocaleString();
    output.innerHTML += `<p>${text} - ${time}</p>`;
    input.value = "";
}
  
if (button) {
    button.addEventListener("click", add);
}