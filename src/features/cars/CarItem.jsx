import React from "react";
import { Link } from "react-router-dom";

const CarItem = ({ car }) => {
    return (
        <div className="car-item">
            {/* There will be images of car */}
            {/* <div>
                {car.images.map((imagePath) => <img src="" />)}
            </div> */}
            <h4>{`${car.brand + " " + car.model}`}</h4>
            <Link to={`/cars-list/single-car/${car.id}`}>View car</Link>
        </div>
    );
};

export default CarItem;
