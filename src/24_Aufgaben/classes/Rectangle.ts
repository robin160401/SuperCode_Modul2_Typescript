import IShape from "../interfaces/IShape";

class Rectangle implements IShape {
    name: string;
    color: string;
    width: number;
    height: number;
    isround: boolean;

    constructor(name: string, color: string, width: number, height: number, isround: boolean){
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
        this.isround = isround;
    }

    draw(){
        console.log("drawing rectangle");
    }
}

export default Rectangle;