<template>
    <div class="home-view">
        <AppLoader v-show="promotionLoading" />
        <ProductTile v-for="product in promotionObject.items" :key="product.id" :product="product"
            style="user-select: none;" />
    </div>
</template>

<script>
import AppLoader from '@/components/AppLoader.vue'
import ProductTile from '@/components/ProductTile.vue'

export default {
    name: 'PromotionView',
    created() {
        this.$store.dispatch("FETCH_PROMOTION", this.$route.params.id)
    },
    computed: {
        promotionObject() {
            return this.$store.getters.GET_PROMOTION_OBJECT;
        },
        promotionLoading() {
            return this.$store.getters.GET_PROMOTION_LOADING;
        }
    },
    components: {
        AppLoader,
        ProductTile
    }
}
</script>

<style scoped>
a {
    text-decoration: none;

}

.home-view {
    text-align: center;
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>