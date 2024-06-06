import './PostsList.scss'
import ClipLoader from "react-spinners/ClipLoader";
import Post from '../../components/Post'
import { useGetPostsQuery } from './postsApi'


const PostsList = () => {
  const { data, error, isLoading, isError, isFetching } = useGetPostsQuery({ refetchOnReconnect: true });

  if (isLoading || isFetching) {
    return <ClipLoader color={"#000"} loading={isLoading} size={150} />;
  }
  if (isError) {
    return <div>😐: {isError && error.data?.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <section className='container'>
               {
          [...data].sort((a, b) => b.id - a.id).map((post, index) => (
            <Post key={index} post={post} />
          ))
        }
      </section>
    </div>
  )
}

export default PostsList