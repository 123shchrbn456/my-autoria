import React, { useState } from "react";
import { useAddCarMutation } from "./carsSlice";

const AddCarPage = () => {
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");

    const [addNewCar, { isLoading }] = useAddCarMutation();

    const onBrandChanged = (e) => setBrand(e.target.value);
    const onModelChanged = (e) => setModel(e.target.value);

    const canSave = [brand, model].every(Boolean) && !isLoading;

    const onSaveCarClicked = async () => {
        if (canSave) {
            try {
                // we call addNewPost with the initial post object. This returns a special Promise with a .unwrap() method, and we can await addNewPost().unwrap() to handle any potential errors with a standard try/catch block.
                await addNewCar({ brand, model }).unwrap();
                setBrand("");
                setModel("");
            } catch (err) {
                console.error("Failed to save the post: ", err);
            }
        }
    };

    const users = ["ivan", "igor", "irvin", "phillipe", "tom"];

    const usersOptions = users.map((user, index) => (
        <option key={index} value={user}>
            {user}
        </option>
    ));

    return (
        <section>
            <h2>Add a New Car</h2>
            <form>
                <label htmlFor="postTitle">Car Brand:</label>
                <p>
                    <input
                        type="text"
                        id="postTitle"
                        name="brand"
                        placeholder="Write a brand"
                        value={brand}
                        onChange={onBrandChanged}
                    />
                </p>
                <label htmlFor="postTitle">Car Model:</label>
                <p>
                    <input
                        type="text"
                        id="postTitle"
                        name="model"
                        placeholder="Write a model"
                        value={model}
                        onChange={onModelChanged}
                    />
                </p>
                <button type="button" onClick={onSaveCarClicked} disabled={!canSave}>
                    Add Car
                </button>
            </form>
        </section>
    );
};

export default AddCarPage;
