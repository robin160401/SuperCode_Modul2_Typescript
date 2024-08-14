const button = document.getElementById("button") as HTMLButtonElement;
const elements = document.getElementsByClassName("example");

function changeBackgroundColor(): void {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLElement;
    if (element.style.backgroundColor === "") {
      element.style.backgroundColor = "orange";
    } else {
      element.style.backgroundColor = "";
    }
  }
}

if (button) {
  button.addEventListener("click", changeBackgroundColor);
}