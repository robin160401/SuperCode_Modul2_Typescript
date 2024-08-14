import Bauplan from "./classes/Bauplan";
import Besitzer from "./classes/Besitzer";
import Raeume, { RaeumeArten } from "./classes/Raeume";

const zimmer1 = new Raeume(2, [RaeumeArten.schlafzimmer])

const besitzer1 = new Besitzer("Hans", "Müller", 1711922262);

const haus1 = new Bauplan(besitzer1, zimmer1, false);

console.log(haus1);
haus1.renovieren("rot");
console.log(haus1);


