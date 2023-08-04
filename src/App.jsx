import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import CarsList from "./components/CarsList";
import SingleCar from "./components/SingleCar";
import Layout from "./components/Layout";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cars-list" element={<CarsList />}></Route>
                        <Route path="/cars-list/single-car/:id" element={<SingleCar />}></Route>
                        {/* <Route path="*" element={<div> Not Found or You do not have permission.</div>} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
