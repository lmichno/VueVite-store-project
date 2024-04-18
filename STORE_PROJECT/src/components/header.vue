<template>
    <nav>
        <RouterLink to="/" class="headerBtn" exact>Home</RouterLink>
        <RouterLink to="/about" class="headerBtn">About</RouterLink>
        <RouterLink to="/search" class="headerBtn">Search</RouterLink>
        <RouterLink to="/nnn" class="headerBtn">NotFound</RouterLink>
        <RouterLink to="/login" class="loginBtn" v-show="!userLogged">Login</RouterLink>
        <RouterLink to="/register" class="registerBtn" v-show="!userLogged">Register</RouterLink>
        <div class="loginBtn" v-show="userLogged">{{ getUserData }}</div>
        <div class="registerBtn" v-show="userLogged" @click="logout">Logout</div>
    </nav>
</template>

<script>
import userData from '@/store/userData';

export default {
    data() {
        return {
        };
    },
    computed: {
        userLogged() {
            if (this.$store.getters.GET_USER_OBJECT.user == undefined) {
                return false;
            }
            else {
                return true;
            }
        },
        getUserData() {
            if (this.$store.getters.GET_USER_OBJECT.user == undefined) {
                return '';
            }
            else {
                return this.$store.getters.GET_USER_OBJECT.user.email;
            }
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('LOGOUT_USER');
        }
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

.registerBtn {
    color: #36454F;
    background-color: #fff;
    font-size: larger;
    font-weight: 400;
    text-decoration: none;
    height: 40px;
    border-radius: 5px;
    width: 100px;
    position: fixed;
    top: 10px;
    left: 90vw;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: rgb(240, 240, 240);
        font-weight: bolder;
    }
}

.loginBtn {
    color: whitesmoke;
    font-size: larger;
    font-weight: 400;
    text-decoration: none;
    height: 40px;
    border-radius: 5px;
    width: 100px;
    position: fixed;
    top: 10px;
    left: calc(90vw - 110px);
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
