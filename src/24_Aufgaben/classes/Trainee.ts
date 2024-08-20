import IEmployee from "../interfaces/IEmployee";

class Trainee implements IEmployee {
    name: string;
    age: number;
    position: string = "Trainee";

    constructor(name: string, age: number, startDate: Date){
        this.name = name;
        this.age = age;
        this.startDate = startDate;
    }
    startDate: Date;
    getYearsOfService(): number {
        const todayDate = new Date();
        const startYear = this.startDate.getFullYear();
        const todayYear = todayDate.getFullYear();

        return todayYear - startYear;
    }
}

export default Trainee;