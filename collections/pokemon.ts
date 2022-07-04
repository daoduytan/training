interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemon {
  id: number;
  name: string;
  types: IPokemonType[];
  sprites: {
    [key: string]: string | null | object;
  };
}
