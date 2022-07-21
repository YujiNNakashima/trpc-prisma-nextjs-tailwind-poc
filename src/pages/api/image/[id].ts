import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const method = req.method;
  const {id} = req.query
  
  let result;
  switch (method) {
      case 'GET':
          result = await prisma.image.findUnique({
            where: {
              id: Number(id)
            }
          })
          res.json(result);
          break;
      default:
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
