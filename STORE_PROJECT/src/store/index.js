import { createStore } from 'vuex';
import promotions from './promotions.js'
import promotion from './promotion.js'
import userData from './userData.js'
import products from './products.js'

const modules = {
    promotion,
    promotions,
    userData,
    products
}

export default createStore({
    modules
})