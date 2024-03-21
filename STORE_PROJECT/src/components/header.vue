<template>
    <nav>
        <RouterLink to="/" class="headerBtn" exact>Home</RouterLink>
        <RouterLink to="/about" class="headerBtn">About</RouterLink>
        <RouterLink to="/nnn" class="headerBtn">NotFound</RouterLink>
    </nav>
</template>

<script>
export default {
    data() {
        return {

        };
    }
};
</script>

<style scoped>
nav {
    position: fixed;
    top: 5px;
    width: calc(100vw - 15px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background-color: #36454F;
    height: 50px;
    border-radius: 5px;
}

.headerBtn {
    color: #fff;
    background-color: #36454F;
    font-size: larger;
    font-weight: 200;
    text-decoration: none;
    height: 50px;
    border-radius: 12px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #2E3D46;
        font-weight: bolder;
    }
}
</style>
