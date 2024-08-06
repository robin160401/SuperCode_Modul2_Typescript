const infoElement = document.getElementById("info") as HTMLDivElement;
const container = document.getElementById("container") as HTMLDivElement;

if (infoElement && container){
    infoElement.innerHTML = "<h1>Hello World</h1>";
    infoElement.innerHTML += "<h2>How are you?</h2>";
    infoElement.innerHTML += "<div></div>";
    container.innerHTML = "<p>This is paragraph</p>";
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    container.appendChild(input);
}



