import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { PokemonDetail } from "../../../components/page-components";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailPokemon() {
  const router = useRouter();
  const id = router.query.id;

  const { data, error } = useSWR(`/api/pokemon/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  return (
    <div>
      <div className="p-4">
        <Link href=".">
          <a className="mr-2">Back</a>
        </Link>
      </div>
      <PokemonDetail pokemon={data} />
    </div>
  );
}
