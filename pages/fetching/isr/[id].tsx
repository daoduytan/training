import Head from "next/head";
import Link from "next/link";
import { PokemonDetail } from "../../../components/page-components";
import { getPokemonData, getPokemonDetail } from "../../../utils/get-pokemon";

interface Props {
  data: any;
}
export default function PokemonDetailPage({ data }: Props) {
  return (
    <div>
      <Head>
        <title>{data.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="p-4">
        <Link href=".">
          <a className="mr-2">Back</a>
        </Link>
      </div>

      <PokemonDetail pokemon={data} />
    </div>
  );
}

export async function getStaticProps(ctx) {
  console.log({ ctx });

  const url = `https://pokeapi.co/api/v2/pokemon/${ctx.params.id}`;
  const data = await getPokemonDetail(url);

  // Fetch data from external API
  // Pass data to the page via props
  return { props: { data } };
}

export async function getStaticPaths() {
  const data = await getPokemonData(1);

  // Get the paths we want to pre-render based on posts
  const paths = data.results.map((item: any) => {
    console.log({ item: item.id });
    return { params: { id: item.id.toString() } };
  });

  console.log({ paths });

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
