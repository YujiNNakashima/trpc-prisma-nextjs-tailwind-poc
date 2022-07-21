import { createRouter } from "./context";
import { z } from "zod";

const CURRENT_USER_ID = 1

let result;
let loggedUser;
let loggedUserImage;
export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {

      loggedUser = await ctx.prisma.user.findUnique({
        where: {
          id: CURRENT_USER_ID
        }
      })

      loggedUserImage = await ctx.prisma.image.findUnique({
        where: {
          id: CURRENT_USER_ID
        }
      })

      result = await ctx.prisma.comment.findMany({
        include: {
          user: true
        }
      })

      let resultDto: any = {
        "currentUser": {
          "username": loggedUser?.username,
          "image": loggedUserImage
        },
        "comments": nest(result) 
      }

      return resultDto;
    },
  });


const nest = (items: any, id = null, link = 'parentId') =>
items
.filter((item: any) => item[link] === id)
.map((item: any) => ({
  ...item,
  replies: nest(items, item.id)
}));