import axios from "axios"; // axios import

const get = (url) => new Promise((resolve, reject) => {
    setTimeout(() => {
        axios.get(url).then((res) => {
            console.log("data", res.data);
            resolve(res.data);
        }).catch((err) => {
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

const getPromotions = () => {
    console.log('getPromotions');
    return get("http://localhost:3000/promotions")
};

const getProducts = () => {
    console.log('getProducts');
    return get("http://localhost:3000/products")
}

const getPromotion = (id) => get(`http://localhost:3000/promotion/${id}`)
const getProduct = (id) => get(`http://localhost:3000/product/${id}`)

const registerUser = (userObject) => post('http://localhost:3000/createUser', userObject);
const loginUser = (userObject) => post('http://localhost:3000/login', userObject);
const logoutUser = () => post('http://localhost:3000/logout', {});

const checkUser = () => post('http://localhost:3000/checkUser');
// export getPromotions function
export {
    getPromotions,
    getPromotion,
    getProduct,
    registerUser,
    loginUser,
    logoutUser,
    checkUser,
    getProducts
}