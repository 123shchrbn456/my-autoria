import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCarQuery } from "./carsSlice";

const SingleCarPage = () => {
    const { id } = useParams();
    const { data: car, isLoading, isSuccess, isError, error } = useGetCarQuery(id);

    console.log(car);
    const createDynamicCarMenu = (car) => {
        return (
            <ul className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/cars-list">All Cars</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/cars-list?brand=${car.brand}`}>{car.brand}</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/cars-list?brand=${car.brand}&generation=${car.generation}`}>{car.generation}</Link>
                </li>
                <li className="breadcrumb-item">
                    <span>{car.model}</span>
                </li>
            </ul>
        );
    };
    let content;
    let dynamicCarMenu;

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (isSuccess) {
        dynamicCarMenu = createDynamicCarMenu(car);
        content = (
            <div>
                <h3>
                    {car.brand} {car.model}
                </h3>
                <p>Year: {car.year}</p>
                <div>
                    <h5>Engine details:</h5>
                    <p>Volume: {car.engine?.volume}</p>
                    <p>Horse power: {car.engine?.horsePower}</p>
                </div>
            </div>
        );
    } else if (isError) {
        content = <div>Error!!!{error.toString()}</div>;
    }

    return (
        <div>
            {dynamicCarMenu}
            {content}
        </div>
    );
};

export default SingleCarPage;
