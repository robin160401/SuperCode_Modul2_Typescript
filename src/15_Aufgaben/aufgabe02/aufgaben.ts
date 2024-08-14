const form = document.getElementById("form1") as HTMLFormElement;
const surname = document.getElementById("vorname") as HTMLInputElement;
const lastname = document.getElementById("nachname") as HTMLInputElement;
const country = document.getElementById("land") as HTMLSelectElement;

type simplePerson = {
    vorname: string,
    nachname: string,
    land: string
}

function showFormValues(event: Event): void {
    event.preventDefault();
    const person: simplePerson = {
        vorname: surname.value,
        nachname: lastname.value,
        land: country.value
    }
    console.log(person);
}

form.addEventListener("submit", showFormValues);

