import React from "react";
import { useGetUsersQuery } from "./usersSlice";
import { useSelector } from "react-redux";

const UsersList = () => {
    const { data: users = [], isLoading, isSuccess, isError, error } = useGetUsersQuery();
    let content;

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (isSuccess) {
        content = users.map((user) => <p key={user.id}>{user.name}</p>);
    } else if (isError) {
        content = <div>Error!!!{error.toString()}</div>;
    }

    return (
        <div>
            <h2>Users lists</h2>
            {content}
        </div>
    );
};

export default UsersList;
