import IPokemon from "./interfaces/IPokemon";
import { IPokemonInfos } from "./interfaces/IPokemonInfos";
const submit = document.getElementById("submit") as HTMLButtonElement;
const input = document.getElementById("input") as HTMLInputElement;
const mainContainer = document.getElementById("container") as HTMLDivElement;

submit.addEventListener("click", (event: Event) => {
    event.preventDefault();
    clearPokemonCards();
    fetchstuff();
});


fetchstuff();

    function fetchstuff(){
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
                fetch(pokemon.url)
                    .then((response: Response) => {
                        if (!response.ok) {
                            throw new Error ("Somethig went wrong fetiching the data")
                        }
                        return response.json();
                    })
                    .then((pokemonInfos: IPokemonInfos) => {
                        const backgroundImage = pokemonInfos.sprites.front_default;
                        let pokemonName = pokemon.name;
                        let pokemonNameArray = pokemonName.split("");
                        pokemonNameArray[0] = pokemonNameArray[0].toUpperCase();
                        pokemonName = pokemonNameArray.join("");
                        const abilitiesArray = pokemonInfos.abilities.map(
                            (abilityInfo: any) => abilityInfo.ability.name
                            );
                        const cardContainer = document.querySelector(".pokemonCard")!.cloneNode(true) as HTMLElement;
                        (cardContainer.querySelector("#name") as HTMLElement).textContent = pokemonName;
                        (cardContainer.querySelector("#abilitie1") as HTMLElement).textContent = abilitiesArray[0];
                        (cardContainer.querySelector("#abilitie2") as HTMLElement).textContent = abilitiesArray[1];
                        (cardContainer.querySelector("#img") as HTMLImageElement).src = backgroundImage;
                        (cardContainer.querySelector("#familyHeightWeight") as HTMLImageElement).textContent = `${pokemonName} is ${pokemonInfos.height / 10} meters tall and has a weight of ${pokemonInfos.weight / 10}kg`;
                        (cardContainer.querySelector("#kp") as HTMLElement).textContent = pokemonInfos.stats[0].base_stat.toString() + " HP";                            cardContainer.setAttribute("id", "check");
                        mainContainer.appendChild(cardContainer);
                        switch(pokemonInfos.types[0].type.name) {
                            case "fire":
                                cardContainer.style.backgroundColor = "red";
                                break;
                            case "posion":
                                cardContainer.style.backgroundColor = "green";                                    
                                break;
                            case "water":
                                cardContainer.style.backgroundColor = "blue";
                                break;
                            case "flying":
                                cardContainer.style.backgroundColor = "darkgreen";
                                break;
                            case "normal":
                                cardContainer.style.backgroundColor = "grey";
                                break;
                            case "grass":
                                cardContainer.style.backgroundColor = "green";
                                break;
                            case "fighting":
                                cardContainer.style.backgroundColor = "white";
                                break;
                            case "electric":
                                cardContainer.style.backgroundColor = "yellow";
                                break;
                            case "steel":
                                cardContainer.style.backgroundColor = "silver";
                                break;
                            case "ground":
                                cardContainer.style.backgroundColor = "brown";
                                break;
                            case "rock":
                                cardContainer.style.backgroundColor = "grey";
                                break;
                            case "psychic":
                                cardContainer.style.backgroundColor = "purple";
                                break;
                            case "ice":
                                cardContainer.style.backgroundColor = "lightblue";
                                break;
                            case "bug":
                                cardContainer.style.backgroundColor = "orange";
                                break;
                            case "ghost":
                                cardContainer.style.backgroundColor = "lightgrey";
                                break;
                            case "steel":
                                cardContainer.style.backgroundColor = "green";
                                break;
                            case "dragon":
                                cardContainer.style.backgroundColor = "green";
                                break;
                            case "dark":
                                cardContainer.style.backgroundColor = "black";
                                cardContainer.style.color = "white";
                                break;
                            case "fairy":
                                cardContainer.style.backgroundColor = "pink";
                                break;
                            default:
                                break;
                        }
                        input.value = "";
                    })
                    .catch((error) => {
                        console.error("An Error occurred while fetching data:", error);
                    }) 
                                 
            }
        });
    });
    }

    function clearPokemonCards() {
        const pokemonCards = document.querySelectorAll("#check");
        pokemonCards.forEach(pokemonCard => pokemonCard.remove());
      }

