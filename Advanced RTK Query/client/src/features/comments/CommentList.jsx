
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { setComments } from "./commentSlice";

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

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
