<template>
    <div class="login">
        <form @submit.prevent="login" action="">
            <input v-model="email" type="text" placeholder="Enter Email">
            <input v-model="password" type="password" placeholder="Enter Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    import Vue from 'vue'

    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                console.log('logging in user: ' + this.email + ' password: ' + this.password);
                this.$http().post('api-auth-token/', {username: this.email, password: this.password})
                    .then(function(res) {
                        var data = res.data;

                        Vue.localStorage.set('token', data.token);
                    });

            }
        }
    }
</script>

<style scoped>

</style>