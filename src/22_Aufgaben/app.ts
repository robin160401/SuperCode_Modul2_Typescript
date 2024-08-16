import Alien from "./classes/Alien";
import Song from "./classes/Song";
import SongWithUnknownArtist from "./classes/SongWithUnKnownAritst";
import Bevereage from "./classes/Beverage";
import {Coffee, CoffeeType} from "./classes/coffee";
import { Tea, TeaFlavor } from "./classes/Tea";
import Vocabulary from "./classes/Vocabulary";
import SpanishVocabulary from "./classes/SpanishVocabulary";

// Aufgabe 1
const alien1 = new Alien("Zorg", "green");
alien1._planet = "Mars";
alien1._galaxy = "Milky Way";

const alien2 = new Alien("Blorg", "blue");

const alien3 = new Alien("Xenon", "red");

console.log(`Alien 1: ${alien1._name}, from Planet ${alien1._planet}, in Galaxy ${alien1._galaxy}, has the Color ${alien1.getColor}`);

console.log(`Alien 3: ${alien3._name}, from Planet ${alien3._planet}, in Galaxy ${alien3._galaxy}, has the Color ${alien3.getColor}`);

console.log(`Alien 2: ${alien2._name}, from Planet ${alien2._planet}, in Galaxy ${alien2._galaxy}, has the Color ${alien2.getColor}`);

// Aufgabe 2

const song1 = new Song("Bohemian Rhapsody", "Queen");
song1._durationInSeconds = 354;

const song2 = new Song("Imagine", "John Lennon");
song2._durationInSeconds = 183;

const unknownSong = new SongWithUnknownArtist("It's a Man's Man's World");
unknownSong._durationInSeconds = 240;
unknownSong.setArtist("James Brown");

console.log(song1);
console.log(song2);
console.log(unknownSong);

// Aufgabe 3

const beverage1 = new Bevereage("Test1", 2.99);
console.log(beverage1);

const coffee = new Coffee("Test2", 3.50, CoffeeType.Espresso);
console.log(coffee.type);

const tea = new Tea("Test4", 2.75, TeaFlavor.Peppermint);
console.log(tea.flavor);

// Aufgabe 4

console.clear();

const vocabulary1 = new Vocabulary();

vocabulary1.addWord("Dog");
vocabulary1.addWord("Cat");
vocabulary1.addWord("Fish");
vocabulary1.addWord("Duck");

vocabulary1.displayAll();

const vocabulary2 = new SpanishVocabulary();

vocabulary2.addWord("Perro");
vocabulary2.addWord("Catissimo");
vocabulary2.addWord("Fishiago");
vocabulary2.addWord("Enturo");

vocabulary2.displayAll();