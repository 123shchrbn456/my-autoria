import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/users",
            transformResponse: (responseData) => {
                responseData.sort((a, b) => a.name.localeCompare(b.name));
                return usersAdapter.setAll(initialState, responseData);
            },
            providesTags: (result, error, arg) => [
                { type: "Users", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Users", id: id })),
            ],
        }),
    }),
});

export const { useGetUsersQuery } = usersApiSlice;

export const selectUsersResult = usersApiSlice.endpoints.getUsers.select();

const selectUsersData = createSelector(selectUsersResult, (usersResult) => usersResult.data);

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => selectUsersData(state) ?? initialState);
