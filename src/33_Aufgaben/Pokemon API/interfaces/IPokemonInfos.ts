export type Abilitie = {
    name: string;
    url: string;
}

interface IPokemonInfos {
    abilities: Abilitie[];
    base_experience: number;
    height: number;
    weight: number;

}

export default IPokemonInfos;