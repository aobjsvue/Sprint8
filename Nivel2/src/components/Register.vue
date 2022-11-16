<template>
    <div @click.self="toggleRegisterModal" class="modal-wrapper">
        <div class="modal">
        <img src="@/assets/modalimg.png" alt="" />
        <h2>CREATE YOUR ACCOUNT</h2>
        <div class="form-container">
        <form class="form" @submit.prevent="validateForm">
            <input type="text" placeholder="First Name" v-model="fName" ref="name" autocomplete="name" />
            <p class="error">{{ fNameError }}</p>
            <input type="text" placeholder="Last Name" v-model="lName" ref="lastName" />
            <p class="error">{{ lNameError }}</p>
            <input type="text" placeholder="Email Address" v-model="email" ref="email" autocomplete="email" />
            <p class="error">{{ emailError }}</p>
            <input type="password" placeholder="Password" v-model="password" ref="password" autocomplete="current-password" />
            <p class="error">{{ passwordError }}</p>
            <div class="news">
            <input type="checkbox" v-model="news" ref="news" />
            <label for="">Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies.</label>
            <p>By creating an account, you agree to our Terms of Use, and acknowledge that you have read our Privacy Policy, Cookies Policy and UK & EU Privacy Rights. More...</p>
            </div>
            <button>Create Account</button>
        </form>
        <a href="#" @click="toggleModals">Already have an account? Sign In</a>
        </div>
        <div class="close-modal" @click="toggleRegisterModal">
            <fa class="fa-icon" :icon="['fa', 'fa-xmark']" />
        </div>
    </div>
    </div>
</template>

<script>
    import { mapMutations } from "vuex";

    export default {
        data() {
            return {
                fName: "",
                fNameError: "",
                lName: "",
                lNameError: "",
                email: "",
                emailError: "",
                password: "",
                passwordError: "",
                news: false,
            };
        },
        methods: {
            ...mapMutations(["toggleRegisterModal", "createAccount", "toggleModals"]),
            validateForm() {
                let namePattern = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/i;
                let nameValidation = namePattern.test(this.fName);
                if (!nameValidation) {
                this.$refs.name.style.outline = "1px solid #ff0000";
                this.$refs.name.style.color = "#ff0000";
                this.fNameError = "Please enter your first name.";
                } else {
                this.$refs.name.style.outline = "none";
                this.$refs.name.style.color = "#edd700";
                this.fNameError = "";
                }
                
                let lNameValidation = namePattern.test(this.lName);
                if (!lNameValidation) {
                this.$refs.lastName.style.outline = "1px solid #ff0000";
                this.$refs.lastName.style.color = "#ff0000";
                this.lNameError = "Please enter your last name.";
                } else {
                this.$refs.lastName.style.outline = "none";
                this.$refs.lastName.style.color = "#edd700";
                this.lNameError = "";
                }
                
                let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;
                let emailValidation = emailPattern.test(this.email);
                if (!emailValidation) {
                this.$refs.email.style.outline = "1px solid #ff0000";
                this.$refs.email.style.color = "#ff0000";
                this.emailError = "Please enter a valid email address.";
                } else {
                this.$refs.email.style.outline = "none";
                this.$refs.email.style.color = "#edd700";
                this.emailError = "";
                }
                
                let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
                let passwordValidation = passwordPattern.test(this.password);
                if (!passwordValidation) {
                this.$refs.password.style.outline = "1px solid #ff0000";
                this.$refs.password.style.color = "#ff0000";
                this.passwordError = "Password must be at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.";
                } else {
                this.$refs.password.style.outline = "none";
                this.$refs.password.style.color = "#edd700";
                this.passwordError = "";
                }
                
                if (nameValidation && lNameValidation && emailValidation && passwordValidation) {
                this.createAccount({ firstName: this.fName, lastName: this.lName, email: this.email.toLowerCase(), password: this.password, newsletter: this.news });
                this.fName = "";
                this.lName = "";
                this.email = "";
                this.password = "";
                this.news = false;
                }
            },
        },
    };
</script>
    
<style>
    .modal-wrapper {
        position: fixed;
        top: 0;
        background: rgba(21, 21, 21, 0.8);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        width: 40%;
        background: #181818;
        position: relative;
        padding: 2em;
        word-spacing: 0.2em;
    }
    .modal h2 {
        color: #edd700;
        font-weight: 300;
        margin-bottom: 0.6em;
        margin-top: 0;
    }
    .modal img {
        width: 50%;
        height: auto;
        margin-bottom: 1.5em;
    }
    .form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    form {
        width: 90%;
    }
    .form input[type="text"],
    .form input[type="password"] {
        box-sizing: border-box;
        width: 100%;
        border: none;
        border-radius: 3px;
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        letter-spacing: 0.06em;
    }
    .form input:focus-visible {
        background: #484848;
        color: #edd700;
    }
    .form-container a {
        cursor: pointer;
        color: #edd700;
        text-decoration: underline;
        text-decoration-color: #fff;
        font-weight: 400;
    }
    .error {
        color: #ff0000;
        margin: 0.6em 0;
        font-size: smaller;
        font-weight: 300;
        text-align: left;
    }
    .form p {
        width: 90%;
    }
    .form button {
        width: 100%;
        margin: 0.8em 0;
        background-color: #484848;
        color: #fff;
        border: none;
    }
    .form button:hover {
        background-color: #3f6dac;
        border: none;
    }
    .close-modal {
        position: absolute;
        top: 0.2em;
        right: 0.6em;
        cursor: pointer;
    }
    .fa-icon {
        font-size: 2.5em;
        color: #3a3a3a;
    }
    .fa-icon:hover {
        color: #fff;
    }
    .form input[type="checkbox"] {
        margin: 0 0.8em 0 0;
        width: 18px;
        height: 18px;
        position: relative;
        top: 4px;
    }
    .news {
        width: 100%;
        text-align: justify;
    }
    .news label, .news p {
        color: #aaa;
        word-spacing: normal;
        font-weight: 300;
        font-size: small;
    }
    .news p {
        margin: 0.6em 0 0 0;
        width: 100%;
    }
</style>