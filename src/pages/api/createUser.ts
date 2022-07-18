// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

// const examples = async (req: NextApiRequest, res: NextApiResponse) => {
//   const examples = await prisma.example.findMany();
//   res.status(200).json(examples);
// };

const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

    const createdUser = await prisma.user.create({
      data: {
        username: req.body.username, 
        image: req.body.image
      }
    })
    res.status(200).json(req.body);

};

export default createUser;
