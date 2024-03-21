import { getProduct, getPromotion } from "@/api";

const promotion = {
    state: {
        promotionObject: {},
        promotionLoading: {},
        promotionError: {}
    },
    mutations: {
        SET_PROMOTION_OBJECT(state, payload) { state.promotionObject = payload },
        SET_PROMOTION_LOADING(state, payload) { state.promotionLoading = payload },
        SET_PROMOTION_ERROR(state, payload) { state.promotionError = payload }
    },

    getters: {
        GET_PROMOTION_OBJECT(state) { return state.promotionList },
        GET_PROMOTION_LOADING(state) { return state.promotionLoading },
        GET_PROMOTION_ERROR(state) { return state.promotionError }
    },
    actions: {
        FETCH_PROMOTION({ state, commit, getters }, promotionId) {

            // zaczynamy pobierać dane

            commit("SET_PROMOTION_LOADING", true)

            // czyścimy poprzedni obiekt promocji

            commit("SET_PROMOTION_OBJECT", {})

            // poniższa funkcja ustala co się dziele przy jakimś błędzie

            const handleError = () => {
                commit("SET_PROMOTION_ERROR", "server error!!!")
                commit("SET_PROMOTION_LOADING", false)
            }

            /*
            lista wszystkich promocji ze store promotions.js
            dostęp do danych drugiego store z poprzedniej lekcji zapewnia argumenet getters
            w akcji FETCH_PROMOTION
            */

            const promotionsList = getters.GET_PROMOTIONS_LIST

            // na tym etapie warto wylogować czy mamy dane w store, pobrane z serwera

            console.log(promotionsList)

            // teraz zadanie do samodzielnej realizacji:
            // wyszukaj za pomocą find() w promotionsList taką promocję która ma id = promotionId

            const promotionFromStore = promotionsList.find((promotion) => { return promotion.id == promotionId })

            /*
            jeśli już mamy obiekt szukanej promocji, pozostaje wyszukać jej produkty
            bo każdy z nich ma swoje id
            jest w każdej promocji kilka produktów czyli tablica, wyglądająca jak poniżej
         
            "items": [
                 "5ea08604dd0221b86c6fea89",
                 "5ea08604fb9e6efa95c1637b",
                 "5ea08604f87b1c72673c908a"
               ]
                    
            szukamy więc: proponowana funkcja wykorzystuje Promise.all
            Promise.all działa tak że kończy się po wykonaniu wszystkich potrzebnych operacji, czyli
            po wyszukaniu każdego produktu
            funkcja jest dość złożona, zamieszczam całość,
            po analizie jej działania zalecam spróbować wykonać ją po swojemu
            */

            const handlePromotion = (data) => {

                // tu dostajemy obiekty produktów z danej promocji

                const fetchPromises = data.items.map((productId) => getProduct(productId));

                // a jak je dostaniemy to ustalamy w store, dodając je do danych promotionObject
                // trzy kropki , tzw spread operator, służy do kopiowania obiektu czy tablicy

                // i kończymy ładowanie loadera

                Promise.all(fetchPromises)
                    .then((values) => {

                        const returnObject = { ...data, items: values };

                        commit("SET_PROMOTION_OBJECT", returnObject);
                        commit("SET_PROMOTION_LOADING", false);
                    })
                    .catch(handleError);
            }

            // jeśli jest promocja w store to ją obsługujemy ze store

            if (promotionFromStore) {
                handlePromotion(promotionFromStore)
            }

            //  jeśli nie ma, to pobieramy z serwera (np przy odświeżeniu strony)

            else {
                getPromotion(promotionId)
                    .then(handlePromotion)
                    .catch(handleError)

            }

        }

    }


}