type User = {
  image: {
    png: string,
    webp: string
  },
  username: string
}

type Comment = {
  id: number,
  content: string,
  createdAt: string,
  score: number,
  user: User,
  replies?: Reply[]
}

type Reply = Comment & {
  replyingTo: string
}

export const CommentSection: React.FC<{data: Comment, reply?: boolean}> = ({data, reply}) => {

  if(reply) return (
    <div className="mt-4 ml-16 
    px-4 py-4 bg-neutral-very-light-gray max-w-3xl rounded-md 
    "
    >
    <div className="flex flex-row">
     <p className="pr-4">upvote</p>
     <div className="flex flex-col">
       <div className="flex flex-row">
         <div className="imagem"></div>
         <p>{data.user.username}</p>
         <p>{data.createdAt}</p>
         <p>reply</p>
       </div>
       <p>{data.content}</p>
     </div>
    </div>
   </div>
  )

  return (
    <div className="mx-auto mt-4 px-4 py-4 bg-neutral-very-light-gray max-w-3xl rounded-md">
     <div className="flex flex-row">
      <p className="pr-4">upvote</p>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="imagem"></div>
          <p>{data.user.username}</p>
          <p>{data.createdAt}</p>
          <p>reply</p>
        </div>
        <p>{data.content}</p>
      </div>
     </div>
    </div>
  )
}