import Bevereage from "./Beverage";

enum TeaFlavor {
    "Green",
    "Black",
    "Chai",
    "Peppermint"
}

class Tea extends Bevereage {
    flavor: TeaFlavor;

    constructor(name: string, price: number, flavor: TeaFlavor) {
        super(name, price);
        this.flavor = flavor;
    }
}

export {TeaFlavor, Tea};