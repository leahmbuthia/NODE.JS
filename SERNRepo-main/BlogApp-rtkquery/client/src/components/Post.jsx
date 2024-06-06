import './Post.scss'
import { useState } from "react";
import { createPortal } from 'react-dom';
import UpdatePostModal from "./UpdatePostModal"
import { useDeletePostMutation } from '../features/posts/postsApi';
import { ErrorToast, ToasterContainer, SuccessToast } from './Toaster';
import { LoadingToast } from './Toaster';

const Post = ({ post }) => {

  const [deletePost] = useDeletePostMutation({ refetchOnReconnect: true});
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    LoadingToast();
    const response = await deletePost(post.id).unwrap();
    if (response.error) {
      ErrorToast(response.error);
    } else {
      SuccessToast(response.message);
    }
    LoadingToast(false);
  }

  return (
    <>
      <article className='card' key={post.id}>
        <ToasterContainer />
        <h3>{post.post_title}</h3>
        {/* <p >{post.post_content.substring(0, 150) + '...'}</p> */}
        <p >{post.post_content}</p>
        <p>Author: {post.author_id}</p>
        <div className="postBtns">
          <button onClick={() => setShowModal(true)}>Update</button>
          <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
      </article>
      <div className="modal-container">
        {
          showModal && createPortal(
            <UpdatePostModal setShowModal={setShowModal} post={post} />,
            document.body
          )
        }
      </div>
    </>
  )
}

export default Post