// CHUNK---Using createEntityAdapter aka Normalized state and useSelector in UsersList.jsx
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users",
            transformResponse: (responseData) => responseData.sort((a, b) => a.name.localeCompare(b.name)),
            providesTags: (result, error, arg) => [
                { type: "Users", id: "LIST" },
                ...result.map((id) => ({ type: "Users", id: id })),
            ],
        }),
    }),
});

export const { useGetUsersQuery } = usersApiSlice;
