export interface iPokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        other: { dream_world: { front_default: string } };
    };
}

export interface iNavbar {
    path: string;
    label: string;
}
