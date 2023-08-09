import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App.jsx";
import "./index.css";
import { carsApiSlice } from "./features/cars/carsSlice";
import { usersApiSlice } from "./features/users/usersSlice";

store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
