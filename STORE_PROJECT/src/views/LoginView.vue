<template>
    <div class="formDiv">
        <div class="regInfo">Login</div>
        <AppLoader v-show="loading" />
        <form @submit="onSubmit">
            <div v-show="error" class="errorMsg">{{ error }}</div>
            <div>
                <input type="email" name="email" id="email" placeholder="Email" v-model="email" class="input">
            </div>
            <div>
                <input type="password" name="password" id="password" placeholder="Password" v-model="password" class="input">
            </div>
            <div>
                <input type="submit" :disabled="disabled" value="Register" :class="{'dis': disabled, 'submit': !disabled}">
            </div>
        </form>
    </div>
</template>

<script>
import { loginUser } from '@/api/index.js';
import AppLoader from '@/components/AppLoader.vue';

export default {
    name: 'LoginView',
    data() {
        return {
            error: "",
            email: "",
            password:"",
            exists: false,
            loading: false
        };
    },
    components: {
        AppLoader
    },
    computed: {
        disabled() {
            if (this.email.length > 3 && this.password.length > 3) {
                return false;
            }
            else {
                return true;
            }
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            this.loading = true;
            this.error = '';
            loginUser({email: this.email, password: this.password})
                .then((data) => {
                    console.log('res data', data);
                    if (data.status == 'logged') {
                        this.$store.commit("SET_USER_OBJECT", {email: this.email, password: this.password})
                        this.$router.push('/');
                    }
                    else if(data.status == 'bad_data') {
                        this.error = "You have entered incorrect data";
                    }
                    else {
                        this.error = "Error occured, please try again later";
                    }
                    
                }).catch((error) => {
                    this.error = error.response.data.message;
                }).finally(() => {
                    this.loading = false;
                    setTimeout(() => {
                        window.location.reload();
                    }, 100);
            })
        }
    }
}
</script>

<style scoped>
    .formDiv {
        height: calc(100vh - 100px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .input {
        margin: 5px;
        padding: 10px 10px;
        width: 290px;
        border-radius: 5px;
        border: 0;
        outline: none;
        box-shadow: 0px 0px 14px 0px rgba(66, 68, 90, 1);
        transition: all 0.2s ease-in-out;
        
        &:focus {
            transform: scale(1.02);
            
        }
    }
    .submit {
        margin: 5px;
        padding: 10px 10px;
        width: 310px;
        border-radius: 5px;
        border: 0;
        outline: none;
        background-color: #36454F;
        color: white;
        cursor: pointer;
        box-shadow: 0px 0px 14px 0px rgba(66, 68, 90, 1);
        transition: all 0.2s ease-in-out;
        
        &:hover {
            transform: scale(1.02);
        }
    }
    .regInfo {
        margin-bottom: 20px;
        font-size: 3em;
        font-weight: bold;
        color: #36454F;
    }
.dis {
     margin: 5px;
        padding: 10px 10px;
        width: 310px;
        border-radius: 5px;
        border: 0;
        outline: none;
        background-color: #36454F;
        color: white;
        cursor: not-allowed;
        box-shadow: 0px 0px 14px 0px rgba(66, 68, 90, 1);
        opacity: 0.5;
}
.errorMsg {
    color: white;
    font-size: 1em;
    font-weight: bold;
    width: 290px;
    margin: 5px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: red;
    box-shadow: 0px 0px 8px 0px rgba(66, 68, 90, 1);
    transition: all 0.2s ease-in-out;
}
</style>