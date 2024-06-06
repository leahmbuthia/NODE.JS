import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, action) {
      return action.payload;
    },
  },
});

export const { setComments } = commentsSlice.actions;
export default commentsSlice.reducer;
