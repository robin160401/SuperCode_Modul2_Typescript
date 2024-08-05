// Aufgabe 1

let starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hamill"];

let starWarsActors: [string, string][] = [
    ["Luke Skywalker", "Mark Hamill"],
    ["Darth Vader", "James Earl Jones"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"],
    ["Princess Leia", "Carrie Fisher"]
];

for (let i = 0; i < starWarsActors.length; i++){
    console.log(starWarsActors[i][0] + " wird gespielt von " + starWarsActors[i][1]);
}

// Aufgabe 2

type Employee = [number, string, string, number];

const employees: Employee[] = [
    [1, "Peter Röckinger", "Hygienekonzepte", 50000],
    [2, "Ruth Schültken", "Marketing", 55000],
    [3, "Regina Schlereth", "Development", 60000],
    [4, "Anna Schmidt", "Personal", 52000],
    [5, "Thomas Müller", "Raumdeuter", 11000000],
];

employees.forEach((employee) => {
    console.log("Nummer: " + employee[0] + " Name: " + employee[1] + " Abteilung: " + employee[2] + " Gehalt: " + employee[3]);
});

// Aufgabe 3

enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

for (const day in Weekday) {
    console.log(day);
}

enum Month {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}

for (const month in Month) {
    console.log(month);
}

// Aufgabe 4
