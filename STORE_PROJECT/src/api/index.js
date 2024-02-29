import axios from "axios"; // axios import

const get = (url) => new Promise((resolve, reject) => {

    // setTimeout to simulate network latency
    setTimeout(() => {

        // axios get request to get data from url
        axios.get(url).then((res) => {

            // res.data to get data from response
            console.log("data", res.data);
            resolve(res.data);
        }).catch((err) => {

            // reject promise with error
            reject(err);
        });
    }, 100 + Math.random() * 1000);
})

// getPromotions function to get promotions
const getPromotions = () => get("http://localhost:3000/promotions");

// export getPromotions function
export {
    getPromotions
}