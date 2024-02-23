// commentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, action) {
      return action.payload;
    },
    addComment(state, action) {
      state.push(action.payload);
    },
    deleteComment(state, action) {
      return state.filter(comment => comment.id !== action.payload);
    },
    updateComment(state, action) {
      const { id, updatedComment } = action.payload;
      const existingCommentIndex = state.findIndex(comment => comment.id === id);
      if (existingCommentIndex !== -1) {
        state[existingCommentIndex] = { ...state[existingCommentIndex], ...updatedComment };
      }
    },
  },
});

export const { setComments, addComment, deleteComment, updateComment } = commentsSlice.actions;
export default commentsSlice.reducer;
