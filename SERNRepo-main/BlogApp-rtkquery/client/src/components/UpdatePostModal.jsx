import './PortalModal.scss'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { postSchema } from '../validators/postValidators'
import { useUpdatePostMutation } from '../features/posts/postsApi'
import { SuccessToast, ErrorToast, ToasterContainer, LoadingToast } from './Toaster'

const UpdatePostModal = ({ setShowModal, post }) => {

  const [updatePost, { isLoading }] = useUpdatePostMutation();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(postSchema),
    defaultValues: {
      post_title: post.post_title,
      post_content: post.post_content
    }
  });

  const onSubmit = async (data) => {
    try {
      LoadingToast();
      const response = await updatePost({ id: post.id, ...data, author_id: 1 }).unwrap();
      SuccessToast(response.message);
    } catch (error) {
      ErrorToast("Error updating post: " + error.data.message);
    }
    LoadingToast(false);
  }
  const handleClose = () => {
    reset();
    setShowModal(false);
  }

  return (
    <div className="layout">
      <div className="modal">
        <div className="header">
          <div>Post Update Form</div>
          <button onClick={handleClose}>Close</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label className="form-input" htmlFor="post_title">Title:
            <input type="text" id="postTitle" {...register("post_title")} />
          </label>
          {errors.post_title && <p className='error-msg'>{errors.post_title.message}</p>}
          <label className="form-input" htmlFor="post_content">Content:
            <textarea id="postContent" {...register("post_content")} />
          </label>
          {errors.post_content && <p className='error-msg'>{errors.post_content.message}</p>}
          <button type="submit">{isLoading ? 'Loading' : 'Save Post'}</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePostModal