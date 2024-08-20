
class PriceAndFlavor {
    flavor: string;
    price: number;

    constructor (flavor: string, price: number){
        this.flavor = flavor;
        this.price = price;
    }
}

interface IIceCreamService {
    flavors: PriceAndFlavor[];
    scoops: number;

    listFlavors(): string[];
    orderIceCream(flavor: string, scoops:number): string;
    addNewFlavor(flavor: string): void;
    removeFlavor(flavor: string): void;
    isFlavorAvailable(flavor: string): boolean;
    getFlavorPrice(flavor: string): number;
}

export type {IIceCreamService};
export default PriceAndFlavor;