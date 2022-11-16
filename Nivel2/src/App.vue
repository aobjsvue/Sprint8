<template>
  <Header />
  <router-view />
</template>

<script>
  import { mapActions, mapMutations } from 'vuex';
  import Header from "@/components/Header.vue";

  export default {
    components: {
      Header
    },
    methods: {
      ...mapActions(['fetchStarships']),
      ...mapMutations(['checkDataBase']),
    },
    mounted() {
      this.checkDataBase()
      this.fetchStarships();
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

  body {
    margin: 0;
    background-color: #000;
    background-image: url('@/assets/verticalbackground.jpeg');
    background-position: top center; background-repeat: no-repeat;
    background-size: 768px auto;
    background-attachment: fixed;
  }
  #app {
    font-family:'Barlow', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  button {
    margin-top: 1.5em;
    padding: 0.6em 2em;
    background-color: #151515;
    color:#999;
    font-family:'Barlow', Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1em;
    border: 1px solid #999;
    border-radius: 0.3em;
  }
  button:hover {
    color: #fff;
    cursor: pointer;
    border: 1px solid #fff;
    text-decoration: underline;
    text-decoration-color: #106be0;
  }

  @media screen and (min-width: 768px){
    body {
      background-image: url('@/assets/horizontalbackground.jpeg');
      background-size: 1600px auto;
    }
  }
</style>