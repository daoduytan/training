export async function getPathPokemon(page: number) {
  return fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20").then(
    (res) => res.json()
  );
}

export async function getPokemonDetail(url: string) {
  return fetch(url).then((res) => res.json());
}

export async function getPokemonData(page: number) {
  const pokemonList = await getPathPokemon((page - 1) * 20);

  console.log(pokemonList);

  const pokemonData = await Promise.all(
    pokemonList.results.map((i) => getPokemonDetail(i.url))
  );

  return {
    ...pokemonList,
    results: pokemonData,
  };
}
