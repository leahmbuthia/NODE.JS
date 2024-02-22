import { useUpdatePostMutation } from './postsApi';
import { useState } from 'react';
import ReactDOM from 'react-dom';

const UpdatePosts = ({}) => {
    const [updatePost, {error ,isLoading} ]= useUpdatePostMutation();
    
    const [formData, setFormData] = useState({ post_title: '', post_content: '' });
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.post_title === "" || formData.post_content === "") {
            alert("Please fill in both fields");
        } else {
            try {
                
           
            updatePost({ id: id, post_title: formData.post_title, post_content: formData.postContent, author_id: 1 });
            setFormData({ post_title: '', post_content: '' });
            setShowModal(false); // Close the modal after submitting
        } catch (error) {
            console.error('Error updating post:', error);    
        }
        }
    };
    
    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        
        <section>
            <button onClick={() => setShowModal(true)}>Update</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleModalClose}>&times;</span>
                        <form onSubmit={handleSubmit} className="form">
                            <label className="form-input" htmlFor="postTitle">Title:
                                <input type="text" id="postTitle" name="post_title" value={formData.post_title} onChange={handleChange} />
                            </label>
                            <label className="form-input" htmlFor="postContent">Content:
                                <textarea id="postContent" name="post_content" value={formData.post_content} onChange={handleChange} />
                            </label>
                            <button type="submit">{isLoading ? 'Loading...' : 'Update Post'} </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
  };


export default UpdatePosts