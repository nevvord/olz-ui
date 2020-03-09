<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary" >
            <b-navbar-brand :to="localePath('/')">OLZ</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="localePath('page')">{{ $t('page') }}</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <div v-if="!$store.state.auth">
                        <b-nav-item to="#" v-b-modal.profile><i class="far fa-user"></i><span class="ml-1">Профиль</span></b-nav-item>
                    </div>
                    <b-nav-item-dropdown :text="$store.state.user.name" v-else right>
                        <b-dropdown-item :to="localePath('profile')">Мой профиль</b-dropdown-item>
                        <b-dropdown-item @click="logout">Выход</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-btn variant="outline-warning">+ Подать объявление</b-btn>
                    <b-nav-item-dropdown text="Язык" right>
                        <b-dropdown-item :to="switchLocalePath('ru')">Russian</b-dropdown-item>
                        <b-dropdown-item :to="switchLocalePath('en')">English</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <!-- All modals -->
        <ModalAuth />
    </div>
</template>

<script>
    import ModalAuth from './modal-auth'
    export default {
        components: {
            ModalAuth
        },
        methods: {
            logout() {
                localStorage.removeItem("auth")
                this.$store.state.auth = false
                this.$store.state.user = null
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>

