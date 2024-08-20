import IEmployee from "../interfaces/IEmployee";

class Manager implements IEmployee {
    name: string;
    age: number;
    position: string;
    private assignedEmployees: IEmployee[] = [];

    constructor (name: string, age: number, position: string, startDate: Date){
        this.name = name;
        this.age = age;
        this.position = position;
        this.startDate = startDate;
    }
    startDate: Date;
    getYearsOfService(): number {
        throw new Error("Method not implemented.");
    }

    addSubordinate(subordinate: IEmployee): void {
        this.assignedEmployees.push(subordinate);
    }
}

export default Manager;