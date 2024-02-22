import PostsList from './features/posts/postList'
import CreatePost from './features/posts/CreatePost'
import './App.css'
import UpdatePosts from './features/posts/UpdatePosts'

function App() {

  return (
    <>
      <CreatePost />
      <PostsList />
      <UpdatePosts/>
    </>
  )
}

export default App