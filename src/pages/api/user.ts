// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

// const examples = async (req: NextApiRequest, res: NextApiResponse) => {
//   const examples = await prisma.example.findMany();
//   res.status(200).json(examples);
// };

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {



};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  
  let result;
  switch (method) {
      case 'GET':
          result = await prisma.user.findMany()
          res.json(result);
          break;

      case 'POST':
        await prisma.user.create({
          data: {
            username: req.body.username, 
            image: req.body.image
          }
        })
        res.status(200).json(req.body);
        break;
      default:
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}

