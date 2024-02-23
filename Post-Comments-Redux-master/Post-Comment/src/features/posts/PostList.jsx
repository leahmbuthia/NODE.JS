
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPosts, addPost, deletePost, updatePost } from "./PostSlice";


const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPosts(data));
      });
  }, [dispatch]);

  const handleSubmit = () => {
    const newPost = { id: posts.length + 1, title: "New Post" };
    dispatch(addPost(newPost));
  };

  const handleDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const handleUpdatePost = (id) => {
    const updatedPost = { title: "Updated Post" };
    dispatch(updatePost({ id, updatedPost }));
  };

  return (
    <div>
      <section>

<h2>Add a New Post</h2>
<form onSubmit={handleSubmit} className="form">
  {/* <label className="form-input" htmlFor="postTitle">Title:
    <input type="text" id="postTitle" name="postTitle" />
  </label> */}
  <label className="form-input" htmlFor="postContent">Content:
    <textarea id="postContent" name="postContent" />
  </label>
  <button type="submit">save Post</button>
</form>
</section>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
            <button onClick={() => handleUpdatePost(post.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
