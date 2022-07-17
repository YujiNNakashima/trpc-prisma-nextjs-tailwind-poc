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

  if(reply) return <h1>dskljaidjaisdhafdhiofh</h1>

  return (
    <div className="container mx-auto px-4 py-4 bg-neutral-very-light-gray max-w-3xl rounded-md">
     <div className="flex flex-row">
      <p className="pr-4">upvote</p>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="imagem"></div>
          <p>{data.user.username}</p>
          <p>{data.createdAt}</p>
          <p>reply</p>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum inventore nobis rerum numquam dolorem repellendus tenetur maxime. Illo culpa quia maiores amet. Pariatur quia natus nostrum molestias itaque nam, iusto odio cumque error corrupti accusamus tenetur ipsum aut, esse ut alias voluptatem neque inventore placeat sunt ullam beatae, recusandae deserunt! Magni, veritatis neque consequatur fugiat amet molestias quis asperiores reprehenderit nisi, optio corporis consectetur laboriosam provident blanditiis doloribus totam! Molestiae nulla fugiat a quas, beatae placeat itaque, possimus, consequuntur facere corporis iste omnis incidunt alias minus odit aliquam animi atque.</p>
      </div>
     </div>
    </div>
  )
}