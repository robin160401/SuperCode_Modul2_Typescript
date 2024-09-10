type Abilitie = {
    name: string;
}

type Sprite = {
    front_default: string;
}

type TypePok = {
    name: string;
    url: string;
}

type Types = {
    slot: number;
    type: TypePok;
}

type Stats = {
    base_stat: number;
}


export interface IPokemonInfos {
    abilities: Abilitie[];
    types: Types[];
    sprites: Sprite;
    weight: number;
    height: number;
    stats: Stats[];
}
