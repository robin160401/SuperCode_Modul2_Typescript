const gallery = document.getElementById("gallery") as HTMLElement;

function createImg(){
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = "https://picsum.photos/200/300";
    figure.appendChild(img);
    gallery.appendChild(figure);
}

for (let i = 0; i < 3; i++){
    createImg()
}