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
    }, 1000);
})

const post = (url, userObject) => new Promise((resolve, reject) => {
    setTimeout(() => {
        axios.post(url, userObject, { withCredentials: true }).then((res) => {
            console.log("data", res.data);
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    }, 1000);
});

// getPromotions function to get promotions
const getPromotions = () => {
    console.log('getPromotions');
    return get("http://localhost:3000/promotions")
};

const getPromotion = (id) => get(`http://localhost:3000/promotion/${id}`)
const getProduct = (id) => get(`http://localhost:3000/product/${id}`)

const registerUser = (userObject) => post('http://localhost:3000/createUser', userObject);
// export getPromotions function
export {
    getPromotions,
    getPromotion,
    getProduct,
    registerUser
}