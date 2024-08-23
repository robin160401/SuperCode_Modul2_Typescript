class Activity {
    constructor(public name: string, private difficulty: number) {
        this.difficulty = difficulty;
    }

    get _difficulty(): number {
        return this.difficulty;
    }

    set _difficulty(value: number){
        if (value < 1 || value > 6){
            throw new Error("Difficulty must be between 1 and 6")
        }
        this.difficulty = value;
    }

    execute(): void {
        console.log(`Executing ${this.name}...`);
    }
}

export default Activity;