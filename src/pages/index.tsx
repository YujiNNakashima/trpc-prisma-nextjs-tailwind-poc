import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { CommentSection } from '../components/comment-section/CommentSection';

const Home: NextPage = () => {
  const {data} = trpc.useQuery(["example.getAll"]);

  let depth = 0
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mb-10 max-w-2xl">
        {
          data.comments.map((comment: any, i: any) => {
            return (
              <>
              <CommentSection key={`key-${i}`} data={comment} depth={depth}/>
              </>
            )
          }
          )
        }
        </div>
      </div>
    </>
  )
};


export default Home;
