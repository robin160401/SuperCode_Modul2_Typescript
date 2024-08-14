class Besitzer {
    _vorName: string;
    _nachName: string;
    _handyNummer: number;

    constructor(vorName: string, nachName: string, handyNummer: number) {
        this._vorName = vorName;
        this._nachName = nachName;
        this._handyNummer = handyNummer;
    }

    printInfo(): void {
        console.log(`Der besitzer ist ${this._vorName} ${this._nachName} und die Handynummer lautet ${this._handyNummer}`);
    }
};

export default Besitzer;