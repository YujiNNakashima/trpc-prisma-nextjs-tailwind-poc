import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { CommentSection } from '../components/comment-section/CommentSection';
import commentsData from '../../interactive-comments-section-main/data.json'

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mb-10 max-w-2xl">
        {
          commentsData.comments.map((comment, i) => {
            return (
              <>
              <CommentSection key={`key-${i}`} data={comment}/>
              {comment?.replies.map((reply, i )=> (
                <>
                <div className="relative  
                before:absolute
                before:bg-primary-light-grayish-blue
                before:min-h-full		
                before:w-1
                before:left-8"
                >
                <CommentSection key={`key-reply-${i}`} data={reply} reply/>
                </div>
                </>
              ))}
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
