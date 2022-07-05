import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Pagination } from "../../../components";
import { getPokemonData } from "../../../utils/get-pokemon";

interface Props {
  data: any;
  page: number;
}

export default function Pokemon({ data, page }: Props) {
  const router = useRouter();
  const handleChangePage = (value: number) => {
    router.push(`/fetching/isr/page/${value.toString()}`);
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <Head>
        <title>Danh sách pokemon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid gap-4">
        <div className="text-4xl font-bold">Pokemon list</div>
        <div className="grid gap-4 grid-cols-2">
          {data.results.map((i) => (
            <Link key={i.id} href={`isr/${i.id}`}>
              <a className="text-center border rounded grid gap-2 p-4 items-center justify-center">
                <img src={i.sprites.front_default} />
                <div className="font-bold">{i.name}</div>
              </a>
            </Link>
          ))}
        </div>

        <Pagination page={page} total={data.count} onChange={handleChangePage} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // Fetch data from external API

  const page = ctx.params?.page || 1;
  const data = await getPokemonData(+page);

  // Pass data to the page via props
  return { props: { data, page } };
};

// export async function getServerSideProps() {
//   // Fetch data from external API

//   const data = await getPokemonData(1);

//   // Pass data to the page via props
//   return { props: { data } };
// }
