"use strict";
{
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = {
                status: "success",
                message: "Data loaded successfully.",
                data: [1, 2, 3, 4, 5],
            };
            if (data) {
                resolve(data);
            }
            else {
                reject({ status: "rejected", message: "Failed to load data!" });
            }
        });
    };
    (async () => {
        try {
            const data = await createPromise();
            //   console.log(data.message);
            //   console.log(data.status);
            //   console.log(data.data);
        }
        catch (error) {
            console.error(error);
        }
    })();
    // Fetching data
    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data;
    };
    const result = getUsers();
    result.then((data) => {
        console.log(data[0].name);
    });
    //
}
