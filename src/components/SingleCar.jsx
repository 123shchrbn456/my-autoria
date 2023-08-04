import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleCar = () => {
    const [car, setCar] = useState({});
    const { id } = useParams();
    console.log(car);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`http://localhost:3500/cars?id=${id}`);
            const data = await response.json();
            setCar(...data);
        };
        getData();
    }, []);

    return (
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
};

export default SingleCar;
