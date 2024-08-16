import Car from "./Car";

class Driver {
  _fistName: string;
  _lastName: string;
  _age: number;
  _car: Car;

  constructor(firstName: string, lastName: string, age: number, car: Car) {
    this._fistName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._car = car;
  }
  getDriverDetails(): string {
    return `${this._fistName} ${this._lastName}, age: ${
      this._age
    }, car: ${this._car.getCarDetails()}`;
  }
}

export default Driver;