<template>
    <div class="home-view">
        <h1>Welcome to the Home View!</h1>
        <p>This is the home page of your application.</p>

        <AppLoader v-show="promotionsLoading" />
        <RouterLink v-for="promotion in promotionsList" :to="`/promotion/${promotion.id}`" :key="promotion.id">
            <PromotionTile v-bind:promotion="promotion"></PromotionTile>
        </RouterLink>
    </div>
</template>

<script>

import PromotionTile from '@/components/PromotionTile.vue';
import AppLoader from '@/components/AppLoader.vue';
export default {
    name: 'HomeView',
    created() {
        this.$store.dispatch("FETCH_PROMOTIONS")
        this.$store.getters.GET_PROMOTIONS_LIST.forEach(element => {
            console.log('a', element);
        });
    },
    computed: {
        promotionsList() {
            console.log('proms');
            console.log(this.$store.getters.GET_PROMOTIONS_LIST);
            return this.$store.getters.GET_PROMOTIONS_LIST
        },
        promotionsLoading() {
            return this.$store.getters.GET_PROMOTIONS_LOADING
        }
    },
    components: {
        PromotionTile,
        AppLoader
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

.home-view {
    text-align: center;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
