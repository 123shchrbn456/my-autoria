import { apiSlice } from "../api/apiSlice";

export const carsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCars: builder.query({
            query: (searchParams = "") => `/cars${searchParams}`,
            transformResponse: (responseData) => responseData.sort((a, b) => a.brand.localeCompare(b.brand)),
            providesTags: (result, error, arg) => [
                { type: "Cars", id: "LIST" },
                ...result.map((car) => ({ type: "Cars", id: car.id })),
            ],
        }),
        getCar: builder.query({
            query: (carId) => `/cars?id=${carId}`,
            transformResponse: (responseDataArr) => {
                const [singleObj] = responseDataArr;
                return { ...singleObj };
            },
            providesTags: (result, error, arg) => [{ type: "Cars", id: arg }],
        }),
        addCar: builder.mutation({
            query: (carData) => ({
                url: "/cars",
                method: "POST",
                body: carData,
            }),
            invalidatesTags: [{ type: "Cars", id: "LIST" }],
        }),
    }),
});

export const { useGetCarsQuery, useGetCarQuery, useAddCarMutation } = carsApiSlice;
