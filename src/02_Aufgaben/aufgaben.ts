// Aufgabe 01
const firstName: string = "Robin";
const lastName: string = "Stumpf";

console.log(firstName.length);
console.log(lastName.length);

const fullName: string = firstName.concat(lastName);

console.log(fullName.length);

// Aufgabe 02

const earthQuote: string = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(earthQuote.indexOf("h"));
console.log(earthQuote.search("Earth"));
console.log(earthQuote.search("moon"));

//Aufgabe 03

let oceanQuote = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(oceanQuote.search(";"));
console.log(oceanQuote.search("green"));
console.log(oceanQuote.search("blue"));

// Aufgabe 04

const susisStatus = 'Susi is going to codingschool';

console.log(susisStatus.slice(0, 4));
console.log(susisStatus.slice(5, 7));
console.log(susisStatus.slice(5, 29));
console.log(susisStatus.slice(23, 29));
console.log(susisStatus.slice(0, 8) + susisStatus.slice(23, 29));

//Aufgabe 05

const susi = susisStatus.substring(0, 4);
const is = susisStatus.substring(5, 7);
const school = susisStatus.substring(23, 29);
const susiIsSchool = susisStatus.substring(0, 8) + susisStatus.substring(23, 29);

document.open()
document.write(susi + "<br>")
document.write(is + "<br>")
document.write(school + "<br>")
document.write(susiIsSchool + "<br>")


// Aufgabe 06

const samisStatus = 'Sam is going to codingschool';

const sam = samisStatus.substr(0, 4);
const is2 = samisStatus.substr(4, 3);
const school2 = samisStatus.substr(22, 29);
const samIsSchool = samisStatus.substr(0, 7) + susisStatus.substr(23, 29);

document.write(sam + "<br>")
document.write(is2 + "<br>")
document.write(school2 + "<br>")
document.write(samIsSchool + "<br>")

//Aufgabe 07

let samsStatus: string = 'Sam is good at codingschool';

samsStatus = samsStatus.replace("codingschool", "school");

document.write(samsStatus.replace("good", "bad") + "<br>");
document.write(samsStatus.replace("Sam", "Susi") + "<br>");
document.write(samsStatus.replace("school", "tennis") + "<br>");

//Aufhabe 08

document.write(samsStatus.toUpperCase() + "<br>");
document.write(samsStatus.toLowerCase() + "<br>");

//Aufgabe 09

const infoAboutSam = "Sam is going to school";
const susi2 = "Susi";
const and = " and ";

document.write(infoAboutSam.replace("school", "school and to the movie theater") + "<br>");
document.write(infoAboutSam.replace("school", "the movie theater") + "<br>");
document.write(susi2.concat(and) + infoAboutSam.replace("is", "are") + "<br>");

// Aufgabe 01

let num = 321;
let n = num.toFixed(2);

console.log(n);

// Aufgabe 02

let test = 321;
let a = test.toString();
let b = test.toString(2);
let c = test.toString(8);
let d = test.toString(16);

console.log(a);
console.log(b);
console.log(d);
console.log(a);

// Aufgabe 03

const x = "999";
const y = Number(x);

console.log(y);
