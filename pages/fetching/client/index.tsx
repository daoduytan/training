import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import { Pagination, PERPAGE } from "../../../components";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Pokemon() {
  const [page, setPage] = useState<number>(1);

  // use swr
  const url = `/api/pokemon?page=${page}`;

  console.log({ url });
  const { data, error } = useSWR(url, fetcher);

  const handleChangePage = (value: number) => {
    console.log({ page });
    setPage(value);
  };

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

  console.log({ data });

  return (
    <div className="p-4 max-w-sm mx-auto">
      <div className="grid gap-4">
        <div className="text-4xl font-bold">Pokemon list</div>

        <div className="grid gap-4 grid-cols-2">
          {data.results.map((i) => (
            <Link key={i.id} href={`client/${i.id}`}>
              <a className="text-center border rounded grid gap-2 p-4 items-center justify-center">
                <Image width={96} height={96} src={i.sprites.front_default} />
                <div className="font-bold">{i.name}</div>
              </a>
            </Link>
          ))}
        </div>

        <Pagination
          page={page}
          total={data.count}
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
}
