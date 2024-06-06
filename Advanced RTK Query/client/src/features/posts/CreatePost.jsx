
import Form from "../../components/Form";
import {useAddPostMutation} from "./postsApi"


const CreatePost = () => {

  const [addPost,{error ,isLoading} ]= useAddPostMutation();
 const CreateNewPost=()=>{
  addPost(addPost)
 }

  return (
    <section>
      <h2>Add a New Post</h2>
    <Form CreateNewPost={addPost}/>
    </section >
  )
}

export default CreatePost