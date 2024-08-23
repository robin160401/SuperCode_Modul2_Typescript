
class Singer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Beyonce extends Singer {
    constructor(name: string) {
        super(name);
    }

    sing(): string {
        return "I'm a survivor, I'm gonna make it!";
    }
}

class FreddieMercury extends Singer {
    constructor(name: string) {
        super(name);
    }

    sing(): string {
        return "We will, we will rock you!";
    }
}

class FleetwoodMac extends Singer {
    constructor(name: string) {
        super(name);
    }

    sing(): string {
        return "I loved another women";
    }
}

class BillWithers extends Singer {
    constructor(name: string) {
        super(name);
    }

    sing(): string {
        return "There's no sunshine when shes gone. Its not warm when she`s away";
    }
}

export { Singer, Beyonce, FreddieMercury, FleetwoodMac, BillWithers };