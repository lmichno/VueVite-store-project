import { getProducts } from "@/api"

const products = {
    state() {
        return {
            productsList: [],
            productsLoading: true,
            productsError: {}
        }
    },
    mutations: {
        SET_PRODUCTS_LIST(state, payload) { state.productsList = payload },
        SET_PRODUCTS_LOADING(state, payload) { state.productsLoading = payload },
        SET_PRODUCTS_ERROR(state, payload) { state.productsError = payload }
    },
    getters: {
        GET_PRODUCTS_LIST(state) { return state.productsList },
        GET_PRODUCTS_LOADING(state) { return state.productsLoading },
        GET_PRODUCTS_ERROR(state) { return state.productsError }
    },
    actions: {
        FETCH_PRODUCTS({ state, getters, commit }) {
            commit("SET_PRODUCTS_LOADING", true)
            commit("SET_PRODUCTS_LIST", [])

            const handleError = () => {
                commit("SET_PRODUCTS_ERROR", "server error!!!")
                commit("SET_PRODUCTS_LOADING", false)
            }

            getProducts().then((data) => {
                console.log('getProducts data: ', data);
                commit("SET_PRODUCTS_LIST", data);
            }).catch((error) => {
                handleError()
            }).finally(() => {
                commit("SET_PRODUCTS_LOADING", false)
            })
        }
    }
}

export default products;