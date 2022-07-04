import { NextApiRequest, NextApiResponse } from "next";
import { getPokemonData } from "../../../utils/get-pokemon";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await getPokemonData(1);

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
