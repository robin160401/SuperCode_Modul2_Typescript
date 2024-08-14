enum RaeumeArten {
    schlafzimmer = "Schlafzimmer",
    wohnzimmer = "Wohnzimmer",
    kueche = "Küche",
    badezimmer = "Badezimmer"
}

class Raeume {
    _raeumeAnzahl: number;
    _rauemeArten: RaeumeArten[];

    constructor(raeumeAnzahl: number, raeumeArten: RaeumeArten[]) {
        this._raeumeAnzahl = raeumeAnzahl;
        this._rauemeArten = raeumeArten;
    }
}

export default Raeume;
export {RaeumeArten};