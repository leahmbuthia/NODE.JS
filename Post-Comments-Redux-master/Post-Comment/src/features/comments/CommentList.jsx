// CommentList.js
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setComments, addComment, deleteComment, updateComment } from "./commentSlice";

const CommentList = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setComments(data));
      });
  }, [dispatch]);

  const handleAddComment = () => {
    const newComment = { id: comments.length + 1, name: "New Comment" };
    dispatch(addComment(newComment));
  };

  const handleDeleteComment = (id) => {
    dispatch(deleteComment(id));
  };

  const handleUpdateComment = (id) => {
    const updatedComment = { name: "Updated Comment" };
    dispatch(updateComment({ id, updatedComment }));
  };

  return (
    <div>
      <h2>Comments</h2>
      {/* <label className="form-input" htmlFor="postTitle">Title:
    <input type="text" id="postTitle" name="postTitle" />
  </label> */}
  <label className="form-input" htmlFor="postContent">COMMENT:
    <textarea id="postContent" name="postContent" />
  </label>
      <button onClick={handleAddComment}>Add Comment</button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.name}
            <button onClick={() => handleDeleteComment(comment.id)}>Del</button>
            <button onClick={() => handleUpdateComment(comment.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
