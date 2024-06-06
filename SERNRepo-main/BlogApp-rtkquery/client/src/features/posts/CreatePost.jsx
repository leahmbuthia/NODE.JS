import './CreatePosts.scss'
import { useAddPostMutation } from "./postsApi"
import { SuccessToast, ErrorToast, ToasterContainer, LoadingToast } from '../../components/Toaster'


const CreatePost = () => {

  const [addPost, { isLoading }] = useAddPostMutation();

  const handleSubmit = async (e) => {
    LoadingToast();
    e.preventDefault();
    const title = e.target.postTitle.value;
    const content = e.target.postContent.value;

    if (title === "" || content === "") {
      ErrorToast("Please fill in both fields");
    } else {
      try {
        const response = await addPost({ post_title: title, post_content: content, author_id: 1 }).unwrap();
        SuccessToast(response.message);
        e.target.reset();
      } catch (error) {
        ErrorToast("Error adding post. Please try again." + error.message);
      }
    }
    LoadingToast(false);
  };

  return (
    <section>
      <ToasterContainer />
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="postTitle">Title:
          <input type="text" id="postTitle" name="postTitle" />
        </label>
        <label className="form-input" htmlFor="postContent">Content:
          <textarea id="postContent" name="postContent" />
        </label>
        <button type="submit">{isLoading ? 'Loading' : 'Save Post'}</button>
      </form>
    </section>
  )
}

export default CreatePost