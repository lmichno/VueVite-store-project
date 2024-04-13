<template>
    <RouterLink :to="`/product/${product.id}`" class="product-div">
        <div :style="imgStyle" class="product-image"></div>
        <p class="text price-tag">cena</p>
        <div class="product-price text">{{ product.price }},00 zł</div>
        <div class="product-name text">{{ product.name }}</div>
        <ProductRating :rating="product.rate" :ratesNumber="product.ratesNumber" />
    </RouterLink>
</template>

<script>
import ProductRating from './ProductRating.vue'

export default {
    name: 'ProductTile',
    props: {
        product: Object
    },
    computed: {
        imgStyle() {
            return { backgroundImage: `url(/src/assets/${this.product.image})` }
        }
    },
    components: {
        ProductRating
    }
}
</script>

<style scoped>
.price-tag {
    margin: 0;
    padding: 0;
    font-size: 1em;
    font-weight: light;
    color: #36454F;
    margin-left: 3px;
}

.product-div {
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: 0px 0px 14px 0px rgba(66, 68, 90, 1);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
}

.text {
    user-select: none;
    text-decoration: none;
    width: 100%;
    border: 0;
    outline: 0;
    text-align: left;
    --fbc-blue-60: none;
}

.product-price {
    margin-top: -5px;
    font-size: 1.7em;
    font-weight: bold;
    color: #333;
}

.product-name {
    font-size: 1.1em;
    color: #333;
    margin-left: 3px;
}

.product-image {
    user-select: none;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 150px;
    height: 150px;
    margin: 0;
    padding: 0px;
    border: 0px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>