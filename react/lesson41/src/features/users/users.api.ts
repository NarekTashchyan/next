import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { InputUser, IUser } from "./types"

export const usersApi = createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000"}),
    tagTypes: ["Users"],
    endpoints: builder => ({
        getUsers: builder.query<IUser[], null>({
            query: () => "/users",
            providesTags:["Users"]
        }),
        AddUser: builder.mutation<IUser, InputUser>({
            query: (param) => ({
                url:'/users',
                method:'POST',
                body:param
            }),
            invalidatesTags: ["Users"]
        }),
        DeleteUser: builder.mutation<IUser,string>({
            query: (param) => ({
                url:'/users/' + param,
                method:'DELETE',
                body:param
            }),
            invalidatesTags: ["Users"]
        }),
        editUser: builder.mutation<IUser, IUser> ({
            query: (param) => ({
                url:'/users/' + param.id,
                method: 'PUT',
                body: param
            }),
            invalidatesTags: ["Users"]
        })
    })
})


export const {useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useEditUserMutation} = usersApi