import { getPromotions } from "@/api";

const promotions = {
    state() {
        return {
            promotionsList: [],
            promotionsLoading: false,
            promotionsError: null
        }
    },

    mutations: {
        SET_PROMOTIONS_LIST(state, payload) { state.promotionsList = payload },
        SET_PROMOTIONS_LOADING(state, payload) { state.promotionsLoading = payload },
        SET_PROMOTIONS_ERROR(state, payload) { state.promotionsError = payload }
    },

    getters: {
        GET_PROMOTIONS_LIST(state) { return state.promotionsList },
        GET_PROMOTIONS_LOADING(state) { return state.promotionsLoading },
        GET_PROMOTIONS_ERROR(state) { return state.promotionsError }
    },
    actions: {
        FETCH_PROMOTIONS({ state, commit }) {
            commit("SET_PROMOTIONS_LOADING", true);

            getPromotions().then(data => {
                console.log('getproms data: ', data);
                commit("SET_PROMOTIONS_LIST", data.promotions);
            }).catch(error => {
                console.log('błąd!!!');
                commit("SET_PROMOTIONS_ERROR", error);
            })
                .finally(() => {
                    commit("SET_PROMOTIONS_LOADING", false);
                });
        }
    }
}

export default promotions;