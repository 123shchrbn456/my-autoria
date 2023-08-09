import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import themeImg from "../../assets/images/theme.png";

export const Home = () => {
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({});

    const onInputChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setInputValues((inputValues = {}) => ({ ...inputValues, [e.target.name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const searchString = Object.keys(inputValues).length ? `?${new URLSearchParams(inputValues).toString()}` : "";
        navigate(`/cars-list${searchString}`);
    };
    return (
        <div>
            <div>
                {/* <img src="/src/assets/images/theme.png" alt="" /> */}
                <img src={themeImg} alt="" />
            </div>
            <form action="" onSubmit={submitHandler}>
                {/* Not reliable solution inputValues.brand}  */}
                <select name="brand" value={inputValues.brand} onChange={onInputChange}>
                    <option value="">Select</option>
                    <option value="audi">audi</option>
                    <option value="bmw">bmw</option>
                    <option value="mercedes">mercedes</option>
                </select>
                <select name="transmissionType" value={inputValues.transmissionType} onChange={onInputChange}>
                    <option value="">Select</option>
                    <option value="automatic">automatic</option>
                    <option value="manual">manual</option>
                    <option value="mercedes">mercedes</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
