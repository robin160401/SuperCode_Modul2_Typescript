import IPokemon from "./interfaces/IPokemon";
import IPokemonInfos from "./interfaces/IPokemonInfos";

const liste = document.getElementById("liste") as HTMLUListElement;
const submit = document.getElementById("submit") as HTMLButtonElement;
const input = document.getElementById("input") as HTMLInputElement;
const mainContainer = document.getElementById("container") as HTMLDivElement;

fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response: Response) => {
        if (!response.ok) {
            console.log("Error");
            return;
        }
        return response.json();
    })
    .then((data) => {
        const pokemons: IPokemon[] = data.results;
        const sortedPokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name));
        sortedPokemons.forEach((pokemon: IPokemon) => {
            const title = document.createElement("p");
            title.textContent = pokemon.name;
            liste.appendChild(title);
        });
    });

submit.addEventListener("click", () => {
    liste.textContent = "";
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response: Response) => {
            if (!response.ok) {
                console.log("Error");
                return;
            }
            return response.json();
        })
        .then((data) => {
            const pokemons: IPokemon[] = data.results;
            const sortedPokemons = pokemons.sort((a, b) => a.name.localeCompare(b.name));
            sortedPokemons.forEach((pokemon: IPokemon) => {
                if (pokemon.name.includes(input.value)) {
                    const title = document.createElement("p");
                    const buttonForInfos = document.createElement("button");
                    title.textContent = pokemon.name;
                    buttonForInfos.textContent = "More Information";
                    liste.appendChild(title);
                    liste.appendChild(buttonForInfos);

                    buttonForInfos.addEventListener("click", () => {
                        liste.textContent = "";
                        fetch(pokemon.url)
                            .then((response: Response) => {
                                if (!response.ok) {
                                    console.log("Error");
                                    return;
                                }
                                return response.json();
                            })
                            .then((pokemonInfos: IPokemonInfos) => {
                                const abilitiesArray = pokemonInfos.abilities.map(
                                    (abilityInfo: any) => abilityInfo.ability.name
                                );
                                const cardContainer = document.querySelector(".pokemonCard")!.cloneNode(true) as HTMLElement;
                                (cardContainer.querySelector("#name") as HTMLElement).textContent = pokemon.name;
                                (cardContainer.querySelector("#abilitie") as HTMLElement).textContent = "Abilities: " + abilitiesArray.join();
                                mainContainer.appendChild(cardContainer);
                            })
                    });
                }
            });
        });
});