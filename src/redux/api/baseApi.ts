import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' //make sur eto import it from here

export const baseApi = createApi({
    reducerPath: "baseAPi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ['task'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "/tasks",
            providesTags: ["task"]
        }),

        getUsers: builder.query({
            query: () => "/users"
        }),

        createTasks: builder.mutation({
            query: (taskData) => ({
                url: "/tasks",
                method: "POST",
                body: taskData
            }),
            invalidatesTags: ["task"]
        })
    })
})

export const { useGetTasksQuery, useCreateTasksMutation } = baseApi;

