import { createStore } from 'vuex';
import promotions from './promotions.js'
import promotion from './promotion.js'
import userData from './userData.js'

const modules = {
    promotion,
    promotions,
    userData
}

export default createStore({
    modules
})