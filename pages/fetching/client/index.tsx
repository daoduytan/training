import Link from "next/link";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Pokemon() {
  // use swr
  const { data, error } = useSWR("/api/pokemon", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // client side render with useEffect
  // const [loading, setLoading] = useState<boolean>(false)
  // const [pokemonData, setPokemonData] = useState<any[]>([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     setLoading(true);
  //     const data = await getPokemonData(1);
  //     setPokemonData(data);
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <h1>Loading ...</h1>;
  // }

  return (
    <div className="p-4 max-w-sm mx-auto">
      <div className="grid gap-4">
        <div className="text-4xl font-bold">Pokemon list</div>

        <div className="grid gap-4 grid-cols-2">
          {data.results.map((i) => (
            <Link key={i.id} href={`client/${i.id}`}>
              <a className="text-center border rounded grid gap-2 p-4 items-center justify-center">
                <img src={i.sprites.front_default} />
                <div className="font-bold">{i.name}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
