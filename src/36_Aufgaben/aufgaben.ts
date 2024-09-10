// Aufgabe 1

interface IBook {
    author: string;
    name: string;
    publishingYear: string;
    shortDescription?: string;
    numberOfPages: number;
};

type PartialBook = Partial<IBook>;

const partialBook: PartialBook = {
    author: "David Goggins",
    name: "Can't hurt me"
};

interface IPartialBook extends Partial<IBook> {};

const partialBook2: IPartialBook = {
    name: 'Atomic habits'
};

console.log(partialBook);
console.log(partialBook2);

// Aufgabe 2

interface IBasicBook extends Omit<IBook, "publishingYear" | "shortDescription">{}

const basicBook2: IBasicBook = {
    author: "Ali Abdal",
    name: "Feel Good Productivity",
    numberOfPages: 296
};

console.log(basicBook2);

// Aufgabe 3

type BookDescription = Pick<IBook, 'name' | 'shortDescription'>;

const bookDescription: BookDescription = {
    name: "Atomic Habits",
    shortDescription: "How to build good habits and destroy the bad ones"
};

interface IBookDescription extends Pick<IBook, 'name' | 'shortDescription'> {}

const bookDescription2: IBookDescription = {
    name: "Feel Good Productivity",
    shortDescription: "How to enjoy being productive"
};

console.log(bookDescription);
console.log(bookDescription2);

// Aufgabe 4

type RequiredBook = Required<IBook>;

const requiredBook: RequiredBook = {
    author: "I dont Know",
    name: "Robin",
    publishingYear: "2029",
    numberOfPages: 890,
    shortDescription: "I really don't know"
}

interface IRequiredBook extends Required<IBook> {};

const requiredBook2: IRequiredBook = {
    author: "",
    name: "To Kill a Mockingbird",
    publishingYear: "1960",
    numberOfPages: 281,
    shortDescription: "A novel about racism and moral growth in the American South."
};

console.log(requiredBook);
console.log(requiredBook2);

// Aufgabe 5

type ReadOnlyBook = Readonly<IBook>;

const readonlyBook: ReadOnlyBook = {
    author: "Yuval Noah Harari",
    name: "Sapiens A Brief History of Humankind",
    publishingYear: "2011",
    numberOfPages: 443,
    shortDescription: "A sad story about human history"
};

interface IReadOnlyBook extends Readonly<IBook> {};

const readonlyBook2: IReadOnlyBook = {
    author: "",
    name: "To Kill a Mockingbird",
    publishingYear: "1960",
    numberOfPages: 281,
    shortDescription: "A novel about racism and moral growth in the American South."
};

console.log(readonlyBook);
console.log(readonlyBook2);

// Aufgabe 6

type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

type RealColors = Exclude<BasicColors, "BLACK" | "WHITE">;

function showColors(color: RealColors): void {
    console.log(color);
}

showColors("RED");

// Aufgabe 7

// donkey.ts

interface IDonkey {
    name: string;
    age: number;
    fluffyness: number;
    favoriteFood: string;
}

enum Donkey {
    Daisy = "Daisy",
    Gus = "Gus",
    Rosie = "Rosie",
    Coco = "Coco",
    Jasper = "Jasper"
}

const donkeyRecord: Record<Donkey, IDonkey> = {
    [Donkey.Daisy]: {
        name: Donkey.Daisy,
        age: 4,
        fluffyness: 8,
        favoriteFood: "Pizza"
    },
    [Donkey.Gus]: {
        name: Donkey.Gus,
        age: 6,
        fluffyness: 7,
        favoriteFood: "Burgers"
    },
    [Donkey.Rosie]: {
        name: Donkey.Rosie,
        age: 3,
        fluffyness: 9,
        favoriteFood: "Apples"
    },
    [Donkey.Coco]: {
        name: Donkey.Coco,
        age: 5,
        fluffyness: 6,
        favoriteFood: "Döner"
    },
    [Donkey.Jasper]: {
        name: Donkey.Jasper,
        age: 7,
        fluffyness: 5,
        favoriteFood: "Schnecken"
    }
};

console.log(donkeyRecord);

// Bonusaufgabe 1

enum Size {
    small = "small",
    medium = "medium",
    large = "large"
}

interface ISmoothie {
    name: string;
    ingredients: string[];
    size: Size;
    price: number;
}

function customizeSmoothie(basicSmoothie: ISmoothie, customizedSmoothie: Partial<ISmoothie>): ISmoothie{
    let smoothie: ISmoothie = basicSmoothie;
    if (customizedSmoothie.ingredients){
        smoothie.ingredients = customizedSmoothie.ingredients;
    }
    if (customizedSmoothie.name){
        smoothie.name = customizedSmoothie.name;
    }
    if (customizedSmoothie.price){
        smoothie.price = customizedSmoothie.price;
    }
    if (customizedSmoothie.size){
        smoothie.size = customizedSmoothie.size;
    }
    return smoothie;
}

const basicSmoothie: ISmoothie = {
    name: "Tropical Delight",
    ingredients: ["mango", "pineapple", "banana"],
    size: Size.medium,
    price: 5.99,
  };

  console.log(basicSmoothie)

  const customSmoothie = customizeSmoothie(basicSmoothie, {
    size: Size.large,
    ingredients: ["mango", "cherry"],
    name: "Hululu"
  });

  console.log(customSmoothie);

  // Bonusaufgabe 2

  