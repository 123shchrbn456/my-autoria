const brands = [
    "Audi",
    "BMW",
    "Chevrolet",
    "Ford",
    "Honda",
    "Hyundai",
    "Kia",
    "Lexus",
    "Mazda",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Opel",
    "Peugeot",
    "Renault",
    "Skoda",
    "Toyota",
    "Volkswagen",
    "Volvo",
];

const searchObj = { transmissionType: "manual" };
const searchString = "?" + new URLSearchParams(searchObj).toString();
useEffect(() => {
    const getData = async () => {
        // const response = await fetch("http://localhost:3500/cars?brand=bmw&model=420&transmissionType=automatic");
        const response = await fetch(`http://localhost:3500/cars${searchString}`);
        const data = await response.json();
        console.log(data);
    };
    // getData();
}, []);

// const asyncPostCall = async () => {
//     try {
//         const response = await fetch("http://localhost:3500/cars", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 // your expected POST request payload goes here
//                 title: "My post title",
//                 body: "My post content.",
//             }),
//         });
//         const data = await response.json();
//         // enter you logic when the fetch is successful
//         console.log(data);
//     } catch (error) {
//         // enter your logic for when there is an error (ex. error toast)

//         console.log(error);
//     }
// };

// asyncPostCall();
