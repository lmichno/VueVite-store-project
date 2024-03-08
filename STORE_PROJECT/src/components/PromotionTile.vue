<template>
    <div :style="contStyle">
        <h3>{{ this.promotion.header }}</h3>
        <h2>{{ this.promotion.description }}</h2>
    </div>
</template>

<script>
export default {
    name: 'PromotionTile',
    props: {promotion: Object},
    computed: {
        contStyle() {
            const {image}= this.promotion;
            let imageUrl;
            try {
                imageUrl = `/src/assets/${image}`;
            } catch (error) {
                console.log(error);
            }
            return {backgroundImage: `url(${imageUrl})`}
        },
    }
}
</script>

<style scoped>
h3 {
    font-size: 3rem;
    font-weight: 800;
    color: white;
    text-decoration: none;
    text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
}
h2 {
    font-size: 1.3rem;
    text-decoration: none;
    font-weight: 400;
    color: white;
    margin-top: -30px;
    text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
}
div {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 200px;
    width: 80vw;
    margin: 10px;
    padding: 10px;
    border: 0px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
    &:hover {
        transform: scale(1.05);
    }
}
</style>