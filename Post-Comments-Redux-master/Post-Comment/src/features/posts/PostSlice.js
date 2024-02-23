// postSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      return action.payload;
    },
    addPost(state, action) {
      state.push(action.payload);
    },
    deletePost(state, action) {
      return state.filter(post => post.id !== action.payload);
    },
    updatePost(state, action) {
      const { id, updatedPost } = action.payload;
      const existingPostIndex = state.findIndex(post => post.id === id);
      if (existingPostIndex !== -1) {
        state[existingPostIndex] = { ...state[existingPostIndex], ...updatedPost };
      }
    },
  },
});

export const { setPosts, addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;
