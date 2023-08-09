import React from "react";
import { Link } from "react-router-dom";

const CarItem = ({ car }) => {
    return (
        <div className="car-item">
            {/* There will be images of car */}
            {/* <div>
                {car.images.map((imagePath) => <img src="" />)}
            </div> */}
            <h3>{`${car.brand + " " + car.model}`}</h3>
            <h4>({car.generation})</h4>
            <Link to={`/cars-list/single-car/${car.id}`}>View car</Link>
        </div>
    );
};

export default CarItem;
