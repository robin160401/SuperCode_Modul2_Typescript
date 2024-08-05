const form = document.getElementById("form-element") as HTMLFormElement;
const rechnungsInput = document.getElementById("rechnung") as HTMLInputElement;
const personenInput = document.getElementById("personen") as HTMLInputElement;
const selectInput = document.getElementById("serviceFee") as HTMLSelectElement;
const trinkgeldText = document.getElementById("trinkgeld") as HTMLElement;
const gesamtsummeText = document.getElementById("gesamtsumme") as HTMLElement;
const pppText = document.getElementById("ppp") as HTMLElement;

function calculate(event: Event){
    event.preventDefault();
    const rechnungsbetrag = Number(rechnungsInput.value);
    const personenzahl = Number(personenInput.value);
    const serviceFee = Number(selectInput.value);
    console.log(serviceFee);

    if (serviceFee === 0){
        trinkgeldText.textContent = "Bitte wähle eine Option aus"
    } else {
        const trinkgeld = rechnungsbetrag / 100 * serviceFee;
        trinkgeldText.textContent = "Das Trinkgeld ist: " + trinkgeld.toFixed(2) + " €";
        const gesamtSumme = rechnungsbetrag + trinkgeld;
        gesamtsummeText.textContent = "Die Gesamtsumme beträgt: " + gesamtSumme.toFixed(2) + " €"
        const preisProPerson = gesamtSumme / personenzahl;
        pppText.textContent = "Der Preis pro Person ist: " + preisProPerson.toFixed(2) + " €"
    }
}
if (form){
    form.addEventListener('submit', calculate);
}

