import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./features/cars/Home";
import CarsList from "./features/cars/CarsList";
import SingleCarPage from "./features/cars/SingleCarPage";
import Layout from "./components/Layout";
import AddCarPage from "./features/cars/AddCarPage";
import UsersList from "./features/users/UsersList";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cars-list" element={<CarsList />}></Route>
                        <Route path="/cars-list/single-car/:id" element={<SingleCarPage />}></Route>
                        <Route path="/add-car" element={<AddCarPage />}></Route>
                        <Route path="/users-list" element={<UsersList />}></Route>
                        <Route path="*" element={<div> Not Found or You do not have permission.</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
