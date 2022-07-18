import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { CommentSection } from '../components/comment-section/CommentSection';
import commentsData from '../../interactive-comments-section-main/data.json'

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.getAll"]);
  console.log(hello)
  let depth = 0
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mb-10 max-w-2xl">
        {
          commentsData.comments.map((comment, i) => {
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
