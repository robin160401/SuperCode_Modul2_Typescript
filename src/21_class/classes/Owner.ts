class Owner {
    _name: string;
    _address: string;
    _postalCode: string;
    _city: string = ""

    constructor(name: string,address: string, postalCode: string){
        this._name = name;
        this._address = address;
        this._postalCode = postalCode;
    }
}

export default Owner;