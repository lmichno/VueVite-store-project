<script setup>
import '@/styles/style.css'
</script>

<template>
  <div id="app">
    <AppHeader></AppHeader>
    <RouterView />
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  import AppHeader from '@/components/header.vue';
  import AppFooter from '@/components/footer.vue';

  export default {
    components: {
      AppHeader,
      AppFooter
    },
    beforeCreate() {
      this.$store.dispatch('FETCH_USER');
    }
  }
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Exo+2:400,900,800,700,600,500,300,200,100);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Exo 2", sans-serif;
  transition: all 0.3s ease-in-out;
}
</style>
