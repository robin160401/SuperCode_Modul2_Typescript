function changeBackgroundColor(): void {
  const elements = document.getElementsByClassName("example");

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLElement;
    if (element.style.backgroundColor === "") {
      element.style.backgroundColor = "orange";
    } else {
      element.style.backgroundColor = "";
    }
  }
}

const button = document.getElementById("button") as HTMLButtonElement;
if (button) {
  button.addEventListener("click", changeBackgroundColor);
}