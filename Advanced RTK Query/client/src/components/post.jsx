import { useState } from 'react';
import { useUpdatePostMutation, useDeletePostMutation } from '../features/posts/postsApi';

const Post = ({ post }) => {
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();
  const [isEditing, setIsEditing] = useState(false);

  const [updatedPostData, setUpdatedPostData] = useState({
    title: post.title,
    body: post.body,
  });

  const handleUpdate = () => {
    updatePost({ id: post.id, ...updatedPostData });
    setIsEditing(false); // Close the modal after updating
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPostData({
      ...updatedPostData,
      [name]: value,
    });
  };

  return (
    <article className='card' key={post._id}>
      <h3>{post.title}</h3>
      <p>{post.body && post.body.substring(0, 100)}</p>
      <button onClick={() => setIsEditing(true)} disabled={isUpdating}>
        Edit
      </button>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
      {isEditing && <EditPostModal post={post} updatedPostData={updatedPostData} handleChange={handleChange} handleUpdate={handleUpdate} />}
    </article>
  );
};

const EditPostModal = ({ post, updatedPostData, handleChange, handleUpdate }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Post</h2>
        <input
          type="text"
          name="title"
          value={updatedPostData.title}
          onChange={handleChange}
        />
        <textarea
          name="post_content"
          value={updatedPostData.body}
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Post;
