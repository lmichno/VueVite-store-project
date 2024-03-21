<template>
    <footer>
        <p>© 2024 - All rights reserved</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
footer {
    position: fixed;
    top: calc(100vh - 55px);
    width: calc(100vw - 15px);
    border-radius: 5px;
    padding: 10 0;
    background-color: #36454F;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 20px;
    height: 50px;
    text-align: center;
}
p {
    color: whitesmoke;
}
</style>
