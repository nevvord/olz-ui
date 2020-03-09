<template>
    <b-modal id="profile" title="Авторизация регистрация" ref="modal">
        <b-btn class="w-100" variant="primary mb-2" @click="logFB">Facebook</b-btn>
        <!-- <b-btn class="w-100" variant="warning">Google</b-btn> -->
        <div class="text-center py-3 font-weight-bold text-secondary">ИЛИ</div>
        <b-form @submit.stop.prevent="handleSubmit" ref="form">
            <b-form-group id="login-mail" label-for="input-login-email">
                <b-form-input id="input-login-email" v-model="form.email" type="email" required placeholder="email"></b-form-input>
            </b-form-group>
            <b-form-group id="login-password" label-for="input-login-password">
                <b-form-input id="input-login-password" v-model="form.password" type="password" required placeholder="password"></b-form-input>
            </b-form-group>
        </b-form>
        <b-link class="text-muted d-block" v-if="!registration">Забыли пароль?</b-link>
        <b-link class="bold d-block text-dark" @click="registration = !registration">
            <span v-if="!registration">Регистрация</span>
            <span v-else>Уменя уже есть профиль!</span>
        </b-link>
        <template v-slot:modal-title >
            Вход в профиль
        </template>
        <template v-slot:modal-footer>
            <b-btn type="button" variant="outline-success" @click="login" v-if="!registration">Вход</b-btn>
            <b-btn type="button" variant="outline-success" @click="registr" v-else>Регистрация</b-btn>
        </template>
    </b-modal>
</template>

<script>
    export default {
        data(){return {
            form: {
                email: "",
                password: ""
            },
            registration: false
        }},
        methods: {
            logFB(){
                FB.login( response => {
                    if (response.status == "connected") {
                        const { authResponse: { accessToken, userID}} = response
                        this.$axios.post('/auth/fb/', {accessToken, userID})
                            .then(res => {
                                this.$store.state.auth = true
                                this.$store.state.user = res.data.user
                                localStorage.setItem("auth", res.data.token)
                                document.location.reload(true);
                                this.$notify({
                                    group: 'foo',
                                    text: res.data.msg,
                                    type: 'success'
                                })
                            })
                            .catch(error => {
                                this.$notify({
                                    group: 'foo',
                                    status: error.status,
                                    text: error.response.data.msg,
                                    type: 'error'
                                })
                            })
                    }
                }, {scope: 'public_profile,email'})
            },
            login() {
                this.$axios.post('/auth/login', { ...this.form })
                    .then(res => {
                        this.$store.state.auth = true
                        this.$store.state.user = res.data.user
                        localStorage.setItem("auth", res.data.token)
                        this.$notify({
                        group: 'foo',
                        text: 'Добро пожаловать!',
                        type: 'success'
                        })
                    })
                    .catch(error => {
                        this.$notify({
                            group: 'foo',
                            status: error.status,
                            text: error.response.data.msg,
                            type: 'error'
                        })
                    })
                
            },
            registr() {
                this.$axios.post('/auth/registration', {...this.form})
                    .then(res => {
                        console.log(res);
                        
                        this.registration = !this.registration
                        this.$notify({
                            group: 'foo',
                        text: res.data.msg,
                        type: 'success'
                        })
                    })
                    .catch(error => {
                        console.log(error);
                        this.$notify({
                            group: 'foo',
                            status: error.status,
                            text: error.response.data.msg,
                            type: 'error'
                        })
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>