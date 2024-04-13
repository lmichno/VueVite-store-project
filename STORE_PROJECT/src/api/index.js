import axios from "axios"; // axios import

const get = (url) => new Promise((resolve, reject) => {

    // setTimeout to simulate network latency
    setTimeout(() => {

        // axios get request to get data from url
        console.log('lol');
        axios.get(url).then((res) => {

            // res.data to get data from response
            console.log("data", res.data);
            resolve(res.data);
        }).catch((err) => {
            console.log('aaaaa');
            // reject promise with error
            reject(err);
        });
    }, 1000);
})

// getPromotions function to get promotions
const getPromotions = () => {
    console.log('getPromotions');
    return get("http://localhost:3000/promotions")
};

const getPromotion = (id) => get(`http://localhost:3000/promotion/${id}`)
const getProduct = (id) => get(`http://localhost:3000/product/${id}`)
// export getPromotions function
export {
    getPromotions,
    getPromotion,
    getProduct
}