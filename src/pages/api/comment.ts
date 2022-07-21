// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  const {
    content,
    score,
    userId,
    parentId,
    replyingTo
  } = req.body
  
  let result;
  switch (method) {
      case 'GET':
          result = await prisma.comment.findMany({})
          res.json(result);
          break;

      case 'POST':
        await prisma.comment.create({
          data: {
            content: content,
            score: score,
            userId: userId,
            parentId: parentId,
            replyingTo: replyingTo
          }
        })
        res.status(200).json(req.body);
        break;
      default:
        res.status(405).end(`Method ${method} Not Allowed`);
    }
}
