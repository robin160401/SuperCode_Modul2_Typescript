import IEmployee from "../interfaces/IEmployee";

class Subordinate implements IEmployee {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string, startDate: Date){
        this.name = name;
        this.age = age;
        this.position = position;
        this.startDate = startDate;
    }
    startDate: Date;
    getYearsOfService(): number {
        throw new Error("Method not implemented.");
    }
}

export default Subordinate;