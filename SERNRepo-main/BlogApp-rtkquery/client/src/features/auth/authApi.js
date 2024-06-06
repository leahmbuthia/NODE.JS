const API = import.meta.env.VITE_API_DOMAIN
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: API }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) => ({
                url: 'users/auth/register',
                method: 'POST',
                body: user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url: 'users/auth/login',
                method: 'POST',
                body: user
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'users/auth/logout',
                method: 'POST'
            })
        }),
        me: builder.query({
            query: () => 'api/auth/me',
            providesTags: ['Auth']
        })
    })
})

export const { useRegisterUserMutation, useLoginMutation, useLogoutMutation, useMeQuery } = authApi;