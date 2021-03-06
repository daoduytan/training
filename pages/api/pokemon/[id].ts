import { NextApiRequest, NextApiResponse } from "next";
import { getPokemonData, getPokemonDetail } from "../../../utils/get-pokemon";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${req.query.id}`;
    const data = await getPokemonDetail(url);
    // const data = await getPokemonData(1);

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
