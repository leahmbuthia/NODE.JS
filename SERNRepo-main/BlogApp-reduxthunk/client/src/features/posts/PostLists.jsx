import '../../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postsSlice'
import { useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import Post from '../../components/Post'

const PostLists = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const status = useSelector(getPostsStatus)
  const error = useSelector(getPostsError)
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts())
    }
  }, [status, dispatch]);


  return (
    <div>
      {status === 'loading' && <ClipLoader color="#000" loading={true} size={150} />}
      {status === 'failed' && <div>Error: {error}</div>}
      <h2>Posts</h2>
      <section className='container'>
        {status === 'succeeded' ?
          (
            posts && posts.map((post,index) => (
              <Post key={index} post={post} />
            ))
          ) : <div>No posts</div>
        }
      </section>
    </div>
  )
}

export default PostLists