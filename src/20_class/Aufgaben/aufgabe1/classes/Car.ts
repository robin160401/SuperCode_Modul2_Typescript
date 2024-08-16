class Car {
    _brand: string;
    _constructionYear: number;
    _currentSpeed?: number = 0;
  
    constructor(brand: string, constructionYear: number) {
      this._brand = brand;
      this._constructionYear = constructionYear;
    }
    getCarDetails(): string {
      return `${this._brand}, build: ${this._constructionYear}`;
    }
  }
  
  export default Car;