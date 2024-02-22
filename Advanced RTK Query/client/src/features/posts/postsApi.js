import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({

    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
    tagTypes: ['Posts'],//Cache Validation
    //endpoints Defines the endpoints of the API
    endpoints: (builder) => ({
        // Defines a query endpoint to fetch posts. It specifies the URL 'posts' and provides the tag 'Posts'.
        getPosts: builder.query({
            query: () => 'posts',
            providesTags: ['Posts']
        }),
        //Defines a mutation endpoint to add a post. It specifies the URL 'posts', HTTP method 'POST', and invalidates the 'Posts' tag.
        addPost: builder.mutation({
            query: (post) => ({
                url: 'posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Posts']
        }),
        // Defines a mutation endpoint to update a post. It specifies the URL 'posts',HTTP method 'PUT , and invalidates the  'Posts' tag.
        updatePost: builder.mutation({
            query: (post) => ({
                url: `posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Posts'],
        }),

        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Posts'],
        })
    })
})

export const { 
    useGetPostsQuery,
     useAddPostMutation,
     useDeletePostMutation,
     useUpdatePostMutation } = postsApi;
