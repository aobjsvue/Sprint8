<template>
  <Header />
  <router-view :getIdFromUrl="getIdFromUrl" />
</template>

<script>
  import { mapActions, mapMutations } from 'vuex';
  import Header from "@/components/Header.vue";

  export default {
    components: {
      Header
    },
    methods: {
      ...mapActions(['fetchStarships', 'fetchCharacters']),
      ...mapMutations(['checkDataBase']),
      getIdFromUrl(url) {
        const onlyNumbers = url.replace(/[^0-9]+/g, "");
        const onlyId = onlyNumbers.slice(1);
        return onlyId;
      },
    },
    mounted() {
      this.checkDataBase()
      this.fetchStarships();
      this.fetchCharacters();
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
  .starships-list {
    text-align: left;
    background-color: rgba(21, 21, 21, 0.9);
    border-radius: 0.1em;
    max-width: 70%;
    margin: 0 auto;
  }
  .starships-list a {
    text-decoration: none;
    color: #aaa;
  }
  .starships-list :hover {
    color: #fff;
  }
  .starships-list h5 {
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 0.5em;
    padding: 1em 0 0 1em;
  }
  .starships-list p {
    font-weight: 400;
    font-size: 0.7em;
    margin: 0;
    padding: 0 0 1em 1.2em;
  }
  .starships {
    padding-bottom: 1.5em;
  }
  .starship-card {
    text-align: left;
    background-color: rgba(21, 21, 21, 0.8);
    border-radius: 0.1em;
    max-width: 70%;
    margin: 1.5em auto;
    display: flex;
    flex-flow: row wrap;
    padding: 1.5em 2em;
  }
  .starship-card h2 {
    color: #ddd;
    margin: 1em 0 0 0;
    font-weight: 400;
    text-transform: uppercase;
  }
  .starship-card p {
    color: #aaa;
    font-weight: 300;
    font-size: 0.9em;
    margin: 1.5em 0;
  }
  .card-header {
    flex: 0 1 100%;
  }
  .card-header img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-bottom: 2px solid #9e4f60;
  }
  .card-left, .card-right {
    flex: 0 1 50%;
  }

  @media screen and (min-width: 768px){
    body {
      background-image: url('@/assets/horizontalbackground.jpeg');
      background-size: 1600px auto;
    }
  }
  @media (min-width: 280px) and (max-width: 767px) {
    .card-left, .card-right {
      flex: 0 1 100%;
    }
  }
</style>