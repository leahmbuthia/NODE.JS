
const Post = ({post}) => {
  return (
    
    <article className='card' key={post._id}>
                <h3>{post.post_title}</h3>
                <p >{post.post_content.substring(0, 100)}</p>
                <p>Author: {post.author_id}</p>
    </article>
  )
}

export default Post