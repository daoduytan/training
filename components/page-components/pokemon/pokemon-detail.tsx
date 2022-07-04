import { IPokemon } from "../../../collections";

interface Props {
  pokemon: IPokemon;
}
export const PokemonDetail = ({ pokemon }: Props) => {
  return (
    <div className="text-center grid gap-10 max-w-sm p-6 mx-auto">
      <div className="font-bold text-4xl">{pokemon.name}</div>

      <div>
        <div className="font-bold">Types:</div>
        {pokemon.types.map((i) => {
          return <div key={i.slot}>{i.type.name} </div>;
        })}
      </div>

      <div className="grid gap-4">
        <div className="font-bold">Imgs:</div>
        <div className="grid gap-4 grid-cols-2">
          {Object.keys(pokemon.sprites).map((key: string) => {
            let src = pokemon.sprites[key];
            src = typeof src === "string" ? src : null;
            if (!src) {
              return null;
            }
            return (
              <div
                className="border flex items-center justify-center"
                key={key}
              >
                <img src={src} alt={pokemon.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
