import { NextApiRequest, NextApiResponse } from "next";
import { getPokemonData } from "../../../utils/get-pokemon";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log({ req: req.query });

    const page = +req.query?.page || 1;

    console.log({ page });

    const data = await getPokemonData(page);

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
