const button = document.getElementById("button") as HTMLButtonElement;
const selectList = document.getElementById("farbeAuswahlen") as HTMLSelectElement;
const body = document.getElementById("body") as HTMLBodyElement;

function changeBackgroundColor(event: Event): void {
    event.preventDefault();
    let color: string = selectList.value.toString();
    let colorWithoutSpaces: string[] = [];
    for (let i = 0; i < color.length; i++){
        if (color[i] != " "){
            colorWithoutSpaces.push(color[i]);
        }
    }
    const selectedColor:string = colorWithoutSpaces.join("");
    console.log(selectedColor);
    body.style.backgroundColor = selectedColor;
}

button.addEventListener("click", changeBackgroundColor);