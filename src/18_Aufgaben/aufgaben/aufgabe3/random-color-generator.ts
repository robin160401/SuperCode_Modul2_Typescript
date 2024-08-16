import randomColor from "./special-color";

function randomColorGenerator(){
    const colors = Object.values(randomColor);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export default randomColorGenerator;