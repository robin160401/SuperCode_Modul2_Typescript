import Besitzer from "./Besitzer";
import Raeume from "./Raeume";

class Bauplan {
    _besitzer: Besitzer;
    _raeume: Raeume;
    _farbe: string = "weiß";
    _tiefgarage: boolean;

    constructor(besitzer: Besitzer, raeume: Raeume, tiefgarage: boolean) {
        this._besitzer = besitzer;
        this._raeume = raeume;
        this._tiefgarage = tiefgarage;
    }

    renovieren(neueFarbe: string): void {
        this._farbe = neueFarbe;
        console.log("Die neue Farbe ist ${this._farbe}")
    }
}

export default Bauplan;