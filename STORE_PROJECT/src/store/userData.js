import { checkUser, logoutUser } from "@/api/index"

const userData = {
    state: {
        userObject: {},
        userLoading: true,
        userError: {}
    },
    mutations: {
        SET_USER_OBJECT(state, payload) { state.userObject = payload },
        SET_USER_LOADING(state, payload) { state.userLoading = payload },
        SET_USER_ERROR(state, payload) { state.userError = payload }
    },
    getters: {
        GET_USER_OBJECT(state) { return state.userObject },
        GET_USER_LOADING(state) { return state.userLoading },
        GET_USER_ERROR(state) { return state.userError }
    },
    actions: {
        async FETCH_USER({ state, commit, getters }) {

            commit("SET_USER_LOADING", true)
            commit("SET_USER_OBJECT", {})

            const handleError = () => {
                commit("SET_USER_ERROR", "server error!!!")
                commit("SET_USER_LOADING", false)
            }

            const userFromStore = await checkUser()
            console.log('userrrr', userFromStore);

            if (userFromStore) {
                commit("SET_USER_OBJECT", userFromStore)
                commit("SET_USER_LOADING", false)
            }
            else {
                handleError()
            }
        },
        LOGOUT_USER({ commit }) {
            commit("SET_USER_OBJECT", {})
            logoutUser()
        }
    }
}

export default userData;