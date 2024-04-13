import { createStore } from 'vuex';
import promotions from './promotions.js'
import promotion from './promotion.js'

const modules = {
    promotion,
    promotions
}

export default createStore({
    modules
})