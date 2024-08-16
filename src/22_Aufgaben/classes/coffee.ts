import Bevereage from "./Beverage";

enum CoffeeType {
    "Espresso",
    "Latte",
    "Cappucciono",
    "Americano"
}

class Coffee extends Bevereage {
    type: CoffeeType;

    constructor(name: string, price: number, type: CoffeeType){
        super(name, price);
        this.type = type;
    }
}

export {Coffee, CoffeeType};
