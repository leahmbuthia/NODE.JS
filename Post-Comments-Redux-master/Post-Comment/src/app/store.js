import { configureStore } from "@reduxjs/toolkit";

import postsReducer from '../features/posts/PostSlice'
import commentsReducer from '../features/comments/commentSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
});

export default store;
