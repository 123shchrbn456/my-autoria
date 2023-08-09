import React from "react";
import { useLocation } from "react-router-dom";
import { useGetCarsQuery } from "./carsSlice";
import CarItem from "./CarItem";

const CarsList = () => {
    const location = useLocation();
    const searchParams = location.search;

    const { data: cars = [], isLoading, isSuccess, isError, error } = useGetCarsQuery(searchParams);
    let content;

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (isSuccess) {
        content = cars.map((car) => <CarItem key={car.id} car={car} />);
    } else if (isError) {
        content = <div>Error!!!{error.toString()}</div>;
    }

    return (
        <div>
            <h2>Cars lists</h2>
            {content}
        </div>
    );
};

export default CarsList;
