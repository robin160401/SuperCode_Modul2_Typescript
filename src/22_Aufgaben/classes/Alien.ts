class Alien {
    public _name: string;
    public _planet: string;
    public _galaxy: string;
    private _color: string;

    get getColor(){
       return this._color;
    }

    constructor(name: string, color: string){
        this._name = name;
        this._color = color;
        this._planet = "";
        this._galaxy = "";
    }
}

export default Alien;