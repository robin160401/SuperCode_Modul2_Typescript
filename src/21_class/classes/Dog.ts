import Owner from "./Owner";

class Dog {
    private _name: string = "";
    private _age: number;
    _owner = Owner;
    _breed: string | undefined;
    _favoriteFood?: string = "";
    private _numberOfMeal: number = 0;

    // get sorgt dafür, dass wir auf privates zugreifen können
    get age(){
        return this._age;
    }

    // mit set können wir die private Eigenschaften verändern

    set age(value: number){
        this._age = value;
    }

    constructor(name: string, age: number, owner: Owner) {
        this._name = name;
        this._age = age;
        this._owner = Owner;
    }

    // Methoden

    sleep(): void {
        console.log(`${this._name} is sleeping`)
    }

}

export default Dog;