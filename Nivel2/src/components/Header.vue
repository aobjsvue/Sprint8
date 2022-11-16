<template>
    <div class="nav-login">
        <div class="social" style="visibility: hidden">
            <a v-if="logged" class="logged-user">{{ loggedUser }}</a>
            <a><span v-if="!logged">LOG IN</span><span v-else>LOG OUT</span></a>
            <p> // </p>
            <a>SIGN UP</a>
        </div>
        <div class="logo">
            <router-link to="/"><img src="@/assets/swlogo.png" alt="Star Wars Logo"></router-link>
        </div>
        <div class="logged">
            <a v-if="logged" class="logged-user">{{ loggedUser }}</a>
            <a><span v-if="!logged" @click="toggleLoginModal">LOG IN</span><span v-else @click="logOut">LOG OUT</span></a>
            <p> // </p>
            <a @click="toggleRegisterModal">SIGN UP</a>
        </div>
    </div>
    <nav>
        <router-link to="/">HOME</router-link>
        <router-link class="starships-border" to="/starships">STARSHIPS</router-link>
    </nav>
    <div v-if="loginModal">
        <Login />
    </div>
    <div v-if="registerModal">
        <Register />
    </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import { mapMutations, mapState } from "vuex";

export default {
    components: { Login, Register },

    computed: {
        ...mapState(["loginModal", "registerModal", "logged", "loggedUser"])
    },
    methods: {
        ...mapMutations(["toggleLoginModal", "toggleRegisterModal", "logOut"])
    }
}

</script>

<style>
    nav {
        background-color: #000;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
        padding: 1em 0;
    }
    nav a {
        font-weight: 600;
        color: #999;
        text-decoration: none;
        letter-spacing: 1px;
        border-left: 1px solid #333;
        padding: 1em 2em;
    }
    nav a:hover {
        color: #fff;
    }
    nav a.router-link-exact-active {
        color: #fff;
        border-bottom: 1px solid #106be0;
    }
    .starships-border {
        border-right: 1px solid #333;
    }
    .nav-login {
        margin: 1.2em 1.5em;
        display: flex;
    }
    .logo {
        flex-grow: 2;
    }
    .logo img {
        width: 13em;
        height: auto;
        padding-top: 0.2em;
    }
    .logged, .social {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-weight: 600;
        letter-spacing: 1px;
        color: #999;
    }
    .logged p, .social p{
        padding: 0 0.5em;
        color: #343434;
    }
    .logged a:hover {
        cursor: pointer;
        color: #fff;
    }
    .logged-user {
        margin-right: 0.6em;
    }
</style>