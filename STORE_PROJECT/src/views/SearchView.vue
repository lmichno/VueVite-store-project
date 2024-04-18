<template>
    <div class="home-view">
        <AppLoader v-show="productLoading" />
        <ProductTile v-for="product in productObject" :key="product.id" :product="product" style="user-select: none;" />
    </div>
</template>

<script>
import AppLoader from '@/components/AppLoader.vue'
import ProductTile from '@/components/ProductTile.vue'

export default {
    name: 'SearchView',
    created() {
        this.$store.dispatch("FETCH_PRODUCTS")
    },
    computed: {
        productObject() {
            console.log(this.$store.getters.GET_PRODUCTS_LIST);
            return this.$store.getters.GET_PRODUCTS_LIST;
        },
        productLoading() {
            return this.$store.getters.GET_PRODUCTS_LOADING;
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