// // Aufgabe 1

// type Apple = {
//     color: string;
//     size: string;
//     isSweet: boolean;
// };
  
// let redApple: Apple = { color: 'red', size: 'big', isSweet: true };
// let greenApple: Apple = { color: 'green', size: 'small', isSweet: false };
// let yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: false };
// let pinkApple: Apple = {color: 'pink', size: 'medium', isSweet: true};
// let apples: Apple[] = [redApple, greenApple, yellowApple];
// apples.push(pinkApple);

// for (let i = 0; i < apples.length; i++){
//     console.log(apples[i].size);
// }

// apples.forEach((apple) => {
//     console.log(apple.color);
// })
// console.log(apples.length);
// apples.push(pinkApple);


// // Aufgabe 2

// type Pet = {
//     tiertyp: string;
//     namen: string[];
// };
  
// let unsereHaustiere: Pet[] = [
// {
//     tiertyp: 'Katze',
//     namen: ['Gipsy', 'Nala', 'Dinky']
// },
// {
//     tiertyp: 'Hunde',
//     namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
// }
// ];

// console.log(unsereHaustiere[0].namen[1]);
// console.log(unsereHaustiere[1].namen[2]);

// unsereHaustiere[0].namen[2] = "Pinky";
// unsereHaustiere[1].namen[2] = "Snoopy";

// unsereHaustiere.forEach((tier) => {
// console.log(tier.namen);
// })

// let hamster: Pet = {
//     tiertyp: 'Hamster',
//     namen: ['Shawn', 'Dilan', 'Smokey']
// }

// unsereHaustiere.push(hamster);
// console.log(unsereHaustiere);

// // Aufgabe 3

// type Lager = {
//     schreibtisch: {
//         schublade: string;
//     };
//     schrank: {
//         "Obere Schublade": {
//             Ordner1: string;
//             Ordner2: string;
//         };
//         "Untere Schublade": string;
//     };
// };

// let unserLager: Lager = {
//     schreibtisch: {
//         schublade: "Hefter"
//     },
//     schrank: {
//         "Obere Schublade": {
//             Ordner1: "Dokumente",
//             Ordner2: "Geheimnisse"
//         },
//         "Untere Schublade": "Cola"
//     }
// };

// console.log(unserLager.schrank["Obere Schublade"].Ordner2);
// console.log(unserLager.schrank["Untere Schublade"]);
// console.log(unserLager.schreibtisch.schublade);

// // Aufgabe 4

// type Musik = {
//     kunstler: string;
//     title: string;
//     release_jahr: number;
//     formate: string[];
//     gold: boolean;
//   };
  
//   let meineTopVier: Musik[] = [
//     {
//       kunstler: 'The Beatles',
//       title: 'Abbey Road',
//       release_jahr: 1969,
//       formate: ['LP', 'CD', 'MC', 'Download'],
//       gold: true
//     },
//     {
//       kunstler: 'Pink Floyd',
//       title: 'Dark Side of the Moon',
//       release_jahr: 1978,
//       formate: ['CS', 'CD', 'LP', 'Download'],
//       gold: true
//     },
//     {
//       kunstler: 'Led Zeppelin',
//       title: 'Led Zeppelin IV',
//       release_jahr: 1971,
//       formate: ['CS', 'LP', 'Download'],
//       gold: true
//     },
//     {
//       kunstler: 'Metallica',
//       title: 'Kill ’Em All und Ride the Lightning',
//       release_jahr: 1983,
//       formate: ['LP', 'CD', 'MC', 'Download'],
//       gold: true
//     }
//   ];

//   console.log(meineTopVier[0].kunstler);
//   console.log(meineTopVier[1].gold);
//   console.log(meineTopVier[2].release_jahr);
//   console.log(meineTopVier[3].release_jahr);
//   console.log(meineTopVier[3].formate[1]);
//   console.log(meineTopVier[3].title.slice(17, 21));

//   let musik: Musik = {
//     kunstler: "FleetWood Mac",
//     title: "Rumours",
//     release_jahr: 1977,
//     formate: ['LP', 'CD', 'MC', 'Download'],
//     gold: true
//   }

//   meineTopVier.push(musik);

//   // Aufgabe 5

//   type PeriodActive = {
//     start: number;
//     end: number | string;
//     extra?: number;
// };

// type Singer = {
//     name: string;
//     country: string;
//     period_active: PeriodActive;
//     genre: string;
// };

// const singers: Singer[] = [
//     { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
//     { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
//     { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
//     { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
//     { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
//     { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
//     { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
//     { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
// ];

// const copiedSingers = [...singers];

// const sortedSingersNames = copiedSingers.sort((a, b) => {
//     const aName = a.name;
//     const bName = b.name;
//     return aName.localeCompare(bName);
// });
// console.log(sortedSingersNames);

// const sortedCarreer = copiedSingers.sort((a, b) => {
//     const aBegin = a.period_active.start;
//     const bBegin = b.period_active.start;
//     return aBegin - bBegin;
// });

// console.log(sortedCarreer)

// Bonusaufgabe 

type PeriodActiveTwo = {
    start: number;
    end: number | string;
    extra?: number;
};
  
type SingerTwo = {
    name: string;
    country: string;
    period_active: PeriodActiveTwo;
    genre: string;
};
  
const singersTwo: SingerTwo[] = [
    { name: 'The Beatles', 
      country: 'United Kingdom',
      period_active: { start: 1960, end: 1970 },
      genre: 'Rock / Pop' },
    {
      name: 'Elvis Presley',
      country: 'United States',
      period_active: { start: 1954, end: 1977 },
      genre: 'Rock and roll'
    },
    {
      name: 'Michael Jackson',
      country: 'United States',
      period_active: { start: 1964, end: 2009 },
      genre: 'Pop / Rock / Dance / Soul / R&B'
    },
    {
      name: 'Elton John',
      country: 'United Kingdom',
      period_active: { start: 1964, end: 'present' },
      genre: 'Pop / Rock'
    },
    {
      name: 'Madonna',
      country: 'United States',
      period_active: { start: 1979, end: 'present' },
      genre: 'Pop / Dance / Electronica'
    },
    {
      name: 'Led Zeppelin',
      country: 'United Kingdom',
      period_active: { start: 1968, end: 1980 },
      genre: 'Hard rock / Blues rock / Folk rock'
    },
    {
      name: 'Rihanna',
      country: 'United States',
      period_active: { start: 2005, end: 'present' },
      genre: 'R&B / Pop / Dance / Hip-hop'
    },
    {
      name: 'Pink Floyd',
      country: 'United Kingdom',
      period_active: { start: 1965, end: 1996, extra: 2014 },
      genre: 'Progressive rock / Psychedelic rock'
    }
];

const table = document.getElementById("table-container")
const inputField = document.getElementById("searchInput") as       HTMLInputElement;
const searchButton = document.getElementById("search-button") as HTMLButtonElement;
const name = document.createElement("h3") as HTMLElement;
const country = document.createElement("h3") as HTMLElement; 
const period = document.createElement("h3") as HTMLElement;
const genre = document.createElement("h3") as HTMLElement;

name.textContent = "Name";
country.textContent = "Country";
period.textContent = "Period Time";
genre.textContent = "Genre";
table!.style.display = "flex";
table?.appendChild(name);
table?.appendChild(country);
table?.appendChild(period);
table?.appendChild(genre);

function search(event: Event){
event.preventDefault();
name.innerHTML = "";
country.innerHTML = "";
period.innerHTML = "";
genre.innerHTML = "";
singersTwo.forEach((singer) => {
    if (singer.name.toLowerCase().includes(inputField.value.toLowerCase())){
        console.log(singer);
        const bandSinger = document.createElement("p");
        const countrySinger = document.createElement("p");
        const periodSinger = document.createElement("p");
        const genreSinger = document.createElement("p");

        bandSinger.textContent = singer.name;
        periodSinger.textContent = singer.period_active.start.toString() + " - " + singer.period_active.end.toString();
        countrySinger.textContent = singer.country;
        genreSinger.textContent = singer.genre;

        name.appendChild(bandSinger);
        country.appendChild(countrySinger);
        period.appendChild(periodSinger);
        genre.appendChild(genreSinger);
        }
    })
  }

  searchButton.addEventListener("click", search);

