<template>
    <div :style="loaderImg">

    </div>
</template>

<script>
export default {
    name: 'AppLoader',
    computed: {
        loaderImg() {
            return { backgroundImage: `url(/src/assets/loader.gif)` }

        }
    }
}
</script>

<style scoped>
div {
    position: absolute;
    top: 150px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 10vw;
    width: 10vw;
    margin: 50px;
    padding: 0px;
    border: 0px solid #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>