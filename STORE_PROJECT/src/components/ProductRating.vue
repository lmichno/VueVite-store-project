<template>
    <div>
        <div class="product-rating">
            <div class="product-rating__stars">
                <span v-for="i in 5" :key="i" class="product-rating__star"
                    :class="{ 'product-rating__star_active': i <= rating }">
                    &#9733;
                </span>
            </div>
            <div class="product-rating__rating">({{ ratesNumber }})</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductRating',
    props: {
        rating: Number,
        ratesNumber: Number
    }
};
</script>

<style scoped>
.product-rating__rating {
    margin-left: 5px;
    color: #36454F;
    font-size: 1.3em;
    font-weight: bold;

}

.product-rating {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5px;
    width: 150px;
}

.product-rating__stars {
    display: flex;
    justify-content: start;
    align-items: center;
}

.product-rating__star {
    text-shadow: 0px 0px 3px rgba(66, 68, 90, 1);
    color: #36454F;
    font-size: 1.3em;
    margin: 0;
    padding: 0;
}

.product-rating__star_active {
    color: #FFD700;
}
</style>