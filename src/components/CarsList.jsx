import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CarsList = () => {
    const [cars, setCars] = useState([]);
    const location = useLocation();
    const searchParams = location.search;

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://localhost:3500/cars${searchParams}`);
            const data = await response.json();
            console.log(data);
            data.sort((a, b) => a.brand.localeCompare(b.brand));
            setCars(data);
        };
        getData();
    }, []);

    return (
        <div>
            {cars.map((car) => (
                <p key={car.id}>
                    <Link to={`/cars-list/single-car/${car.id}`}>{`${car.brand + " " + car.model}`}</Link>
                </p>
            ))}
        </div>
    );
};

export default CarsList;
