import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const POSTS_URL = 'http://localhost:8000/api/posts'

const initialState = { posts: [], status: 'idle', error: null }; // 'idle' | 'loading' | 'succeeded' | 'failed'
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(POSTS_URL)
        return response.data
    } catch (error) {
        return error.message
    }
});
export const addPost =createAsyncThunk('posts/addPost', async (post) => {
    try {
        const response = await axios.post(POSTS_URL, post);
        return response.data;
    } catch (error) {
        return error.message;
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    try {
        const response = await axios.delete(`${POSTS_URL}/${id}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
})

export const updatePost = createAsyncThunk('posts/updatePost', async (post) => {
    try {
        const response = await axios.put(`${POSTS_URL}/${post.id}`, post);
        return response.data;
    } catch (error) {
        return error.message;
    }
})



const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            })
            .addCase(addPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = state.posts.filter(post => post.id !== action.payload.id);
            })

    }
})

export const selectAllPosts = state => state.posts.posts
export const getPostsStatus = state => state.posts.status
export const getPostsError = state => state.posts.error

export default postsSlice.reducer
