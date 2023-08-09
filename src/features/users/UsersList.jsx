import React from "react";
import { selectAllUsers } from "./usersSlice";
import { useSelector } from "react-redux";

const UsersList = () => {
    const users = useSelector(selectAllUsers);

    return (
        <div>
            <h2>Users lists</h2>
            {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
};

export default UsersList;
