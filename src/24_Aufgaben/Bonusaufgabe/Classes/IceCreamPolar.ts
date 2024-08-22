import { IIceCreamService } from "../Interfaces/IIcecreamservice";
import PriceAndFlavor from "../Interfaces/IIcecreamservice";

class IceCreamPolar implements IIceCreamService {
    flavors: PriceAndFlavor[] = [];
    scoops: number = 0;

    listFlavors(): string[] {
        const arrayOfFlavors: string[] = [];
        this.flavors.forEach((flavor: PriceAndFlavor) => {
            arrayOfFlavors.push(flavor.flavor);
        })
        return arrayOfFlavors;
    }
    orderIceCream(flavor: string, scoops: number): string {
        if (this.isFlavorAvailable(flavor)){
            this.scoops += scoops;
            return "order confirmed";
        } else {
            return "order failed"
        }
    }
    addNewFlavor(flavor: string): void {
        const newFlavor = new PriceAndFlavor(flavor, 2);
        this.flavors.push(newFlavor);
    }
    removeFlavor(flavor: string): void {
        this.flavors = this.flavors.filter(ice => ice.flavor !== flavor);
    }
    isFlavorAvailable(flavor: string): boolean {
        for (let i = 0; i < this.flavors.length; i++) {
            if (this.flavors[i].flavor === flavor) {
                return true;
            }
        }
        return false;
    }
    getFlavorPrice(flavor: string): number {
        const priceFind = this.flavors.find(price => price.flavor === flavor);
        if (priceFind){
            return priceFind.price;
        } else{
            return 0;
        }
    }
    
}

export default IceCreamPolar;