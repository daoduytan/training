import { GetServerSideProps } from "next";
import Link from "next/link";
import { getPokemonDetail } from "../../../utils/get-pokemon";
import { PokemonDetail } from "../../../components/page-components";
import Head from "next/head";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${ctx.params.id}`;
    const data = await getPokemonDetail(url);

    if (!data) {
      return {
        notFound: true,
      };
    }

    // Fetch data from external API
    // Pass data to the page via props
    return { props: { data } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
