
import UpdatePosts from "../features/posts/UpdatePosts";
import { createPortal } from "react-dom";
import {  useDeletePostMutation, useUpdatePostMutation } from "../features/posts/postsApi";


import { useState } from "react";
const Post = ({post}) => {

  const [showModal, setShowModal] = useState(false);
  
  
  const [deletePost] = useDeletePostMutation();
     const Deleteposts = (e) =>{
      e.preventDefault();
      deletePost(post.id)


     }
     const [updatePost] = useUpdatePostMutation();
     const UpdatePost = (e) =>{
      e.preventDefault();
      updatePost(post.id)


     }
   
   
  return (
    

    
    <article  className='card' key={post._id}>
                <h3>{post.post_title}</h3>
                <p >{post.post_content.substring(0, 100)}</p>
                <p>Author: {post.author_id}</p>
                <button onClick={Deleteposts}>Delete</button>
                <button onClick={(UpdatePost) => setShowModal(true)}> Update</button>
                {showModal && createPortal(
        <UpdatePosts onClose={() => setShowModal(false)} />,
        document.body
      )}

    </article>
    
  )
}

export default Post