import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  
  let result;
  switch (method) {
      case 'GET':
          result = await prisma.image.findMany()
          res.json(result);
          break;

      case 'POST':
          await prisma.image.create({
            data: {
            png: req.body.png,
            webp: req.body.webp,
            userId: req.body.userId
            }
          })
        res.status(200).json({data: 'image created!'});

      default:
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
