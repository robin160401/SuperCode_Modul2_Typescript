import Activity from "./Activity";

class Running extends Activity {
    constructor(name: string, difficulty: number, public  distance: number) {
        super(name, difficulty);
    }

    private getWarmUpOrCoolDownTime(): number {
        if (this.distance > 10) {
            return 5;
        } else if (this.distance >= 7) {
            return 4;
        } else if (this.distance >= 4.5) {
            return 3;
        } else if (this.distance >= 3) {
            return 2;
        } else {
            return 0;
        }
    }

    public warmUp(): void {
        const time = this.getWarmUpOrCoolDownTime();
        if (time > 0) {
            console.log(`Warming up for ${time} minutes`);
        }
    }

    public coolDown(): void {
        const time = this.getWarmUpOrCoolDownTime();
        if (time > 0) {
            console.log(`Cooling down for ${time} minutes`);
        }
    }
}

export default Running;
