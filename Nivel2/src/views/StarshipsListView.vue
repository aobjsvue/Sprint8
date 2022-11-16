<template>
  <div v-if="starshipsList.length" class="starships">
    <div v-for="(starship, index) in starshipsList" :key="index"  class="starships-list">
      <router-link :to="{name: 'starship', params: {id: replace(starship.url) }}">
        <h5>{{ starship.name }}</h5>
        <p>{{ starship.model }}</p>
      </router-link>
    </div>
    <button type="button" @click="moreStarships" v-if="starshipsList.length < 31">SHOW MORE</button>
  </div>
  <div v-else>
    <h2>Accessing our starship's dock, wait a second!</h2>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'StarshipsListView',
    computed: {
      ...mapState(['starshipsList', 'page']),
    },
    methods: {
      ...mapActions(['fetchStarships', 'fetchMoreStarships']),
      moreStarships() {
        this.fetchMoreStarships();
      },
      replace(url) {
        const onlyNumbers = url.replace(/[^0-9]+/g, "");
        return onlyNumbers;
      },
    }
  }
</script>

<style>
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
</style>